(function () {
  const root = document.querySelector(".home-2d-root");

  if (!root || !window.gsap) {
    return;
  }

  gsap.defaults({
    duration: 0.68,
    ease: "power3.out",
    overwrite: "auto"
  });

  const mm = gsap.matchMedia();

  mm.add(
    {
      reduceMotion: "(prefers-reduced-motion: reduce)",
      motionOK: "(prefers-reduced-motion: no-preference)",
      finePointer: "(pointer: fine) and (min-width: 800px)"
    },
    (context) => {
      const { reduceMotion, motionOK, finePointer } = context.conditions;
      const windowEl = root.querySelector(".home-2d-window");
      const character = root.querySelector("[data-home-character]");
      const panel = root.querySelector("[data-home-panel]");
      const entries = root.querySelectorAll(".home-2d-entry, .home-2d-mini-links a");
      const floatItems = root.querySelectorAll("[data-home-float]");
      const animated = [windowEl, character, panel, ...entries, ...floatItems].filter(Boolean);

      if (reduceMotion) {
        gsap.set(animated, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          clearProps: "transform,visibility"
        });
        return;
      }

      if (motionOK) {
        gsap.set(windowEl, { autoAlpha: 0, y: 18 });
        gsap.set(character, { autoAlpha: 0, x: -28, rotation: -4, scale: 0.92 });
        gsap.set(panel, { autoAlpha: 0, x: 22, scale: 0.96 });
        gsap.set(entries, { autoAlpha: 0, y: 24, rotation: -2 });

        const intro = gsap.timeline({
          defaults: { duration: 0.68, ease: "power3.out" }
        });

        intro
          .to(windowEl, { autoAlpha: 1, y: 0, scale: 1 })
          .to(character, { autoAlpha: 1, x: 0, rotation: -2, scale: 1 }, "<0.16")
          .to(panel, { autoAlpha: 1, x: 0, scale: 1 }, "<0.12")
          .to(entries, {
            autoAlpha: 1,
            y: 0,
            rotation: (index) => [-1.5, 1.2, -0.8, 1.5][index % 4],
            stagger: 0.08
          }, "<0.18")
          .to(character, {
            y: -7,
            rotation: 1.2,
            duration: 2.8,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
          }, ">");

        gsap.to(floatItems, {
          x: (index) => (index % 2 === 0 ? 10 : -10),
          y: (index) => (index % 2 === 0 ? -9 : 9),
          rotation: (index) => (index % 2 === 0 ? 3 : -3),
          duration: 3.2,
          ease: "sine.inOut",
          stagger: 0.16,
          repeat: -1,
          yoyo: true
        });
      }

      if (finePointer) {
        entries.forEach((entry) => {
          const yTo = gsap.quickTo(entry, "y", { duration: 0.28, ease: "power2.out" });
          const rotationTo = gsap.quickTo(entry, "rotation", { duration: 0.28, ease: "power2.out" });

          entry.addEventListener("pointerenter", () => {
            yTo(-5);
            rotationTo(0);
          });

          entry.addEventListener("pointerleave", () => {
            yTo(0);
            rotationTo(0);
          });
        });
      }
    }
  );
})();
