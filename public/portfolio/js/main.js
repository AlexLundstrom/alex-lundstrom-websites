// Reveals the rail's name once the big h1 has scrolled away, so the name never shows twice.
(() => {
  const intro = document.querySelector('.intro');
  if (!intro || !('IntersectionObserver' in window)) return;
  new IntersectionObserver(([e]) => {
    document.documentElement.classList.toggle('intro-passed', !e.isIntersecting);
  }).observe(intro);
})();

// Marks the section currently in view in the section index. The page works without this.
(() => {
  const links = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  if (!links.length || !('IntersectionObserver' in window)) return;

  const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const visible = new Set();

  const update = () => {
    const current = [...byId.keys()].find((id) => visible.has(id));
    links.forEach((a) => a.removeAttribute('aria-current'));
    if (current) byId.get(current).setAttribute('aria-current', 'true');
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
    update();
  }, { rootMargin: '-20% 0px -55% 0px' });

  byId.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
})();
