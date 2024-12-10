---
title: On the energy usage of image generators
social-preview-image: /images/AI vs Fortnite.png
excerpt: Is AI is killing the environment because it takes so much energy to generate its output?

date: 2024-12-02 MT

authors:
    - The Arx
    - Chris
    - Revue

categories:
    - Automation
    - Tech

hero-image: /images/AI vs Fortnite.png

page-specific-stylesheets:
    - 2024-07-05-AI-energy-usage.css

# app-bar:
#     right-widget: energy-unit-switcher.html
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



## Your Device's Base Power Usage

The one you're using right now! Probably a smartphone or laptop or something like that.
It's using electricity to do everything it does.
**Understanding exactly how much energy it uses helps us set a baseline for what to expect throughout the rest of this.**

The type of device varies wildly, ranging from power-sipping watches to massive gaming rigs & servers, so let's get some reasonable (and charitable) expectations set.

I'll assume you're using a common new smartphone/laptop/desktop. I'll only look at the top sellers, too, to get the most-generalizable stats.

<ul class="show-only-when-js-is-enabled   plain inline content-switcher chips"
        data-switched-element-selector="[data-energy-unit]"
        data-content-switcher-data-source="energy-unit"
        data-content-switcher-data-replacement="energy-unit-option">
    <li><button class="accented chip mutates-page" data-energy-unit-option="joules" selected>Joules</button></li>
    <li><button class="accented chip mutates-page" data-energy-unit-option="watt-hours">Watt-hours</button></li>
    <li><button class="accented chip mutates-page" data-energy-unit-option="gasoline">Gasoline</button></li>
</ul>

<script>
$(function() {
    document.addContentSwitcher("[data-energy-unit]")
})
</script>

<div class="wide-table-holder" markdown="1">
<table>
  <caption>Measuring 1 Hour of Usage</caption>
  <thead>
    <tr>
      <th>Device</th>
      <th>TDP<sup>⸸</sup></th>
      <th>Battery Capacity<sup>⸸</sup></th>
      <th>Min. energy usage</th>
      <th>Max. energy usage</th>
    </tr>
  </thead>
  <tbody>
    <tr><th>Galaxy S24 Ultra</th>
      <td><!-- TDP -->
        12.5W
      </td>
      <td><!-- Battery Capacity -->
        5000 mAh
      </td>
      <td><!-- Min. energy -->
        {% include energy-units.html
          joules='72 J'
          watt-hours='0.02 Wh'
          gasoline='0.0005 tsp'
        %}
      </td>
      <td><!-- Max. energy -->
        {% include energy-units.html
          joules='59.7 kJ'
          watt-hours='16.58 Wh'
          gasoline='0.38 tsp'
        %}
      </td>
    </tr>
    <tr><th>iPhone 15 Pro Max</th>
      <td><!-- TDP -->
        11W
      </td>
      <td><!-- Battery Capacity -->
        3274 mAh
      </td>
      <td><!-- Min. energy -->
        {% include energy-units.html
          joules='360 J'
          watt-hours='0.1 Wh'
          gasoline='0.002 tsp'
        %}
      </td>
      <td><!-- Max. energy -->
        {% include energy-units.html
          joules='36.4 kJ'
          watt-hours='10.1 Wh'
          gasoline='0.23 tsp'
        %}
      </td>
    </tr>
    <tr><th>Acer Aspire 3 A315-24P-R7VH Slim Laptop*<sup>‡</sup></th>
      <!-- Ryzen 3 7320U + Radeon 610M -->
      <td><!-- TDP -->
        15 Wh
      </td>
      <td><!-- Battery Capacity -->
        {% include energy-units.html
          joules='144 kJ'
          watt-hours='40 Wh'
          gasoline='0.91 tsp'
        %}
      </td>
      <td><!-- Min. energy -->
        <!-- 7 Wh + ???Wh -->
        {% include energy-units.html
          joules='25.2 kJ'
          watt-hours='7 Wh'
          gasoline='0.16 tsp'
        %}
      </td>
      <td><!-- Max. energy -->
        <!-- 25 Wh + 81.2 Wh -->
        {% include energy-units.html
          joules='292.3 kJ'
          watt-hours='81.2 Wh'
          gasoline='1.85 tsp'
        %}
      </td>
    </tr>
    <tr><th>M1 MacBook Air</th>
      <td><!-- TDP -->
        35W
      </td>
      <td><!-- Battery Capacity -->
        4379 mAh
      </td>
      <td><!-- Min. energy -->
        {% include energy-units.html
          joules='108 J'
          watt-hours='0.03 Wh'
          gasoline='0.0007 tsp'
        %}
      </td>
      <td><!-- Max. energy -->
        {% include energy-units.html
          joules='109 kJ'
          watt-hours='30.3 Wh'
          gasoline='0.69 tsp'
        %}
      </td>
    </tr>
    <tr><th>Corsair Vengeance i7500*</th>
      <!-- i9 14900K + RTX 4090 -->
      <td><!-- TDP -->
        575W<!-- 125W+450W -->
      </td>
      <td class="statistic-omitted"><!-- Battery Capacity -->
        No battery
      </td>
      <td><!-- Min. energy -->
        <!-- 67.4 Wh + 19 Wh -->
        {% include energy-units.html
          joules='311 kJ'
          watt-hours='86.4 Wh'
          gasoline='1.97 tsp'
        %}
      </td>
      <td><!-- Max. energy -->
        <!-- 548 Wh+717 Wh -->
        {% include energy-units.html
          joules='4.56 MJ'
          watt-hours='1.27 kWh'
          gasoline='28.83 tsp'
        %}
      </td>
    </tr>
    <tr><th>M4 iMac (2 ports)*</th>
      <td><!-- TDP -->
        5W
      </td>
      <td class="statistic-omitted"><!-- Battery Capacity -->
        No battery
      </td>
      <td><!-- Min. energy -->
        {% include energy-units.html
          joules='9.65 kJ'
          watt-hours='2.68 Wh'
          gasoline='0.06 tsp'
        %}
      </td>
      <td><!-- Max. energy -->
        {% include energy-units.html
          joules='24.48 kJ'
          watt-hours='6.8 Wh'
          gasoline='0.16 tsp'
        %}
      </td>
    </tr>
  </tbody>
