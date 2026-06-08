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
const heroAdventureToggle = document.querySelector("[data-toggle-hero-adventures]");
const heroAdventureChooser = document.querySelector("[data-hero-adventures]");
const redeemButton = document.querySelector("[data-redeem-code-button]");
const resetRedemptionButton = document.querySelector("[data-reset-redemption]");
const checkLocationButton = document.querySelector("[data-check-location]");
const locationStatus = document.querySelector("[data-location-status]");
const companionTouchButton = document.querySelector("[data-companion-touch]");
const companionNameInput = document.querySelector("[data-companion-name]");
const companionStatus = document.querySelector("[data-companion-status]");
const giftTypeInputs = document.querySelectorAll("[data-gift-type]");
const witnessNoteInput = document.querySelector("[data-witness-note]");
const witnessConfirmButton = document.querySelector("[data-witness-confirm]");
const witnessStatus = document.querySelector("[data-witness-status]");
const resetGlobalTrailButton = document.querySelector("[data-reset-global-trail]");
const globalStepButtons = document.querySelectorAll("[data-complete-global-step]");
const globalSteps = document.querySelectorAll("[data-global-step]");
const globalProgressDots = document.querySelectorAll("[data-global-progress-dot]");
const globalAppStatus = document.querySelector("[data-global-app-status]");
const checkGlobalLocationButton = document.querySelector("[data-check-global-location]");
const globalLocationStatus = document.querySelector("[data-global-location-status]");
const globalPassConfirmButton = document.querySelector("[data-global-pass-confirm]");
const globalPassStatus = document.querySelector("[data-global-pass-status]");
const globalCompanionTouchButton = document.querySelector("[data-global-companion-touch]");
const globalCompanionNameInput = document.querySelector("[data-global-companion-name]");
const globalCompanionStatus = document.querySelector("[data-global-companion-status]");
const globalGiftTypeInputs = document.querySelectorAll("[data-global-gift-type]");
const globalWitnessNoteInput = document.querySelector("[data-global-witness-note]");
const globalWitnessConfirmButton = document.querySelector("[data-global-witness-confirm]");
const globalWitnessStatus = document.querySelector("[data-global-witness-status]");
const resetHomeTrailButton = document.querySelector("[data-reset-home-trail]");
const homeStepButtons = document.querySelectorAll("[data-complete-home-step]");
const homeSteps = document.querySelectorAll("[data-home-step]");
const homeProgressDots = document.querySelectorAll("[data-home-progress-dot]");
const homeAppStatus = document.querySelector("[data-home-app-status]");
const homePlaceConfirmButton = document.querySelector("[data-home-place-confirm]");
const homePlaceStatus = document.querySelector("[data-home-place-status]");
const homePassConfirmButton = document.querySelector("[data-home-pass-confirm]");
const homePassStatus = document.querySelector("[data-home-pass-status]");
const homeCompanionTouchButton = document.querySelector("[data-home-companion-touch]");
const homeCompanionNameInput = document.querySelector("[data-home-companion-name]");
const homeCompanionStatus = document.querySelector("[data-home-companion-status]");
const homeGiftTypeInputs = document.querySelectorAll("[data-home-gift-type]");
const homeWitnessNoteInput = document.querySelector("[data-home-witness-note]");
const homeWitnessConfirmButton = document.querySelector("[data-home-witness-confirm]");
const homeWitnessStatus = document.querySelector("[data-home-witness-status]");
const resetEmmausTrailButton = document.querySelector("[data-reset-emmaus-trail]");
const emmausStepButtons = document.querySelectorAll("[data-complete-emmaus-step]");
const emmausSteps = document.querySelectorAll("[data-emmaus-step]");
const emmausProgressDots = document.querySelectorAll("[data-emmaus-progress-dot]");
const emmausAppStatus = document.querySelector("[data-emmaus-app-status]");
const emmausPlaceConfirmButton = document.querySelector("[data-emmaus-place-confirm]");
const emmausPlaceStatus = document.querySelector("[data-emmaus-place-status]");
const emmausPassConfirmButton = document.querySelector("[data-emmaus-pass-confirm]");
const emmausPassStatus = document.querySelector("[data-emmaus-pass-status]");
const emmausCompanionTouchButton = document.querySelector("[data-emmaus-companion-touch]");
const emmausCompanionNameInput = document.querySelector("[data-emmaus-companion-name]");
const emmausCompanionStatus = document.querySelector("[data-emmaus-companion-status]");
const emmausGiftTypeInputs = document.querySelectorAll("[data-emmaus-gift-type]");
const emmausWitnessNoteInput = document.querySelector("[data-emmaus-witness-note]");
const emmausWitnessConfirmButton = document.querySelector("[data-emmaus-witness-confirm]");
const emmausWitnessStatus = document.querySelector("[data-emmaus-witness-status]");
const redeemPanel = document.querySelector("[data-redeem-panel]");
const redeemState = document.querySelector("[data-redeem-state]");
const redeemCode = document.querySelector("[data-redeem-code]");
const redeemLocation = document.querySelector("[data-redeem-location]");
const redeemAdventure = document.querySelector("[data-redeem-adventure]");
const redeemTreasure = document.querySelector("[data-redeem-treasure]");
const redeemMessage = document.querySelector("[data-redeem-message]");

