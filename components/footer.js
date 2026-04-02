(function () {
  const placeholder = document.getElementById('site-footer');
  if (!placeholder) return;

  placeholder.outerHTML = `
    <footer class="site-footer">
      <p class="site-footer-name">Sam Lee</p>
      <div class="site-footer-links">
        <a href="https://www.linkedin.com/in/samlee616/" class="site-footer-link" target="_blank">LinkedIn</a>
        <a href="mailto:samlee.616@gmail.com" class="site-footer-link">Email</a>
        <a href="resume.pdf" class="site-footer-link">Resume</a>
      </div>
    </footer>`;
})();