</table>
</div>

<aside markdown="1">
  \* Only considering the energy usage of the CPU & GPU (or SoC).<br/>
  ⸸ Calculated, but not measured.<br/>
  ‡ CPU+GPU stats combined because GPU is integrated on CPU die.<br/>
  "Gasoline" uses the EPA standard of equating 1 Gallon of gasoline to 33.7 kWh of energy.
</aside>

<aside markdown="1">
#### Sources:
Best devices: [Forbes][Forbes: Top 10 Best-Selling Smartphones 2024], [Insider Monkey][Insider Monkey: 15 Best Selling Laptops in 2023], [PCMag][PCMag: The Best Gaming PCs for 2024]

Energy usage: [Qualcomm][Qualcomm: Snapdragon 8 Gen 3 Mobile Platform], [CPU Monkey][CPU-Monkey: Apple A17 Pro], Notebookcheck ([iPhone][Notebookcheck: iPhone 15 Pro], [Ryzen 3][Notebookcheck: AMD Ryzen 3 7320U], [610M][Notebookcheck: AMD Radeon 610M], [MacBook][Notebookcheck: MacBook Air M1], [4090][Notebookcheck: Nvidia RTX 4090], [Core i9][Notebookcheck: Intel Core i9 14900K], [M4][Notebookcheck: Apple M4]), [Nvidia][Nvidia: RTX 4090 specs], [Wikipedia][Wikipedia: Apple M4], [Geeky Gadgets][Geeky Gadgets: AMD Ryzen 3 7320U]
</aside>


Taking these together, I can safely assume:
<div class="flex-row flex-wrap">
  <figure class="energy-usage card">
    <span class="specifier">Your device is currently using</span>
    <b>{% include energy-units.html
      joules='72 J ~ 4.56 MJ'
      watt-hours='20 mWh ~ 1.27 kWh'
      gasoline='2.46 µL ~ 0.6 cup'
    %}</b>
      <figcaption role="aside" class="specifier">every hour</figcaption>
  </figure>
  <figure class="energy-usage card">
    <span class="specifier">Your device is currently using</span>
    <b>{% include energy-units.html
      joules='28.30 KJ ~ 1.666 GJ'
      watt-hours='7.3 Wh ~ 463.9 kWh'
      gasoline='0.18 tsp ~ 13.71 gal'
    %}</b>
      <figcaption role="aside" class="specifier">every year</figcaption>
  </figure>
