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
    <div class="home-2d-window" data-home-animate>
      <div class="home-2d-main">
        {% include profile-left.html title_id="home-2d-title" %}

        <article class="home-2d-about" data-home-panel>
          <h2 class="home-2d-section-title">About Me</h2>
          <p>
            I am a Ph.D. student at <a href="https://www.um.edu.mo/">University of Macau</a>. My research focuses on efficient digital circuits, compute-in-memory architecture, and hardware-software co-design for emerging AI workloads. Before that, I received my M.Phil. degree from <a href="https://www.hkust-gz.edu.cn/">HKUST(GZ)</a>.
          </p>

          <section class="home-2d-education" aria-labelledby="home-education-title">
            <h2 id="home-education-title">Education</h2>
            <ol>
              <li>
                <span class="home-2d-education__time">2026-present</span>
                <span><strong>Ph.D. student</strong>, University of Macau</span>
              </li>
              <li>
                <span class="home-2d-education__time">2026</span>
                <span><strong>M.Phil.</strong>, The Hong Kong University of Science and Technology (Guangzhou)</span>
              </li>
              <li>
                <span class="home-2d-education__time">2024</span>
                <span><strong>B.E.</strong>, Beijing Institute of Technology</span>
              </li>
            </ol>
          </section>

          <section class="home-2d-news" aria-labelledby="home-news-title">
            <h2 id="home-news-title">News</h2>
            <ul>
              <li><time datetime="2026-06-19">06/19/2026</time><span><strong>ISCAS'26:</strong> My two ISCAS'26 papers are now available online with DOI links.</span></li>
              <li><time datetime="2026-01-20">01/20/2026</time><span><strong>ISCAS'26:</strong> One first-authored paper, <strong>InFP: A 17.97 TFLOPS/W Reconfigurable SRAM Based Computing-in-Memory Macro for BF16 MAC Operations</strong>, has been accepted by ISCAS'26.</span></li>
              <li><time datetime="2026-01-20">01/20/2026</time><span><strong>ISCAS'26:</strong> One co-authored paper, <strong>CIM-SIFT: An Efficient Compute-in-Memory Accelerator for Real-time SIFT Algorithm</strong>, has been accepted by ISCAS'26.</span></li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  </section>
</div>
