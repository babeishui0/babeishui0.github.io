(function () {
  'use strict';
  const main = document.querySelector('#main');
  const profile = main && main.querySelector(':scope > .home-2d-profile');
  if (!profile || !window.fetch || !window.GlassMotion) return;

  const motion = window.GlassMotion;
  const scrollport = document.querySelector('.site-scrollport');
  const cache = new Map();
  const positions = new Map();
  const status = document.createElement('div');
  status.className = 'glass-route-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  document.body.appendChild(status);
  const viewport = main.querySelector(':scope > .glass-content');
  const body = viewport && viewport.querySelector(':scope > .glass-content-body');
  if (!body) return;
  let pending = null;
  let navigating = false;
  let currentURL = new URL(location.href);
  let currentKey = history.state && history.state.glassKey || createKey();
  history.replaceState(Object.assign({}, history.state, { glassKey: currentKey }), '', location.href);
  history.scrollRestoration = 'manual';

  function createKey() { return Date.now().toString(36) + Math.random().toString(36).slice(2); }
  function route(url) {
    return url.origin === location.origin && !url.search &&
      (/^\/(?:publications\/|year-archive\/|cv\/)?$/.test(url.pathname) ||
       /^\/(?:posts|publication)\/.+\/?$/.test(url.pathname));
  }
  function linkURL(link) {
    if (!link || !link.href || link.hasAttribute('download') ||
        (link.target && link.target !== '_self') || link.dataset.noTransition !== undefined) return null;
    const url = new URL(link.href);
    return route(url) ? url : null;
  }
  function profileSignature(element) {
    const copy = element.cloneNode(true);
    copy.querySelectorAll('[id]').forEach(node => node.removeAttribute('id'));
    return copy.innerHTML.replace(/\s+/g, ' ').trim();
  }
  const signature = profileSignature(profile);

  function load(url) {
    const key = url.origin + url.pathname;
    const cached = cache.get(key);
    if (cached && Date.now() - cached.time < 60000) return cached.promise;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const promise = fetch(key, { signal: controller.signal, credentials: 'same-origin' })
      .then(async response => {
        if (!response.ok || response.redirected || !(response.headers.get('content-type') || '').includes('text/html')) throw new Error('Use document navigation');
        const doc = new DOMParser().parseFromString(await response.text(), 'text/html');
        const nextMain = doc.querySelector('#main');
        const nextProfile = nextMain && nextMain.querySelector(':scope > .home-2d-profile');
        if (!nextProfile || !nextMain.querySelector(':scope > .glass-content > .glass-content-body') || profileSignature(nextProfile) !== signature ||
            nextMain.querySelector('script, .language-plotly, .language-mermaid, .page__comments, #disqus_thread') ||
            !doc.body.classList.contains('mountain-glass')) throw new Error('Unsupported page');
        return doc;
      }).finally(() => clearTimeout(timeout));
    cache.set(key, { time: Date.now(), promise });
    if (cache.size > 8) cache.delete(cache.keys().next().value);
    promise.catch(() => cache.delete(key));
    return promise;
  }

  function updateHead(doc) {
    document.title = doc.title;
    const selector = 'meta[name="description"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"], script[type="application/ld+json"]';
    document.head.querySelectorAll(selector).forEach(node => node.remove());
    doc.head.querySelectorAll(selector).forEach(node => document.head.appendChild(node.cloneNode(true)));
  }

  function updateNav(doc) {
    document.querySelectorAll('.masthead a[href]').forEach(link => {
      const next = Array.from(doc.querySelectorAll('.masthead a[href]')).find(item => item.href === link.href);
      const active = next && next.getAttribute('aria-current');
      link.closest('li').classList.toggle('selected', Boolean(active));
      if (active) link.setAttribute('aria-current', active);
      else link.removeAttribute('aria-current');
    });
    document.querySelector('.hidden-links').classList.add('hidden');
    document.querySelector('#site-nav > button').classList.remove('close');
  }

  function restorePosition(url, saved) {
    let target;
    try { target = url.hash && document.getElementById(decodeURIComponent(url.hash.slice(1))); } catch (_) {}
    if (saved) scrollport.scrollTo({ left: saved.x, top: saved.y, behavior: 'instant' });
    else if (target) target.scrollIntoView({ behavior: 'instant' });
    else scrollport.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  function cancelTransition() { motion.cancel(); }

  function navigate(url, options = {}) {
    // Keep only the latest request, but let an active slide finish naturally.
    pending = { url, options, document: load(url).then(doc => ({ doc }), error => ({ error })) };
    if (!navigating) drain();
  }

  async function drain() {
    navigating = true;
    let request;
    try {
      await motion.ready;
      while (pending) {
        request = pending;
        pending = null;
        status.textContent = 'Loading page…';
        let result = await request.document;
        if (pending) continue;
        if (result.error) throw result.error;
        if (request.url.href === currentURL.href && !request.options.pop) continue;
        positions.set(currentKey, { x: scrollport.scrollLeft, y: scrollport.scrollTop });
        main.setAttribute('aria-busy', 'true');
        scrollport.classList.add('is-transitioning');
        const oldHeight = viewport.offsetHeight;
        viewport.style.height = oldHeight + 'px';
        body.inert = true;
        await motion.exit(body);
        // Requests made during the exit replace its destination, not its animation.
        while (pending) {
          request = pending;
          pending = null;
          result = await request.document;
        }
        if (result.error) throw result.error;
        const { url, options } = request;
        const doc = result.doc;
        const nextMain = doc.querySelector('#main').cloneNode(true);
        const saved = options.pop ? positions.get(options.key) : null;
        if (window.MathJax && window.MathJax.typesetClear) window.MathJax.typesetClear([body]);
        main.className = nextMain.className;
        const nextProfile = nextMain.querySelector(':scope > .home-2d-profile');
        profile.querySelector('.home-2d-name').id = nextProfile.querySelector('.home-2d-name').id;
        body.replaceChildren(...nextMain.querySelector('.glass-content-body').childNodes);
        if (!options.pop && url.href !== currentURL.href) {
          currentKey = createKey();
          history.pushState({ glassKey: currentKey }, '', url.href);
        } else if (options.pop) {
          currentKey = options.key || createKey();
          history.replaceState(Object.assign({}, history.state, { glassKey: currentKey }), '', url.href);
        }
        currentURL = url;
        updateHead(doc);
        updateNav(doc);
        document.dispatchEvent(new CustomEvent('site:page-ready'));
        viewport.style.removeProperty('height');
        restorePosition(url, saved);
        // Cancel the held exit and start the incoming transform in the same frame.
        motion.cancel();
        await motion.enter(body);
        scrollport.classList.remove('is-transitioning');
        viewport.style.removeProperty('height');
        body.inert = false;
        main.removeAttribute('aria-busy');
        const heading = body.querySelector('.page__title, .home-2d-section-title');
        if (heading && !options.pop && !url.hash && !pending) {
          heading.setAttribute('tabindex', '-1');
          heading.setAttribute('data-route-focus', options.keyboard ? 'keyboard' : 'pointer');
          heading.focus({ preventScroll: true });
        }
        status.textContent = doc.title;
        if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise([body]).catch(() => {});
      }
    } catch (_) {
      location.assign((pending || request).url.href);
    } finally {
      navigating = false;
      scrollport.classList.remove('is-transitioning');
      body.inert = false;
      viewport.style.removeProperty('height');
      main.removeAttribute('aria-busy');
      status.textContent = document.title;
    }
  }

  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const url = linkURL(event.target.closest('a'));
    if (!url || (url.pathname === currentURL.pathname && url.hash)) return;
    event.preventDefault();
    // Avoid legacy smooth-scroll handlers racing with navigation.
    event.stopPropagation();
    if (url.href === currentURL.href && !navigating) return;
    navigate(url, { keyboard: event.detail === 0 });
  }, true);

  function prefetch(event) {
    const url = linkURL(event.target.closest('a'));
    if (url && url.pathname !== currentURL.pathname) load(url).catch(() => {});
  }
  document.addEventListener('pointerover', prefetch, { passive: true });
  document.addEventListener('focusin', prefetch);
  const connection = navigator.connection;
  if (!connection || (!connection.saveData && !/2g/.test(connection.effectiveType))) {
    const warmNavigation = () => document.querySelectorAll('.masthead a[href]').forEach(link => {
      const url = linkURL(link);
      if (url && url.pathname !== currentURL.pathname) load(url).catch(() => {});
    });
    if (window.requestIdleCallback) window.requestIdleCallback(warmNavigation, { timeout: 1500 });
    else setTimeout(warmNavigation, 600);
  }
  window.addEventListener('popstate', event => {
    const url = new URL(location.href);
    if (url.pathname === currentURL.pathname && !navigating) {
      restorePosition(url, positions.get(event.state && event.state.glassKey));
      currentKey = event.state && event.state.glassKey || currentKey;
      currentURL = url;
      return;
    }
    if (!route(url)) { location.reload(); return; }
    navigate(url, { pop: true, key: event.state && event.state.glassKey });
  });
  window.addEventListener('pagehide', cancelTransition);
  window.addEventListener('pageshow', event => {
    if (event.persisted) { main.removeAttribute('aria-busy'); cancelTransition(); }
  });
})();
