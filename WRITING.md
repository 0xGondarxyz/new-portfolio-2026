# Writing diary posts

Create `src/content/diary/<slug>.md`.

Use this frontmatter and Markdown body:

```md
---
title: Post title
description: One line describing the post.
pubDate: 2026-10-10
updatedDate: 2026-10-10
draft: true
youtube: dQw4w9WgXcQ
---
Write the post here.
```

Set `draft: false` to publish. `updatedDate` and `youtube` are optional; add an 11-character YouTube video id for an embed.

Build the site with `npm run build`.
