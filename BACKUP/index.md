---
title: tetrapharmakon
tags: notitle
---

# Meaty Ideas

[...]

## Scraps

<dl id="epistolae">
  {% for post in site.posts %}
  {% if post.tags contains 'draft' %}{% assign draftclass = ' class="draft"' %}{% endif %}
  <dt{{draftclass}}>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <small> ({{ post.content | number_of_words }} words) <time class ="hidden" datetime="{{ post.date | date_to_xmlschema }}" class="post-date">{{ post.date | date_to_string }}</time></small>
  </dt>
  <dd{{draftclass}}>{{ post.excerpt }}</dd>
  {% assign draftclass = '' %}
  {% endfor %}
