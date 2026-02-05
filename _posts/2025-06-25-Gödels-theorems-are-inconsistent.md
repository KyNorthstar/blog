---
layout: post
title: Gödel's Incompleteness Theorems are as Inconsistent as the Halting Problem
date: 2025-06-25
---

Binary thinking is a fallacy. It's a model that we as humans have created to evaluate and make predictions about the world around us, but it _is_ a model, and as such, is wrong... but sometimes useful.



## What is binary thinking?

It's a system of modeling things using only Boolean logic: either something is exactly one value, or it is the only other possible value. The light is either on, or it's off. The law is either broken, it it isn't. The cup is either filled, or it isn't.

Hang on... that last one is interesting, isn't it? Sure, there's either a rim or fill-line, and if the liquid is at that line, then it's full. But if you take one sip, is it no longer full? I suppose so, right? It's either full or it isn't, so you take one sip and it isn't full.

But at the same time, a cup is either empty, or it isn't. When it's full, it's not empty. But if you've just taken one sip, it's both not-full, and also not-empty. Eventually, of course, you can drink all the liquid and the cup will be both empty and not-full at the same time. So there's some third state, right? Neither full nor empty.

So how do you model that?

Well, you can use both fullness and emptiness statements at the same time, to describe the state.

It can be:
- `full=true` and `empty=false` — The cup is full
- `full=false` and `empty=true` — The cup is empty
- `full=false` and `empty=false` — The cup is somewhere between full and empty
- hang on.

It... can't be both `full=true` and `empty=true` at the same time... right? That's inconsistent with what we observe in the physical cup and its physical liquid.

And let's look back at that first example: A light is either on, or it isn't. But... what if it's dimmed? We have the same situation: it's somewhere between clearly-on and clearly-off.

And if laws were always so clearly violated or not-violated, then we wouldn't need judges and courts, nor more than one possible verdict... so clearly there's some in-between state there, too.



## Representing in-between states

Various systems exist to represent in-between states. Fuzzy logic, floating-point, quantitative measurements, etc..

I group these all under what I call **"spectral thinking"**. Where binary thinking places everything somewhere in a binary, spectral thinking places everything on a spectrum.

These spectra generally range between some value and another, like 0.0 ~ 1.0, and represent everything in-between, with arbitrary precision. Though, in some systems, like bimodal distributions, what's placed on the spectrum can go past those extremes as well.



## Okay, so how does this apply to the Halting Problem?

The Halting Problem is usually stated like this:

> Imagine we have a way to define a program, and that program can either run forever and never stop, or run for some amount of time and eventually stop.
>
> Now imagine we have a detection program and call it A.
> A takes in the source code for a program, and an example input for that program, and then tells you whether its given program will run forever if given that input.
> A can always tell whether or not some other program it's given will eventually stop. So you give it a program and an example input, and it gives you `true` if it eventually stops, and `false` if it runs forever.
>
> Let's say we create another program and call it B.
> B takes one input: a value which is either `true` or `false`.
> B runs forever if you give it the input `true`, and quickly stops if you give it `false`.
>
> Now let's grab a photocopier, which takes anything as input and outputs two perfect copies of it. We can call this photocopier C.
>
> Now, let's attach these programs together!
> We will start with C, and attach its two outputs to the two inputs of the detection program A.
> We will now attach the output of detection program A to the input of this program B.
> We can call this new combination program The CAB.
>
> Now, if we feed The CAB some program which would cause itself to run forever, C copies it into both the source code and the example input for A, then A outputs `false` which goes into B, which then quickly stops.
> Instead, if we feed The CAB some program which would cause itself program to eventually stop, C copies it into both inputs of A, then A outputs `true` which does into B, which then runs forever and never stops.
>
> Now, imagine what happens if we feed the source code for The CAB into The CAB.
>
> If it would eventually stop, then The CAB runs forever.
> On the other paw, if it would run forever, then The CAB stops quickly.
>
> But that means that it runs forever if it stops, and it stops if it runs forever, which is a paradox!
> This is proof that not everything can be computed.

Okay there's so much to unpack here. Where do we start? I'm tempted to discuss the fact that The CAB doesn't make any promises about what it _should_ do so its behavior isn't inconsistent, or that this is more of a proof that you can design a broken machine than a proof that not everything can be computed, but today I'm much more interested in the fact that this only seems like a paradox because of binary thinking.

There's a some magic going on here. For example, how does the detection program A manage to always know if its given source code would loop forever if you run it with the given example input? Well, we say it does, by magic. The genie who sold it to me promised it does that perfectly every time.

Well I'm gonna ask that genie to change the detection program A so that it can also magically know whether the given inputs would result in a paradox, and it'll do that perfectly every time.

So now if we feed The CAB some program which would cause it to run forever, A outputs `paradox`, and we didn't really think about what happens when we give program B the `paradox` as its input, so I'll just say it repeats `paradox`.

So now if you give The CAB its own source code then it quickly gives you `paradox`. Cool!

Just a small application of non-binary thinking solves The Halting Problem.

