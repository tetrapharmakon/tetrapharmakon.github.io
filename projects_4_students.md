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
  This page presents a curated selection of potential thesis projects for students interested in working with me as their advisor. I continue to receive an increasing number of requests for supervision —particularly from other Italians— often driven by a shared frustration: doing, or wanting to do, category theory in Italy can be disheartening.
</p>
<p>
It is unfortunate that much of Italian academia perpetuates the narrow and misguided belief that category theory is merely a tool of algebraic geometry or homological algebra —or worse, ignores the language of category theory altogether. Across the years, this reductive view misled students and researchers alike; it is a deeply troubling perspective —not just intellectually, but ethically— and I have always strongly opposed the mindset that sustains it.
</p>
<p>
This list is meant to counter the narrative. Instead of the dominant view, I'd like to convey the idea that no matter where you come from, and what Mathematics you care about, category theory is useful for that. Yes, for <em>that</em> as well. And for <em>that</em> too. Here you'll find a selection of diverse topics in category theory that I believe are worth exploring, and that I would be happy to supervise (drop me a line at <a href="mailto:fosco.loregian+students@gmail.com">my email address</a>). This can also be taken as a list of references for self-study, and I am always happy to give informal advice. 
</p>
<p>
  Each project is briefly described and marked with its suitable level — 📚 Bachelor's, 🎓 Master's, or 🧬 PhD (this is the research I am myself conducting <em>right now</em>: it means essentially that whatever you end up doing in that direction has a high chance of becoming a publication) —along with a list of references for what catches your eye.
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
        <strong>Further Readings:</strong>
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
