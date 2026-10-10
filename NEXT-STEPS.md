# Next steps (saved 2026-10-10)

Read this first when work restarts.

## Done
- Hero (animated pixel grid, ship console, Plan/Code/Review flow, cartridge shelf): commit d30f8e2.
- Astro move (Markdown diary, sitemap, RSS, SEO tags): see git log. If the last commit is the hero, the Astro move did not land; rerun Luna with ~/coding/indieHacking/personal-site/astro-brief.md.

## Remaining
1. **Go live on Cloudflare Pages** (free, about 15 min). Needs the owner's go (production deploy) and one Cloudflare login by the owner. Build command `npm run build`, output folder `dist`.
2. **Domain** (optional, about 10 min plus DNS wait). Domain registrar: Gandi. Point it at Cloudflare Pages, then change `site` in astro.config.mjs and the Sitemap line in public/robots.txt from `new-portfolio-2026.pages.dev` to the real domain.
3. **Diary posts**. Claude writes every post; the owner writes nothing. One Markdown file each in src/content/diary/, following WRITING.md. Set `draft: false` to publish. True facts only (source: ~/coding/indieHacking/personal-site/CONTENT.md and the project folders), no invented numbers, no politics. The 6 planned posts:
   - How I pick models
   - My Claude Code setup
   - How the AI influencer was made
   - Building a YouTube video pipeline for $0
   - Shipping an iOS app from Linux
   - Copying a hit game and making it better
4. **SEO after launch**: add the site to Google Search Console and submit sitemap-index.xml (owner login needed).

## Rules for this repo
- Coding goes to Codex (Luna, gpt-6-luna, effort max) until 2026-11-12; Claude briefs and reviews.
- Check every change in a browser at 1440px and 390px before calling it done.
- Briefs and design notes live in ~/coding/indieHacking/personal-site/.