</div>

Although, that's a very wide range, and you're definitely not using at 100% all the time, so I'll be reasonable and say it's probably somewhere in the middle. **Let's go with what that iMac uses at idle**:
<div class="flex-row flex-wrap">
  <figure class="energy-usage card">
    <b>{% include energy-units.html
      joules='9.65 kJ'
      watt-hours='2.68 Wh'
      gasoline='0.06 tsp'
    %}</b>
    <figcaption role="aside" class="specifier">every hour</figcaption>
  </figure>
  <figure class="energy-usage card">
    <b>{% include energy-units.html
      joules='84.57 MJ'
      watt-hours='23.49 kWh'
      gasoline='0.68 gal'
    %}</b>
    <figcaption role="aside" class="specifier">every year</figcaption>
  </figure>
</div>

Much more workable. Let's continue!



## The Energy Usage of a Human Body

Yes, I actually am going here. Don't worry; I'm not going to start taking into account how much energy it takes to grow your food or air-condition the room you're in or whatever. Let's pretend you're sitting outside on a perfectly comfortable day, in the shade so your device is comfortable too, and your nutrition is 100% renewable. No energy to account for outside you and your device.

Now, it takes less energy for a human to type a prompt into the text field of an image generator, than it does for that same human to play an hour of a twitch-response multiplayer game like Fortnite.

I found [a website][Calories Burned Playing Video Games] which attempts to give estimates for Kilocalories burned by playing video games, above the base KCals that humans burn just existing. The thing is, this website focuses on "traditional video game" versus video games designed to promote fitness, like Wii Fit and DDR.

Well that just brings us back to the Minesweeper vs Cyberpunk problem!

Alright, let's make an educated guess and assume a Fortnite session is comparable to a light-to-moderate Wii Fit session. Splitting the difference, that's something like 219 KCal above human base. That works out to:

<figure class="energy-usage card">
  <b>{% include energy-units.html
    joules='917.6 KJ'
    watt-hours='254.89 Wh'
    gasoline='5.81 tsp'
  %}</b>
    <figcaption role="aside" class="specifier">per Fortnite session</figcaption>
</figure>

And uh... I'll say that typing a sentence is negligibly above base. Let's toss it a token 1 KCal just to level the playfield a bit. Y'know, imagine you're really hammering those keys:

<figure class="energy-usage card">
  <b>{% include energy-units.html
    joules='4.19 KJ'
    watt-hours='1.16 Wh'
    gasoline='0.03 tsp'
  %}</b>
    <figcaption role="aside" class="specifier">per prompt</figcaption>
</figure>



## The Energy Usage of Online Gaming

The Tumblr post at the top of this blogpost seems concerned with comparing image generation to online gaming (and one user specifically mentions Fortnite).

Well there's 2 components to this: the players' devices and the server they're connecting to, so let's dig in.



### 1: Your Device Running a Video Game

There's a wide range of possible games your computer can play; everything from Solitaire and Minecraft to Cyberpunk 2077 and Dying Light 2. So I gotta focus somewhere or this is a nothing-question.

Let's look specifically at [Unreal Engine]: one of the more popular ones for big-name games, including Fortnite.

I found [a paper from February 2023][Reducing Fortnite’s Power Consumption] about Epic Games trying to make the Unreal Engine game Fortnite more energy-efficient. What a coincidence!

According to that paper, after their improvements to client-side energy efficiency, it takes an Xbox Series X **~168 Watts** to play a Fortnite session.

<aside>Unhelpfully, this paper almost entirely talks about ratios between previous usage and usage after their changes, without citing what either was, so I had to guesstimate this number from the "Average power consumption" graph.</aside>

And according to [this webpage][Fortnite weekly usage], the average active Fortnite player spends 6~10hrs per week playing the game. If you put those together, then for a single player's device running Fortnite, that works out to:

<figure class="energy-usage card">
  <b>{% include energy-units.html
    joules='3.63 ~ 6.05 MJ'
    watt-hours='1.01 ~ 1.68 kWh'
    gasoline='0.48 ~ 0.80 cups'
  %}</b>
  <figcaption role="aside" class="specifier">per day</figcaption>
