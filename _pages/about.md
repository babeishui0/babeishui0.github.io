---
permalink: /
title: "Jing ZHANG / Home"
author_profile: false
home_gsap: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<div class="home-glass-root home-cartoon-root">
  <section class="home-glass-hero home-glass-card" data-home-animate data-tilt aria-labelledby="home-hero-title">
    <div class="home-cartoon-sky" aria-hidden="true">
      <span class="home-cartoon-cloud home-cartoon-cloud--one" data-home-float></span>
      <span class="home-cartoon-cloud home-cartoon-cloud--two" data-home-float></span>
      <span class="home-cartoon-cloud home-cartoon-cloud--three" data-home-float></span>
      <span class="home-cartoon-doodle home-cartoon-doodle--star" data-home-float>✦</span>
      <span class="home-cartoon-doodle home-cartoon-doodle--heart" data-home-float>♡</span>
    </div>

    <nav class="home-cartoon-nav" aria-label="Homepage sections">
      <a href="#home-about-title">ME</a>
      <a href="#home-education-title">Information</a>
      <a href="#home-publications-title">Publications</a>
      <a href="#home-writing-title">Blog</a>
    </nav>

    <div class="home-glass-hero__copy">
      <p class="home-glass-kicker">♡ Jing's Channel</p>
      <h1 id="home-hero-title">I'm the protagonist.</h1>
      <p class="home-glass-lede">
        Ph.D. student at <a href="https://www.um.edu.mo/">University of Macau</a>, supervised by Prof. Jiawei XU. Before that, I received my M.Phil. degree from <a href="https://www.hkust-gz.edu.cn/">The Hong Kong University of Science and Technology (Guangzhou)</a>, supervised by Prof. Shanshi HUANG and Prof. Hongwu JIANG.
      </p>

      <div class="home-glass-actions" aria-label="Primary links">
        <a class="home-glass-button" href="{{ base_path }}/publications/"><i class="fas fa-fw fa-scroll" aria-hidden="true"></i><span>Publications</span></a>
        <a class="home-glass-button" href="{{ base_path }}/cv/"><i class="fas fa-fw fa-file-lines" aria-hidden="true"></i><span>CV</span></a>
        <a class="home-glass-button" href="mailto:babeishui0@gmail.com"><i class="fas fa-fw fa-envelope" aria-hidden="true"></i><span>Email</span></a>
      </div>
    </div>

    <div class="home-glass-profile">
      <div class="home-cartoon-sticker" data-home-float>Digital ICs<br>Compute-in-Memory</div>
      <img class="home-glass-avatar" src="{{ base_path }}/images/mudie.png" alt="Jing ZHANG avatar" fetchpriority="high">
      <ul class="home-glass-facts" aria-label="Profile facts">
        <li><strong>Ph.D.</strong><span>University of Macau</span></li>
        <li><strong>Macao SAR</strong><span>China</span></li>
        <li><strong>2026</strong><span>ISCAS papers online</span></li>
      </ul>
    </div>
  </section>

  <section class="home-glass-section" aria-labelledby="home-about-title">
    <div class="home-glass-section__head" data-home-reveal>
      <p class="home-glass-kicker">Profile</p>
      <h2 id="home-about-title">Research Snapshot</h2>
    </div>

    <div class="home-glass-grid home-glass-grid--overview">
      <article class="home-glass-card home-glass-card--about" data-home-reveal data-tilt>
        <div class="home-glass-card__meta">About</div>
        <h3>Building efficient intelligence from circuits to systems</h3>
        <p>
          My work focuses on digital integrated circuits, compute-in-memory architecture, computer architecture, and hardware-software co-design for emerging workloads.
        </p>
      </article>

      <article class="home-glass-card home-glass-card--research" data-home-reveal data-tilt>
        <div class="home-glass-card__meta">Research Interests</div>
        <ul class="home-glass-chip-list">
          <li>Digital Integrated Circuits</li>
          <li>Compute-in-Memory Architecture</li>
          <li>Computer Architecture</li>
          <li>Hardware-Software Co-design</li>
          <li>Large Language Models</li>
        </ul>
      </article>
    </div>
  </section>

  <section class="home-glass-section" aria-labelledby="home-education-title">
    <div class="home-glass-section__head" data-home-reveal>
      <p class="home-glass-kicker">Timeline</p>
      <h2 id="home-education-title">Education</h2>
    </div>

    <article class="home-glass-card home-glass-card--education" data-home-reveal data-tilt>
      <div class="education-dot-timeline">
        <article class="education-dot-timeline__item">
          <span class="education-dot-timeline__dot" aria-hidden="true"></span>
          <div class="education-dot-timeline__content">
            <h3>Ph.D. student</h3>
            <p>University of Macau</p>
          </div>
        </article>

        <article class="education-dot-timeline__item">
          <span class="education-dot-timeline__dot" aria-hidden="true"></span>
          <div class="education-dot-timeline__content">
            <h3>M.Phil. degree</h3>
            <p>The Hong Kong University of Science and Technology (Guangzhou)</p>
          </div>
        </article>

        <article class="education-dot-timeline__item">
          <span class="education-dot-timeline__dot" aria-hidden="true"></span>
          <div class="education-dot-timeline__content">
            <h3>B.Eng. degree</h3>
            <p>Beijing Institute of Technology</p>
          </div>
        </article>
      </div>
    </article>
  </section>

  <section class="home-glass-section" aria-labelledby="home-news-title">
    <div class="home-glass-section__head" data-home-reveal>
      <p class="home-glass-kicker">Updates</p>
      <h2 id="home-news-title">News</h2>
    </div>

    <div class="home-glass-grid home-glass-grid--news">
      <article class="home-glass-card home-glass-card--cream" data-home-reveal data-tilt>
        <div class="home-glass-card__meta">06/19/2026</div>
        <p><strong>ISCAS'26</strong>: My two ISCAS'26 papers are now available online with DOI links.</p>
      </article>

      <article class="home-glass-card home-glass-card--pink" data-home-reveal data-tilt>
        <div class="home-glass-card__meta">01/20/2026</div>
        <p><strong>ISCAS'26</strong>: One first-authored paper, <strong>InFP: A 17.97 TFLOPS/W Reconfigurable SRAM Based Computing-in-Memory Macro for BF16 MAC Operations</strong>, has been accepted by ISCAS'26.</p>
      </article>

      <article class="home-glass-card home-glass-card--mint" data-home-reveal data-tilt>
        <div class="home-glass-card__meta">01/20/2026</div>
        <p><strong>ISCAS'26</strong>: One co-authored paper, <strong>CIM-SIFT: An Efficient Compute-in-Memory Accelerator for Real-time SIFT Algorithm</strong>, has been accepted by ISCAS'26.</p>
      </article>
    </div>
  </section>

  <section class="home-glass-section" aria-labelledby="home-publications-title">
    <div class="home-glass-section__head" data-home-reveal>
      <p class="home-glass-kicker">Selected Work</p>
      <h2 id="home-publications-title">Latest Publications</h2>
    </div>

    <div class="home-glass-grid home-glass-grid--papers">
      {% for post in site.publications reversed limit:2 %}
        <article class="home-glass-card home-glass-card--paper" data-home-reveal data-tilt>
          <div class="home-glass-card__meta">{{ post.venue }} '{{ post.date | default: "1900-01-01" | date: "%y" }}</div>
          <h3><a href="{{ base_path }}{{ post.url }}">{{ post.title }}</a></h3>
          {% if post.Authors %}
            <p class="home-glass-authors">{{ post.Authors | markdownify | strip_html }}</p>
          {% endif %}
          <div class="home-glass-card__links">
            <a href="{{ base_path }}{{ post.url }}">Details</a>
            {% if post.doiurl %}<a href="{{ post.doiurl }}">DOI</a>{% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="home-glass-section" aria-labelledby="home-writing-title">
    <div class="home-glass-section__head" data-home-reveal>
      <p class="home-glass-kicker">Notes</p>
      <h2 id="home-writing-title">Latest Blog Posts</h2>
    </div>

    <div class="home-glass-grid home-glass-grid--blog">
      {% for post in site.posts limit:2 %}
        <article class="home-glass-card home-glass-card--post" data-home-reveal data-tilt>
          <div class="home-glass-card__meta">{{ post.date | date: "%B %d, %Y" }}</div>
          <h3><a href="{{ base_path }}{{ post.url }}">{{ post.title }}</a></h3>
          {% if post.excerpt %}
            <p>{{ post.excerpt | markdownify | strip_html }}</p>
          {% endif %}
        </article>
      {% endfor %}
    </div>
  </section>
</div>
