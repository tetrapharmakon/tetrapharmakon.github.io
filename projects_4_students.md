---
layout: default
---

<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: sans-serif;
      background: #f5f5f5;
      padding: 8rem;
    }
    .project {
      background: white;
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 1rem;
      margin-bottom: 1rem;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    }
    .project-title {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .project-description {
      font-size: 1rem;
      color: #333;
    }
    .project-type {
  color: #999;
  font-weight: normal;
  font-size: 0.9em;
  margin-left: 0.5em;
}
.project-references {
  margin-top: 0.5rem;
  font-size: 0.95em;
}
.project-references ul {
  padding-left: 1.2rem;
  margin: 0.3rem 0;
}
  </style>
</head>
<body>

  <h1>Thesis Projects</h1>
<p>
  This page lists potential thesis projects for students interested in working with me as their advisor. I receive an ever-increasing number of requests for thesis supervision, especially by fellow Italians (doing category theory in Italy is frustrating...), so I've created this page to present a curated selection of topics we can work together. 
</p>
<p>
  Each project is briefly described and marked with its suitable level — 🎓 Bachelor's, 📚 Master's, or 🧬 PhD (this is the research I am myself conducting <em>right now</em>: this means essentially that whatever you end up doing in that direction has a high chance of becoming a publication) —along with a list of references for what catches your eye.
</p>
  {% for project in site.data.projects %}
    <div class="project">
      <div class="project-title">{{ project.title }} |
      <span class="project-type">{{ project.type }} 
      {% assign level = project.difficulty | default: 0 %}
      {% for i in (1..level) %}★{% endfor %}{% assign remaining = 5 | minus: level %}{% for i in (1..remaining) %}☆{% endfor %}</span>
</div>
<div class="project-difficulty">
  <p></p>
</div>
      <div class="project-description">{{ project.description }}</div>
      {% if project.references %}
      <div class="project-references">
        <strong>Further Reading:</strong>
        <ul>
          {% for ref in project.references %}
            <li>{{ ref }}</li>
          {% endfor %}
        </ul>
      </div>
    {% endif %}
    </div>
  {% endfor %}

</body>
</html>
