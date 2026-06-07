const notesButton = document.querySelector("[data-save-notes]");
const testimonyButton = document.querySelector("[data-testimony]");
const printButton = document.querySelector("[data-print-letter]");
const searchButton = document.querySelector("[data-search-trails]");
const resetTrailButton = document.querySelector("[data-reset-trail]");
const stepButtons = document.querySelectorAll("[data-complete-step]");
const appSteps = document.querySelectorAll("[data-app-step]");
const progressDots = document.querySelectorAll("[data-progress-dot]");
const appStatus = document.querySelector("[data-app-status]");
const appPages = document.querySelectorAll("[data-page]");

const totalTrailSteps = appSteps.length;
let trailProgress = Number(localStorage.getItem("gold-vein-trail-progress") || "0");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

const setStatus = (button, message) => {
  const status = button.parentElement.querySelector(".form-status");
  if (status) {
    status.textContent = message;
  }
};

const showActivePage = () => {
  const pageId = window.location.hash.replace("#", "");
  const activePage = pageId ? document.getElementById(pageId) : null;

  appPages.forEach((page) => {
    page.classList.toggle("active-page", page === activePage);
  });

  if (activePage) {
    window.requestAnimationFrame(() => {
      activePage.scrollIntoView({ block: "start" });
    });
  }
};

const stepStatusMessages = [
  "You moved into the space and place. Receive the small gift.",
  "Small gift received. Look to the Scripture map.",
  "Scripture map opened. Connect with a brother or sister in Christ.",
  "You connected with someone. Give the treasure and record the fruit.",
  "The trail is complete. Carry the treasure forward."
];

const clampProgress = () => {
  trailProgress = Math.min(Math.max(trailProgress, 0), totalTrailSteps - 1);
};

const renderTrail = () => {
  clampProgress();

  appSteps.forEach((step) => {
    const stepIndex = Number(step.dataset.appStep);
    const button = step.querySelector("[data-complete-step]");
    const isComplete = stepIndex < trailProgress;
    const isActive = stepIndex === trailProgress;
    const isLocked = stepIndex > trailProgress;

    step.classList.toggle("complete", isComplete);
    step.classList.toggle("active", isActive);
    step.classList.toggle("locked", isLocked);
    step.setAttribute("aria-disabled", String(isLocked));

    if (button) {
      button.disabled = isLocked || isComplete;
      if (isComplete) {
        button.textContent = "Completed";
      }
    }
  });

  progressDots.forEach((dot) => {
    const dotIndex = Number(dot.dataset.progressDot);
    dot.classList.toggle("complete", dotIndex < trailProgress);
    dot.classList.toggle("active", dotIndex === trailProgress);
  });

  if (appStatus) {
    appStatus.textContent =
      trailProgress === 0
        ? "Step 1 is ready. Complete it to unlock the next instruction."
        : stepStatusMessages[trailProgress - 1] || "Trail progress saved.";
  }
};

notesButton?.addEventListener("click", () => {
  const form = notesButton.closest("form");
  const data = new FormData(form);
  const notes = Object.fromEntries(data.entries());
  localStorage.setItem("gold-vein-field-notes", JSON.stringify(notes));
  setStatus(notesButton, "Field notes saved in this browser.");
});

testimonyButton?.addEventListener("click", async () => {
  const form = testimonyButton.closest("form");
  const data = new FormData(form);
  const name = data.get("name") || "Anonymous";
  const testimony = data.get("testimony") || "";
  const prepared = `Gold Vein Testimony\n\nName: ${name}\n\nWhat happened:\n${testimony}`;

  try {
    await navigator.clipboard.writeText(prepared);
    setStatus(testimonyButton, "Testimony copied and ready to share.");
  } catch {
    setStatus(testimonyButton, "Testimony prepared. Select the text and copy it manually.");
  }
});

printButton?.addEventListener("click", () => {
  window.print();
});

searchButton?.addEventListener("click", () => {
  setStatus(searchButton, "Gold Vein No. 1 is the available trail in this V1.");
});

stepButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const completedStep = Number(button.dataset.completeStep);
    if (completedStep !== trailProgress) {
      return;
    }

    trailProgress = Math.min(completedStep + 1, totalTrailSteps - 1);
    localStorage.setItem("gold-vein-trail-progress", String(trailProgress));
    renderTrail();
  });
});

resetTrailButton?.addEventListener("click", () => {
  trailProgress = 0;
  localStorage.setItem("gold-vein-trail-progress", "0");
  stepButtons.forEach((button) => {
    const stepIndex = Number(button.dataset.completeStep);
    const labels = [
      "I'm at the location",
      "I received the small gift",
      "I opened the Scripture map",
      "I connected with someone"
    ];
    button.textContent = labels[stepIndex] || button.textContent;
  });
  renderTrail();
});

renderTrail();
showActivePage();
window.addEventListener("hashchange", showActivePage);
