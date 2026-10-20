(function () {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const running = new Set();
  const scrollport = document.querySelector('.site-scrollport');
  if (scrollport) {
    const measure = () => document.documentElement.style.setProperty('--site-content-height', scrollport.clientHeight + 'px');
    measure();
    if (window.ResizeObserver) new ResizeObserver(measure).observe(scrollport);
    else window.addEventListener('resize', measure);
  }

  function cancel() {
    running.forEach(animation => animation.cancel());
    running.clear();
  }

  async function animate(element, frames, duration, hold = false, delay = 0) {
    if (!element || reduced.matches || !Element.prototype.animate) return;
    const animation = element.animate(frames, {
      duration, delay, easing: 'cubic-bezier(.4, 0, .2, 1)', fill: 'both'
    });
    running.add(animation);
    await animation.finished.catch(() => {});
    if (!hold) { animation.cancel(); running.delete(animation); }
  }

  function offset(body, incoming) {
    const narrow = window.matchMedia('(max-width: 64em)').matches;
    const rect = body.getBoundingClientRect();
    const transform = getComputedStyle(body).transform;
    const matrix = new DOMMatrixReadOnly(transform === 'none' ? undefined : transform);
    const left = rect.left - matrix.m41;
    const top = rect.top - matrix.m42;
    const bounds = scrollport && scrollport.contains(body) ? scrollport.getBoundingClientRect() :
      { top: 0, left: 0, right: window.innerWidth, bottom: window.innerHeight };
    // Travel past the viewport edge, even when the outgoing card is short.
    const distance = narrow ? (incoming ? bounds.right - left : left + rect.width - bounds.left) + 40 :
      (incoming ? top + rect.height - bounds.top : bounds.bottom - top) + 40;
    return narrow ? `translateX(${incoming ? distance : -distance}px)` :
      `translateY(${incoming ? -distance : distance}px)`;
  }

  function exit(body) {
    return animate(body, [{ transform: 'translate(0, 0)' },
      { transform: offset(body, false) }], 400, true);
  }

  function enter(body, initial = false) {
    // Transform the complete surface; opacity/filter would flatten its backdrop.
    const start = offset(body, true);
    return animate(body, [{ transform: start }, { transform: 'translate(0, 0)' }], initial ? 1000 : 600);
  }

  const footer = document.querySelector('.page__footer');
  function footerEnter() {
    return animate(footer, [
      { opacity: 0 },
      { opacity: 1 }
    ], 700, false, 300);
  }

  window.GlassMotion = { enter, exit, cancel };
  reduced.addEventListener('change', cancel);
  const body = document.querySelector('#main > .glass-content > .glass-content-body');
  const initialSurfaces = body ? [
    document.querySelector('.masthead'),
    document.querySelector('#main > .home-2d-profile'),
    body
  ].filter(Boolean) : [];
  window.GlassMotion.ready = !location.hash ?
    Promise.all([...initialSurfaces.map(surface => enter(surface, true)),
      ...(body ? [footerEnter()] : [])]) : Promise.resolve();
  document.documentElement.classList.remove('glass-entering');
})();
