/*
  NYCSM Homepage Scripts
  ----------------------
  Notes for teammate:
  1) Keep this file only for lightweight UX behavior.
  2) Do not put layout styling here; use styles.css.
  3) IMAGE REPLACEMENT is handled in index.html comments near each <img>.
*/

(function () {
  // Pause moving strips on hover for better readability.
  var movingStrips = document.querySelectorAll('.news-inner, .marquee-inner');
  movingStrips.forEach(function (strip) {
    strip.addEventListener('mouseenter', function () {
      strip.style.animationPlayState = 'paused';
    });
    strip.addEventListener('mouseleave', function () {
      strip.style.animationPlayState = 'running';
    });
  });

  // Smooth-scroll fallback for browsers that ignore CSS smooth behavior.
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      var href = link.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Mobile nav toggle.
  document.querySelectorAll('.nav-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var nav = toggle.closest('nav');
      var links = nav.querySelector('.nav-links');
      var expanded = toggle.classList.toggle('open');
      if (links) {
        links.classList.toggle('active', expanded);
      }
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  });

  // Social menu toggle in the topbar.
  

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.topbar-right')) {
      document.querySelectorAll('.social-toggle.active').forEach(function (toggle) {
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
      document.querySelectorAll('.social-menu.active').forEach(function (menu) {
        menu.classList.remove('active');
      });
    }
  });
})();