const totalTrailSteps = appSteps.length;
let trailProgress = Number(localStorage.getItem("gold-vein-trail-progress") || "0");
const totalGlobalTrailSteps = globalSteps.length;
let globalTrailProgress = Number(localStorage.getItem("gold-vein-global-progress") || "0");
const totalHomeTrailSteps = homeSteps.length;
let homeTrailProgress = Number(localStorage.getItem("gold-vein-home-progress") || "0");
const totalEmmausTrailSteps = emmausSteps.length;
let emmausTrailProgress = Number(localStorage.getItem("gold-vein-emmaus-progress") || "0");
let activeRedeemCode = "";

const watermarkLocation = {
  latitude: 32.9231644,
  longitude: -96.7767744,
  radiusMeters: 560
};

let isLocationVerified = localStorage.getItem("gold-vein-location-verified") === "true";
let isCompanionConfirmed = localStorage.getItem("gold-vein-companion-confirmed") === "true";
let isWitnessConfirmed = localStorage.getItem("gold-vein-witness-confirmed") === "true";
let isGlobalLocationVerified = localStorage.getItem("gold-vein-global-location-verified") === "true";
let isGlobalPassConfirmed = localStorage.getItem("gold-vein-global-pass-confirmed") === "true";
let isGlobalCompanionConfirmed =
  localStorage.getItem("gold-vein-global-companion-confirmed") === "true";
let isGlobalWitnessConfirmed = localStorage.getItem("gold-vein-global-witness-confirmed") === "true";
let isHomePlaceConfirmed = localStorage.getItem("gold-vein-home-place-confirmed") === "true";
let isHomePassConfirmed = localStorage.getItem("gold-vein-home-pass-confirmed") === "true";
let isHomeCompanionConfirmed = localStorage.getItem("gold-vein-home-companion-confirmed") === "true";
let isHomeWitnessConfirmed = localStorage.getItem("gold-vein-home-witness-confirmed") === "true";
let isEmmausPlaceConfirmed = localStorage.getItem("gold-vein-emmaus-place-confirmed") === "true";
let isEmmausPassConfirmed = localStorage.getItem("gold-vein-emmaus-pass-confirmed") === "true";
let isEmmausCompanionConfirmed =
  localStorage.getItem("gold-vein-emmaus-companion-confirmed") === "true";
let isEmmausWitnessConfirmed = localStorage.getItem("gold-vein-emmaus-witness-confirmed") === "true";

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

const getDistanceMeters = (start, end) => {
  const earthRadiusMeters = 6371000;
  const toRadians = (degrees) => degrees * (Math.PI / 180);
  const latitudeDelta = toRadians(end.latitude - start.latitude);
  const longitudeDelta = toRadians(end.longitude - start.longitude);
  const startLatitude = toRadians(start.latitude);
  const endLatitude = toRadians(end.latitude);

  const haversine =
    Math.sin(latitudeDelta / 2) ** 2 +
    Math.cos(startLatitude) * Math.cos(endLatitude) * Math.sin(longitudeDelta / 2) ** 2;

  return 2 * earthRadiusMeters * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
};

const setLocationStatus = (message, state = "") => {
  if (!locationStatus) {
    return;
  }

  locationStatus.textContent = message;
  locationStatus.dataset.state = state;
};

const setLocationVerified = (verified) => {
  isLocationVerified = verified;
  localStorage.setItem("gold-vein-location-verified", String(verified));
};

const setCompanionStatus = (message, state = "") => {
  if (!companionStatus) {
    return;
  }

  companionStatus.textContent = message;
  companionStatus.dataset.state = state;
};

const setCompanionConfirmed = (confirmed) => {
  isCompanionConfirmed = confirmed;
  localStorage.setItem("gold-vein-companion-confirmed", String(confirmed));
};

const getSelectedGiftType = () =>
  Array.from(giftTypeInputs).find((input) => input.checked)?.value || "";

const setWitnessStatus = (message, state = "") => {
  if (!witnessStatus) {
    return;
  }

  witnessStatus.textContent = message;
  witnessStatus.dataset.state = state;
};

const setWitnessConfirmed = (confirmed) => {
  isWitnessConfirmed = confirmed;
  localStorage.setItem("gold-vein-witness-confirmed", String(confirmed));
};

const setGlobalLocationStatus = (message, state = "") => {
  if (!globalLocationStatus) {
    return;
  }

  globalLocationStatus.textContent = message;
  globalLocationStatus.dataset.state = state;
};

const setGlobalLocationVerified = (verified) => {
  isGlobalLocationVerified = verified;
  localStorage.setItem("gold-vein-global-location-verified", String(verified));
};

const setGlobalPassStatus = (message, state = "") => {
  if (!globalPassStatus) {
    return;
  }

  globalPassStatus.textContent = message;
  globalPassStatus.dataset.state = state;
};

const setGlobalPassConfirmed = (confirmed) => {
  isGlobalPassConfirmed = confirmed;
  localStorage.setItem("gold-vein-global-pass-confirmed", String(confirmed));
};

const setGlobalCompanionStatus = (message, state = "") => {
  if (!globalCompanionStatus) {
    return;
  }

  globalCompanionStatus.textContent = message;
  globalCompanionStatus.dataset.state = state;
};

const setGlobalCompanionConfirmed = (confirmed) => {
  isGlobalCompanionConfirmed = confirmed;
  localStorage.setItem("gold-vein-global-companion-confirmed", String(confirmed));
};

const getSelectedGlobalGiftType = () =>
  Array.from(globalGiftTypeInputs).find((input) => input.checked)?.value || "";

