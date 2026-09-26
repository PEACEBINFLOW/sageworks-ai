/**
 * AngleCore-branded card behavior — a light interior/exterior duality
 * tilt effect, applied only to cards tagged data-anglecore (AngleCore
 * Business OS, HF Space, Dungeon Engine, Focus Interface Engine).
 * Exposes window.AngleCoreCore = { initTilt }
 */
(function () {
  function initTilt(root) {
    const cards = (root || document).querySelectorAll('[data-anglecore]');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-4px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  window.AngleCoreCore = { initTilt };
})();
