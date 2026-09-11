(() => {
  const machine = document.querySelector("[data-raboti-work-machine]");
  if (!machine) return;

  const svgs = [...machine.querySelectorAll(".rwm-svg")];
  const flows = [...machine.querySelectorAll("[data-rwm-flow]")];
  const stations = [...machine.querySelectorAll("[data-rwm-worker]")];
  const mobile = [...machine.querySelectorAll("[data-rwm-mobile-worker]")];
  const toggle = machine.querySelector("[data-rwm-motion-toggle]");
  const toggleLabel = machine.querySelector("[data-rwm-motion-label]");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const workers = ["vdiga", "pishe", "pomaga"];
  const resultCopy = {
    vdiga: {
      request: "Клиент се обажда за час",
      title: "Часът е в календара ви.",
      detail: "Vdiga проверява кога има свободно място и записва клиента. Екипът получава обобщение на разговора.",
      icon: "result-appointment.svg",
    },
    pishe: {
      request: "Ново работно време за сайта",
      title: "Сайтът показва новото работно време.",
      detail: "Pishe публикува предварително одобрената промяна. Вие виждате какво е обновено.",
      icon: "result-website.svg",
    },
    pomaga: {
      request: "Ново запитване пристига по имейл",
      title: "Запитването е при отговорния колега.",
      detail: "Pomaga добавя данните в CRM и възлага задача на отговорния колега. Към задачата е приложена информацията от имейла.",
      icon: "result-assignment.svg",
    },
  };
  let visible = true;
  let userPaused = false;

  const shouldPause = () => document.hidden || !visible || reduced.matches || userPaused;

  const applyPause = () => {
    const paused = shouldPause();
    machine.classList.toggle("is-motion-paused", paused);
    svgs.forEach((svg) => {
      if (typeof svg.pauseAnimations !== "function") return;
      paused ? svg.pauseAnimations() : svg.unpauseAnimations();
    });
    if (toggle) toggle.setAttribute("aria-pressed", String(userPaused));
    if (toggleLabel) toggleLabel.textContent = userPaused ? "Продължаване на анимацията" : "Пауза на анимацията";
  };

  const restart = () => {
    if (!reduced.matches) {
      svgs.forEach((svg) => {
        if (typeof svg.setCurrentTime === "function") svg.setCurrentTime(0);
      });
    }
    applyPause();
  };

  const updateResult = (worker) => {
    const result = machine.closest(".rh-demo")?.querySelector("[data-rwm-result]");
    const data = resultCopy[worker];
    if (!result || !data) return;
    const request = result.querySelector("[data-rwm-result-request]");
    const title = result.querySelector("[data-rwm-result-title]");
    const detail = result.querySelector("[data-rwm-result-detail]");
    const icon = result.querySelector("[data-rwm-result-icon]");
    result.classList.add("is-changing");
    requestAnimationFrame(() => {
      if (request) request.textContent = data.request;
      if (title) title.textContent = data.title;
      if (detail) detail.textContent = data.detail;
      if (icon) icon.src = icon.src.replace(/result-[^/]+\.svg(?:\?.*)?$/, data.icon);
      result.classList.remove("is-changing");
    });
  };

  const sync = (worker) => {
    stations.forEach((button) => {
      const active = button.dataset.rwmWorker === worker;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    mobile.forEach((button) => {
      const active = button.dataset.rwmMobileWorker === worker;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  };

  const setWorker = (worker) => {
    if (!workers.includes(worker)) return;
    machine.dataset.worker = worker;
    flows.forEach((flow) => flow.classList.toggle("is-active", flow.dataset.rwmFlow === worker));
    sync(worker);
    updateResult(worker);
    restart();
  };

  stations.forEach((button) => button.addEventListener("click", () => setWorker(button.dataset.rwmWorker)));
  mobile.forEach((button) => button.addEventListener("click", () => setWorker(button.dataset.rwmMobileWorker)));
  toggle?.addEventListener("click", () => {
    userPaused = !userPaused;
    applyPause();
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio > 0.08;
      applyPause();
    }, { threshold: [0, 0.08, 0.25] });
    observer.observe(machine);
  }
  document.addEventListener("visibilitychange", applyPause);
  reduced.addEventListener?.("change", applyPause);

  setWorker("vdiga");
  window.RabotiWorkMachine = { setWorker };
})();