</figure>

But remember, this isn't nearly the whole story for playing such an online game. You have to think about the game servers too!


### 2: A Server Running an MMO

Now that's a term that doesn't get thrown around much anymore, huh? Massively-Multiplayer Online (game). Basically fell out of favor once World of Warcraft wasn't the biggest member of this genre.

Well, turns out basically every online game can be called an MMO now so let's look at how much energy a modern MMO uses up.

I had to crunch a few sources for this one:

- Serverwatch's [Server room power consumption]
- Fortnite.gg's [Fortnite player count]
- MMOStats'... [MMO stats][MMOStats]
- ZDNet's [Calculate datacenter server power usage]
- ESTNN's [Fortnite Servers – All 8 Locations and Why Ping is Important]
- and a few others that aren't as critical

So the basic thing you need to know is that video game servers are usually pretty generic these days. A video game company like Epic pays a server hosing company like AWS to host it for them... So we'll be looking at some generic numbers here.

Being charitable and **assuming they're really efficient**, we can say that one server uses 500 Wh (1.8 MJ). But remember, we're just looking at 1 person playing 1 game of Fortnite on 1 server, so we have to figure out how to divide that up.

At time of writing, the 24-hour peak Fortnite player count is 1,829,292 concurrent players. Since there's 8 Fortnite server locations (let's pretend each location just as 1 physical server so we don't lose our minds in the weeds), that's about 228,661 players per server. So dividing up 1.8 MJ across 228,661 players finally gets us:

<figure class="energy-usage card">
  <b>{% include energy-units.html
    joules='7.87 J'
    watt-hours='2.18 mWh'
    gasoline='0.24 μL'
  %}</b>
    <figcaption role="aside" class="specifier">per player per session</figcaption>
</figure>

Which is delightfully low! **Well done, Fortnite!**

But... there's 1 more energy component here we've yet to consider.



## The Energy Usage of Image Generators

I would love to investigate how much energy something like [DALL-E] uses, but sadly it's all proprietary and operated behind closed doors, so I can't really figure that one out.

However, [Stable Diffusion] is open-source and freely available to download and inspect, so I'll look at that!

I found [a paper from June 2024][Power Hungry Processing: Watts Driving the Cost of AI Deployment?] which found that Stable Diffusion (among others) takes 0.060~2.907 kWh (0.216~10.465 MJ) for 1,000 image generations, which is:

<figure class="energy-usage card">
  <b>{% include energy-units.html
    joules='0.22 ~ 10.47 KJ'
    watt-hours='0.06 ~ 2.91 Wh'
    gasoline='6.74 ~ 326.90 μL'
  %}</b>
  <figcaption role="aside" class="specifier">per image</figcaption>
</figure>

<!-- Now, there's an answer! Or... is it? I mean, it sounds like a lot, right? Over 10 Kilojoules just to generate 1 image?

Well, numbers are barely worth anything on their own; let's get to comparing them. -->



## Putting These Together

Seems we have everything we need to make a conclusion!

To recap, a single person's Fortnite session takes **3.63 ~ 6.05 MJ** for the client, **7.87 J** for the server, and **917.6 KJ** for the human; whereas a single person generating 8 images takes **1.76 ~ 83.76 KJ** to generate the images, and **4.19 KJ to hammer in the prompt**. Why 8? Well, most image generators give batches of 4 or so images so I'm being charitable to Fortnite and saying the user asks for 8.

Adding those together and making sure we use the same units for both, drumroll please:

<div class="flex-row flex-wrap">
  <figure class="energy-usage card">
    <b>{% include energy-units.html
      joules='4.55 ~ 6.97 MJ'
      watt-hours='1.26 ~ 1.94 kWH'
      gasoline='28.71 ~ 44.21 tsp'
    %}</b>
      <figcaption role="aside" class="specifier">per Fortnite session</figcaption>
  </figure>
  <figure class="energy-usage card">
    <b>{% include energy-units.html
      joules='5.95 ~ 14.66 KJ'
      watt-hours='1.65 ~ 4.07 Wh'
      gasoline='0.04 ~ 0.09 tsp'
    %}</b>
      <figcaption role="aside" class="specifier">per 8 generated images</figcaption>
  </figure>
</div>

