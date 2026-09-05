---
layout: default
title: "ITI9200 - Introduction to Category Theory (Spring 2026)"
stylesheet: /assets/css/ct-course.css
---

{% assign course = site.data.courses.ITI9200 %}

  <div class="course-container">
    <p><a href="{{ '/teaching.html' | relative_url }}">&larr; Teaching</a></p>
    <h1>{{ course.title }}</h1>
    <p class="course-term">{{ course.term }}</p>
    {% if course.subtitle != empty %}<p><em>{{ course.subtitle }}</em></p>{% endif %}
    {% if course.notice %}<div class="course-notice">{{ course.notice | markdownify }}</div>{% endif %}

    <div class="course-grid">
      <main>
        <section>
          <h2>What</h2>
          {{ course.description | markdownify }}
        </section>

        <section>
          <h2>When / Where</h2>
          <table class="schedule-table">
            <tbody>
              {% for item in course.schedule %}
              <tr>
                <td><strong>{{ item.day }}</strong></td>
                <td>{{ item.time }}</td>
                <td>{{ item.room }}</td>
              </tr>
              {% endfor %}
            </tbody>
          </table>
          {% if course.schedule_note %}<p class="note">{{ course.schedule_note }}</p>{% endif %}
        </section>

        <section>
          <h2>Lectures' Log</h2>
          {% for track in course.lectures %}
            {% if track.items.size > 0 %}
            <ul>
              {% for lec in track.items %}
                <li>{{ lec.title }}{% if lec.link %} (<a href="{{ lec.link | relative_url }}">link</a>){% endif %}</li>
              {% endfor %}
            </ul>
            {% endif %}
          {% endfor %}
        </section>

        <section>
          <h2>Exercises</h2>
          {% if course.exercises.mind %}
            <h3>For the mind</h3>
            {{ course.exercises.mind | markdownify }}
          {% endif %}
          {% if course.exercises.exam %}
            <h3>For the exam</h3>
            {{ course.exercises.exam | markdownify }}
          {% endif %}
        </section>
        
        <section>
          <h2>Grading</h2>
          {{ course.grading | markdownify }}
        </section>

        <section>
          <h2>References</h2>
          All these references are freely available on the internet. If you need more, ask and <a href="{{ '/stuff/libgen.png' | relative_url }}">y</a>e shall receive.
          <ul>
            {% for r in course.references %}
              <li>{{ r.author }}, <em>{{ r.title }}</em> 
              {% if r.link %} (<a href="{{ r.link | relative_url }}">PDF</a>){% endif %}
              {% if r.note %} — {{ r.note }}{% endif %}
               </li>
            {% endfor %}
          </ul>
        </section>
      </main>

      <aside class="sidebar">
        <div class="course-card">
          <h3>Instructors</h3>
          <ul>
            {% for ins in course.instructors %}
              <li>
                {% if ins.url %}<a href="{{ ins.url }}">{{ ins.name }}</a>{% else %}{{ ins.name }}{% endif %}
                <!-- {% if ins.email %} | <a href="mailto:{{ ins.email }}">📧</a>{% endif %} -->
                <!-- {% if ins.role %} <small>({{ ins.role }})</small>{% endif %} -->
              </li>
            {% endfor %}
          </ul>
        </div>

        {% if course.contacts and course.contacts.office %}
        <div class="course-card">
          <h4>Contacts</h4>
          {% for ins in course.instructors %}
          {% if ins.email %}<p><a href="mailto:{{ ins.email }}">{{ ins.email }}</a></p>{% endif %}
          {% endfor %}
          <p>or: {{ course.contacts.office }}</p>
        </div>
        {% endif %}

        {% if course.urgent %}
        <div class="course-card">
          <h4>Announcements</h4>
          {{ course.urgent | markdownify }}
        </div>
        {% endif %}
      </aside>
    </div>

    {% if course.footer_image %}
      <div class="course-artwork">
        <img src="{{ course.footer_image | relative_url }}" alt="footer image">
        {% if course.footer_caption %}<p>{{ course.footer_caption }}</p>{% endif %}
      </div>
    {% endif %}

  </div>
