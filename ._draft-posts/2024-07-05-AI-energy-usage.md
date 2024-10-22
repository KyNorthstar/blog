---
title: On the energy usage of image generators
social-preview-image: /images/AI vs Fortnite.png
excerpt: Is AI is killing the environment because it takes so much energy to generate its output?

date: 2024-07-04 MT

authors:
    - The Arx
    - Revue

categories:
    - Automation
    - Tech

hero-image: /images/AI vs Fortnite.png

page-specific-stylesheets:
    - 2024-07-05-AI-energy-usage.css
---

> AI is killing the environment because it takes so much energy to generate its output

If you have heard or said something similar to this, did you challenge it? Did you investigate this claim to see how true it really is?

I know that every time I hear a broad, too-good/bad-to-be-true claim, I look into it, and I know I'm not the only one. Here's an example [from Tumblr user txttletale](https://txttletale.tumblr.com/post/754458054203965440/i-for-one-get-a-lot-of-joy-from-asking-bing-ai-to). This example was brought to me by a friend, and I don't know nor endorse anyone in this screenshot:

<figure markdown=1>
[![A tumblr post with the following conversation:
txttletale:
its very funny when people talk at length about the horrible environmental impact of ai and give a big scary sounding number of electricty or litres of water or datacenter floor space without any context and then you investigate what that number means contextually and it always like pales in comparison to what's used by like. online gaming
txttletale:
this is less a comment on ai art per se and more on how you should be skeptical of any number (or percentage!) given to you that you have no context for
waltermeadows:
I just happen to think that online gaming is (sometimes) a positive addition to our world and things like crypto and ai are just a net loss and devoting planet-destroying energy to things that are actively harmful is a damn travesty
txttletale:
this is such a funny argument lol. our noble and socially necessary fortnite servers vs. their evil wasteful midjourney servers
loserfag-deactivated20240701:
Imagine being so retarded you don’t understand the simple concept of something being used for joy, a hobby or pastime being okay compared to something being used for literal shit
txttletale:
i for one get a lot of joy from asking bing ai to generate ‘lightning mcqueen gulf war campaign memorabilia’
(an image of a Polaroid photo of Lightning McQueen with jets flying above him and the text 'Gulf War - Campaign, Gulf War \<illegible> 39.-9' with a USA flag on a wooden desk as the background)](/images/Image generators vs Gaming.png){:.mid-post-hero.card}](/images/Image generators vs Gaming.png)
<figcaption role="cite">
    <a href="https://txttletale.tumblr.com/post/754458054203965440/i-for-one-get-a-lot-of-joy-from-asking-bing-ai-to">A conversation on Tumblr.</a>
    <br/>
    Please excuse my edits, but I think you can see why I couldn't help myself.
</figcaption>
</figure>



As much as I don't really wanna write about Fortnite, it does happen to be a good example here because it's currently a notably-popular online game at time of writing, and we are trying our best to compare apples to apples here.

So, with that said, let's crunch these numbers.



## The Energy Usage of Image Generators

I would love to investigate how much energy something like [DALL-E] uses, but sadly it's all proprietary and operated behind closed doors, so I can't really figure that one out.

However, [Stable Diffusion] is open-source and freely available to download and inspect, so I'll look at that!

I found [a paper from June 2024][Power Hungry Processing: Watts Driving the Cost of AI Deployment?] which found that Stable Diffusion (among others) takes 0.060~2.907 kWh (0.216~10.465 MJ) for 1,000 image generations, which is:

<figure class="energy-usage card">
    <b>0.22 ~ 10.47 KJ</b>
    <figcaption role="aside" class="specifier">per image</figcaption>
</figure>

Now, there's an answer! Or... is it? I mean, it sounds like a lot, right? Over 10 Kilojoules just to generate 1 image?

Well, numbers are barely worth anything on their own; let's get to comparing them.



## The Energy Usage of Online Gaming

The Tumblr post above seems concerned about comparing image generation to online gaming (and one user specifically mentions Fortnite).

Well there's 2 components to this: the players' devices and the server they're connecting to, so let's dig in.


### 1: Your Device Running a Video Game

There's a wide range of possible games your computer can play; everything from Solitaire and Minecraft to Cyberpunk 2077 and Dying Light 2. So I gotta focus somewhere or this is a nothing question.

Let's look specifically at [Unreal Engine]: one of the more popular ones for big-name games.

I found [a paper from February 2023][Reducing Fortnite’s Power Consumption] about Epic Games trying to make the Unreal Engine game Fortnite more energy-efficient. What a coincidence!

According to that paper, after their improvements to client-side energy efficiency, it takes an Xbox Series X **~168 Watts** to play a Fortnite session.

<aside>Unhelpfully, this paper almost entirely talks about ratios between previous usage and usage after their changes, without citing what either was, so I had to guesstimate this number from the "Average power consumption" graph.</aside>

And according to [this webpage][Fortnite weekly usage], the average active Fortnite player spends 6~10hrs per week playing the game. If you put those together, then for a single player's device running Fortnite, that works out to:

<figure class="energy-usage card">
    <b>3.63 ~ 6.05 MJ</b>
    <!-- <figcaption role="aside" class="specifier">per day</figcaption> -->
</figure>

So.. about a thousand times more energy, give or take.

But remember, this isn't nearly the whole story for playing such an online game. You have to think about the game servers too!


### 2: A Server Running an MMO

Now that's a term that doesn't get thrown around much anymore, huh? Massively-Multiplayer Online (game). Basically fell out of favor once World of Warcraft wasn't the biggest member of this genre.

Well, turns out basically every online game can be called an MMO now so let's look at how much energy a modern MMO uses up.

I had to crunch a few sources for this one:

- Serverwatch's [Server room power consumption]
- Fortnite.gg's [Fortnite player count]
- MMOStats'... [MMOStats]
- ZDNet's [Calculate datacenter server power usage]
- ESTNN's [Fortnite Servers – All 8 Locations and Why Ping is Important]
- and a few others that aren't as critical

So the basic thing you need to know is that video game servers are usually pretty generic these days. A video game company like Epic pays a server hosing company like AWS to host it for them... So we'll be looking at some generic numbers here.

Being charitable and **assuming they're really efficient**, we can say that one server uses 500 Wh (1.8 MJ). But remember, we're just looking at 1 person playing 1 game of Fortnite on 1 server, so we have to figure out how to divide that up.

At time of writing, the 24-hour peak Fortnite player count is 1,829,292 concurrent players. Since there's 8 Fortnite server locations (let's pretend each location just as 1 physical server so we don't lose our minds in the weeds), that's about 228,661 players per server. So dividing up 1.8 MJ across 228,661 players finally gets us:

<figure class="energy-usage card">
    <b>7.87 J</b>
    <figcaption role="aside" class="specifier">per player per session</figcaption>
</figure>

Which is delightfully low! Well done, Fortnite!

But... there's 1 more energy component here we've yet to consider.



## The Energy Usage of a Human Body

Yes, I actually am going here.

You see, it takes less energy for a human to type a prompt into the text field of an image generator, than it does for that same human to play an hour of a twitch-response multiplayer game like Fortnite.

I found [a website][Calories Burned Playing Video Games] which attempts to give estimates for Kilocalories burned by playing video games, above the base KCals that humans burn just existing. The thing is, this website focuses on "traditional video game" versus video games designed to promote fitness, like Wii Fit and DDR.

Well that just brings us back to the Minesweeper vs Cyberpunk problem!

Alright, let's make an educated guess and assume a Fortnite session is comparable to a light-moderate Wii Fit session. Splitting the difference, that's something like 219 KCal above human base. That works out to:

<figure class="energy-usage card">
    <b>917.6 KJ</b>
    <figcaption role="aside" class="specifier">per Fortnite session</figcaption>
</figure>

And uh... I'll say that typing a sentence is negligibly above base. Let's toss it a token 1 KCal just to level the playfield a bit. Y'know, imagine you're really hammering those keys:

<figure class="energy-usage card">
    <b>4.19 KJ</b>
    <figcaption role="aside" class="specifier">per prompt</figcaption>
</figure>



## Putting These Together

Seems we have everything we need to make a conclusion!

To recap, a single person's Fortnite session takes **3.63 ~ 6.05 MJ** for the client, **7.87 J** for the server, and **917.6 KJ** for the human; whereas a single person generating 8 images takes **1.76 ~ 83.76 KJ** to generate the images, and **4.19 KJ to hammer in the prompt**. Why 8? Well, most image generators give batches of 4 or so images so I'm being charitable to Fortnite and saying the user asks for 8.

Adding those together and making sure we use the same units for both, drumroll please:

<div class="flex-row flex-wrap">
  <figure class="energy-usage card">
      <b>4550 ~ 6970 KJ</b>
      <figcaption role="aside" class="specifier">per Fortnite session</figcaption>
  </figure>
  <figure class="energy-usage card">
      <b>5.95 ~ 14.66 KJ</b>
      <figcaption role="aside" class="specifier">per 8 generated images</figcaption>
  </figure>
</div>

Meaning that **Fortnite uses between 310.37 ~ 1171.43 times more energy than image generators**, with the median being somewhere around <!--475.44338336 ~ 764.70588235--> 620, so we can finally say:


<figure class="big energy-usage card">
    <span class="specifier">Fornite takes</span>
    <b>620×</b>
    <span class="specifier">more energy than image generators</span>
</figure>



<!-- markdownlint-disable-next-line MD025 -->
# But wait, the training tho!

Ahhhh, if you thought this, I commend you. Training an image generator is a significant amount of energy that shouldn't be discounted.

Luckily, [that first paper I mentioned][Power Hungry Processing: Watts Driving the Cost of AI Deployment?] also discusses the energy costs of training image generators!

The paper focuses on [BLOOMz]. According to that paper, the power used highly depends on the size of model you're generating:

<div class="wide-table-holder" markdown="1">

|         # of Parameters: | 7 Billion | 3 Billion | 1 Billion | 560 Million |
| -----------------------: | --------: | --------: | --------: | ----------: |
|     Training energy (GJ) |    186.10 |     92.28 |     61.39 |       37.82 |
|   Finetuning energy (GJ) |     27.26 |     11.67 |      3.89 |        1.96 |
| Inference energy (**J**) |       360 |       263 |       223 |         194 |

</div>

So in total, you get between:

<div class="flex-row flex-wrap">
  <figure class="energy-usage card">
      <b>39.78 ~ 213.4 GJ</b>
      <figcaption role="aside" class="specifier">to make a good image generator</figcaption>
  </figure>
</div>

Gigajoules! Now that's a whole SI prefix more than before! And that's not even counting the human cost, which... I'll just say is difficult enough to calculate that even I won't be estimating it today.


# For Comparison

But let's compare again; what else is measured in Gigajoules?



<div class="flex-row flex-wrap">
  <figure class="energy-usage card">
      <!-- 
      commute: 42mi/d
      57.5~75.0 kWh battery, 272~333-mile range = 0.2114~0.2252 kWh/mi = 7.991~8.514 GJ/yr commute 
      -->
      <b>8.0 ~ 8.5 GJ</b>
      <figcaption role="aside" class="specifier">avg. Tesla Model 3 yearly commute</figcaption>
  </figure>

  <figure class="energy-usage card">
      <!-- 
      commute: 42mi/d
      57.5~75.0 kWh battery, 272~333-mile range = 0.2114~0.2252 kWh/mi = 7.991~8.514 GJ/yr commute 
      -->
      <b>TODO GJ</b>
      <figcaption role="aside" class="specifier">avg. traffic light energy use per yearly commute</figcaption>
  </figure>
  
  <figure class="energy-usage card">
      <b>~100 GJ</b>
      <figcaption role="aside" class="specifier">avg. yearly home energy usage</figcaption>
  </figure>
  
  <!-- <figure class="energy-usage card">
      <!--
      (25000sqft * 2.5Wh) / 100 tenants = Venture X energy usage per tenant
      = 625 Wh / tenant
      -- >
      <b>TODO GJ</b>
      <figcaption role="aside" class="specifier">avg. yearly office energy usage per person</figcaption>
  </figure> -->
  
  <figure class="energy-usage card">
      <b>TODO GJ</b>
      <figcaption role="aside" class="specifier">avg. yearly microfridge energy usage</figcaption>
  </figure>
</div>


<aside markdown=1>
Sources: [Tesla Model 3 stats], [Household energy usage]
</aside>


**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**
**TODO**










[DALL-E]: https://en.wikipedia.org/wiki/DALL-E
[Stable Diffusion]: https://en.wikipedia.org/wiki/Stable_Diffusion
[Power Hungry Processing: Watts Driving the Cost of AI Deployment?]: https://arxiv.org/pdf/2311.16863
[Unreal Engine]: https://en.wikipedia.org/wiki/Unreal_Engine
[Reducing Fortnite’s Power Consumption]: https://cdn2.unrealengine.com/reducing-fortnites-power-consumption-layout-v03-ffedbeb1adeb.pdf
[Fortnite weekly usage]: https://www.demandsage.com/fortnite-statistics/
[Server room power consumption]: https://www.serverwatch.com/servers/server-room-power-consumption/
[Fortnite player count]: https://fortnite.gg/player-count
[MMOStats]: https://mmostats.com
[Calculate datacenter server power usage]: https://www.zdnet.com/article/toolkit-calculate-datacenter-server-power-usage/
[Fortnite Servers – All 8 Locations and Why Ping is Important]: https://estnn.com/fortnite-servers/
[Calories Burned Playing Video Games]: https://captaincalculator.com/health/calorie/calories-burned-video-games-calculator/
[BLOOMz]: https://huggingface.co/bigscience/bloomz
[Tesla Model 3 stats]: https://www.topspeed.com/tesla-model-3-battery-size-voltage-charging-explained/
[Household energy usage]: https://greenbuildingcanada.ca/whats-considered-energy-efficient-home/