const setGlobalWitnessStatus = (message, state = "") => {
  if (!globalWitnessStatus) {
    return;
  }

  globalWitnessStatus.textContent = message;
  globalWitnessStatus.dataset.state = state;
};

const setGlobalWitnessConfirmed = (confirmed) => {
  isGlobalWitnessConfirmed = confirmed;
  localStorage.setItem("gold-vein-global-witness-confirmed", String(confirmed));
};

const setHomePlaceStatus = (message, state = "") => {
  if (!homePlaceStatus) {
    return;
  }

  homePlaceStatus.textContent = message;
  homePlaceStatus.dataset.state = state;
};

const setHomePlaceConfirmed = (confirmed) => {
  isHomePlaceConfirmed = confirmed;
  localStorage.setItem("gold-vein-home-place-confirmed", String(confirmed));
};

const setHomePassStatus = (message, state = "") => {
  if (!homePassStatus) {
    return;
  }

  homePassStatus.textContent = message;
  homePassStatus.dataset.state = state;
};

const setHomePassConfirmed = (confirmed) => {
  isHomePassConfirmed = confirmed;
  localStorage.setItem("gold-vein-home-pass-confirmed", String(confirmed));
};

const setHomeCompanionStatus = (message, state = "") => {
  if (!homeCompanionStatus) {
    return;
  }

  homeCompanionStatus.textContent = message;
  homeCompanionStatus.dataset.state = state;
};

const setHomeCompanionConfirmed = (confirmed) => {
  isHomeCompanionConfirmed = confirmed;
  localStorage.setItem("gold-vein-home-companion-confirmed", String(confirmed));
};

const getSelectedHomeGiftType = () =>
  Array.from(homeGiftTypeInputs).find((input) => input.checked)?.value || "";

const setHomeWitnessStatus = (message, state = "") => {
  if (!homeWitnessStatus) {
    return;
  }

  homeWitnessStatus.textContent = message;
  homeWitnessStatus.dataset.state = state;
};

const setHomeWitnessConfirmed = (confirmed) => {
  isHomeWitnessConfirmed = confirmed;
  localStorage.setItem("gold-vein-home-witness-confirmed", String(confirmed));
};

const setEmmausPlaceStatus = (message, state = "") => {
  if (!emmausPlaceStatus) {
    return;
  }

  emmausPlaceStatus.textContent = message;
  emmausPlaceStatus.dataset.state = state;
};

const setEmmausPlaceConfirmed = (confirmed) => {
  isEmmausPlaceConfirmed = confirmed;
  localStorage.setItem("gold-vein-emmaus-place-confirmed", String(confirmed));
};

const setEmmausPassStatus = (message, state = "") => {
  if (!emmausPassStatus) {
    return;
  }

  emmausPassStatus.textContent = message;
  emmausPassStatus.dataset.state = state;
};

const setEmmausPassConfirmed = (confirmed) => {
  isEmmausPassConfirmed = confirmed;
  localStorage.setItem("gold-vein-emmaus-pass-confirmed", String(confirmed));
};

const setEmmausCompanionStatus = (message, state = "") => {
  if (!emmausCompanionStatus) {
    return;
  }

  emmausCompanionStatus.textContent = message;
  emmausCompanionStatus.dataset.state = state;
};

const setEmmausCompanionConfirmed = (confirmed) => {
  isEmmausCompanionConfirmed = confirmed;
  localStorage.setItem("gold-vein-emmaus-companion-confirmed", String(confirmed));
};

const getSelectedEmmausGiftType = () =>
  Array.from(emmausGiftTypeInputs).find((input) => input.checked)?.value || "";

const setEmmausWitnessStatus = (message, state = "") => {
  if (!emmausWitnessStatus) {
    return;
  }

  emmausWitnessStatus.textContent = message;
  emmausWitnessStatus.dataset.state = state;
};

const setEmmausWitnessConfirmed = (confirmed) => {
  isEmmausWitnessConfirmed = confirmed;
  localStorage.setItem("gold-vein-emmaus-witness-confirmed", String(confirmed));
};

const continueAdventureAfterRedemption = () => {
  trailProgress = Math.max(trailProgress, 2);
  localStorage.setItem("gold-vein-trail-progress", String(trailProgress));
  renderTrail();

  window.setTimeout(() => {
    window.location.hash = "adventure-app";
  }, 900);
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
      "This coffee pass has already been marked redeemed on this device. Return to the trail and continue the adventure.";
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
      const requiresLocationCheck = stepIndex === 0 && !isLocationVerified;
      const requiresCompanionCheck = stepIndex === 3 && !isCompanionConfirmed;
      const requiresWitnessCheck = stepIndex === 4 && !isWitnessConfirmed;
      button.disabled =
        isLocked || isComplete || requiresLocationCheck || requiresCompanionCheck || requiresWitnessCheck;
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
        ? "Step 1 is ready. Check your location to unlock the first confirmation."
        : stepStatusMessages[trailProgress - 1] || "Trail progress saved.";
  }

  if (trailProgress === 0 && isLocationVerified) {
    setLocationStatus("Location confirmed. You can complete Step 1.", "success");
  }

  if (trailProgress === 3 && isCompanionConfirmed) {
    setCompanionStatus("Connection confirmed. You can complete Step 4.", "success");
  }

  if (trailProgress === 4 && isWitnessConfirmed) {
    setWitnessStatus("Gift and witness confirmed. You can complete the trail.", "success");
  }
};

