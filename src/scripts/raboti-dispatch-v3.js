(() => {
  const stage = document.querySelector('[data-raboti-dispatch]');
  if (!stage) return;

  const svg = stage.querySelector('.raboti-dispatch__svg');
  const flows = Array.from(stage.querySelectorAll('[data-flow]'));
  const externalControls = Array.from(document.querySelectorAll('[data-raboti-worker]'));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const workers = ['vdiga', 'pishe', 'pomaga'];
  const cycleMs = 10000;

  let currentIndex = 0;
  let cycleTimer = null;
  let isVisible = true;
  let interactionHoldUntil = 0;

  const validWorker = (name) => workers.includes(name);

  const pauseSvg = () => {
    if (!svg || typeof svg.pauseAnimations !== 'function') return;

    if (document.hidden || !isVisible || reducedMotion.matches) {
      svg.pauseAnimations();
    } else {
      svg.unpauseAnimations();
    }
  };

  const restartSvgTimeline = () => {
    if (!svg || reducedMotion.matches) return;
    if (typeof svg.setCurrentTime === 'function') {
      svg.setCurrentTime(0);
    }
    pauseSvg();
  };

  const syncExternalControls = (worker) => {
    externalControls.forEach((control) => {
      const active = control.dataset.rabotiWorker === worker;
      control.classList.toggle('is-raboti-motion-active', active);

      if (control.hasAttribute('aria-selected')) {
        control.setAttribute('aria-selected', active ? 'true' : 'false');
      }
      if (control.hasAttribute('aria-pressed')) {
        control.setAttribute('aria-pressed', active ? 'true' : 'false');
      }
    });
  };

  const setWorker = (worker, options = {}) => {
    if (!validWorker(worker)) return;

    currentIndex = workers.indexOf(worker);
    stage.dataset.worker = worker;

    flows.forEach((flow) => {
      flow.classList.toggle('is-active', flow.dataset.flow === worker);
    });

    syncExternalControls(worker);
    restartSvgTimeline();

    if (options.holdMs) {
      interactionHoldUntil = Date.now() + options.holdMs;
    }
  };

  const scheduleNext = () => {
    clearTimeout(cycleTimer);

    if (reducedMotion.matches) return;

    cycleTimer = window.setTimeout(() => {
      const now = Date.now();

      if (now < interactionHoldUntil) {
        scheduleNext();
        return;
      }

      currentIndex = (currentIndex + 1) % workers.length;
      setWorker(workers[currentIndex]);
      scheduleNext();
    }, cycleMs);
  };

  const initialWorkerFromPage = () => {
    const selected = externalControls.find((control) => {
      return (
        control.classList.contains('active') ||
        control.classList.contains('is-active') ||
        control.getAttribute('aria-selected') === 'true'
        || control.getAttribute('aria-pressed') === 'true'
      );
    });

    const worker = selected?.dataset.rabotiWorker;
    return validWorker(worker) ? worker : 'vdiga';
  };

  externalControls.forEach((control) => {
    control.addEventListener('click', () => {
      const worker = control.dataset.rabotiWorker;
      if (!validWorker(worker)) return;

      setWorker(worker, { holdMs: 18000 });
      scheduleNext();
    });

    control.addEventListener('pointerenter', () => {
      if (window.matchMedia('(hover: hover)').matches) {
        const worker = control.dataset.rabotiWorker;
        if (validWorker(worker)) {
          setWorker(worker, { holdMs: 6000 });
        }
      }
    });
  });

  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry.isIntersecting && entry.intersectionRatio > 0.08;
      pauseSvg();
    },
    { threshold: [0, 0.08, 0.25] }
  );

  observer.observe(stage);

  document.addEventListener('visibilitychange', pauseSvg);

  if (typeof reducedMotion.addEventListener === 'function') {
    reducedMotion.addEventListener('change', () => {
      pauseSvg();

      if (reducedMotion.matches) {
        clearTimeout(cycleTimer);
      } else {
        restartSvgTimeline();
        scheduleNext();
      }
    });
  }

  setWorker(initialWorkerFromPage());
  scheduleNext();

  window.RabotiDispatch = {
    setWorker(worker) {
      setWorker(worker, { holdMs: 18000 });
      scheduleNext();
    }
  };
})();
