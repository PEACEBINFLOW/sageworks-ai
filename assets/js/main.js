/**
 * Main entry point — the only script index.html links to.
 * Wires in the anglecore/ modules (icons + duality tilt), footer year,
 * and the section reveal-on-scroll.
 */
document.addEventListener('DOMContentLoaded', () => {
  if (window.AngleCoreIcons) window.AngleCoreIcons.mount();
  if (window.AngleCoreCore) window.AngleCoreCore.initTilt();

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const sections = document.querySelectorAll('.section');
  if ('IntersectionObserver' in window && sections.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach((s) => io.observe(s));
  } else {
    sections.forEach((s) => s.classList.add('visible'));
  }
});
