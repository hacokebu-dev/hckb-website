---
id: making-of-usedbookfinder
title: Building a Chrome Extension for Bundling Used Book Orders: 〈Alddladin〉
date: Aug 11, 2026
category: Making Story
description: "How I planned, designed, and developed 'Alddladin'—a Chrome extension built in two days—to solve the frustrating experience of managing bundled shipping fees from individual sellers on Aladin."
---

<img src="/assets/adld/adld_01.jpg">
<figcaption>Aladin Online Used Books</figcaption>
&nbsp;

On Aladin, a major South Korean online bookstore, users can buy used books directly from individual sellers. While these sellers offer an incredibly wide variety of titles—making it rare *not* to find what you're looking for—shipping costs add up fast. In most cases, a separate shipping fee applies regardless of how many books you order, often starting at 4,000 KRW (~$3.00 USD), which is noticeably higher than standard shipping.

Naturally, buyers try to purchase multiple titles from a single seller to bring down the average shipping cost per book. However, that effort falls flat if a seller only has one of the books on your list. Paying a 4,000 KRW shipping fee for a single used book erases most of the savings compared to buying it new. Browsing individual storefronts to cross-reference inventories takes a massive amount of time and energy. For a long time, I wondered why Aladin hadn't built a native feature to show sellers who hold multiple items from a buyer's wishlist. Eventually, I realized I should just build the solution myself.
&nbsp;

&nbsp;  

## Logic & Technical Feasibility

The core logic I envisioned was straightforward:

1. Search for Book 'A', find the exact match, and fetch the list of sellers offering it.
2. Search for Book 'B', find the exact match, and fetch the list of sellers offering it.
3. Compare the two seller lists and display the intersection—sellers who own both books.

How should I build this?

My first thought was web scraping, followed by using Aladin's official API. Since Aladin provides open APIs for book metadata and used inventory, this seemed technically viable.

The third option was a Chrome extension. Having explored extensions in a previous project, I remembered they make client-side web scraping relatively seamless.

After evaluating these three approaches from an engineering perspective, a Chrome extension emerged as the clear winner.

I ruled out server-side web scraping due to infrastructure costs—this was never meant to be a monetized project. As for Aladin's open API, the rate limits concerned me. While 5,000 free requests per day sounded generous, I had previously underestimated traffic on ASO·KO and nearly hit its usage limits. Managing yet another hosted web app and server infrastructure felt like unnecessary overhead. 

That left the Chrome extension. While requiring installation and limiting support to Chrome were potential friction points, I gambled that users experiencing real frustration with used book shipping would be willing to install it.

Above all, I was simply curious to build a Chrome extension from scratch.
&nbsp;

&nbsp;  

## Prototyping & UX Decisions

I put together a quick prototype, and it worked remarkably well right out of the gate. Despite a few minor edge cases, the core logic executed so smoothly that it was genuinely thrilling.

With the feasibility validated, I jumped straight into design.

My primary UX goal was to craft a seamless flow. While the overall interaction design was relatively simple, handling book matching required careful thought. For instance, if a user searches for a broad term like "Rich," the app needs to identify whether they mean *Rich Dad Poor Dad*, *Rich Habits*, or another title. I had to decide where in the flow to introduce this disambiguation step.

Standard search UI patterns dynamically display live auto-complete results as the user types. However, because I wasn't relying on a dedicated backend API, live querying posed latency challenges. Furthermore, if a user inputs the exact title, skipping the disambiguation step altogether yields a much cleaner user experience. I decided to trigger book matching *after* the initial search action rather than in real time.

Another deliberate UX decision was preserving the previous search query in the input field after a search completed. If a search yields no sellers carrying the requested combination, users are likely to attempt a different combination of titles. Forcing them to retype the title each time creates unnecessary friction, so retaining the search state felt like the right move.
&nbsp;

&nbsp;  

## Design & Branding

For the visual interface, I aimed for my usual clean aesthetic. Although it's a lightweight tool, I established a quick design system covering color, typography, buttons, and interaction states.

<img src="/assets/adld/adld_02.jpg">
<figcaption>Alddladin Design Library</figcaption>
&nbsp;

I selected a primary brand color close to Aladin's signature palette. Since this service targets existing Aladin shoppers, maintaining visual familiarity was key.

The service name was generated by ChatGPT. I asked without expecting much, but its very first suggestion—*Alddladin* (a play on 'Aladin' and the Korean word *alddl*, meaning frugal or penny-wise)—instantly struck a chord.

<img src="/assets/adld/adld_03.jpg">
<figcaption>Alddladin Logo</figcaption>
&nbsp;

I designed the logo to feel friendly and approachable. Given the quirky pun in the name, a playfull tone felt fitting. I arranged the letterforms with an intentional slant and backed them with a graphic container designed to subtly evoke the shape of a book.
&nbsp;

&nbsp;  

## Launch & Retrospective

When submitting the extension to the Chrome Web Store, I learned for the first time that developer registration requires a one-time $5 fee. While minor, paying it made me determined to build more Chrome extensions in the future to maximize its value!

In total, the development of Alddladin took just two days: one day for feature implementation and one day for UI design and branding.

Despite the short timeframe, the extension cleanly delivers the exact functionality I set out to build, solving a real, everyday pain point I faced.

&nbsp; 
<hr>
<br>

Install <Alddladin: Chrome Extension for Bundled Shipping on Aladin Used Books>

<a href="https://chromewebstore.google.com/detail/kfjaegifjeipkihppiignjhbnenhceek?utm_source=item-share-cb" target="_blank" rel="noopener noreferrer" class="store-badge-link">
  <img src="/assets/dl_c.png" alt="Available in the Chrome Web Store" class="store-badge" />
</a>

&nbsp; 
<hr>
<br>

## Don’t miss the next post.

· <a href="https://hacokebu.com/rss.xml" target="_blank">Subscribe via RSS</a>