const globalStepStatusMessages = [
  "Place confirmed. Receive the Nearby Neighbor Pass.",
  "Pass received. Open the Scripture Map.",
  "Passage experienced. Connect with someone nearby.",
  "Connection confirmed. Give the treasure and record the witness.",
  "The global trail is complete. Carry mercy forward."
];

const clampGlobalProgress = () => {
  globalTrailProgress = Math.min(Math.max(globalTrailProgress, 0), totalGlobalTrailSteps);
};

const renderGlobalTrail = () => {
  clampGlobalProgress();

  globalSteps.forEach((step) => {
    const stepIndex = Number(step.dataset.globalStep);
    const button = step.querySelector("[data-complete-global-step]");
    const isComplete = stepIndex < globalTrailProgress;
    const isActive = stepIndex === globalTrailProgress;
    const isLocked = stepIndex > globalTrailProgress;

    step.classList.toggle("complete", isComplete);
    step.classList.toggle("active", isActive);
    step.classList.toggle("locked", isLocked);
    step.setAttribute("aria-disabled", String(isLocked));

    if (button) {
      const requiresLocationCheck = stepIndex === 0 && !isGlobalLocationVerified;
      const requiresPassCheck = stepIndex === 1 && !isGlobalPassConfirmed;
      const requiresCompanionCheck = stepIndex === 3 && !isGlobalCompanionConfirmed;
      const requiresWitnessCheck = stepIndex === 4 && !isGlobalWitnessConfirmed;
      button.disabled =
        isLocked ||
        isComplete ||
        requiresLocationCheck ||
        requiresPassCheck ||
        requiresCompanionCheck ||
        requiresWitnessCheck;
      if (isComplete) {
        button.textContent = "Completed";
      }
    }
  });

  globalProgressDots.forEach((dot) => {
    const dotIndex = Number(dot.dataset.globalProgressDot);
    dot.classList.toggle("complete", dotIndex < globalTrailProgress);
    dot.classList.toggle("active", dotIndex === globalTrailProgress);
  });

  if (globalAppStatus) {
    globalAppStatus.textContent =
      globalTrailProgress === 0
        ? "Step 1 is ready. Confirm your place to unlock the first confirmation."
        : globalStepStatusMessages[globalTrailProgress - 1] || "Global trail progress saved.";
  }

  if (globalTrailProgress === 0 && isGlobalLocationVerified) {
    setGlobalLocationStatus("Place confirmed. You can complete Step 1.", "success");
  }

  if (globalTrailProgress === 1 && isGlobalPassConfirmed) {
    setGlobalPassStatus("Global pass received. You can complete Step 2.", "success");
  }

  if (globalTrailProgress === 3 && isGlobalCompanionConfirmed) {
    setGlobalCompanionStatus("Connection confirmed. You can complete Step 4.", "success");
  }

  if (globalTrailProgress === 4 && isGlobalWitnessConfirmed) {
    setGlobalWitnessStatus("Gift and witness confirmed. You can complete the trail.", "success");
  }
};

const homeStepStatusMessages = [
  "Home place confirmed. Receive the Home Peace Pass.",
  "Home pass received. Open the Scripture Map.",
  "Passage experienced. Connect with someone from home.",
  "Connection confirmed. Give the treasure and record the witness.",
  "The home trail is complete. Carry peace forward."
];

const clampHomeProgress = () => {
  homeTrailProgress = Math.min(Math.max(homeTrailProgress, 0), totalHomeTrailSteps);
};

const renderHomeTrail = () => {
  clampHomeProgress();

  homeSteps.forEach((step) => {
    const stepIndex = Number(step.dataset.homeStep);
    const button = step.querySelector("[data-complete-home-step]");
    const isComplete = stepIndex < homeTrailProgress;
    const isActive = stepIndex === homeTrailProgress;
    const isLocked = stepIndex > homeTrailProgress;

    step.classList.toggle("complete", isComplete);
    step.classList.toggle("active", isActive);
    step.classList.toggle("locked", isLocked);
    step.setAttribute("aria-disabled", String(isLocked));

    if (button) {
      const requiresPlaceCheck = stepIndex === 0 && !isHomePlaceConfirmed;
      const requiresPassCheck = stepIndex === 1 && !isHomePassConfirmed;
      const requiresCompanionCheck = stepIndex === 3 && !isHomeCompanionConfirmed;
      const requiresWitnessCheck = stepIndex === 4 && !isHomeWitnessConfirmed;
      button.disabled =
        isLocked ||
        isComplete ||
        requiresPlaceCheck ||
        requiresPassCheck ||
        requiresCompanionCheck ||
        requiresWitnessCheck;
      if (isComplete) {
        button.textContent = "Completed";
      }
    }
  });

  homeProgressDots.forEach((dot) => {
    const dotIndex = Number(dot.dataset.homeProgressDot);
    dot.classList.toggle("complete", dotIndex < homeTrailProgress);
    dot.classList.toggle("active", dotIndex === homeTrailProgress);
  });

  if (homeAppStatus) {
    homeAppStatus.textContent =
      homeTrailProgress === 0
        ? "Step 1 is ready. Confirm your home place to unlock the first confirmation."
        : homeStepStatusMessages[homeTrailProgress - 1] || "Home trail progress saved.";
  }

  if (homeTrailProgress === 0 && isHomePlaceConfirmed) {
    setHomePlaceStatus("Home place confirmed. You can complete Step 1.", "success");
  }

  if (homeTrailProgress === 1 && isHomePassConfirmed) {
    setHomePassStatus("Home pass received. You can complete Step 2.", "success");
  }

  if (homeTrailProgress === 3 && isHomeCompanionConfirmed) {
    setHomeCompanionStatus("Connection confirmed. You can complete Step 4.", "success");
  }

  if (homeTrailProgress === 4 && isHomeWitnessConfirmed) {
    setHomeWitnessStatus("Gift and witness confirmed. You can complete the trail.", "success");
  }
};

