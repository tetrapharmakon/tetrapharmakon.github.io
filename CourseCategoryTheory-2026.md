---
layout: default
---

<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="/assets/css/ct-course.css">
  <style>
    .course-container { max-width: 900px; margin: 3rem auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
    .course-grid { display: grid; grid-template-columns: 1fr 340px; gap: 2rem; }
    .card-content { background:#fff;padding:1rem;border-radius:8px;border:1px solid #e6e6e6; box-shadow: 0 1px 0 rgba(0,0,0,0.03) }
    .sidebar .instructors ul { padding-left: 1rem; }
    table.schedule-table { width:100%; border-collapse: collapse; }
    table.schedule-table td { padding: 6px 8px; vertical-align: top }
  </style>
</head>
<body>

  <div class="course-container">
    <h1>{{ site.data.courses.ITI9200.title }}</h1>
    {% if site.data.courses.ITI9200.subtitle %}<p><em>{{ site.data.courses.ITI9200.subtitle }}</em></p>{% endif %}

    <div class="course-grid">
      <main>
        <section>
          <h2>What</h2>
          {{ site.data.courses.ITI9200.description | markdownify }}
        </section>

        <section>
          <h2>When / Where</h2>
          <table class="schedule-table">
            <tbody>
              {% for item in site.data.courses.ITI9200.schedule %}
              <tr>
                <td><strong>{{ item.day }}</strong></td>
                <td>{{ item.time }}</td>
                <td>{{ item.room }}</td>
              </tr>
              {% endfor %}
            </tbody>
          </table>
          {% if site.data.courses.ITI9200.schedule_note %}<p class="note">{{ site.data.courses.ITI9200.schedule_note }}</p>{% endif %}
        </section>

        <section>
          <h2>Lectures' Log</h2>
          {% for track in site.data.courses.ITI9200.lectures %}
            <h3>{{ track.name }}</h3>
            <ul>
              {% for lec in track.items %}
                <li>{{ lec.title }}{% if lec.link %} (<a href="{{ lec.link }}">link</a>){% endif %}</li>
              {% endfor %}
            </ul>
          {% endfor %}
        </section>

        <section>
          <h2>Exercises</h2>
          {% if site.data.courses.ITI9200.exercises.mind %}
            <h3>For the mind</h3>
            {{ site.data.courses.ITI9200.exercises.mind | markdownify }}
          {% endif %}
          {% if site.data.courses.ITI9200.exercises.exam %}
            <h3>For the exam</h3>
            {{ site.data.courses.ITI9200.exercises.exam | markdownify }}
          {% endif %}
        </section>
        
        <section>
          <h2>Grading</h2>
          {{ site.data.courses.ITI9200.grading | markdownify }}
        </section>

        <section>
          <h2>References</h2>
          All these references are freely available on the internet. If you need more, ask and <a href="stuff/libgen.png">y</a>e shall receive.
          <ul>
            {% for r in site.data.courses.ITI9200.references %}
              <li>{{ r.author }}, <em>{{ r.title }}</em> 
              {% if r.link %} (<a href="{{ r.link }}">PDF</a>){% endif %}
              {% if r.note %} — {{ r.note }}{% endif %}
               </li>
            {% endfor %}
          </ul>
        </section>
      </main>

      <aside class="sidebar">
        <div class="card-content">
          <h3>Instructors</h3>
          <ul>
            {% for ins in site.data.courses.ITI9200.instructors %}
              <li>
                {% if ins.url %}<a href="{{ ins.url }}">{{ ins.name }}</a>{% else %}{{ ins.name }}{% endif %}
                <!-- {% if ins.email %} | <a href="mailto:{{ ins.email }}">📧</a>{% endif %} -->
                <!-- {% if ins.role %} <small>({{ ins.role }})</small>{% endif %} -->
              </li>
            {% endfor %}
          </ul>
        </div>

        {% if site.data.courses.ITI9200.contacts and site.data.courses.ITI9200.contacts.office %}
        <div class="card-content" style="margin-top:1rem">
          <h4>Contacts</h4>
          <p>{fosco.loregian,andrea.laretto}@taltech.ee</p>
          <p>or: {{ site.data.courses.ITI9200.contacts.office }}</p>
        </div>
        {% endif %}

        {% if site.data.courses.ITI9200.urgent %}
        <div class="card-content" style="margin-top:1rem">
          <h4>Urgent</h4>
          {{ site.data.courses.ITI9200.urgent | markdownify }}
        </div>
        {% endif %}
      </aside>
    </div>

    {% if site.data.courses.ITI9200.footer_image %}
      <div style="margin-top:2rem; text-align:center">
        <img src="{{ site.data.courses.ITI9200.footer_image }}" alt="footer image" style="max-width:100%;height:auto;border-radius:8px;border:1px solid #eee">
        {% if site.data.courses.ITI9200.footer_caption %}<p>{{ site.data.courses.ITI9200.footer_caption }}</p>{% endif %}
      </div>
    {% endif %}

  </div>

</body>
</html>
