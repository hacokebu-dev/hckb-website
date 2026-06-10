---
id: making-of-liedetector
title: Testing Market Demand with 〈Lie Detector 3.0〉
date: May 27, 2026
category: Making Story
description: "An experiment in validation—attempting to differentiate a generic prank app in a saturated market using dynamic UI shaders, and the takeaways from its performance."
---

## The Beginning

This app was pure validation testing. For all my previous projects, I went out of my way to bake in a distinct value proposition or unique selling point (USP). For this one, however, I didn’t worry about differentiation at all. To put it bluntly, it's just another generic lie detector app. Granted, I spent a lot of time refining the visuals to meet my personal standards, so you could argue the design itself is a differentiator—but structurally, it's a very standard utility.

The core of this experiment was answering a simple question: "Is there actually organic demand for these types of apps?"

I wanted to see if launching a high-fidelity version of a classic prank app today could still capture a meaningful baseline of downloads, and whether it could generate sustainable ad revenue. That curiosity was the driving force behind the development.
&nbsp;

&nbsp; 

## The Architecture

Since this is a prank app and doesn't actually detect lies, the core logic couldn't be simpler:

User taps scan -> App outputs a randomized result.

When auditing competitor apps during my research, I noticed most of them relied on either voice analysis or fingerprint scanning (simulated, of course) as their primary interaction model. Caught between the two, I decided to just implement both.

I chose "Voice Analysis" as the hero feature. Visually, displaying a dynamic audio waveform that reacts to the user's voice volume felt much more convincing and interactive.
&nbsp;

&nbsp; 

## The Design

I used the design foundation I built for 〈Decibel Master X〉 as my starting point, though the visual direction evolved significantly as I built it out.

The standout technical highlight of this design phase was integrating Shaders.

&nbsp; 
<video
src="/assets/lie/shader.mp4"
autoplay
muted
loop
playsinline
preload="metadata"
style="width: 100%; height: auto;"
aria-label="dice">
</video>
&nbsp; 

The idle scanning screen felt far too static, and I wanted to inject some organic motion. Normally, I would reach for Lottie animations, but the flat, vector aesthetic of Lottie didn't fit the gritty, high-fidelity hardware look I was aiming for. That's when I turned to shaders.

Leveraging a fluid, beautifully rendered shader brought the dashboard to life, giving the app a much more dynamic and premium feel. Due to technical constraints, I couldn't write the custom GLSL code entirely from scratch this time around, but mastering custom shader development is definitely on my roadmap for the next project.
&nbsp;

&nbsp; 

## Naming the App

I deliberately tacked "3.0" onto the end of the app name. I wanted it to look like a mature product that had already been through three major iterations. It was a minor growth-hack tactic to instantly project a sense of product history and reliability. While I can't definitively quantify if it moved the needle, it's a frictionless naming convention that adds a subtle layer of authority right out of the gate.
&nbsp;

&nbsp; 

## Completion

When I passed the finished version of 〈Lie Detector 3.0〉 around to friends and family, their immediate reaction was, "Wait, does this actually work?" Obviously, they were skeptical, but it proved that the UI execution was convincing enough to make them second-guess it. I'd like to think that if it looked like a cheap fake, they wouldn't have even bothered asking.
&nbsp;

&nbsp; 

## The Results

To cut straight to the chase: the experiment was a failure. The app's daily active users and download velocity are tracking completely in line with the generic baseline, and user engagement looks identical to any other low-effort competitor. It made me realize that the sheer volume of these mass-produced apps on the stores isn't a sign of a massive, thriving market—it's likely just because they are incredibly easy to build.

Moving forward, the takeaway is clear: if I'm going to spend the time building a product, it needs to have a true competitive edge and a unique angle, rather than cloning an existing commodity.

&nbsp;
<video
src="/assets/lie/lie05.mp4"
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

<a href="https://apple.co/4uhUqKo" target="_blank" rel="noopener noreferrer" class="store-badge-link">
  <img src="/assets/dl.png" alt="Download on the App Store" class="store-badge" />
</a>

&nbsp; 
<hr>
<br>

## Don’t miss the next post.

· <a href="https://hacokebu.com/rss.xml" target="_blank">Subscribe via RSS</a>

