---
id: making-of-link
title: Creating a Custom Link-in-Bio Service: 〈Link〉
date: June 2, 2026
category: Making Story
description: "Overcoming the design limitations of off-the-shelf platforms by building a bespoke 'Link in Bio' page featuring a grid layout for app icons and a device-framed responsive interface."
---

## The Beginning

I initially built this website to showcase my portfolio and side projects. However, procrastinating on content updates quickly left the site in an awkward, stagnant state. (Granted, the real fix would have been updating the actual content...) Ultimately, I realized I needed a lightweight "Link in Bio" landing page—a centralized hub where visitors could scan all my active project links at a single glance. Even if it lacked deep-dive project breakdowns, it was critical to show the world exactly what I’ve built and shipped.  
&nbsp;

## Market Research & Competitor Analysis

Link-in-bio tools are essential for social platforms like Instagram or X (Twitter), where bios are strictly limited to a single external hyperlink. In the product discovery phase, I audited the market leaders—Linktree globally and Litly domestically in South Korea. While both are incredibly robust, mature products, they felt ill-suited for my specific needs for a few key reasons.

<img src="/assets/link/link02.jpg">
<figcaption>Linktree (Left) / Litly (Right)</figcaption>
&nbsp;

Purely from a UI/UX standpoint, I realized I’d be happier just shipping my own frontend. To be clear, for mainstream users who require robust analytics pipelines, CRM integrations, or monetization funnels, off-the-shelf SaaS solutions are undoubtedly the way to go. But my specification sheet didn't require any of those features. My absolute highest priority was total creative control over a highly polished, bespoke layout. So, true to form, I decided to build it from scratch.  
&nbsp;

## The Design

Structurally, I intentionally mirrored the familiar mental models of mainstream link-in-bio services. I wanted zero friction or cognitive load when users landed on the page, and honestly, I didn't have a radically disruptive layout alternative in mind. For the desktop web viewport, I wrapped the interface in a device frame simulation to mimic a mobile screen, complete with a sticky QR code on the side for seamless cross-device handoff to mobile.

<img src="/assets/link/link01.jpg">
<figcaption>Link Interface Layout</figcaption>
&nbsp;

At the top of the viewport, I placed sharing and email buttons, styled with a faux liquid-glass morphic effect. I originally wanted to build a fully interactive, programmatically simulated liquid shader, but given the development timeline, I settled on a static visual mockup. Even as a pure graphic treatment, it looks remarkably sharp.

The hero section relies on the same core identity as my primary Haco & Kebu website, since that visual language still works best for my personal brand.

Directly below the fold, I built a large, tile-based grid layout to display my shipped mobile apps. For mobile products, leveraging recognizable, high-fidelity app icons is infinitely more intuitive than burying the user in long-form text blocks. Ironically, this specific icon-grid presentation was practically impossible to configure natively within existing Linktree-style platforms—making it the primary catalyst for writing my own codebase.

To clean up the platform fragmentation, I used a segmented control bar to toggle between iOS and Android. Since I only have two apps live on the Google Play Store anyway, it didn't make sense to compromise the primary interface to force-fit a unified display. The rest of the page cascades logically into a clean directory of web project hyperlinks, followed by a footer of social media channels.

Of course, actually publishing content to those social channels is another story—I keep telling myself I'll start next week. As always, execution is the hardest bottleneck.
&nbsp;

&nbsp;

## Wrapping Up

For a lightweight project that I spun up and shipped in record time, it’s serving its purpose beautifully. Most importantly, it completely eliminates the psychological friction of content management. Whenever I ship a new app to production, appending it to this clean file layout takes seconds.

Even when I eventually get around to refactoring my main portfolio site and breathing life back into its static pages, this hyper-focused link directory will maintain a permanent, useful role in my product ecosystem.

&nbsp;
<video
src="/assets/link/ll.mp4"
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

〈Link〉 Link

· https://<a href="https://link.hacokebu.com/" target="_blank">link.hacokebu.com</a>

&nbsp; 
<hr>
<br>

## Don’t miss the next post.

· <a href="https://hacokebu.com/rss.xml" target="_blank">Subscribe via RSS</a>
