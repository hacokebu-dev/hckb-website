---
id: making-of-breatheboy
title: Implementing RealityKit 3D UI for a Breath Timer: 〈Breathe Boy〉
date: Jun 5, 2026
category: Making Story
description: "How I harnessed Apple's RealityKit to build a Game Boy-inspired hardware interface with true 3D physical push-buttons, blending a breath trainer with nostalgic retro mini-games."
---

## The Beginning

I wanted to build a handheld console app. A vintage pocket console packed with a library of casual mini-games—and more importantly, "real" buttons. Buttons that physically depressed into the housing when tapped.

Through building my previous apps like 〈Streak Dial〉, 〈Decibel Master X〉, and 〈Lie Detector 3.0〉, I had logged dozens of hours simulating skeuomorphic physical hardware. While my rendering techniques had steadily matured, digital vectors can only get you so far before hitting a ceiling of artificiality. I realized the missing link to true physical realism was dynamic interaction with **light**. Static graphics feature static highlights and drop-shadows, which immediately betrays them as 2D trickery.

<video
src="/assets/breatheboy/apple.mp4"
autoplay
muted
loop
playsinline
preload="metadata"
style="width: 100%; height: auto;"
aria-label="dice">
</video>
<div class="space-16"></div>
<figcaption>© APPLE</figcaption>
&nbsp;

Take a look at the Liquid Glass interface framework introduced in iOS 26. As you tilt the hardware device in your hand, the specular highlights along the icon edges shift dynamically in real time. The system is programmatically recalculating reflectivity vectors on the fly by tapping into gyroscope and accelerometer sensor matrices. I wanted to adapt this exact concept to engineer an authentic sense of material depth and tactile presence.
&nbsp;

&nbsp;

## The Technical Hurdle

In production, simulating dynamic 2D environmental lighting turned out to be incredibly brutal. Frustrated by the limitations, I shifted strategies: rather than faking 3D depth in a 2D space, I decided to mount actual **3D mesh models** into the UI layer. When I looked up engineering documentation, however, I hit a massive wall. It seemed like absolutely no one in the developer community was using native 3D runtimes for basic app control components.

Theoretically, though, the technical architecture supported it. Apple ships its own high-performance, native 3D engine called RealityKit. I figured as long as I could handle the viewport rendering without tanking the main thread framerate, I could map tap gestures to mesh animations.

<img src="/assets/breatheboy/breathe01.jpg">
<figcaption>Key Modeling & Mesh Inspection</figcaption>
&nbsp;

Fortunately, my initial test USDZ assets compiled and initialized within the runtime flawlessly. I originally attempted to import highly complex, detailed hardware chassis models, but the layout engine kept throwing rendering artifacts. To optimize performance, I stripped out the excess geometry and pivoted to an ultra-clean, minimalist button design.

Once the meshes were optimized, controlling their travel distance, translation vectors, and directional axes was just a matter of working through some confusing coordinate math. Ultimately, the buttons reacted exactly as intended.
&nbsp;

&nbsp;

## Engineering Compromises

My main engineering regret lies within the spatial anchor point of the directional D-pad. Because the pivot point is locked dead-center on the global bounding box, the tilting kinematics look a bit rigid when a user presses the edge vectors. I spent days trying to override the transform matrix programmatically to dynamically offset the pivot point based on touch coordinates, but the calculation kept breaking. I eventually had to make a product compromise and ship it as-is. I hate compromising on product finish, but solo development forces you to pick your battles.

<video
src="/assets/breatheboy/pad.mp4"
autoplay
muted
loop
playsinline
preload="metadata"
style="width: 100%; height: auto;"
aria-label="dice">
</video>
<div class="space-16"></div>
<figcaption>Gamepad Mechanical Key Testing</figcaption>
&nbsp;

Despite the math headaches, I successfully shipped a stable, working Game Boy-style prototype driven by native 3D hardware components. Watching a virtual plastic button physically depress with real-time shadow casting inside an app viewport was an incredibly rewarding milestone.
&nbsp;

&nbsp;

## The Product Pivot

With the physical interface engine fully functional, I hit an ironic roadblock: I didn't actually have a game ready to run on it. I had been so obsessed with building the *handheld console interface* that I completely neglected the software library.

I started digging through my old product ideation notebooks and pulled out a concept I'd jotted down months prior: a curated "Breath Timer."

When auditing what kind of digital experience would feel most satisfying to control via physical, rhythmic button pressing, a wellness timer stood out. It was low-friction, highly interactive, and functionally intuitive.

I researched established, clinically validated breathing techniques and integrated them into the app engine. I mapped out the UI states so that starting, pausing, and ending a breathing cycle felt like operating a piece of tactile consumer electronics. To drive long-term retention, I also baked in a standard daily "Streak" tracking mechanism.

Lastly, since the app looked exactly like a retro gaming rig, leaving it without a single video game felt like a missed opportunity. I cloned the classic offline Google Chrome dinosaur game, tweaked the mechanics to support double-jumping, and hooked it up to the 3D controls. I bundled that with a casual brick-breaker clone and a couple of other lightweight arcade mechanics to give the console a proper, balanced feature set.
&nbsp;

&nbsp;

## UX-First Monetization

When designing the monetization funnel, I realized that flashing a forced interstitial ad in front of someone opening an app specifically to calm down and manage their anxiety was completely hostile product design. Because of that, the entire breathing trainer workflow is 100% ad-free, regardless of session length.

Instead, I locked the monetization gate behind content expansion. While the core breathing exercises are completely open, premium breathing techniques and bonus arcade mini-games require users to watch a single rewarded video ad to unlock them.

From a business perspective, this ad layout imposes a strict ceiling on lifetime value (LTV) unless I continuously scale the asset content matrix. Even then, the revenue scale isn't dramatic. Ultimately, I accepted that reality. In ad-supported monetization models, driving revenue simply requires a massive distribution footprint, and I was okay prioritizing the user experience over immediate conversion optimization.
&nbsp;

&nbsp;

## Wrapping Up

Given how much engineering effort went into shipping this native 3D UI framework, I have no intention of leaving it locked inside a single wellness application. The architecture is highly modular, and I plan to aggressively reuse this 3D push-button setup for future products—whether that’s a dedicated retro arcade compilation or an entirely separate utility app.

Whether you're looking for a clean, grounding breath trainer to quiet your mind or you just want to experience the pure tactile satisfaction of clicking physics-based 3D buttons inside a mobile layout, please download it and give it a try.

&nbsp;
<video
src="/assets/breatheboy/bb.mp4"
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

〈Breathe Boy〉 Download Link

<a href="https://apple.co/4xcY3Ei" target="_blank" rel="noopener noreferrer" class="store-badge-link">
  <img src="/assets/dl.png" alt="Download on the App Store" class="store-badge" />
</a>

&nbsp; 
<hr>
<br>

## Don’t miss the next post.

· <a href="https://hacokebu.com/rss.xml" target="_blank">Subscribe via RSS</a>

