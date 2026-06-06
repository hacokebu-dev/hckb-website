---
id: making-of-dmx
title: Recreating an Analog Sound Level Meter on iPhone: 〈Decibel Master X〉
date: May 25, 2026
category: Making Story
description: "An experiment in validation—attempting to differentiate a generic prank app in a saturated market using dynamic UI shaders, and the takeaways from its performance."
---

## The Beginning

After launching my fidget toy app, 〈<a href="/ko/project/streak-dial" target="_blank">Streak Dial</a>〉, I found myself wanting to dive right back into a similar design aesthetic. To be honest, I felt like I had left some unfinished business on the table with Streak Dial's visual execution.

Streak Dial was my very first end-to-end solo app project. Following my usual workflow, I built all the image assets using SVGs. In hindsight, that was a mistake. My previous design projects had always leaned into flat, vector-heavy styles where SVGs excelled. Streak Dial, however, was meant to feel tangible and real. It demanded rich textures, realistic shadows, and complex gradients—areas where SVGs notoriously struggle, especially when rendering certain effects in Flutter. While I tried finding workarounds, the technical limitations were unavoidable, and the app ultimately launched with assets that lacked the crisp, high-fidelity depth I originally envisioned.

Fueled by that learning curve, I wanted to take another shot at building something that felt truly "real." 

For some, starting a project purely for the aesthetics might seem backward. But as a designer, my personal projects rarely stem from a "what feature should I build?" mindset. More often than not, the catalyst is simply: "What kind of visual style do I want to explore?"

Logically, if I was unhappy with Streak Dial, the right move would have been to go back and fix it. But I felt a strong urge to leave it as a milestone of where I was at the time. My creative energy was already pulling me toward something fresh. Following intuition over cold logic is, after all, the best part of working on passion projects.

With that mindset, I went hunting for my next concept and landed on a sound level meter (decibel meter). It felt like the perfect canvas for a tactile, retro-analog aesthetic.

On top of that, looking at the existing decibel meters on the App Store, most of them felt incredibly cookie-cutter. I believed there would be a niche audience looking for a utility app that felt a bit more premium and character-rich. (Granted, looking at the download numbers post-launch, it turns out that audience is *very* niche... 😅)
&nbsp;

&nbsp; 

## The Design

Armed with insights from my previous project, I made the conscious choice to go all-in on PNGs this time around. By exporting assets at high resolutions, I didn't have to worry about crispness on modern mobile displays. To keep the app lightweight, I just made sure to run everything through a rigorous image optimization pipeline.

<img src="/assets/dbx/dbx01.jpg">
<figcaption>Decibel Master X Main Screen</figcaption>
&nbsp;

Leaning into PNGs allowed me to achieve much smoother gradients, realistic lighting, and tactile textures that just weren't possible before. While my execution might still look like a digital imitation of hardware rather than the real thing, I'm quite happy with how the fidelity turned out.

That said, I chose a clean, modern UI direction for the Settings and History pages. Initially, I tried forcing the skeletal, analog hardware aesthetic across the entire app for continuity. But pairing a realistic hardware frame with modern data lists and toggle switches felt incredibly jarring. Realizing that designing custom skeumorphic components for every single sub-menu would be overkill, I decided to stick to a standard, clean mobile UI layout for everything outside the main dashboard.
<img src="/assets/dbx/dbx02.jpg">
<figcaption>Decibel Master X: History (Left), Settings (Right)</figcaption>
&nbsp;
&nbsp;

&nbsp; 

## App Name and Icon

I named the app *Decibel Master X*. I intentionally gave it a slightly retro, almost cheesy 90s-software vibe. My goal was to evoke a sense of straightforward, no-nonsense utility—much like how old-school, utilitarian product names can sometimes project an air of raw expertise and reliability.

Lastly, let's talk about the app icon. During the Streak Dial project, I experimented with a 3D, tactile app icon and really liked the depth it brought to the home screen. I decided to bring that same philosophy over to Decibel Master X.

<img src="/assets/dbx/dbx03.jpg">
<figcaption>Decibel Master X App Icon</figcaption>
&nbsp;

Designing app icons for simple utilities is always a challenge. There isn't a massive brand ecosystem to draw elements from, and boiling a functional tool down to a single minimalist symbol can feel incredibly generic. That's why so many utility icons end up looking identical. I figured a highly detailed, faux-3D design would give it a distinct edge on a crowded home screen. Moving forward, I think I might make this tactile 3D style a signature look for all my utility apps. And just for the record—yes, every single layer of that icon was handcrafted, vector-by-vector, inside Figma.
&nbsp;

&nbsp; 

## Wrapping Up

This project was an incredibly rewarding way to bridge the technical and design gaps left by my previous app. 

I hope you'll download it, give it a spin, and enjoy a small taste of that tactile, analog satisfaction right on your phone.

&nbsp;
<video
src="/assets/dbx/dbx.mp4"
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

〈Decibel Master X〉 Download Link

<a href="https://apple.co/3QbEjAa" target="_blank" rel="noopener noreferrer" class="store-badge-link">
  <img src="/assets/dl.png" alt="Download on the App Store" class="store-badge" />
</a>

&nbsp; 
<hr>
<br>

## Don’t miss the next post.

· <a href="https://hacokebu.com/rss.xml" target="_blank">Subscribe via RSS</a>