const emmausStepStatusMessages = [
  "Road confirmed. Receive the Emmaus Pass.",
  "Emmaus pass received. Open the Scripture Map.",
  "Passage experienced. Connect with someone on the road.",
  "Connection confirmed. Return with witness and record the treasure.",
  "The Emmaus trail is complete. Carry the witness that Christ is risen."
];

const clampEmmausProgress = () => {
  emmausTrailProgress = Math.min(Math.max(emmausTrailProgress, 0), totalEmmausTrailSteps);
};

const renderEmmausTrail = () => {
  clampEmmausProgress();

  emmausSteps.forEach((step) => {
    const stepIndex = Number(step.dataset.emmausStep);
    const button = step.querySelector("[data-complete-emmaus-step]");
    const isComplete = stepIndex < emmausTrailProgress;
    const isActive = stepIndex === emmausTrailProgress;
    const isLocked = stepIndex > emmausTrailProgress;

    step.classList.toggle("complete", isComplete);
    step.classList.toggle("active", isActive);
    step.classList.toggle("locked", isLocked);
    step.setAttribute("aria-disabled", String(isLocked));

    if (button) {
      const requiresPlaceCheck = stepIndex === 0 && !isEmmausPlaceConfirmed;
      const requiresPassCheck = stepIndex === 1 && !isEmmausPassConfirmed;
      const requiresCompanionCheck = stepIndex === 3 && !isEmmausCompanionConfirmed;
      const requiresWitnessCheck = stepIndex === 4 && !isEmmausWitnessConfirmed;
      button.disabled =
        isLocked ||
        isComplete ||
        requiresPlaceCheck ||
        requiresPassCheck ||
        requiresCompanionCheck ||
        requiresWitnessCheck;
      if (isComplete) {
        button.textContent = "Completed";
      }
    }
  });

  emmausProgressDots.forEach((dot) => {
    const dotIndex = Number(dot.dataset.emmausProgressDot);
    dot.classList.toggle("complete", dotIndex < emmausTrailProgress);
    dot.classList.toggle("active", dotIndex === emmausTrailProgress);
  });

  if (emmausAppStatus) {
    emmausAppStatus.textContent =
      emmausTrailProgress === 0
        ? "Step 1 is ready. Confirm the road to unlock the first confirmation."
        : emmausStepStatusMessages[emmausTrailProgress - 1] || "Emmaus trail progress saved.";
  }

  if (emmausTrailProgress === 0 && isEmmausPlaceConfirmed) {
    setEmmausPlaceStatus("Road confirmed. You can complete Step 1.", "success");
  }

  if (emmausTrailProgress === 1 && isEmmausPassConfirmed) {
    setEmmausPassStatus("Emmaus pass received. You can complete Step 2.", "success");
  }

  if (emmausTrailProgress === 3 && isEmmausCompanionConfirmed) {
    setEmmausCompanionStatus("Connection confirmed. You can complete Step 4.", "success");
  }

  if (emmausTrailProgress === 4 && isEmmausWitnessConfirmed) {
    setEmmausWitnessStatus("Gift and witness confirmed. You can complete the trail.", "success");
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

heroAdventureToggle?.addEventListener("click", () => {
  if (!heroAdventureChooser) {
    return;
  }

  const isOpen = !heroAdventureChooser.hidden;
  heroAdventureChooser.hidden = isOpen;
  heroAdventureToggle.setAttribute("aria-expanded", String(!isOpen));
});

searchButton?.addEventListener("click", () => {
  setStatus(searchButton, "Gold Vein No. 1 is the available trail in this V1.");
});

checkLocationButton?.addEventListener("click", () => {
  if (!navigator.geolocation) {
    setLocationStatus("Location is not available in this browser.", "error");
    return;
  }

  checkLocationButton.disabled = true;
  setLocationStatus("Checking your location...", "checking");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const currentLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      const distanceMeters = getDistanceMeters(currentLocation, watermarkLocation);
      const distanceMiles = distanceMeters / 1609.344;

      if (distanceMeters <= watermarkLocation.radiusMeters) {
        setLocationVerified(true);
        setLocationStatus("Location confirmed. You can complete Step 1.", "success");
      } else {
        setLocationVerified(false);
        setLocationStatus(
          `You are about ${distanceMiles.toFixed(1)} miles from the trail location.`,
          "error"
        );
      }

      checkLocationButton.disabled = false;
      renderTrail();
    },
    () => {
      setLocationVerified(false);
      checkLocationButton.disabled = false;
      setLocationStatus("Location permission is needed to unlock this step.", "error");
      renderTrail();
    },
    {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 12000
    }
  );
});

companionNameInput?.addEventListener("input", () => {
  setCompanionConfirmed(false);
  setCompanionStatus("Touch phones or confirm the connection to unlock this step.");
  renderTrail();
});

companionTouchButton?.addEventListener("click", () => {
  const companionName = companionNameInput?.value.trim();

  if (!companionName) {
    setCompanionConfirmed(false);
    setCompanionStatus("Add a first name or initials before confirming the connection.", "error");
    renderTrail();
    return;
  }

  setCompanionConfirmed(true);
  localStorage.setItem("gold-vein-companion-name", companionName);
  setCompanionStatus(`Connection confirmed with ${companionName}. Step 4 is unlocked.`, "success");
  renderTrail();
});

giftTypeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    setWitnessConfirmed(false);
    setWitnessStatus("Confirm the gift and witness note to complete this trail.");
    renderTrail();
  });
});

witnessNoteInput?.addEventListener("input", () => {
  setWitnessConfirmed(false);
  setWitnessStatus("Confirm the gift and witness note to complete this trail.");
  renderTrail();
});

witnessConfirmButton?.addEventListener("click", () => {
  const giftType = getSelectedGiftType();
  const witnessNote = witnessNoteInput?.value.trim();

  if (!giftType) {
    setWitnessConfirmed(false);
    setWitnessStatus("Choose how you gave the treasure.", "error");
    renderTrail();
    return;
  }

  if (!witnessNote) {
    setWitnessConfirmed(false);
    setWitnessStatus("Add a short witness note before completing the trail.", "error");
    renderTrail();
    return;
  }

  setWitnessConfirmed(true);
  localStorage.setItem(
    "gold-vein-witness",
    JSON.stringify({
      giftType,
      witnessNote
    })
  );
  setWitnessStatus("Gift and witness confirmed. You can complete the trail.", "success");
  renderTrail();
});

checkGlobalLocationButton?.addEventListener("click", () => {
  if (!navigator.geolocation) {
    setGlobalLocationStatus("Location is not available in this browser.", "error");
    return;
  }

  checkGlobalLocationButton.disabled = true;
  setGlobalLocationStatus("Confirming your place...", "checking");

  navigator.geolocation.getCurrentPosition(
    () => {
      setGlobalLocationVerified(true);
      checkGlobalLocationButton.disabled = false;
      setGlobalLocationStatus("Place confirmed. You can complete Step 1.", "success");
      renderGlobalTrail();
    },
    () => {
      setGlobalLocationVerified(false);
      checkGlobalLocationButton.disabled = false;
      setGlobalLocationStatus("Location permission is needed to confirm this place.", "error");
      renderGlobalTrail();
    },
    {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 12000
    }
  );
});

globalPassConfirmButton?.addEventListener("click", () => {
  setGlobalPassConfirmed(true);
  setGlobalPassStatus("Global pass received. You can complete Step 2.", "success");
  renderGlobalTrail();
});

globalCompanionNameInput?.addEventListener("input", () => {
  setGlobalCompanionConfirmed(false);
  setGlobalCompanionStatus("Touch phones or confirm the connection to unlock this step.");
  renderGlobalTrail();
});

globalCompanionTouchButton?.addEventListener("click", () => {
  const companionName = globalCompanionNameInput?.value.trim();

  if (!companionName) {
    setGlobalCompanionConfirmed(false);
    setGlobalCompanionStatus("Add a first name or initials before confirming the connection.", "error");
    renderGlobalTrail();
    return;
  }

  setGlobalCompanionConfirmed(true);
  localStorage.setItem("gold-vein-global-companion-name", companionName);
  setGlobalCompanionStatus(`Connection confirmed with ${companionName}. Step 4 is unlocked.`, "success");
  renderGlobalTrail();
});

globalGiftTypeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    setGlobalWitnessConfirmed(false);
    setGlobalWitnessStatus("Confirm the gift and witness note to complete this trail.");
    renderGlobalTrail();
  });
});

globalWitnessNoteInput?.addEventListener("input", () => {
  setGlobalWitnessConfirmed(false);
  setGlobalWitnessStatus("Confirm the gift and witness note to complete this trail.");
  renderGlobalTrail();
});

globalWitnessConfirmButton?.addEventListener("click", () => {
  const giftType = getSelectedGlobalGiftType();
  const witnessNote = globalWitnessNoteInput?.value.trim();

  if (!giftType) {
    setGlobalWitnessConfirmed(false);
    setGlobalWitnessStatus("Choose how you gave the treasure.", "error");
    renderGlobalTrail();
    return;
  }

  if (!witnessNote) {
    setGlobalWitnessConfirmed(false);
    setGlobalWitnessStatus("Add a short witness note before completing the trail.", "error");
    renderGlobalTrail();
    return;
  }

  setGlobalWitnessConfirmed(true);
  localStorage.setItem(
    "gold-vein-global-witness",
    JSON.stringify({
      giftType,
      witnessNote
    })
  );
  setGlobalWitnessStatus("Gift and witness confirmed. You can complete the trail.", "success");
  renderGlobalTrail();
});

homePlaceConfirmButton?.addEventListener("click", () => {
  setHomePlaceConfirmed(true);
  setHomePlaceStatus("Home place confirmed. You can complete Step 1.", "success");
  renderHomeTrail();
});

homePassConfirmButton?.addEventListener("click", () => {
  setHomePassConfirmed(true);
  setHomePassStatus("Home pass received. You can complete Step 2.", "success");
  renderHomeTrail();
});

homeCompanionNameInput?.addEventListener("input", () => {
  setHomeCompanionConfirmed(false);
  setHomeCompanionStatus("Touch phones or confirm the connection to unlock this step.");
  renderHomeTrail();
});

