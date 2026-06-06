---
id: making-of-streakdial
title: Turning a Streak Counter into a Fidget Toy: 〈Streak Dial〉
date: Apr 5, 2026
category: Making Story
description: "The creation story of Streak Dial, a tactile fidget app inspired by analog audio equipment and Dieter Rams' minimalist design philosophy."
---

To be honest, 〈Streak Dial〉 wasn't a project that started with a grand 'I must build this' mission. Instead, it grew from a simple search for something light and manageable to develop as an app.

<img src="/assets/fs/fs1.jpg">
<figcaption>Fidget Spinner</figcaption>
&nbsp;

The first thing that crossed my mind was a 'fidget spinner'. However, I soon discovered that the market was already flooded with countless fidget spinner apps. Still, the simple mechanical appeal of a fidget toy felt attractive. As I continued brainstorming, I suddenly remembered the 'Jog Dial' I loved as a kid.

<img src="/assets/fs/fs2.jpg">
<figcaption>Audio equipment with multiple dials</figcaption>
&nbsp;

I recalled those infinitely rotating dials on old audio equipment. I wondered what it would be like to create a toy app with that same 'tactile feel'—something you actually turn yourself, rather than just flicking with a finger.
&nbsp;

&nbsp; 

## Balancing Simplicity and Charm

Since the structure was so simple, implementing the core mechanics wasn't particularly difficult. The real challenge was the design. Initially, I leaned toward my usual minimalist style, but I soon realized that a simple function paired with a bare-bones design wouldn't be enough to make the product stand out. So, I decided to lean heavily into the visuals. When I thought of high-quality design for a minimalist product, 'Dieter Rams(1932~)' immediately came to mind.

<img src="/assets/fs/sd_04.jpg">
&nbsp;
Taking inspiration from his work, I aimed for a design where you could almost feel the 'physicality' of the object through the screen. The fact that this was a style I’d never have the chance to explore at my day job also fueled my motivation. I poured a lot of effort into it, though as always, things didn't turn out quite as perfectly as planned.

<img src="/assets/fs/fs3.jpg">
&nbsp;
I added textures to the background to give it a metallic feel and expressed subtle highlights on the edges to simulate light reflection. I also added small details, like LEDs that appear to turn on and off when you tap the buttons.
&nbsp;

&nbsp; 

## Hitting the Limits of SVG

During the development process, I hit an unexpected snag. I had obsessively created all assets as SVGs, only to find that 'Flutter' doesn't render them perfectly. Specifically, shadow effects were the problem.

<img src="/assets/fs/fs4.jpg">
&nbsp;
According to my original plan, the LEDs were supposed to have a soft, diffused glow when turned on, but there was no straightforward way to implement that. (While not impossible, it would have required a disproportionate amount of extra work.) In the end, I had to settle for a 'feeling' of light by using thick strokes and gradients. Since the LEDs are small, it wasn't too noticeable, but the issue was much more apparent on the larger switches in the settings tab. It’s a bit disappointing that the graphics I worked so hard on ended up looking a little 'fake'.
&nbsp;

&nbsp; 

## Crafting the Analog Gauge

<img src="/assets/fs/fs5.jpg">

The part that gave me the most trouble—due to my own technical limitations rather than software constraints—was the analog-style gauge at the top of the app. It looked simple enough to code from scratch, but I just couldn't get it to work as intended. Eventually, I had to use a bit of a cheat. I drew the gauge plate as a static image and layered the scrolling numbers on top of it. If you look closely at the app, you’ll notice that the red centerline is actually tucked underneath the numbers.
&nbsp;

&nbsp; 

## Final Thoughts

〈Streak Dial〉 is a deeply meaningful project for me because it’s the first app I’ve taken from initial concept to full completion. Although there are definitely things I’d improve in both design and function, the specific satisfaction of 'turning' the dial is exactly what I hoped for. I’m looking forward to seeing how users react and continuing to refine it.
&nbsp;

&nbsp; 
<hr>
<br>

〈Streak Dial〉 Download Link ⬇️

<a href="https://apps.apple.com/kr/app/streak-dial/id6760454698?l=en-GB" target="_blank" rel="noopener noreferrer" class="store-badge-link">
  <img src="/assets/dl.png" alt="Download on the App Store" class="store-badge" />
</a>

&nbsp; 
<hr>
<br>

## Don’t miss the next post.

· <a href="https://hacokebu.com/rss.xml" target="_blank">Subscribe via RSS</a>