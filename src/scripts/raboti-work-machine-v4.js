(() => {
  const machine = document.querySelector("[data-raboti-work-machine]");
  if (!machine) return;
  const svgs = [...machine.querySelectorAll(".rwm-svg")];
  const flows = [...machine.querySelectorAll("[data-rwm-flow]")];
  const stations = [...machine.querySelectorAll("[data-rwm-worker]")];
  const mobile = [...machine.querySelectorAll("[data-rwm-mobile-worker]")];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const hover = matchMedia("(hover: hover)");
  const narrow = matchMedia("(max-width: 767px)");
  const workers = ["vdiga", "pishe", "pomaga"];
  const cycleMs = 7700;
  let index = 0,
    timer = null,
    visible = true,
    holdUntil = 0;
  const valid = (w) => workers.includes(w);
  const pause = () => {
    const paused = document.hidden || !visible || reduced.matches;
    machine.classList.toggle("is-motion-paused", paused);
    svgs.forEach((svg) => {
      if (typeof svg.pauseAnimations !== "function") return;
      paused ? svg.pauseAnimations() : svg.unpauseAnimations();
    });
  };
  const restart = () => {
    if (reduced.matches) return;
    svgs.forEach((svg) => {
      if (typeof svg.setCurrentTime === "function") svg.setCurrentTime(0);
    });
    pause();
  };
  const sync = (w) => {
    stations.forEach((b) => {
      const a = b.dataset.rwmWorker === w;
      b.classList.toggle("is-active", a);
      b.setAttribute("aria-pressed", a ? "true" : "false");
    });
    mobile.forEach((b) => {
      const active = b.dataset.rwmMobileWorker === w;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });
  };
  const setWorker = (w, { holdMs = 0 } = {}) => {
    if (!valid(w)) return;
    index = workers.indexOf(w);
    machine.dataset.worker = w;
    flows.forEach((f) =>
      f.classList.toggle("is-active", f.dataset.rwmFlow === w),
    );
    sync(w);
    if (holdMs > 0) holdUntil = Date.now() + holdMs;
    restart();
  };
  const schedule = () => {
    clearTimeout(timer);
    if (reduced.matches || narrow.matches) return;
    timer = setTimeout(() => {
      if (Date.now() < holdUntil) {
        schedule();
        return;
      }
      index = (index + 1) % workers.length;
      setWorker(workers[index]);
      schedule();
    }, cycleMs);
  };
  stations.forEach((b) => {
    b.addEventListener("click", () => {
      setWorker(b.dataset.rwmWorker, { holdMs: 18000 });
      schedule();
    });
    b.addEventListener("pointerenter", () => {
      if (!hover.matches) return;
      setWorker(b.dataset.rwmWorker, { holdMs: 6200 });
    });
  });
  mobile.forEach((b) =>
    b.addEventListener("click", () => {
      setWorker(b.dataset.rwmMobileWorker);
    }),
  );
  const io = new IntersectionObserver(
    ([e]) => {
      visible = e.isIntersecting && e.intersectionRatio > 0.08;
      pause();
    },
    { threshold: [0, 0.08, 0.25] },
  );
  io.observe(machine);
  document.addEventListener("visibilitychange", pause);
  if (typeof reduced.addEventListener === "function")
    reduced.addEventListener("change", () => {
      pause();
      if (reduced.matches) clearTimeout(timer);
      else {
        restart();
        schedule();
      }
    });
  if (typeof narrow.addEventListener === "function")
    narrow.addEventListener("change", () => {
      clearTimeout(timer);
      schedule();
    });
  setWorker("vdiga");
  schedule();
  window.RabotiWorkMachine = {
    setWorker(w) {
      setWorker(w, { holdMs: 18000 });
      schedule();
    },
  };
})();
