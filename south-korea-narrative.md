---
layout: full-width
title: "The South Korean Narrative"
permalink: /south-korea-narrative/
---

<div class="flag-container">
  <span title="South Korea" role="img" aria-label="South Korea Flag">🇰🇷</span>
</div>

<div class="accordion">
      <div class="accordion-item">
        <button class="accordion-header">The Strategic Narrative</button>
        <div class="accordion-content">
          <h3>The Strategic Narrative: The Natural Partner</h3>
          <p>The South Korean state and its corporations see India as an essential partner to hedge against China and to access a massive market. The narrative is one of a shared democratic identity and a "risen nation" story.</p>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-header">The Individual's Reality</button>
        <div class="accordion-content">
          <h3>The Individual's Reality: The Prejudice Paradox</h3>
          <p>The positive strategic narrative is constantly undermined by significant social prejudice. This is not rooted in a colonial history, but in a combination of extreme homogeneity, pervasive colorism, and a strong sense of economic hierarchy.</p>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-header">The Individual's Playbook</button>
        <div class="accordion-content">
          <h3>The Individual's Playbook: Closing the Gap</h3>
          <ol>
            <li><strong>Embrace the Top-Level Partnership:</strong> In professional settings, leverage the powerful strategic narrative of partnership.</li>
            <li><strong>Be Prepared for the Social Prejudice:</strong> Understand the cultural context for the prejudice. Do not be shocked by it. Use our <strong><a href="/indian-narrative/framework-for-action/">Framework for Action</a></strong> to assess and respond to individual situations.</li>
          </ol>
        </div>
      </div>
    </div>

<script>
  const links = document.querySelectorAll('.master-link');
  const contents = document.querySelectorAll('.detail-content');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);

      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      contents.forEach(content => {
        if (content.id === targetId) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });
</script>
