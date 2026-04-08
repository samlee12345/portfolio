(function () {
  const targets = document.querySelectorAll('section[id], .cs-subsection-block[id]');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const callouts = document.querySelectorAll('.section-subtitle');

  // Build ordered list of section IDs from DOM order (for callout index)
  const sectionIds = Array.from(sections).map(s => s.id);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;
      const idx = sectionIds.indexOf(id);

      // Update side nav: highlight the matching link, and keep parent section link active too
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const isMatch = href === '#' + id;
        // For subsection links, also keep the parent section link active
        const parentSection = entry.target.closest('section[id]');
        const isParent = parentSection && href === '#' + parentSection.id && !link.classList.contains('nav-link-sub');
        link.classList.toggle('active', isMatch || isParent);
      });

      // Update margin callouts (keyed to section index, not subsections)
      if (idx !== -1) {
        callouts.forEach((callout, i) => {
          callout.classList.toggle('active', i === idx);
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  });

  targets.forEach(t => observer.observe(t));
})();
