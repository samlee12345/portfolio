(function () {
  const placeholder = document.getElementById('site-nav');
  if (!placeholder) return;

  // Determine active page from data attribute set on the placeholder
  const activePage = placeholder.getAttribute('data-active') || 'work';

  const links = ['Work', 'Resume', 'Contact'].map(label => {
    const key = label.toLowerCase();
    const isActive = key === activePage;
    const href = key === 'work' ? 'index.html' : key === 'resume' ? 'resume.pdf' : key + '.html';
    const target = key === 'resume' ? ' target="_blank"' : '';
    return `<a href="${href}"${target}
      class="site-nav-link${isActive ? ' active' : ''}">${label}</a>`;
  }).join('');

  placeholder.outerHTML = `
    <nav class="site-nav">
      <div class="site-nav-inner">
        <a href="index.html" class="site-nav-logo">Sam Lee</a>
        <div class="site-nav-links">${links}</div>
      </div>
    </nav>`;
})();