homeCompanionTouchButton?.addEventListener("click", () => {
  const companionName = homeCompanionNameInput?.value.trim();

  if (!companionName) {
    setHomeCompanionConfirmed(false);
    setHomeCompanionStatus("Add a first name or initials before confirming the connection.", "error");
    renderHomeTrail();
    return;
  }

  setHomeCompanionConfirmed(true);
  localStorage.setItem("gold-vein-home-companion-name", companionName);
  setHomeCompanionStatus(`Connection confirmed with ${companionName}. Step 4 is unlocked.`, "success");
  renderHomeTrail();
});

homeGiftTypeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    setHomeWitnessConfirmed(false);
    setHomeWitnessStatus("Confirm the gift and witness note to complete this trail.");
    renderHomeTrail();
  });
});

homeWitnessNoteInput?.addEventListener("input", () => {
  setHomeWitnessConfirmed(false);
  setHomeWitnessStatus("Confirm the gift and witness note to complete this trail.");
  renderHomeTrail();
});

homeWitnessConfirmButton?.addEventListener("click", () => {
  const giftType = getSelectedHomeGiftType();
  const witnessNote = homeWitnessNoteInput?.value.trim();

  if (!giftType) {
    setHomeWitnessConfirmed(false);
    setHomeWitnessStatus("Choose how you gave the treasure.", "error");
    renderHomeTrail();
    return;
  }

  if (!witnessNote) {
    setHomeWitnessConfirmed(false);
    setHomeWitnessStatus("Add a short witness note before completing the trail.", "error");
    renderHomeTrail();
    return;
  }

  setHomeWitnessConfirmed(true);
  localStorage.setItem(
    "gold-vein-home-witness",
    JSON.stringify({
      giftType,
      witnessNote
    })
  );
  setHomeWitnessStatus("Gift and witness confirmed. You can complete the trail.", "success");
  renderHomeTrail();
});

emmausPlaceConfirmButton?.addEventListener("click", () => {
  setEmmausPlaceConfirmed(true);
  setEmmausPlaceStatus("Road confirmed. You can complete Step 1.", "success");
  renderEmmausTrail();
});

emmausPassConfirmButton?.addEventListener("click", () => {
  setEmmausPassConfirmed(true);
  setEmmausPassStatus("Emmaus pass received. You can complete Step 2.", "success");
  renderEmmausTrail();
});

emmausCompanionNameInput?.addEventListener("input", () => {
  setEmmausCompanionConfirmed(false);
  setEmmausCompanionStatus("Touch phones or confirm the connection to unlock this step.");
  renderEmmausTrail();
});

emmausCompanionTouchButton?.addEventListener("click", () => {
  const companionName = emmausCompanionNameInput?.value.trim();

  if (!companionName) {
    setEmmausCompanionConfirmed(false);
    setEmmausCompanionStatus("Add a first name or initials before confirming the connection.", "error");
    renderEmmausTrail();
    return;
  }

  setEmmausCompanionConfirmed(true);
  localStorage.setItem("gold-vein-emmaus-companion-name", companionName);
  setEmmausCompanionStatus(`Connection confirmed with ${companionName}. Step 4 is unlocked.`, "success");
  renderEmmausTrail();
});

emmausGiftTypeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    setEmmausWitnessConfirmed(false);
    setEmmausWitnessStatus("Confirm the gift and witness note to complete this trail.");
    renderEmmausTrail();
  });
});

emmausWitnessNoteInput?.addEventListener("input", () => {
  setEmmausWitnessConfirmed(false);
  setEmmausWitnessStatus("Confirm the gift and witness note to complete this trail.");
  renderEmmausTrail();
});

emmausWitnessConfirmButton?.addEventListener("click", () => {
  const giftType = getSelectedEmmausGiftType();
  const witnessNote = emmausWitnessNoteInput?.value.trim();

  if (!giftType) {
    setEmmausWitnessConfirmed(false);
    setEmmausWitnessStatus("Choose how you gave the treasure.", "error");
    renderEmmausTrail();
    return;
  }

  if (!witnessNote) {
    setEmmausWitnessConfirmed(false);
    setEmmausWitnessStatus("Add a short witness note before completing the trail.", "error");
    renderEmmausTrail();
    return;
  }

  setEmmausWitnessConfirmed(true);
  localStorage.setItem(
    "gold-vein-emmaus-witness",
    JSON.stringify({
      giftType,
      witnessNote
    })
  );
  setEmmausWitnessStatus("Gift and witness confirmed. You can complete the trail.", "success");
  renderEmmausTrail();
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
  setLocationVerified(false);
  setCompanionConfirmed(false);
  setWitnessConfirmed(false);
  localStorage.setItem("gold-vein-trail-progress", "0");
  localStorage.removeItem("gold-vein-companion-name");
  localStorage.removeItem("gold-vein-witness");
  if (companionNameInput) {
    companionNameInput.value = "";
  }
  giftTypeInputs.forEach((input) => {
    input.checked = false;
  });
  if (witnessNoteInput) {
    witnessNoteInput.value = "";
  }
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
  setLocationStatus("Location check required before this step can be completed.");
  setCompanionStatus("Connection confirmation required before this step can be completed.");
  setWitnessStatus("Gift and witness confirmation required before the trail can be completed.");
  renderTrail();
});

globalStepButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const completedStep = Number(button.dataset.completeGlobalStep);
    if (completedStep !== globalTrailProgress) {
      return;
    }

    globalTrailProgress = Math.min(completedStep + 1, totalGlobalTrailSteps);
    localStorage.setItem("gold-vein-global-progress", String(globalTrailProgress));
    renderGlobalTrail();
  });
});

