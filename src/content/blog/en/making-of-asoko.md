---
id: making-of-asoko
title: Curating App Store Screenshot References: 〈ASO·KO〉
date: Jun 1, 2026
category: Making Story
description: "How I built a curated repository for domestic App Store screenshot references and survived a sudden viral surge while fiercely defending my free server tiers."
---

## The Beginning

If there is one thing I learned from launching apps, it’s that the App Store submission process is incredibly tedious. I’ve optimized my workflow enough to breeze through it now, but early on, I spent entire days troubleshooting errors and digging through documentation.

Within that production pipeline, designing app screenshots is undeniably the most time-consuming phase. It is the single most critical gatekeeper influencing whether a user hits "Get" or bounces, so you absolutely cannot afford to cut corners.

When I was prepping my first app for launch, my lack of screenshot design experience forced me to scour the store looking for inspiration. 

During that research phase, I discovered a handful of dedicated App Store screenshot reference platforms. To be completely honest, if I hadn't desperately needed them at that exact moment, I probably would have dismissed the concept entirely: *"Why bother? Can't you just look at the App Store directly?"* But being in the user's shoes made me realize they serve a completely different purpose.

The core value proposition of these reference sites is **curation**. Hunting for high-quality benchmarks by randomly clicking through the App Store is a massive friction point; these platforms aggregate and filter the noise. While I easily found several great platforms showcasing international design benchmarks, there wasn't a single repository focused on the South Korean App Store. I had to manually search and crop everything myself.

Naturally, the thought struck me: *"Why don't I just build one?"* Before I knew it, I was already spinning up the repository.

The product scope was lean, and mapping out the UI hierarchy was straightforward. However, the real engineering bottlenecks caught me completely off guard.
&nbsp;

&nbsp; 

## A Project for a Project

The first roadblock appeared immediately when trying to ingest the screenshots from the App Store. I assumed a simple right-click "Save Image As..." would suffice. Instead, the CDN served up heavily compressed, low-resolution thumbnails that looked nothing like the crisp assets rendered on a device. On top of that, manually archiving assets one by one was completely unscalable.

Before building the frontend, I needed to spin up a "sub-project for the project": an App Store asset downloader.

<img src="/assets/asoko/ak02.jpg">
<figcaption>App Store Asset Downloader</figcaption>
&nbsp;

The premise was simple—input an App Store URL, scrape and parse the underlying source metadata, and programmatically extract the high-resolution app icon and raw screenshot source paths. After working through a few minor edge cases, the scraper worked seamlessly.
&nbsp;

&nbsp; 

## Migrating from Vercel to Cloudinary

For deployment, I naturally went with Vercel. Because it was a lightweight utility, I initially planned to handle all image hosting directly within Vercel's ecosystem. However, as the repository scaled into hundreds of high-resolution images, I hit a massive roadblock: Vercel’s Hobby tier strictly caps image optimization at 1,000 source images per billing cycle. At my rate of ingestion, hitting that ceiling was inevitable.

I started exploring alternative media optimization layers and ultimately landed on Cloudinary. Their free tier offered incredibly generous bandwidth limits, and more importantly, their dynamic, URL-based image transformation and optimization pipelines were exactly what I needed.

With the media layer sorted out, I turned my attention to polishing the core user experience. Here is a breakdown of the quality-of-life features I baked into the UI:
- **Direct Copy-to-Clipboard:** Users can copy any reference image directly from the grid and paste it instantly into design software like Figma.
- **Continuous Horizontal Scrolling:** Optimized mouse-wheel and trackpad behavior so that horizontal screenshot sets scroll smoothly within a vertical feed.
- **Keyboard Navigation:** Full arrow-key accessibility, allowing users to browse and navigate through assets without touching their mouse.
- **Responsive Layouts:** A fluid grid architecture designed to deliver a premium viewing experience across both ultra-wide monitors and mobile viewports.

Once the platform felt polished enough that I'd confidently use it myself, I quietly pushed it live. I didn't exactly have a massive launch strategy anyway.
&nbsp;

&nbsp; 

## Viral Influx on X & The Battle for the Free Tier

I kicked off some low-key promotion and rolled out minor iterative updates based on early user signals—such as adding a visual prompt explaining that users could scroll horizontally within the modal view.

Then, out of nowhere, the unexpected happened. I posted a casual launch announcement on X (Twitter), and the tweet caught a massive wave of virality.

<img src="/assets/asoko/ak01.jpg">
<figcaption>Viral Post on X</figcaption>
&nbsp;

Traffic scaled exponentially within hours. While watching my product gain immediate market validation was an incredible feeling, I couldn't fully celebrate. My eyes were glued to my Cloudinary dashboard, watching the usage metrics spike toward the free tier threshold. If I didn't act fast, the site would either go down or slap me with a massive overage bill—and Cloudinary’s paid tiers are expensive. I needed an immediate optimization strategy to curb consumption on the client side:

1. **Deprecating Infinite Scroll:** I stripped out the automated infinite loading logic and replaced it with a hard limit, hiding deeper content behind a manual "Load More" button. (User analytics showed that the vast majority of viral traffic bounced before hitting deep scroll depth anyway, making this an easy compromise.)

2. **Aggressive Lazy Loading & Conditional Rendering:** I audited the DOM lifecycle to ensure lazy loading was applied globally, and refactored the image modals to conditionally mount and fetch high-fidelity assets *only* when opened.

3. **Client-Aware Resolution Downscaling:** I configured Cloudinary’s dynamic fetch parameters to serve fluid resolutions tailored precisely to the user's specific viewport density.

To squeeze out every ounce of free bandwidth, I even distributed referral links to harvest additional Cloudinary credits. As a last resort, I migrated the hero images on the landing page over to an entirely separate free hosting provider. Fortunately, the viral traffic wave gradually normalized, and the platform managed to survive just under the free-tier wire.
&nbsp;

&nbsp; 

## Wrapping Up

You often see indie hackers in the developer community advising: *"Just ship it, and figure out scaling problems when they happen."* Having lived through it and managed to patch the ship mid-storm, I can see the merit in that advice—though I’m still not entirely sure it’s the healthiest way to build. 
Either way, it was a hell of an adrenaline rush.

The days of thousands of concurrent users have settled, and the site now hosts a steady, modest baseline of double-digit daily active users. Still, knowing that a dedicated group of designers and developers returns to this tool every single day to streamline their workflow is incredibly fulfilling.

I didn't build this platform with monetization in mind, and I have zero plans to paywall it down the line. Seeing something I created add genuine value to the community is more than enough ROI for me. Plus, I know exactly where I’ll be looking for inspiration the next time I have to ship an app to the store.

&nbsp;
<video
src="/assets/asoko/ak.mp4"
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

〈ASO·KO〉 Link

· https://<a href="https://asoko.hacokebu.com/" target="_blank">asoko.hacokebu.com</a>

&nbsp; 
<hr>
<br>

## Don’t miss the next post.

· <a href="https://hacokebu.com/rss.xml" target="_blank">Subscribe via RSS</a>

