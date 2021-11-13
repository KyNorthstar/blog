---
layout: post
title: The Halting Problem is BS
date: 2021-07-27 00:00 -0600
  - Tech
  - Computer Science
  - Think-Piece
  - Programming
  - Math
---


The Halting Problem is based on a flawed premise.

In case you're not familiar, here's a video explaining the halting problem very well:
<iframe id="ytplayer" type="text/html" width="720" height="405"
src="https://www.youtube.com/embed/macM_MtS_w4?cc_load_policy=1&enablejsapi=1&modestbranding=1&playsinline=1&color=white"
frameborder="0" allowfullscreen>


So, we have these distinct concepts:
1. A program “`H`” exists which can magically determine whether any given program “`P`” halts when `P` is given input “`I`”. We assume this is possible and it is always correct, for sake of argument
2. We attach `H` to two other programs “`X`” and “`Y`”, so that when `H` says that its input halts, `X` loops forever, but if `H` says its input won't halt, `Y` immediately halts. Altogether, we call this combined program “`H+`”

Given these, feed `H+` into both the `P` and `I` inputs of `H+`. It's said that, `H+` will now halt if `H+` would't halt,
