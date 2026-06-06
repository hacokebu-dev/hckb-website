---
id: making-of-sleepbible
title: Building a Bible App for Insomniacs: 〈Sleep Bible〉
date: May 29, 2026
category: Making Story
description: "How my personal battle with insomnia led me to build a Bible app designed for reading and sleep induction rather than religious practice, focusing on UX features like auto-scroll."
---

## The Beginning

<img src="/assets/sleepbible/insomnia.jpg">
&nbsp;

I once battled chronic insomnia for nearly a year. While I had occasionally spent sleepless nights here and there, facing such a prolonged period of sleeplessness was a completely new and exhausting experience.

I tried almost everything you can do without a doctor's prescription—from straightforward lifestyle fixes like heavy exercise and a nightcap, to sleep supplements and over-the-counter sleep aids. Unfortunately, none of them delivered the relief I was looking for.

Reading the Bible was just another one of those desperate attempts.

To be fair, reading the Bible didn't cure my insomnia. However, I distinctly felt that the cognitive act of reading it had a grounding, calming effect on my mind. For context, I am not a religious person. If I could have easily read Buddhist scriptures, I would have gladly given them a try, but they were far less accessible than the Bible. So, the Bible became my text of choice.
&nbsp;

&nbsp; 

## The Bible App Dilemma

While more accessible than other ancient texts, the Bible was still incredibly frustrating to read on a phone. Existing Bible apps are fundamentally optimized for religious activities and devotionals. Because of this, they completely lack basic convenience features tailored for continuous, immersive *reading*.

I wasn't looking for anything revolutionary. I just wanted standard e-reader features: light and dark modes, adjustable font sizes, customizable page-turn directions, and an auto-scroll option. None of the mainstream Bible apps offered these. Out of pure necessity, I sucked it up and dealt with the clunky UX for a while.

Later down the road, as I began developing my own apps, those frustrating late-night reading sessions came rushing back to memory. I realized there must be other people out there using the Bible the same way I did, and I decided to build a solution to fix this specific friction point.
&nbsp;

&nbsp; 

## Feature Set

I built the core reading experience around three distinct modules: "Pick & Read," "Continuous Read," and "Random Read." This layout was intentionally tailored for secular readers. I figured that for non-religious users, even knowing where to start in a massive compilation of texts can be incredibly daunting. Early on, I included a "Read from the Beginning" option, but I dropped it because it offered zero utility after the initial launch.

<img src="/assets/sleepbible/sb03.jpg">
<figcaption>Scraps</figcaption>
&nbsp;

I went back and forth on the "bookmarking" feature until the very last minute. It technically runs counter to the app's singular goal—getting the user to fall asleep while reading. Ultimately, I threw it in because of my own user behavior; every now and then, you stumble across a verse that resonates deeply, and you just want a quick way to save it.
&nbsp;

&nbsp; 

## The Visuals

<img src="/assets/sleepbible/sb01.jpg">
<figcaption>Main Screen</figcaption>
&nbsp;

For the app icon and the dashboard background, I went with a midnight cloud aesthetic. My first iteration featured a sky densely packed with stars, but the high-contrast speckles felt too visually stimulating for a sleep app. I toned down the brightness of the stars and filled the negative space with soft cloud illustrations to create a more soothing atmosphere.

From a pure design standpoint, it isn’t my absolute favorite project. My main focus here was simply stripping away complexity so that users of any age could navigate it intuitively. 

To keep the lights on, I integrated interstitial ads, but I strictly limited them to trigger only when a user modifies their reading configurations. Since users rarely touch their layout preferences once they set them up, this monetization model brings in virtually zero revenue. Even so, because this project was born out of my own physical exhaustion, I couldn't bring myself to disrupt users going through that same pain with aggressive, intrusive ad placements.
&nbsp;

&nbsp; 

## Localization

<img src="/assets/sleepbible/sb02.jpg">
<figcaption>Language Settings</figcaption>
&nbsp;

At launch, the app only supported Korean and English. Predictably, the initial wave of downloads came almost entirely from South Korea and North America.

Then, a thought crossed my mind: if I expanded the list of supported languages, would the download volume scale proportionally?

Driven by that hypothesis, I localized the app into Spanish, Chinese, Portuguese, French, German, Indonesian, and Russian Bibles. Unfortunately, the localized expansion didn't yield the massive spike in global traffic I had anticipated.

Furthermore, I rely on LLMs to handle the UI and asset localization. While I can reliably cross-check the English translations myself, I have no way of verifying the linguistic nuances of the other languages. I can only cross my fingers and hope the AI did its job accurately.
&nbsp;

&nbsp; 

## Wrapping Up

〈Sleep Bible〉 is a direct byproduct of a very personal pain point and a highly specific user need.

While it didn’t magically cure my insomnia, it succeeded in giving me a tool to quiet my racing thoughts before bed. And I built it with the hope that it might do the exact same thing for someone else.

I hope this app can bring at least a little more comfort and peace to your nights.

&nbsp;
<video
src="/assets/sleepbible/sleepbible.mp4"
autoplay
muted
loop
playsinline
preload="metadata"
style="width: 100%; height: auto;"
aria-label="dice">
</video>
&nbsp; 
<hr>
<br>

〈Sleep Bible〉 Download Link

<a href="https://apple.co/3PNRvLA" target="_blank" rel="noopener noreferrer" class="store-badge-link">
  <img src="/assets/dl.png" alt="Download on the App Store" class="store-badge" />
</a>

&nbsp; 
<hr>
<br>

## Don’t miss the next post.

· <a href="https://hacokebu.com/rss.xml" target="_blank">Subscribe via RSS</a>