Meaning that **Fortnite uses between 310.37 ~ 1171.43 times more energy than image generators**, with the median being somewhere around <!--475.44338336 ~ 764.70588235--> 620, so we can finally say:


<figure class="big energy-usage card">
    <span class="specifier">Fornite takes</span>
    <b>620×</b>
    <span class="specifier">more energy than image generators</span>
    <aside>1 Fortnite session vs generating 8 images</aside>
</figure>

That means the energy it takes to play 1 Fortnite session could generate **~4,960 images!**



<!-- markdownlint-disable-next-line MD025 -->
# But wait, the training tho!

Ahhhh, if you thought this, I commend you. Training an image generator is a significant amount of energy that shouldn't be discounted.

Luckily, [that first paper I mentioned][Power Hungry Processing: Watts Driving the Cost of AI Deployment?] also discusses the energy costs of training image generators!

The paper focuses on [BLOOMz]. According to that paper, the power used highly depends on the size of model you're training:


<div class="wide-table-holder" markdown="1">
<table>
  <caption>Training an image generator</caption>
  <thead>
    <tr>
      <th># of Parameters:</th>
      <th>7 Billion</th>
      <th>3 Billion</th>
      <th>1 Billion</th>
      <th>560 Million</th>
    </tr>
  </thead>
  <colgroup>
    <col align="right" class="text-align--end" />
  </colgroup>
  <tbody>
    <tr><td>Training Energy ({% include energy-units.html
      joules='GJ'
      watt-hours='MWh'
      gasoline='gallons'
    %})</td>
      <td><!-- 7 Billion -->
        {% include energy-units.html
          joules='186.10'
          watt-hours='51.69'
          gasoline='1,531.0'
        %}
      </td>
      <td><!-- 3 Billion -->
        {% include energy-units.html
          joules='92.28'
          watt-hours='25.63'
          gasoline='760.5'
        %}
      </td>
      <td><!-- 1 Billion -->
        {% include energy-units.html
          joules='61.39'
          watt-hours='17.05'
          gasoline='505.9'
        %}
      </td>
      <td><!-- 560 Million -->
        {% include energy-units.html
          joules='37.82'
          watt-hours='10.50'
          gasoline='311.6'
        %}
      </td>
    </tr>
    <tr><td>Fine-tuning Energy ({% include energy-units.html
      joules='GJ'
      watt-hours='MWh'
      gasoline='gallons'
    %})</td>
      <td><!-- 7 Billion -->
        {% include energy-units.html
          joules='27.26'
          watt-hours='7.57'
          gasoline='224.6'
        %}
      </td>
      <td><!-- 3 Billion -->
        {% include energy-units.html
          joules='11.67'
          watt-hours='3.24'
          gasoline='96.1'
        %}
      </td>
      <td><!-- 1 Billion -->
        {% include energy-units.html
          joules='3.89'
          watt-hours='1.08'
          gasoline='32.1'
        %}
      </td>
      <td><!-- 560 Million -->
        {% include energy-units.html
          joules='1.96'
          watt-hours='0.54'
          gasoline='16.15'
        %}
      </td>
    </tr>
    <tr><td>Inference Energy (<strong>{% include energy-units.html
      joules='J'
      watt-hours='mWh'
      gasoline='μL'
    %}</strong>)</td>
      <td><!-- 7 Billion -->
        {% include energy-units.html
          joules='360'
          watt-hours='100'
          gasoline='11.23'
        %}
      </td>
      <td><!-- 3 Billion -->
        {% include energy-units.html
          joules='263'
          watt-hours='73.06'
          gasoline='8.21'
        %}
      </td>
      <td><!-- 1 Billion -->
        {% include energy-units.html
          joules='223'
          watt-hours='61.94'
          gasoline='6.96'
        %}
      </td>
      <td><!-- 560 Million -->
        {% include energy-units.html
          joules='194'
          watt-hours='53.89'
          gasoline='6.05'
        %}
      </td>
    </tr>
  </tbody>
</table>
</div>

So in total, you get between:

<figure class="energy-usage card">
  <b>{% include energy-units.html
    joules='39.78 ~ 213.4 GJ'
    watt-hours='11.05 ~ 59.28 MWh'
    gasoline='327.9 ~ 1,759 gallons'
  %}</b>
    <figcaption role="aside" class="specifier">to make a good image generator</figcaption>
