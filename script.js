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
const checkLocationButton = document.querySelector("[data-check-location]");
const locationStatus = document.querySelector("[data-location-status]");
const companionTouchButton = document.querySelector("[data-companion-touch]");
const companionNameInput = document.querySelector("[data-companion-name]");
const companionStatus = document.querySelector("[data-companion-status]");
const giftTypeInputs = document.querySelectorAll("[data-gift-type]");
const witnessNoteInput = document.querySelector("[data-witness-note]");
const witnessConfirmButton = document.querySelector("[data-witness-confirm]");
const witnessStatus = document.querySelector("[data-witness-status]");
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

const watermarkLocation = {
  latitude: 32.9231644,
  longitude: -96.7767744,
  radiusMeters: 560
};

let isLocationVerified = localStorage.getItem("gold-vein-location-verified") === "true";
let isCompanionConfirmed = localStorage.getItem("gold-vein-companion-confirmed") === "true";
let isWitnessConfirmed = localStorage.getItem("gold-vein-witness-confirmed") === "true";

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
showActivePage();
window.addEventListener("hashchange", showActivePage);
