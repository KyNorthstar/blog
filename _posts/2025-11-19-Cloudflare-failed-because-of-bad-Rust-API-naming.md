---
layout: post
title: Cloudflare went down thanks to bad Rust API naming
date: 2025-11-19
sources:
    -
        name: Cloudflare's announcement
        url: https://blog.cloudflare.com/18-november-2025-outage/
    -
        name: std::result - Rust
        url: https://doc.rust-lang.org/std/result/#method-overview
    -
        name: Result | Apple Developer Documentation
        url: https://developer.apple.com/documentation/swift/result
---

It's no secret that my primary language of choice is Swift. However, I came to this preference after having learned about 40 other programming languages and spending a lot of time in Java, C, PHP, JS, Kotlin, and many more.

Even given all that experience, Rust still perplexes me. Rust is a modern safe-and-performant-by-design language, like Go and Swift. However, Rust isn't like Go, which seems like it was _Designed By Committee™_ but the committee was high. It also isn't like Swift, which is happy to make major breaking changes every few years in pursuit of its goals.

No, Rust is clearly thought-out with reasonable decisions. There's good reason why it's become so popular these days, and why "rewritten in Rust" has become a meme and also a clear improvement.

I find it very useful to compare-and-contrast Rust and Swift because they're so similar.

So let's look at the code which took down Cloudflare for several hours recently:

```rust
// Fetch edge features based on `input` struct into [`Features`] buffer.
pub fn fetch_features(
    &mut self,
    input: &dyn BotsInput,
    features: &mut Features,
) -> Result<(), (ErrorFlags, i32)> {
    //update features checksum (lower 32 buts) and copy edge feature names
    features.checksum &= 0xFFFF_FFFF_0000_0000;
    features.checksum |= u64::from(self.config.checksum);
    let (feature_values, _) = features
        .append_with_names(&self.config.feature_names)
        .unwrap();
```

Since Cloudflare is closed-source, we only have this code they gave us and nothing more. That's sad, but we can still comment on this.

There's many interesting things in here, from manual bitmasking to the fact that it returns a `Result<(), (ErrorFlags, i32)>`.

I'd like to focus on the crashing line today, `.unwrap()`.

Let's start by looking at that original Rust code (without comments), compared to an imaginary Swift equivalent:

{%- capture originalCode %}
```rust
pub fn fetch_features(
    &mut self,
    input: &dyn BotsInput,
    features: &mut Features,
) -> Result<(), (ErrorFlags, i32)> {
    features.checksum &= 0xFFFF_FFFF_0000_0000;
    features.checksum |= u64::from(self.config.checksum);
    let (feature_values, _) = features
        .append_with_names(&self.config.feature_names)
        .unwrap();
```
{%- endcapture %}
{%- capture swiftTranslation %}
```swift
public mutating func fetchFeatures(

    input: any BotsInput,
    features: inout Features
) -> Result<(), (ErrorFlags, Int32)> {
    features.checksum &= 0xFFFF_FFFF_0000_0000
    features.checksum |= UInt64(self.config.checksum)
    let (feature_values, _) = try! features
        .append_with_names(&config.feature_names)
        .get()
```
{%- endcapture %}

<div class="wide-table-holder">
{% include Galleries/left-right-compare.html
    table-class="top-align-td"
     lhs-title="Cloudflare's Rust code"
     rhs-title="My Swift translation"
     lhs=originalCode
     rhs=swiftTranslation
%}
</div>
<aside>
    See what I mean about Swift and Rust being so similar?
</aside>

The key difference here is Swift's `try!` and `.get()` in place of Rust's `.unwrap()`.

