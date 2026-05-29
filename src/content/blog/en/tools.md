---
id: tools-making-story
title: The Making of 〈Tools〉 An All-in-One Toolkit for Publishing Editors
date: Jan 22, 2026
category: Making Story
description: "The creation of Tools, an all-in-one web toolkit built with vanilla JS to streamline daily workflows for publishing editors."
---

<img src="/assets/tools/tools_02.jpg">

The project began with a proposal from 'Editor's Room,' a community for publishing editors. It was developed with the goal of providing a suite of tools to assist with daily tasks and naturally encouraging continued engagement within the community.  
&nbsp;

&nbsp;  

## Inspired by Voices from the Field
<img src="/assets/tools/tools_19.jpg">
As someone not intimately familiar with the day-to-day workflow of a publishing editor, I (Hako & Kebu) couldn't just build these tools based on imagination. Instead, I conducted interviews with actual editors to plan six specialized editing tools. During these conversations, one thing became clear: editors are, after all, office workers. So, alongside professional editing tools, I decided to include features like a 'Service Period Calculator' and an 'After-tax Salary Table'—the kind of things people find themselves searching for quite often. Additionally, I included a curated bookmark page featuring sites that editors might find genuinely helpful.  
&nbsp;

&nbsp;  

## Planning → Prototype → Review → Iteration

I handled the detailed functional planning myself, built a prototype, and then had it reviewed by editors. These reviews led to some crucial improvements that I likely would have missed if I had relied solely on guesswork. For example:
<img src="/assets/tools/tools_20.jpg">
- A "Quick Copy" feature for spine width calculations and character counts.
- Displaying the number of manuscript paper sheets (Won-go-ji) during character counts.
- Guidance on image file extensions when generating QR codes.

Through several rounds of this review-improve-reflect cycle, the project evolved into its current form.  
&nbsp;

&nbsp;  

## Keeping Technology Simple

For this project, I intentionally set aside any ambition for a complex tech stack. Looking at the service specifications, there was no compelling reason to use the latest "hyped" technologies. I stuck to HTML, CSS, and JavaScript—specifically Vanilla JS whenever possible. My priority was to minimize future maintenance issues.  
<img src="/assets/tools/tools_21.jpg">
I used Local Storage for features requiring data persistence and managed data-heavy sections, like bookmarks, using JSON files. Again, these were deliberate choices to ensure easy maintenance.  
&nbsp;

&nbsp;  

## Design: Concise and Reusable
<img src="/assets/tools/tools_22.jpg">
The design principles were clear: 'Conciseness and Reusability.'

I wanted design elements developed for one page to be seamlessly reusable elsewhere. The system was engineered so that even as new tools are added, the UI remains consistent and clutter-free.  
&nbsp;

&nbsp;  

## Finalizing Deployment via GitHub

Initially, I chose 'Netlify Drop' for deployment, thinking it would be easy for someone less technical to manage. However, I soon ran into limitations: I couldn't modify or replace specific files on the server directly, and even the smallest change required re-uploading the entire service. This proved highly inefficient during development, so I eventually switched to a GitHub-integrated deployment workflow.  
&nbsp;

&nbsp;  

## The Fun Part: Book Size Comparison Table

The most enjoyable challenge was the book size comparison feature. Showing just numbers felt no different from existing data, while using only images lacked intuition. The solution I came up with was a structure where hovering over a table row visually renders the corresponding book format.  
<img src="/assets/tools/tools_23.jpg">
I debated the technical implementation but ultimately went with the simplest approach: creating individual images for each format and displaying them on hover. Despite its simplicity, it provides a fun, interactive experience for the user, which I found quite satisfying.  
&nbsp;

&nbsp;  

## The Hardest Part: Data Collection

Looking back, gathering data was far more difficult than the actual coding.

To calculate spine width, paper thickness information is essential. However, most paper manufacturers only officially provide weight (gsm), not thickness. Consequently, I could only include well-known paper types whose thickness data was publicly available.

Selecting representative books for each trim size was another hurdle. Since bookstores don't typically categorize books by trim size, I had to manually cross-reference book dimensions one by one. The very problem this tool was meant to solve became the primary obstacle in making it. (This is why most sizes have six representative books, while A4 and Tabloid sizes only have three—I simply couldn't find more.)

Finally, as mentioned, managing data via JSON makes maintenance easier, but the initial process of manually inputting all that data was incredibly tedious.  
&nbsp;

&nbsp;  

## Final Thoughts

'Tools' isn't a service built with flashy technology, but it was built with a deep focus on whether it would actually be useful. I hope it finds a permanent spot in the bookmarks of editors everywhere.
&nbsp;

&nbsp; 
<hr>
<br>

〈Tools〉 Link ⬇️

· <a href="https://tools.editorsroom.kr/" target="_blank">https://tools.editorsroom.kr/</a>

&nbsp; 
<hr>
<br>

## Don’t miss the next post.

· <a href="https://hacokebu.com/rss.xml" target="_blank">Subscribe via RSS</a>
