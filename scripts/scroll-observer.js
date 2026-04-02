(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const callouts = document.querySelectorAll('.section-subtitle');

  // Build ordered list of section IDs from DOM order
  const sectionIds = Array.from(sections).map(s => s.id);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;
      const idx = sectionIds.indexOf(id);

      // Update side nav
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });

      // Update margin callouts
      callouts.forEach((callout, i) => {
        callout.classList.toggle('active', i === idx);
      });
    });
  }, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(s => observer.observe(s));
})();
