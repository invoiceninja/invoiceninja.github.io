---
title: "Media Embeds"
sidebar_position: 11
---

Use this snippet for responsive YouTube embeds.

## YouTube embed

```html
<div class="video-container" style="position: relative; padding-top: 56.25%;">
  <iframe
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    src="https://www.youtube-nocookie.com/embed/o0-R7QQroY8?rel=0&modestbranding=1&start=15&autoplay=0"
    title="Invoice Ninja Tour"
    loading="lazy"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>
```

## Link-out fallback

```html
<a class="card-btn card-btn-primary" href="https://www.youtube.com/watch?v=o0-R7QQroY8" target="_blank" rel="noopener noreferrer">
  Watch on YouTube
</a>
```

Replace the video ID (`o0-R7QQroY8`) where needed.