</figure>

{% include energy-units.html
  joules='Gigajoules'
  watt-hours='Megawatt-hours'
  gasoline='Kilo-gallons'
%}! Now that's a whole SI prefix more than before! And that's not even counting the human cost, which... I'll just say is difficult enough to calculate that even I won't be estimating it today.



<!-- TODO: How much energy did it take to develop Fortnite? -->



# Just commission an artist!

So maybe that all leaves a sour taste in your mouth.



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






# Just google it and use a real image!

Well, if you don't like that it takes {% include energy-units.html
  joules='5.95 ~ 14.66 KJ'
  watt-hours='1.65 ~ 4.07 Wh'
  gasoline='0.04 ~ 0.09 tsp'
%} to generate an image, you might think that you should Google existing images instead!

[According to Google][Google: Powering a Google Search], a Google search in 2009 took about {% include energy-units.html
  joules='??? J'
  watt-hours='0.3 Wh'
  gasoline='??? tsp'
%} of energy.
[A 2019 article by Full Fact][Full Fact: How energy intensive is a Google search?] discusses a claim by The Times that a single Google search takes enough energy to "power a low-energy light bulb for an hour", which the article then goes on to interpret as about {% include energy-units.html
  joules='36 kJ'
  watt-hours='10 Wh'
  gasoline='0.23 tsp'
%}.

Assuming that all the fancy info cards and such increased the energy usage since 2009, I'll go with the higher figure. I'll also ignore the [AI Overview bullshit][Google is Smart] for now.

So assuming you go directly to images.google.com and search from there and that uses **{% include energy-units.html
  joules='36 kJ'
  watt-hours='10 Wh'
  gasoline='0.23 tsp'
%}**, and it takes you 1 minute to find the image you want and you don't have to do a second search, and you're using that iMac from earlier which uses {% include energy-units.html
  joules='9.65 kJ'
  watt-hours='2.68 Wh'
  gasoline='0.06 tsp'
%} per hour (**{% include energy-units.html
  joules='160 J'
  watt-hours='44.67 mWh'
  gasoline='296 µL'
%}** per minute), and you're _really_ hammering in that search query which uses {% include energy-units.html
  joules='4.19 KJ'
  watt-hours='1.16 Wh'
  gasoline='0.03 tsp'
%}, and you're using Magical Internet that takes zero energy to transmit data:

<figure class="energy-usage card">
    <b>{% include energy-units.html
      joules='40.35 kJ'
      watt-hours='11.21 Wh'
      gasoline='0.32 tsp'
    %}</b>
    <figcaption role="aside" class="specifier">to find 1 image on Google</figcaption>
</figure>

Which, when compared to generating **8** images taking _at most_ {% include energy-units.html
  joules='14.66 KJ'
  watt-hours='4.07 Wh'
  gasoline='0.09 tsp'
%}:

<figure class="big energy-usage card">
    <span class="specifier">Googling takes at least</span>
    <b>2.8×</b>
    <span class="specifier">more energy than image generators</span>
    <aside>Googling 1 image vs generating <strong>8</strong> images</aside>
</figure>

That means the energy it takes to google 1 image could generate **~22 images!**

Nowhere near the difference we saw with comparing to Fortnite, but we all expected that a single Google search takes less energy than 1hr of Fortnite gaming.



# For comparison

To wrap up this article, let's take a look at some more things that are measured in Gigajoules:



