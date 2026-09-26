/**
 * AngleCore icon set — geometric, angle/line-based SVGs replacing emoji.
 * Every icon shares one visual language: open angles and polygon nodes,
 * echoing the interior/exterior angle duality from the AngleCore engines.
 * Exposes window.AngleCoreIcons = { defs, mount }
 */
(function () {
  const wrap = (paths) =>
    `<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${paths}</svg>`;

  const defs = {
    brain: wrap(`<path d="M8 4a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 6 0V6a2 2 0 0 0-3-2Z"/><path d="M16 4a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a3 3 0 0 1-6 0V6a2 2 0 0 1 3-2Z"/>`),
    clock: wrap(`<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>`),
    network: wrap(`<circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6.7 7.3 11 16M17.3 7.3 13 16M7 6h10"/>`),
    node: wrap(`<path d="M12 3 20 8v8l-8 5-8-5V8Z"/><path d="M12 3v18M4 8l8 5 8-5"/>`),
    spark: wrap(`<path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3.5 3.5M18 18l-3.5-3.5M18 6l-3.5 3.5M6 18l3.5-3.5"/>`),
    eye: wrap(`<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>`),
    mail: wrap(`<path d="M3 6h18v12H3Z"/><path d="M3 6l9 7 9-7"/>`),
    code: wrap(`<path d="M8 6 2 12l6 6M16 6l6 6-6 6"/>`),
    doc: wrap(`<path d="M6 3h9l3 3v15H6Z"/><path d="M15 3v3h3M9 12h6M9 16h6"/>`),
    chart: wrap(`<path d="M4 20V10M12 20V4M20 20v-7"/><path d="M2 20h20"/>`),
    hf: wrap(`<circle cx="12" cy="10" r="7"/><path d="M8 9.5c.5 1 1.4 1.5 4 1.5s3.5-.5 4-1.5M9 8.5h.01M15 8.5h.01"/>`),
    pin: wrap(`<path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="10" r="2.3"/>`),
    flask: wrap(`<path d="M9 3h6M10 3v6l-6 10a2 2 0 0 0 1.8 3h12.4a2 2 0 0 0 1.8-3L14 9V3"/>`),
    handshake: wrap(`<path d="M2 12l5-4 4 3 3-2 5 4"/><path d="M7 11l4 4 3-3M16 12l3 3-2 2"/>`),
    rocket: wrap(`<path d="M12 2c3 2 5 6 5 10l-5 5-5-5c0-4 2-8 5-10Z"/><path d="M7 15l-3 5 5-3M17 15l3 5-5-3"/>`),
    mic: wrap(`<rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/>`),
    org: wrap(`<path d="M4 21V6l8-3 8 3v15Z"/><path d="M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01"/>`)
  };

  function mount(root) {
    (root || document).querySelectorAll('[data-icon]').forEach((el) => {
      const key = el.getAttribute('data-icon');
      if (defs[key]) el.innerHTML = defs[key];
    });
  }

  window.AngleCoreIcons = { defs, mount };
})();
