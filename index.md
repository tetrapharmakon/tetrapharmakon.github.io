---
layout: default
title: Index
published: true
---


## Epistolae

<dl>
  {% for post in site.posts %}
  {% if post.tags contains 'draft' %}{% else %}
  <dt><a href="{{ post.url }}">{{ post.title }}</a></dt>
  <dd>
    <small>
      <time datetime="{{ post.date | date_to_xmlschema }}" class="post-date">{{ post.date | date_to_string }}</time>
      <span>{{ post.content | number_of_words }} words</span>
    </small>
    {{ post.excerpt }}
  </dd>
  {% endif %}
  {% endfor %}
</dl>


## Diaria

<ul>
  <li><a href="{{ site.baseurl }}books">Books</a></li>
  <li><a href="{{ site.baseurl }}movies">Movies</a></li>
</ul>
