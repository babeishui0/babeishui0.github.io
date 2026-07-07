(function () {
  const root = document.querySelector(".home-glass-root");

  if (!root || !window.gsap) {
    return;
  }

  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.defaults({
    duration: 0.72,
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
      const heroItems = root.querySelectorAll("[data-home-animate]");
      const revealItems = root.querySelectorAll("[data-home-reveal]");
      const cards = root.querySelectorAll("[data-tilt]");
      const floatItems = root.querySelectorAll("[data-home-float]");

      if (reduceMotion) {
        gsap.set([...heroItems, ...revealItems, ...cards, ...floatItems], {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          clearProps: "transform,visibility"
        });
        return;
      }

      if (motionOK) {
        gsap.set(heroItems, { autoAlpha: 0, y: 24, scale: 0.98 });
        gsap.set(revealItems, { autoAlpha: 0, y: 34, scale: 0.985 });

        const intro = gsap.timeline({
          defaults: { duration: 0.78, ease: "power3.out" }
        });

        intro
          .to(heroItems, { autoAlpha: 1, y: 0, scale: 1, stagger: 0.08 })
          .from(".home-glass-avatar", {
            autoAlpha: 0,
            scale: 0.86,
            rotation: -3,
            duration: 0.86
          }, "<0.12")
          .from(".home-glass-facts li", {
            autoAlpha: 0,
            y: 14,
            stagger: 0.08,
            duration: 0.48
          }, "<0.18")
          .to(".home-glass-hero", {
            y: -6,
            duration: 3.2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
          }, ">");

        gsap.to(floatItems, {
          y: (index) => (index % 2 === 0 ? -10 : 10),
          x: (index) => (index % 2 === 0 ? 8 : -8),
          rotation: (index) => (index % 2 === 0 ? 2 : -2),
          duration: 3.4,
          ease: "sine.inOut",
          stagger: 0.18,
          repeat: -1,
          yoyo: true
        });

        if (window.ScrollTrigger) {
          ScrollTrigger.batch(revealItems, {
            start: "top 86%",
            once: true,
            onEnter: (batch) => {
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                stagger: { each: 0.07, from: "start" },
                duration: 0.72
              });
            }
          });

          gsap.to(root, {
            "--home-glass-drift": "28px",
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.8
            }
          });

          if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => ScrollTrigger.refresh());
          }
        } else {
          gsap.to(revealItems, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: 0.07
          });
        }
      }

      if (finePointer) {
        cards.forEach((card) => {
          const rotateXTo = gsap.quickTo(card, "rotationX", { duration: 0.45, ease: "power3" });
          const rotateYTo = gsap.quickTo(card, "rotationY", { duration: 0.45, ease: "power3" });
          const yTo = gsap.quickTo(card, "y", { duration: 0.45, ease: "power3" });

          card.addEventListener("pointermove", (event) => {
            const rect = card.getBoundingClientRect();
            const relX = (event.clientX - rect.left) / rect.width - 0.5;
            const relY = (event.clientY - rect.top) / rect.height - 0.5;

            rotateXTo(relY * -5);
            rotateYTo(relX * 5);
            yTo(-4);
          });

          card.addEventListener("pointerleave", () => {
            rotateXTo(0);
            rotateYTo(0);
            yTo(0);
          });
        });
      }
    }
  );
})();