resetGlobalTrailButton?.addEventListener("click", () => {
  globalTrailProgress = 0;
  setGlobalLocationVerified(false);
  setGlobalPassConfirmed(false);
  setGlobalCompanionConfirmed(false);
  setGlobalWitnessConfirmed(false);
  localStorage.setItem("gold-vein-global-progress", "0");
  localStorage.removeItem("gold-vein-global-companion-name");
  localStorage.removeItem("gold-vein-global-witness");
  if (globalCompanionNameInput) {
    globalCompanionNameInput.value = "";
  }
  globalGiftTypeInputs.forEach((input) => {
    input.checked = false;
  });
  if (globalWitnessNoteInput) {
    globalWitnessNoteInput.value = "";
  }
  globalStepButtons.forEach((button) => {
    const stepIndex = Number(button.dataset.completeGlobalStep);
    const labels = [
      "I am in a nearby place",
      "I received the pass",
      "I experienced the passage",
      "I connected with someone",
      "I gave the treasure"
    ];
    button.textContent = labels[stepIndex] || button.textContent;
  });
  setGlobalLocationStatus("Place confirmation required before this step can be completed.");
  setGlobalPassStatus("Receive the pass to unlock the Scripture Map.");
  setGlobalCompanionStatus("Connection confirmation required before this step can be completed.");
  setGlobalWitnessStatus("Gift and witness confirmation required before the trail can be completed.");
  renderGlobalTrail();
});

homeStepButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const completedStep = Number(button.dataset.completeHomeStep);
    if (completedStep !== homeTrailProgress) {
      return;
    }

    homeTrailProgress = Math.min(completedStep + 1, totalHomeTrailSteps);
    localStorage.setItem("gold-vein-home-progress", String(homeTrailProgress));
    renderHomeTrail();
  });
});

resetHomeTrailButton?.addEventListener("click", () => {
  homeTrailProgress = 0;
  setHomePlaceConfirmed(false);
  setHomePassConfirmed(false);
  setHomeCompanionConfirmed(false);
  setHomeWitnessConfirmed(false);
  localStorage.setItem("gold-vein-home-progress", "0");
  localStorage.removeItem("gold-vein-home-companion-name");
  localStorage.removeItem("gold-vein-home-witness");
  if (homeCompanionNameInput) {
    homeCompanionNameInput.value = "";
  }
  homeGiftTypeInputs.forEach((input) => {
    input.checked = false;
  });
  if (homeWitnessNoteInput) {
    homeWitnessNoteInput.value = "";
  }
  homeStepButtons.forEach((button) => {
    const stepIndex = Number(button.dataset.completeHomeStep);
    const labels = [
      "I prepared the place",
      "I received the pass",
      "I experienced the passage",
      "I connected with someone",
      "I gave the treasure"
    ];
    button.textContent = labels[stepIndex] || button.textContent;
  });
  setHomePlaceStatus("Place confirmation required before this step can be completed.");
  setHomePassStatus("Receive the pass to unlock the Scripture Map.");
  setHomeCompanionStatus("Connection confirmation required before this step can be completed.");
  setHomeWitnessStatus("Gift and witness confirmation required before the trail can be completed.");
  renderHomeTrail();
});

emmausStepButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const completedStep = Number(button.dataset.completeEmmausStep);
    if (completedStep !== emmausTrailProgress) {
      return;
    }

    emmausTrailProgress = Math.min(completedStep + 1, totalEmmausTrailSteps);
    localStorage.setItem("gold-vein-emmaus-progress", String(emmausTrailProgress));
    renderEmmausTrail();
  });
});

resetEmmausTrailButton?.addEventListener("click", () => {
  emmausTrailProgress = 0;
  setEmmausPlaceConfirmed(false);
  setEmmausPassConfirmed(false);
  setEmmausCompanionConfirmed(false);
  setEmmausWitnessConfirmed(false);
  localStorage.setItem("gold-vein-emmaus-progress", "0");
  localStorage.removeItem("gold-vein-emmaus-companion-name");
  localStorage.removeItem("gold-vein-emmaus-witness");
  if (emmausCompanionNameInput) {
    emmausCompanionNameInput.value = "";
  }
  emmausGiftTypeInputs.forEach((input) => {
    input.checked = false;
  });
  if (emmausWitnessNoteInput) {
    emmausWitnessNoteInput.value = "";
  }
  emmausStepButtons.forEach((button) => {
    const stepIndex = Number(button.dataset.completeEmmausStep);
    const labels = [
      "I began the road",
      "I received the pass",
      "I experienced the passage",
      "I connected with someone",
      "I gave the treasure"
    ];
    button.textContent = labels[stepIndex] || button.textContent;
  });
  setEmmausPlaceStatus("Road confirmation required before this step can be completed.");
  setEmmausPassStatus("Receive the pass to unlock the Scripture Map.");
  setEmmausCompanionStatus("Connection confirmation required before this step can be completed.");
  setEmmausWitnessStatus("Gift and witness confirmation required before the trail can be completed.");
  renderEmmausTrail();
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
  redeemMessage.textContent = "Coffee redeemed. Returning to the trail with Step 3 unlocked.";
  continueAdventureAfterRedemption();
});

resetRedemptionButton?.addEventListener("click", () => {
  const redeemedCodes = getRedeemedCodes().filter((code) => code !== activeRedeemCode);
  setRedeemedCodes(redeemedCodes);
  renderRedemption();
});

renderTrail();
renderGlobalTrail();
renderHomeTrail();
renderEmmausTrail();
showActivePage();
window.addEventListener("hashchange", showActivePage);
