---
id: making-of-croco
title: The Making of 〈Croco Tooth〉: Designing a Bite-Sized Roulette Game
date: May 23, 2026
category: Making Story
description: "The development journey of Croco Tooth, a bite-sized crocodile roulette game featuring smooth custom tooth layouts and dynamic Figma artwork."
---

I wanted to build a game that was, above all, visually delightful.

But once I started thinking about everything a full-fledged game would require, I immediately felt overwhelmed. I quickly realized handling all the game logic, assets, and design work alone would be too much. I took a step back. That’s when the classic "Crocodile Dentist" toy popped into my head.

<img src="/assets/croco/croco01.jpg">
<figcaption>Crocodile teeth roulette toy</figcaption>
&nbsp;

It felt like the perfect choice. It offered plenty of room for fun, engaging graphics, the development complexity was low, and best of all, everyone already knows how to play it. Of course, that also meant the App Store was already crowded with clones. But I figured if I could sprinkle a bit of my own unique flair into the mix, it could still stand out in its own way.
&nbsp;

&nbsp; 

## Development: Getting the Layout Right

While the game mechanics are about as simple as they get, getting the teeth to sit naturally on the screen took a surprising amount of trial and error.

Since I needed the game to look consistent across a sea of different device sizes, I used the screen's total width as my baseline anchor. From there, I calculated the size of the crocodile's mouth and teeth dynamically using fixed proportions.

<img src="/assets/croco/croco02.jpg">
<figcaption>Calculating the tooth layout</figcaption>
&nbsp;

The trickiest part was the alignment. Because of the anatomy of a crocodile's jaw, the teeth couldn't just sit in a straight horizontal line; they needed to follow a smooth, curved arc. Instead of calculating a proper arc mathematically, I opted for a more pragmatic approach: I fine-tuned and hardcoded the exact y-axis offsets for each individual tooth. 

To add a bit more depth to the otherwise flat, 2D vector graphics, I layered the top half of the crocodile’s face so it subtly overlaps the mouth. It’s a tiny detail, but it gives the final UI a nice, a slight sense of depth.
&nbsp;

&nbsp; 

## Adding Some Tension

A good roulette game needs suspense. To bring that tension to life, I focused on the crocodile's eyes. I used Lottie to create micro-animations of the eyes shifting anxiously toward the teeth, keeping players on their toes.

<img src="/assets/croco/croco03.gif">
<figcaption>The animated eye movements</figcaption>
&nbsp;

When it came to the artwork, the entire design asset library was built in Figma. To be honest, I would have preferred Adobe Illustrator since I’m much more used to it. However, I rarely use Illustrator these days, so I couldn't justify keeping the subscription active. 

As a workaround, I leaned heavily into Figma’s dynamic stroke properties to break up any rigid, mechanical lines. This gave the outlines a hand-drawn, organic feel, resulting in a much cleaner and infinitely cuter aesthetic.

<img src="/assets/croco/croco04.png">
<figcaption>Before and after applying dynamic strokes</figcaption>
&nbsp;

&nbsp; 

## App Icon & ASO Strategy

For the app icon, I decided to go with a vibrant gradient background. Admittedly, if you look at the game's overall color palette, a loud gradient doesn't exactly match the minimal, cozy style of the in-game graphics.

<img src="/assets/croco/croco05.jpg">
<figcaption>The final Croco app icon</figcaption>
&nbsp;

But this was a purely tactical move for the App Store. I wanted the icon to pop. Surrounded by an endless sea of minimalist and muted icons, I hoped a striking gradient would catch a user's eye while scrolling. It was basically a small ASO experiment.
I’m still not sure whether it actually helps, though.
&nbsp;

&nbsp; 

## Wrapping Up

While it’s not a massive, groundbreaking service, It felt satisfying to build exactly what I originally had in mind.

These days, I use it all the time as a casual, fun way to settle minor daily dilemmas or test my luck for the day.

&nbsp;
<video
src="/assets/croco/croco06.mp4"
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

〈Croco Tooth〉 Download Link ⬇️

<a href="https://apps.apple.com/us/app/croco-tooth-roulette-game/id6760696705" target="_blank" rel="noopener noreferrer" class="store-badge-link">
  <img src="/assets/dl.png" alt="Download on the App Store" class="store-badge" />
</a>

&nbsp; 
<hr>
<br>

## Don’t miss the next post.

· <a href="https://hacokebu.com/rss.xml" target="_blank">Subscribe via RSS</a>

