---
id: making-of-snapdock
title: Redefining Camera UX with Multi-Shutter: 〈SNAP DOCK〉
date: June 3, 2026
category: Making Story
description: "How I built a utility camera app that eliminates post-capture sorting by mapping dedicated folder shutters directly to pre-selected native photo albums."
---

## The Beginning

The initial concept crossed my mind a long time ago, but I ended up shelving it for years. Back then, I didn't possess the technical chops to even consider building and launching a native mobile app myself.

Years later, after teaching myself mobile development, the idea resurfaced during a completely mundane moment: I was snapping pictures of book pages and realized how annoying it was to sort them later.

*"Why do we have to capture first and sort later?"*

Modern smartphone cameras collect every photo in one place first and expect users to organize them later. My idea was to reverse that workflow: let users choose the target album before they take a photo, so each photo is automatically organized at the moment of capture and no manual sorting is needed afterward.

The interaction model was incredibly straightforward: swap out the single shutter button for a series of dedicated, album-mapped shutters.
&nbsp;

&nbsp; 

## Prototype & Layout Definition

As soon as the user flow was mapped out, I spun up a rough prototype. Since I was building the project in Flutter, I was initially worried about running into native hardware permission bottlenecks or complex camera controller lifecycle bugs, but the setup went relatively smoothly.

With the core functional proof-of-concept validated, I moved into high-fidelity UI refinement. This phase introduced several UX challenges: defining photo-to-video mode transitions, optimizing the shutter grid layout, and keeping on-screen camera controls clean.

First, I needed to define the structural bounds of the multi-shutter interface. The core question was determining the absolute maximum number of concurrent shutters a user could interact with on a single screen without destroying cognitive clarity. After continuous layout testing, I concluded that six was the optimal threshold for mobile viewports.

<img src="/assets/snapdock/snap01.jpg">
<figcaption>Shutter Buttons: Default (Left), Active State (Right)</figcaption>
&nbsp;

I designed the shutter buttons using a physical "folder tab" metaphor, animating them to look like a folder closing shut whenever pressed. I also experimented with color-coding the tabs to make identification frictionless, but flooding the screen with saturated solids completely ruined the aesthetic. It clashed heavily with the weighted, minimalist design language I prefer. As a compromise, I appended a tiny, understated color chip to the corner of each folder. While it subtly reduced immediate visual distinction, it was the best design trade-off to protect the app’s overall visual cohesion.
&nbsp;

&nbsp; 

## Video Capture Architecture

Designing the video capture state came with its own set of UX dilemmas. Once a user pressed a specific shutter to initiate recording, should the remaining shutters immediately disable? If so, where and how should the elapsed recording timestamp be displayed?

<img src="/assets/snapdock/snap02.jpg">
<figcaption>Video Recording UI</figcaption>
&nbsp;

Ultimately, I decided to clear the entire canvas the moment video recording starts, wiping away all peripheral shutters to display only a standalone stop button and a prominent recording timer. I realized that eliminating all environmental cognitive clutter while a recording is active delivers a vastly superior, bulletproof user experience.
&nbsp;

&nbsp; 

## Monetization Strategy

For various reasons, I currently have no plans to convert this into a paid product, meaning I’m relying entirely on ad integrations to offset baseline operational costs. However, this specific app architecture is incredibly hostile to traditional ad placements. Structurally, it’s a premium utility that screams for a one-time upfront purchase.

Dropping a full-screen interstitial ad right after a user snaps a couple of photos is completely unacceptable from a UX standpoint (I refuse to ship a product that treats users that way). Aside from that, there aren't many high-traffic ad slots available. Right now, Snap Dock only triggers an ad when a user completely purges a custom album link. It’s an ad strategy designed to make absolutely no money. But since I build these products primarily for my own creative satisfaction, the last thing I want to do is compromise the UX with aggressive, low-tier monetization networks. Honestly, seeing people discover the utility and use it daily is the real ROI.
&nbsp;

&nbsp; 

## App Icon & Naming Nuisances

<img src="/assets/snapdock/snap04.jpg">
<figcaption>Early Iterations (Left) / Final Icon Design (Right)</figcaption>
&nbsp;

When drafting the app icon, I went through endless iterations trying to synthesize a "folder" silhouette with a "camera lens" element. The bottleneck was that whenever the folder shape became too literal, it created an awkward visual friction when paired with the camera lens geometry. Finding a fluid graphic middle ground was incredibly difficult, and I eventually compromised on the current iteration. While I love the clean render, I’m still not entirely convinced it accurately synthesizes the app's core utility, which is something I'm continuously iterating on.

Settling on a product name was another chaotic process. My initial frontrunner was *Hole In One*. Conceptually, I loved the idea of dropping an asset into its target container on the very first shot, but from an objective marketing standpoint, it sounded far too much like a golf app.

After cycling through dozens of combinations of keywords like *photo, snap, shoot, box, dock,* and *folder*, I finally landed on *SNAP DOCK*. It might compromise a tiny bit on immediate functional description, but it’s punchy and memorable. Naming products never gets easier. I remember venting about this exact bottleneck in previous project breakdowns; it's especially tough for utility software, where clear positioning and instant functional clarity are everything.
&nbsp;

&nbsp; 

## User Feedback & Rapid Iteration

In the v1.0 release, I limited the architecture so users could only generate new albums manually inside the app. I completely overlooked a critical user behavior: users would naturally want to link shutters directly to their pre-existing system photo albums.

Sure enough, immediately post-launch, I received direct user feedback requesting support for native album integration. As a temporary workaround, I informed users they could simply create an in-app shutter matching the exact string name of their existing native album, but deep down, I knew that was bad UX. The app should have natively pulled the system album directory from day one.

I immediately refactored the permission and directory mapping logic and pushed an update to App Store Connect. To my surprise, Apple approved the build and cleared it for release within 24 hours.
&nbsp;

&nbsp; 

## Wrapping Up

Personally, this is the most polished product I've built to date, and it’s the one app I confidently recommend to anyone in my network.

I was also incredibly fortunate to have Snap Dock featured in *What The App*, a prominent digital newsletter that curates standout indie software weekly. A specific excerpt from the editor's review really stuck with me:

> "I love apps that are lean, focused, and hyper-specific. I’m naturally drawn to products that I can integrate into my daily routine because they solve a familiar friction point in a completely novel way. In that regard, SNAP DOCK checks every single box for what makes an exceptional application."

<img src="/assets/snapdock/snap05.jpg">
<figcaption>What The App Feature Feature</figcaption>
&nbsp;

Reading that was incredibly validating. It proved that the hyper-focused, "sharp" utility angle I worked so hard to preserve resonated perfectly with an audience. It's a highly functional tool built with care, and I hope it finds a permanent spot on your home screen.

&nbsp;
<video
src="/assets/snapdock/snapdock.mp4"
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

〈SNAP DOCK〉 Download Link

<a href="https://apple.co/4tZCy6W" target="_blank" rel="noopener noreferrer" class="store-badge-link">
  <img src="/assets/dl.png" alt="Download on the App Store" class="store-badge" />
</a>

&nbsp; 
<hr>
<br>

## Don’t miss the next post.

· <a href="https://hacokebu.com/rss.xml" target="_blank">Subscribe via RSS</a>

