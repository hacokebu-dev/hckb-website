1. Add the new markdown post in both /src/content/blog/en and /src/content/blog/ko with the same id.
2. Verify frontmatter fields id, title, date, category, and description are present and accurate.
3. Run npm run build and confirm the log includes the new route in prerender, sitemap, and rss generation output.
4. Deploy the dist output and spot-check View Source for the new URL to confirm title, canonical, and description are route-specific.
5. For high-priority posts, submit URL Inspection and Request Indexing in Google Search Console after deployment.