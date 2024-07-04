---
layout: post
title: Objective-C was
date: 2019-04-21 00:26 -0400
date-edit: 2019-04-23 21:27 -0400
categories:
  - Think-Piece
  - Tech
  - Apple
  - Programming
excerpt: Objective-C has passed on. This language is no more. It has ceased to be. This is an ex-language.
---

Objective-C has passed on. This language is no more. It has ceased to be. It's expired and gone to meet its maker. It's a stiff. Bereft of life, it rests in peace. If you hadn't continued to write it, it'd be pushing up the daisies. Its maintenance cycles are now history. It's off the twig. It's kicked the bucket. It's shuffled off its mortal coil, run down the curtain and joined the choir invisible. This is an ex-language.

<div class="singular-hero-emoji">⚰️</div>

All jokes aside, it was a valiant effort. Birthed in a darker age, it was a shining light of thoughtfulness and consideration to solve the problems they saw in the programming landscape. C was about a decade old and its flaws were showing, and people were starting to agree that Assembly might not be the way to go. Inspired by [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk), it was to be a solution to the then-difficult problem of making code more reusable.

Without Objective-C we never would have had [NeXTSTEP](https://en.wikipedia.org/wiki/NeXTSTEP), and thus never macOS nor iOS, at least not in the ways we know today. The language had a long and weaving path, passed from company to company. Though Apple would have you think it was exclusive to them, it was available to everyone through [GCC](https://en.wikipedia.org/wiki/GNU_Compiler_Collection) and [GNUStep](https://en.wikipedia.org/wiki/GNUstep).

And though it brought us so much of the modern landscape of Apple software, as with all things, it too shall pass. It's been a good, long **35 years**, and it has been thoroughly surpassed. It did its best to keep up, moving from GCC to LLVM, interoperating with C++, [trying to look more like Java](https://en.wikipedia.org/wiki/Objective-C#%22Modern%22_Objective-C_syntax_(1997)), automatically counting its references, adding collection literals and other sugar, trying out garbage collection for awhile, and many more tweaks and bodges and history and context, more tools in the toolbelt of experienced developers, yet more to learn for newcomers. Alas, there's only so much to be done that can keep a dying language alive, and its time has come.

Before it passed, Objective-C has given us many gifts and children. And one of its survivors is to fill the objective-hole. Brought into this world through that very same LLVM which its parent adopted, Swift looks a lot like its progenitor. It offers classes, parameter labels, collection literals, property delegation and observation, not to mention all the features it has gated behind its `@objc` tag, like selectors and dynamic properties.

Swift learned a lot from Objective-C. It learned that the most important thing is use-site clarity, and that parameter labels aid that greatly. It learned that it's not always the best idea to have a base class, nor to pass objects by reference. It learned that the best route to adoption is through syntax that is familiar to those coming from other platforms. It learned that static extension of existing types is safer and more useful than subclassing. It learned that function-passing is safer and more useful than delegates, selectors, and swizzling. Swift has a lot to owe to its late parent, both positive and negative examples. It improves on Objective-C in almost every way, and isn't afraid to dramatically change itself in the name of improvement.

Objective-C is dead. Long live Swift.

⚰️ Rest in Peace, sweet `EXC_BAD_ACCESS`