[Rust's `Result` type](https://doc.rust-lang.org/std/result/#method-overview)'s `.unwrap()` function returns the contained value or crashes the program.

[Swift's `Result` type](https://developer.apple.com/documentation/swift/result)'s `.get()` function returns the contained value or throws the contained error.




# SSCCE
That all's a bit abstract, so let's take a look at a direct [SSCCE](https://sscce.org) comparison.

Below is a simple, self-contained program I've written in both Rust and Swift, to directly compare what's going on here.

{%- capture rustJustUnwrap %}
```rust
fn main() {
    fn maybe_divide(a: i32, b: i32) -> Result<i32, &'static str> {
        if b == 0 {
            Err("division by zero")
        } else {
            Ok(a / b)
        }
    }
	
    let result = maybe_divide(10, 2).unwrap();
    println!("The result of division is: {}", result);
}
```
{%- endcapture %}
{%- capture swiftJustUnwrap %}
```swift
func main() {
    func maybeDivide(_ a: Int32, _ b: Int32) -> Result<Int32, String> {
        if b == 0 {
            .failure("division by zero")
        } else {
            .success(a / b)
        }
    }
	
    let result = maybeDivide(10, 2).get()
    print("The result of division is: \(result)");
}

extension String: @retroactive Error {}
```
{%- endcapture %}

<div class="wide-table-holder">
{% include Galleries/left-right-compare.html
    table-class="top-align-td"
     lhs-title="<code>sscce.rs</code>"
     rhs-title="<code>sscce.swift</code>"
     lhs=rustJustUnwrap
     rhs=swiftJustUnwrap
%}
</div>

Now, let's compile these and see what happens.


## Compiling `sscce.swift`

```
% swiftc sscce.swift        
sscce.swift:10:15: error: call can throw, but it is not marked with 'try' and the error is not handled
 8 |     }
 9 |
10 | 	let result = maybeDivide(10, 2).get()
   |               `- error: call can throw, but it is not marked with 'try' and the error is not handled
11 |     print("The result of division is: \(result)");
12 | }
```
{:.fullwidth.wrapping}

**The Swift compilation fails!** But why...?

Well, in Swift, when a function throws an error, you _must_ explicitly handle that as a dev, starting by annotating the throwing line with one of these variants of `try`:

- `try` – If you want to catch the error later, you use this a `do { ... } catch { ... }` block pair (or mark your function as `throws` so the caller handsles it).
- `try?` – If you want to convert `throws -> Value` into `-> Optional<Value>`.
- `try!` – If you want to crash the program whenever the `Result` contains an error.

**If you don't use any of these, the Swift compiler throws an error and compilation fails.**

**This is really important:** if you just write `.get()` on a Swift `Result` instance (and do nothing else), compilation fails and you cannot even run the program at all. The compiler is telling you "hey, that might not contain a value at all. You must explicitly tell me how to handle the situation where it doesn't!"

> **The Swift compiler sees `.get()` as an operation which might throw an error, so it forces the dev to handle it manually.**


## Compiling `sscce.rs`

So **what does the Rust compiler say** when you just write `.unwrap()` (and do nothing else)?

```
% rustc sscce.rs
```
{:.fullwidth.wrapping}

... nothing! It compiles without warning nor error.

> **The Rust compiler sees\* `.unwrap()` as an operation which might crash the program and says nothing.**

<aside markdown=1>
\*Actually, the Rust compiler sees `.unwrap()` as just any other function call. The compiler itself can't tell that `.unwrap()` is unsafe; the responsibility is on the developer to know this.
</aside>



# Which approach is better?

Error-handling in the language? Or in the type system?

There are many philosophies around these approaches, but when it comes to the technical details, the differences above are because Swift has an error-handling system in the language itself, but Rust doesn't; Rust implements error-handling in its type system by using `Result` everywhere. In Rust, `Result` _is_ the error-handling system.

Now, don't get me wrong; I think `Result` is very useful. Swift suffered without it for its first 4 major versions, with antipatterns like passing `(Success?, Failure?)` to callbacks. Its introduction to Swift 5.0 was a great relief, both to folks who practiced the antipattern and those who made & used third-party `Result` packages.

But I think there's also situations where having a "this function throws an error, you'd better handle it" system built into the language itself is also very useful.

Talking to some Rust devs recently about this made me realize: In Swift, if something throws an error, you can propagate that error to the caller by adding `throws` to your function signature (change `-> Value` to `throws -> Value`). However, in Rust, you'd have to change the return type itself from `-> Value` to `-> Result<Value, Error>`. While that may superficially seem like doing the same thing, Rust's approach introduces a little friction by fundamentally changing what types are handled by upstream callers.



# RTFM?

Both Swift and Rust are billed as "compile-time checked safe and performant languages". They spend more time up-front using their build toolchain to look through you code to catch mistakes and optimize code _before_ they create an executable file. They protect you from shooting yourself in the foot.

This stands in stark contrast to traditional languages like C(++), Fortran, Assembly, and others which have very fast compilers but tons of undefined behavior and requirements on the dev to have intimate knowledge of the language's documentation and technical details. They let you shoot yourself in the foot.

Developers have many reasons for choosing either of these paradigms, or even something in the middle like Go or a scripting language.

If you choose a footgun-heavy language, you'd better know the documentation like the back of your hand or you'll find yourself with one less toe. RTFM or GTFO.

If you choose a footgun-protected language, you can rest easy knowing your toes are in-tact, but you'd better have the patience to jump through some hoops. You can read the manual if you need to, but the language itself will prevent common mistakes even if you don't.


## An example

Let's say we have this convenience function which simply doubles a number it's given:

{%- capture rustSubFunction_before %}
```rust
fn double(number: i32) -> i32 {
    number * 2
}
```
{:.fullwidth}
{%- endcapture %}
{%- capture rustSuperFunction_before %}
```rust
fn main() {
    let doubled = double(7);
    println!("doubled: {}", doubled);
    
    let doubledNegative = double(-11);
    println!("doubledNegative: {}", doubledNegative);
}
```
{:.fullwidth}
{%- endcapture %}
{%- capture swiftSubFunction_before %}
```swift
func double(_ number: Int32) -> Int32 {
    number * 2
}
```
{:.fullwidth}
{%- endcapture %}
{%- capture swiftSuperFunction_before %}
```swift
func main() {
    let doubled = double(7)
    print("doubled: \(doubled)")
    
    let doubledNegative = double(-11)
    print("doubledNegative: \(doubledNegative)");
}
```
{:.fullwidth}
{%- endcapture %}

<div class="wide-table-holder">
{% include Galleries/left-right-compare.html
    table-class="top-align-td"
    lhs-title="Rust"
    rhs-title="Swift"
    lhs=rustSubFunction_before
    rhs=swiftSubFunction_before
    lhs2=rustSuperFunction_before
    rhs2=swiftSuperFunction_before
%}
</div>

Simple and straightforward! Job done, ship it 🐿️


### Chapter 2: Additional Requirements

Months later, a stakeholder is unhappy that this is accepting negative values. "It just doesn't make sense," they say! "When you double a number, it should always be positive, so why even accept negative numbers in the first place!"

You roll your eyes, but you know what to do. Update the function so that a negative input is an error state:

{%- capture rustSubFunction_after %}
```rust
fn double(number: i32) -> i32 {
    number * 2
}
```
{:.fullwidth}
{%- endcapture %}
{%- capture rustSuperFunction_after %}
```rust
fn main() {
    let doubled = double(7);
    println!("doubled: {}", doubled);
    
    let doubledNegative = double(-11);
    println!("doubledNegative: {}", doubledNegative);
}
```
{:.fullwidth}
{%- endcapture %}
{%- capture swiftSubFunction_after %}
```swift
func double(_ number: Int32) throws -> Int32 {
    guard number >= 0 else { throw DivisionError.divisionByZero }
    number * 2
}

enum DivisionError: Error {
    case divisionByZero
}
```
{:.fullwidth}
{%- endcapture %}
{%- capture swiftSuperFunction_after %}
```swift
func main() {
    let doubled = double(7)
    print("doubled: \(doubled)")
    
    let doubledNegative = double(-11)
    print("doubledNegative: \(doubledNegative)");
}
```
{:.fullwidth}
{%- endcapture %}

<div class="wide-table-holder">
{% include Galleries/left-right-compare.html
    table-class="top-align-td"
    lhs-title="Rust"
    rhs-title="Swift"
    lhs=rustSubFunction_after
    rhs=swiftSubFunction_after
    lhs2=rustSuperFunction_after
    rhs2=swiftSuperFunction_after
%}
</div>











<!--
thank you for helping me understand why I felt like it’s better to have a language-level error-handling system, rather than using the type system to do that


Me, a Swift dev, watching Rust devs argue about the use of Result's unwrap() which took down Cloudflare.

(Rust has many ways to get the value or error in Result, including expect() and unwrap(), both of which crash the program if the Result contains an error. Swift's Result has no crashing APIs at all)


If a programming language requires you to read a manual about how to use the programming language in order to use that language safely, it is not a safe programming language


And I’m saying that should be an option, but it should be named in a way that makes that extremely clear.

Swift's Result type has no crashing API’s, but its Optional has .unsafelyUnwrapped. If you want your Result to crash the program in Swift, you have to explicitly do so yourself, manually, by writing the code that does the crash; nothing will implicitly do that for you.

I'm saying Rust should have that here too; it might have prevented this disaster

`.unwrap()` is the dev saying "this shouldn't have been a Result in the first place"
-->