<div class="flex-row flex-wrap">
  <figure class="energy-usage card">
      <!--
      commute: 42mi/d
      57.5~75.0 kWh battery, 272~333-mile range = 0.2114~0.2252 kWh/mi = 7.991~8.514 GJ/yr commute
      -->
      <b>{% include energy-units.html
        joules='8.0 ~ 8.5 GJ'
        watt-hours='???'
        gasoline='???'
      %}</b>
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
    <b>{% include energy-units.html
      joules='~100 GJ'
      watt-hours='~28 MWh'
      gasoline='~825 gallons'
    %}</b>
      <figcaption role="aside" class="specifier">avg. yearly house energy usage</figcaption>
  </figure>

  <!-- <figure class="energy-usage card">
      <!--
      (25000sqft * 2.5 Wh) / 100 tenants = Venture X energy usage per tenant
      = 625 Wh / tenant
      -- >
      <b>TODO GJ</b>
      <figcaption role="aside" class="specifier">avg. yearly office energy usage per person</figcaption>
  </figure> -->

  <figure class="energy-usage card">
    <b>{% include energy-units.html
      joules='1.5 GJ'
      watt-hours='416.67 kWh'
      gasoline='12.36 gallons'
      %}</b>
    <figcaption role="aside" class="specifier">
      <p>avg. yearly 6-can microfridge energy usage</p>
      <p>(about the same as a full-size kitchen fridge)</p>
    </figcaption>
  </figure>
  
  <figure class="energy-usage card">
    <b>{% include energy-units.html
      joules='TODO'
      watt-hours='???'
      gasoline='???'
    %}</b>
      <figcaption role="aside" class="specifier">Driving a Hummer HEV for 1 year</figcaption>
  </figure>
</div>


<aside markdown=1>
Sources: [Tesla Model 3 stats], TODO, [Household energy usage], the sticker on the back of a Frigidaire EFMIS129
</aside>







[DALL-E]: https://en.wikipedia.org/wiki/DALL-E
[Stable Diffusion]: https://en.wikipedia.org/wiki/Stable_Diffusion
[Power Hungry Processing: Watts Driving the Cost of AI Deployment?]: https://arxiv.org/pdf/2311.16863

[Forbes: Top 10 Best-Selling Smartphones 2024]: https://www.forbes.com/sites/johnkoetsier/2024/05/06/global-top-10-best-selling-smartphones-all-from-apple-samsung/
[Insider Monkey: 15 Best Selling Laptops in 2023]: https://www.insidermonkey.com/blog/15-best-selling-laptops-in-2023-1233696/
[PCMag: The Best Gaming PCs for 2024]: https://www.pcmag.com/picks/the-best-gaming-desktops

[Qualcomm: Snapdragon 8 Gen 3 Mobile Platform]: https://www.qualcomm.com/products/mobile/snapdragon/smartphones/snapdragon-8-series-mobile-platforms/snapdragon-8-gen-3-mobile-platform
[CPU-Monkey: Apple A17 Pro]: https://www.cpu-monkey.com/en/cpu-apple_a17_pro
[Notebookcheck: iPhone 15 Pro]: https://www.notebookcheck.net/Apple-iPhone-15-Pro-smartphone-in-review-High-end-phone-as-a-replacement-for-the-PlayStation.761070.0.html
[Notebookcheck: AMD Ryzen 3 7320U]: https://www.notebookcheck.net/AMD-Ryzen-3-7320U-Processor-Benchmarks-and-Specs.654997.0.html
[Notebookcheck: AMD Radeon 610M]: https://www.notebookcheck.net/AMD-Radeon-610M-GPU-Benchmarks-and-Specs.654293.0.html
[Notebookcheck: MacBook Air M1]: https://www.notebookcheck.net/Apple-MacBook-Air-2020-M1-Entry-Review-Apple-M1-CPU-humbles-Intel-and-AMD.508057.0.html
[Notebookcheck: Intel Core i9 14900K]: https://www.notebookcheck.net/Intel-Core-i9-14900K-Processor-Benchmarks-and-Specs.790504.0.html
[Notebookcheck: Nvidia RTX 4090]: https://www.notebookcheck.net/NVIDIA-GeForce-RTX-4090-GPU-Benchmarks-and-Specs.674574.0.html
[Notebookcheck: Apple M4]: https://www.notebookcheck.net/M4-8-cores-vs-M4-10-cores_18018_17538.247596.0.html
[Nvidia: RTX 4090 specs]: https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/
[Wikipedia: Apple M4]: https://en.wikipedia.org/wiki/Apple_M4
[Geeky Gadgets: AMD Ryzen 3 7320U]: https://www.geeky-gadgets.com/amd-ryzen-7320u-review/

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
[Desktop computer energy usage]: https://sustainability.stackexchange.com/questions/5600/how-much-power-does-an-idle-pc-use


[Google: Powering a Google Search]: https://googleblog.blogspot.com/2009/01/powering-google-search.html
[Full Fact: How energy intensive is a Google search?]: https://fullfact.org/environment/google-search/
[Google is Smart]: https://t.me/s/googleissmart