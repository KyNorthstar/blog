---
layout: post
title: Representing Gender in Code
date: 2022-02-14 00:00 -0700
categories:
  - Tech
  - Programming
  - Gender

excerpt: Gender is weird, but code is strict… how can these exist in harmony?
---

For awhile now, my blog has delved into my societal adventures with gender. As that's cooling down, I wanted to make another post about tech stuff! So my girlfriend [Tangent] suggested I do both by talking about how I very successfully encoded gender into an app.

Anyone who knows me knows that my relationship with gender is very philosophical. {{ page.excerpt }} Well thankfully, my approach to writing code is also very philosophical.

So what are the challenges?

- Should you be encoding gender at all?
- The Type of gender variables
- Accounting for more than 2 genders
- Separating gender & sex
- Pronouns and generated text
- How to present this in the UI

Let's go through these one-by-one:



## Should you be encoding gender at all? ##

<b class="lozenge golden-rule">Generally, no.</b> For something like [3 nines] of all software which gathers user data, gender is completely irrelevant. **Never gather _any_ data unless you would encounter serious problems without doing so.**

Let's pretend, for the rest of this blog post, that you're making a social healthcare app whose whole point is that users share their gender with other users. Feels weird but I'll allow it.



## The Type of gender variables ##

First of all, I see a lot of places encoding gender as a Boolean, assigning `true` to male, and `false` to female, or vice versa. Aside from the pain this brings me as [an enby](/Non-Binary), this is not semantic at all. Are you really going to remember everywhere this is used that `true` means female? Sure, you can have constants like `gender_male = true`, but the compiler/interpreter will know, and might do unexpected things.

A seasoned programmer knows that there's an easy answer: enumerated types. Just declare something like this:

```swift
enum Gender {
  case male
  case female
}
```

Maybe you can even serialize them as an `Int` or something when you need to send them over a wire. Now you get the benefits of a small packet size _and_ semantic code! Win-win, right?



## Accounting for more than 2 genders ##

"Wait! Stop!" I say, my yellow/white/purple/black heart bleeding as I feel the piercing blow of a gender binary. "There are non-binary people!"

"Oh&hellip; hi? Sure thing," you say, adding one more `case`:

```swift
enum Gender {
  case male
  case female
  case nonBinary
}
```

And that certainly seems to cover all the cases, right? One binary value, the other binary value, and a non-binary value to cover whatever isn't covered by the binary.

In fact, yes. **This is certainly better than most places!** If you stop right here, you can rest easy knowing you're on the frontier of queer progress, and your users will mostly be placated. However, "just placate the users" ain't my style; I want to delight and validate the users, so **I keep going**.

"Let me have a crack at it," I say, absconding with your keyboard and furiously typing away. "Clearly what you have here is a `Gender` type, with many instances. Well, many philosophers including myself believe that gender is so unique and personal, that one might say every single person has their own specific gender."




[Tangent]: https://blog.tangentfox.com
[3 nines]: https://en.wikipedia.org/wiki/High_availability#Percentage_calculation
