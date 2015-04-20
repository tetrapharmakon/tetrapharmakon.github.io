---
title: Drafts
---

<dl>
  {% for post in site.posts %}
  {% if post.tags contains 'draft' %}
  <dt>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <small> ({{ post.content | number_of_words }} words) <time datetime="{{ post.date | date_to_xmlschema }}" class="post-date">{{ post.date | date_to_string }}</time> </small>
  </dt>
  <dd>{{ post.excerpt }}</dd>
  {% else %}{% endif %}
  {% endfor %}
</dl>
