---
layout: page
permalink: /projects/
title: projects
description:
nav: true
nav_order: 2
---
<!-- _pages/projects.md -->
<div class="projects">
  {% if site.enable_project_categories %}
    {% assign categories = site.projects | map: "category" | uniq | sort %}
    {% for category in categories %}
      {% if category %}
        <h2 class="category">{{ category }}</h2>
        <div class="grid">
          <div class="grid-sizer"></div>
          {% assign category_projects = site.projects | where: "category", category | sort: "importance" %}
          {% for project in category_projects %}
            <div class="grid-item">
              {% if project.horizontal %}
                {% include projects_horizontal.liquid %}
              {% else %}
                {% include projects.liquid %}
              {% endif %}
            </div>
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}
  {% else %}
    <div class="grid">
      <div class="grid-sizer"></div>
      {% assign sorted_projects = site.projects | sort: "importance" %}
      {% for project in sorted_projects %}
        <div class="grid-item">
          {% if project.horizontal %}
            {% include projects_horizontal.liquid %}
          {% else %}
            {% include projects.liquid %}
          {% endif %}
        </div>
      {% endfor %}
    </div>
  {% endif %}
</div>
