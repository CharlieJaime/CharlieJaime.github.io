---
title: Blog
layout: default
---

<div class="home">

  <h1 class="page-heading">Posts</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }} • {{ post.author }}</span>
        <p>
            {{post.excerpt}}
        </p>
      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe">subscribe
    <a href="{{ "/feed.xml" | prepend: site.baseurl }}">
        via RSS
        <span class="icon icon--rss">
            <svg viewBox="0 0 512 512"><path d="M201.8 347.2c0 20.3-16.5 36.8-36.8 36.8 -20.3 0-36.8-16.5-36.8-36.8s16.5-36.8 36.8-36.8C185.3 310.4 201.8 326.8 201.8 347.2zM128.2 204.7v54.5c68.5 0.7 124 56.3 124.7 124.7h54.5C306.7 285.3 226.9 205.4 128.2 204.7zM128.2 166.6c57.9 0.3 112.3 22.9 153.2 63.9 41 41 63.7 95.5 63.9 153.5h54.5c-0.3-149.9-121.7-271.4-271.6-271.9V166.6L128.2 166.6z"/></svg>
        </span>
    </a>
  </p>

</div>