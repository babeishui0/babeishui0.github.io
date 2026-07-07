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

<div class="home-2d-root">
  <section class="home-2d-stage" aria-labelledby="home-2d-title">
    <div class="home-2d-sky" aria-hidden="true">
      <span class="home-2d-cloud home-2d-cloud--one" data-home-float></span>
      <span class="home-2d-cloud home-2d-cloud--two" data-home-float></span>
      <span class="home-2d-cloud home-2d-cloud--three" data-home-float></span>
      <span class="home-2d-sparkle home-2d-sparkle--one" data-home-float>✦</span>
      <span class="home-2d-sparkle home-2d-sparkle--two" data-home-float>♡</span>
    </div>

    <nav class="home-2d-nav" data-home-animate aria-label="Main entries">
      <a href="{{ base_path }}/publications/">Publications</a>
      <a href="{{ base_path }}/year-archive/">Blog</a>
      <a href="{{ base_path }}/cv/">CV</a>
      <a href="mailto:babeishui0@gmail.com">Contact</a>
    </nav>

    <div class="home-2d-window" data-home-animate>
      <div class="home-2d-window__bar" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="home-2d-main">
        <figure class="home-2d-portrait" data-home-character>
          <img src="{{ base_path }}/images/mudie.png" alt="Jing ZHANG avatar" fetchpriority="high">
          <figcaption>Jing's Channel</figcaption>
          <span class="home-2d-badge" data-home-float>Ph.D.<br>UM</span>
        </figure>

        <article class="home-2d-about" data-home-panel>
          <p class="home-2d-kicker">♡ About Me</p>
          <h1 id="home-2d-title">Jing ZHANG 张弪</h1>
          <p class="home-2d-subtitle">Digital ICs · Compute-in-Memory · Architecture</p>
          <p>
            I am currently a Ph.D. student at <a href="https://www.um.edu.mo/">University of Macau</a>, supervised by Prof. Jiawei XU. Before that, I received my M.Phil. degree from <a href="https://www.hkust-gz.edu.cn/">The Hong Kong University of Science and Technology (Guangzhou)</a>, supervised by Prof. Shanshi HUANG and Prof. Hongwu JIANG.
          </p>
          <ul class="home-2d-tags" aria-label="Research interests">
            <li>Digital Integrated Circuits</li>
            <li>Compute-in-Memory</li>
            <li>Computer Architecture</li>
            <li>Hardware-Software Co-design</li>
            <li>Large Language Models</li>
          </ul>
        </article>
      </div>
    </div>

    <div class="home-2d-entry-grid" data-home-animate aria-label="Sub entries">
      <a class="home-2d-entry home-2d-entry--pink" href="{{ base_path }}/publications/">
        <span>01</span>
        <strong>Publications</strong>
        <em>Papers, DOI links, and research records</em>
      </a>

      <a class="home-2d-entry home-2d-entry--blue" href="{{ base_path }}/year-archive/">
        <span>02</span>
        <strong>Blog Posts</strong>
        <em>Paper reviews and research notes</em>
      </a>

      <a class="home-2d-entry home-2d-entry--mint" href="{{ base_path }}/cv/">
        <span>03</span>
        <strong>CV</strong>
        <em>Education, experience, and background</em>
      </a>

      <a class="home-2d-entry home-2d-entry--cream" href="https://scholar.google.com/citations?user=wcQ9pHYAAAAJ&hl=zh-CN">
        <span>04</span>
        <strong>Scholar</strong>
        <em>Google Scholar profile</em>
      </a>
    </div>
  </section>
</div>
