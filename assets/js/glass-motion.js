(function () {
  "use strict";

  const portrait = document.querySelector(".home-2d-portrait");
  const avatar = portrait && portrait.querySelector(".home-2d-avatar-motion");
  if (!avatar) return;

  const motion = window.matchMedia("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine) and (min-width: 48em)");
  let frame = 0;
  let point;

  function reset() {
    cancelAnimationFrame(frame);
    frame = 0;
    avatar.style.removeProperty("--avatar-x");
    avatar.style.removeProperty("--avatar-y");
  }

  function move(event) {
    if (!motion.matches) return;
    point = { x: event.clientX, y: event.clientY };
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const rect = portrait.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = Math.max(-1, Math.min(1, (point.x - rect.left) / rect.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (point.y - rect.top) / rect.height * 2 - 1));
      avatar.style.setProperty("--avatar-x", (-y * 4).toFixed(2) + "deg");
      avatar.style.setProperty("--avatar-y", (x * 4).toFixed(2) + "deg");
    });
  }

  portrait.addEventListener("pointermove", move, { passive: true });
  portrait.addEventListener("pointerleave", reset);
  portrait.addEventListener("pointercancel", reset);
  motion.addEventListener("change", reset);
  window.addEventListener("blur", reset);
  window.addEventListener("pagehide", reset);
})();
