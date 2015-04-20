---
layout: default
title: Index
published: true
---


## Diaria

<ul>
  <li><a href="{{ site.baseurl }}books">Books</a></li>
  <li><a href="{{ site.baseurl }}movies">Movies</a></li>
</ul>


## Epistolæ

<dl>
  {% for post in site.posts %}
  {% if post.tags contains 'draft' %}{% else %}
  <dt>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <small> ({{ post.content | number_of_words }} words) <time datetime="{{ post.date | date_to_xmlschema }}" class="post-date">{{ post.date | date_to_string }}</time> </small>
  </dt>
  <dd>{{ post.excerpt }}</dd>
  {% endif %}
  {% endfor %}
</dl>
