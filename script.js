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
const redeemButton = document.querySelector("[data-redeem-code-button]");
const resetRedemptionButton = document.querySelector("[data-reset-redemption]");
const redeemPanel = document.querySelector("[data-redeem-panel]");
const redeemState = document.querySelector("[data-redeem-state]");
const redeemCode = document.querySelector("[data-redeem-code]");
const redeemLocation = document.querySelector("[data-redeem-location]");
const redeemAdventure = document.querySelector("[data-redeem-adventure]");
const redeemTreasure = document.querySelector("[data-redeem-treasure]");
const redeemMessage = document.querySelector("[data-redeem-message]");

const totalTrailSteps = appSteps.length;
let trailProgress = Number(localStorage.getItem("gold-vein-trail-progress") || "0");
let activeRedeemCode = "";

const redemptionPasses = {
  "GV-WM-NO1-001": {
    location: "Watermark Coffee Shop",
    adventure: "Gold Vein No. 1",
    treasure: "One coffee"
  }
};

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

const getHashParts = () => {
  const hash = window.location.hash.replace("#", "");
  const [pageId, detail] = hash.split("/");
  return { pageId, detail };
};

const showActivePage = () => {
  const { pageId, detail } = getHashParts();
  const activePage = pageId ? document.getElementById(pageId) : null;

  appPages.forEach((page) => {
    page.classList.toggle("active-page", page === activePage);
  });

  if (pageId === "redeem") {
    activeRedeemCode = detail || "GV-WM-NO1-001";
    renderRedemption();
  }

  if (activePage) {
    window.requestAnimationFrame(() => {
      activePage.scrollIntoView({ block: "start" });
    });
  }
};

const stepStatusMessages = [
  "You moved into the space and place. Receive the small gift.",
  "Small gift received. Look to the passage.",
  "Passage experienced. Connect with a brother or sister in Christ.",
  "You connected with someone. Give the treasure and record the fruit.",
  "The trail is complete. Carry the treasure forward."
];

const clampProgress = () => {
  trailProgress = Math.min(Math.max(trailProgress, 0), totalTrailSteps);
};

const getRedeemedCodes = () => {
  try {
    return JSON.parse(localStorage.getItem("gold-vein-redeemed-codes") || "[]");
  } catch {
    return [];
  }
};

const setRedeemedCodes = (codes) => {
  localStorage.setItem("gold-vein-redeemed-codes", JSON.stringify(codes));
};

const renderRedemption = () => {
  if (!redeemPanel) {
    return;
  }

  const pass = redemptionPasses[activeRedeemCode];
  const redeemedCodes = getRedeemedCodes();
  const isRedeemed = redeemedCodes.includes(activeRedeemCode);

  redeemCode.textContent = activeRedeemCode || "No code found";
  redeemPanel.classList.toggle("redeemed", isRedeemed);
  redeemPanel.classList.toggle("invalid", !pass);

  if (!pass) {
    redeemLocation.textContent = "Unknown";
    redeemAdventure.textContent = "Unknown";
    redeemTreasure.textContent = "Unknown";
    redeemState.textContent = "Invalid Code";
    redeemMessage.textContent =
      "This code is not currently listed as a valid Gold Vein redemption pass.";
    redeemButton.disabled = true;
    return;
  }

  redeemLocation.textContent = pass.location;
  redeemAdventure.textContent = pass.adventure;
  redeemTreasure.textContent = pass.treasure;
  redeemButton.disabled = isRedeemed;

  if (isRedeemed) {
    redeemState.textContent = "Already Redeemed";
    redeemMessage.textContent =
      "This coffee pass has already been marked redeemed on this device.";
  } else {
    redeemState.textContent = "Valid Pass";
    redeemMessage.textContent =
      "Redeem one coffee from the Gold Vein balance, then mark this code redeemed.";
  }
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

    trailProgress = Math.min(completedStep + 1, totalTrailSteps);
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
      "I experienced the passage",
      "I connected with someone",
      "I gave the treasure"
    ];
    button.textContent = labels[stepIndex] || button.textContent;
  });
  renderTrail();
});

redeemButton?.addEventListener("click", () => {
  const pass = redemptionPasses[activeRedeemCode];

  if (!pass) {
    renderRedemption();
    return;
  }

  const redeemedCodes = getRedeemedCodes();
  if (!redeemedCodes.includes(activeRedeemCode)) {
    redeemedCodes.push(activeRedeemCode);
    setRedeemedCodes(redeemedCodes);
  }

  renderRedemption();
});

resetRedemptionButton?.addEventListener("click", () => {
  const redeemedCodes = getRedeemedCodes().filter((code) => code !== activeRedeemCode);
  setRedeemedCodes(redeemedCodes);
  renderRedemption();
});

renderTrail();
showActivePage();
window.addEventListener("hashchange", showActivePage);
