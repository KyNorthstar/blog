---
layout: post
title: Bad Programming Languages Require Semicolons;
date: 2020-01-16 13:10 -0700
date-edit: 2020-05-08 12:23 -0600
categories:
  - Tech
  - Programming
excerpt: Programming languages are for humans. Semicolons are there for the compiler; they don't help the humans.
---


Programming languages are for humans. Computers don't need the languages; all they need is the binary instructions to send to their CPU. Computers don't care who created the instructions, what language they used to represent the instructions, nor what compiler converted that language into the instructions. All they care about are the instructions.



Semicolons have long been the de-facto standard for punctuating a line in a programming language. Back when compute cycles were expensive and every tick counted, semicolons were a way to make it easy for the compiler to see where a line of code ended. It would always assume a line continued until this punctuation, and afterwards, a new line started or the current scope closed. Simple and easy.



The problem is that semicolons are there for the compiler. They don't inherently help the humans. Take the following code for example:

```swift
func largestAndSmallest(in array: [Int]) -> (largest: Int, smallest: Int) {
   var largestSoFar = array[0]
   var smallestSoFar = array[0]

   for value in array {
      if value < smallestSoFar {
         smallestSoFar = value
      }
      else if value > largestSoFar {
         largestSoFar = value
      }
   }

   return (largest: largestSoFar, smallest: smallestSoFar)
}
```
<aside>This was adapted from <a href="https://www.tutorialspoint.com/swift/swift_functions.htm" target="_blank" x_>a tutorial from TutorialsPoint</a></aside>

This is really easy to follow. Even someone who hasn't written code before could figure it out. Each statement does something obvious and it can mostly be read in plain English.


Now, compare it to this code:

```swift
func largestAndSmallest(in array: [Int]) -> (largest: Int, smallest: Int) {
   var largestSoFar = array[0];
   var smallestSoFar = array[0];

   for (value) in (array) {
      if (value < smallestSoFar) {
         smallestSoFar = value;
      }
      else if (value > largestSoFar) {
         largestSoFar = value;
      }
   }

   return (largest: largestSoFar, smallest: smallestSoFar);
}
```

This code looks very similar; in fact it compiles and runs identically. However, it has unnecessary punctuation. This introduces noise that is unnecessary for the reader and, since it's Swift, unnecessary for the compiler too.

At a fundamental level, [Swift cares about clarity](https://swift.org/documentation/api-design-guidelines/#fundamentals). If additional information makes something unclear, Swift omits it. If there's not enough information to make something clear, Swift adds more. The punctuation above hinder clarity; they're something else for the human reading it to look at, ignore, and move on. For a seasoned developer, that might be second-nature, but this is a skill which a newcomer has to build. It's additional information that someone has to learn to filter out, which is of no use to them. It reduces clarity, and slightly increases the barrier to entry.



# So what? #

> It's easy enough to learn to read past semicolons, to learn that they signify the end of some lines. Why bother writing up a whole blog post about how this small thing is bad?
>
> <cite>You, maybe</cite>

It's an indicator of the mindset of the language designers. It shows what's important to them. It shows that a fast compiler, or perhaps tradition, is more important to them than making their language clear and easy to understand.

Also note that I said that bad programming languages _require_ semicolons. If writing punctuation to end a line makes it clearer for you, then you should have the freedom to do so. That's why languages like Swift, Kotlin, JavaScript, Python, Ruby, et al make them _optional_, not _disallowed_.

Remember, programming languages are for humans; they're not for computers. So the top priority of a language designer should be to make it good for humans. If a language designed to be compiled andor interpreted on modern hardware also requires you to put punctuation at the end of each line, then it is prioritizing the wrong thing; **it's a bad smell** which leaks into many corners of the language.



---

There's plenty more opinions I have about programming languages. I may or may not post them on this blog in the future. If you're curious, I codified many of them in [a set of Swift style guidelines](https://swift-style-guidelines.bhstudios.org); feel free to read through them if you want.
