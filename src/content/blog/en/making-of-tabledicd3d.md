---
id: making-of-tabledice3d
title: Simulating Real Dice in 3D: 〈Table Dice 3D〉
date: May 22, 2026
category: Making Story
description: "The development process of Table Dice 3D, a digital dice app focusing on high-quality 3D graphics built with Three.js and Blender."
---

## The Beginning
I previously took a Flutter course for app development. As an assignment, I made a dice app, but because I was focused mainly on functionality, I couldn't pay much attention to the design — something I later came to regret.

<img src="/assets/dice/dice01.jpg">
<figcaption>The dice app I made back then</figcaption>
&nbsp;

Later on, the thought crossed my mind again, so I did some research on dice apps in the App Store. Contrary to my expectation that there would be at least one pretty decent dice app, none of the ones I found had a particularly great design. Of course, there were several that seemed excellent functionally.

Looking at those dice apps with complex features, I wondered if users' needs for a dice app were strictly limited to functionality. However, that wasn't my style. So, I decided to target users looking for a simple digital dice app and make high-quality graphics my competitive edge edge over other apps. At least, I hadn't found one yet.
&nbsp;

&nbsp; 

## Implementation
Although I chose graphic quality as my main weapon, I didn't have a definitive plan. To be honest, it was more of a "I can definitely make it better than those" kind of mindset. Because of that, how to implement 3D was a major dilemma. Initially, game engines came to mind since every 3D app I knew was a game. However, considering the scale of the app and the learning curve, it felt like over-engineering (though I did seriously contemplate using this as an opportunity to learn one).

The next thing that came to mind was Three.js. I had never used it before, but I was well aware of the name because I had seen several stunning websites built with Three.js (<https://threejs.org>). Since Three.js is web-based, I had some doubts about building it as a web app. However, when I built a prototype, it ran quite smoothly, giving me the confidence to move forward with the implementation.

<img src="/assets/dice/dice02.png">
<figcaption>Three.js</figcaption>
&nbsp;

The next challenge was rendering the high-quality dice graphics I wanted. At first, I thought a shape as simple as a die could be drawn purely with code. However, the procedurally generated dice lacked detail, and the absence of textures hurt the visual polish. Therefore, I created a `.glb` modeling file in Blender 3D and used it as an asset.

<img src="/assets/dice/dice03.png">
<figcaption>Dice Modeling</figcaption>
&nbsp;

&nbsp; 

## Design
The functionality of the app is straightforward. All you can do is change the number of dice (1, 2, or 3) and swap the background image.

Since the functionality was simple, I wanted to create a clean, minimalist design. I represented the dice count selection with simple circular icons to keep the UI minimal. and for the settings button, I used a layer icon since I considered changing the background to be the core feature. Additionally, I gave the entire UI generous corner radiuses to elevate the visual refinement. Thanks to this, I believe the design achieved a sleek, clutter-free beauty. Honestly, this kind of design is hard to explore in corporate projects, so the process was incredibly enjoyable.
<img src="/assets/dice/dice04.jpg">
<figcaption>Simplicity</figcaption>
&nbsp;

&nbsp; 

## Performance
Unfortunately, it isn't entirely free of performance issues. When rolling the dice multiple times in rapid succession, there were intermittent moments where the results would occasionally respond with noticeable delays or sudden jumps for unknown reasons. However, since it happens rarely and isn't a fatal flaw, I decided to compromise.
&nbsp;

&nbsp; 

## Advertising
The app is monetized entirely through ads. I didn't think this was the type of app I could sell for a price or monetize with in-app purchases, and ads were also the easiest monetization method to implement(not including ads at all was never an option).

However, choosing when and at what exact moment to display ads was a tricky dilemma. First and foremost, I absolutely did not want to show full-screen interstitial ads every few rolls. If I were playing a board game with friends and an ad popped up after rolling a few times, breaking the flow of the game, it would be incredibly frustrating.

So, I meticulously set it up so that ads only appear when a user explicitly changes an "option." Consequently, no ads pop up mid-game; they only trigger when changing the background theme or adjusting the number of dice to prepare for a game. Truth be told, I debated until the very last minute whether to include an ad when changing the dice count. But fearing that background changes alone wouldn't generate enough ad impressions, I ultimately decided to add it.
&nbsp;

&nbsp; 

## Conclusion
While a few regrets remain, I believe I achieved my goal of "making a dice app with great graphics." Though I haven't researched every single app on the market, I can proudly say that its graphic quality is distinctly superior to the dice apps currently ranking at the top of the App Store.

Also, I didn't realize this before making it, but when you're bored, it's oddly therapeutic to just zone out and roll the dice—it's strangely relaxing to just mindlessly roll the dice for a while." I highly recommend giving it a try.

&nbsp;
<video
src="/assets/dice/dice05.mp4"
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

〈Table Dice 3D〉 Download Link ⬇️

<a href="https://apps.apple.com/us/app/table-dice-3d-realistic-dice/id6760736354" target="_blank" rel="noopener noreferrer" class="store-badge-link">
  <img src="/assets/dl.png" alt="Download on the App Store" class="store-badge" />
</a>

&nbsp; 
<hr>
<br>

## Don’t miss the next post.

· <a href="https://hacokebu.com/rss.xml" target="_blank">Subscribe via RSS</a>

