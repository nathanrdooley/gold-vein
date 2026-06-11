const notesButton = document.querySelector("[data-save-notes]");
const journalDateInput = document.querySelector("[data-journal-date]");
const journalTimeInput = document.querySelector("[data-journal-time]");
const journalWeatherInput = document.querySelector("[data-journal-weather]");
const journalList = document.querySelector("[data-journal-list]");
const useWeatherButton = document.querySelector("[data-use-weather]");
const weatherStatus = document.querySelector("[data-weather-status]");
const previewAdventureButton = document.querySelector("[data-preview-adventure]");
const saveAdventureButton = document.querySelector("[data-save-adventure]");
const adventurePreview = document.querySelector("[data-adventure-preview]");
const adventureDraftList = document.querySelector("[data-adventure-drafts]");
const creatorStatus = document.querySelector("[data-creator-status]");
const testimonyButton = document.querySelector("[data-testimony]");
const printButton = document.querySelector("[data-print-letter]");
const searchButton = document.querySelector("[data-search-trails]");
const adventureCategoryGrid = document.querySelector("[data-adventure-category-grid]");
const backendAdventuresStatus = document.querySelector("[data-backend-adventures-status]");
const shareAdventureButtons = document.querySelectorAll("[data-share-adventure]");
const supportOptionButtons = document.querySelectorAll("[data-support-option]");
const supportAmountOptionButtons = document.querySelectorAll("[data-support-amount-option]");
const saveSupportPledgeButton = document.querySelector("[data-save-support-pledge]");
const supportTypeInput = document.querySelector("[data-support-type]");
const supportAmountInput = document.querySelector("[data-support-amount]");
const supportPledgeList = document.querySelector("[data-support-pledge-list]");
const supportStatus = document.querySelector("[data-support-status]");
const resetTrailButton = document.querySelector("[data-reset-trail]");
const stepButtons = document.querySelectorAll("[data-complete-step]");
const appSteps = document.querySelectorAll("[data-app-step]");
const progressDots = document.querySelectorAll("[data-progress-dot]");
const appStatus = document.querySelector("[data-app-status]");
const appPages = document.querySelectorAll("[data-page]");
const heroAdventureToggle = document.querySelector("[data-toggle-hero-adventures]");
const heroAdventureChooser = document.querySelector("[data-hero-adventures]");
const adventureIntro = document.querySelector("[data-adventure-intro]");
const contextGrid = document.querySelector("[data-context-grid]");
const adventureReturnBar = document.querySelector("[data-adventure-return-bar]");
const returnToAdventuresButton = document.querySelector("[data-return-to-adventures]");
const returnToWebButton = document.querySelector("[data-return-to-web]");
const contextOptionButtons = document.querySelectorAll("[data-context-option]");
const contextTitle = document.querySelector("[data-context-title]");
const contextSummary = document.querySelector("[data-context-summary]");
const contextAwareness = document.querySelector("[data-context-awareness]");
const contextScripture = document.querySelector("[data-context-scripture]");
const contextProgress = document.querySelector("[data-context-progress]");
const contextCheckpoints = document.querySelector("[data-context-checkpoints]");
const contextChallenge = document.querySelector("[data-context-challenge]");
const contextChallengeCopy = document.querySelector("[data-context-challenge-copy]");
const contextReward = document.querySelector("[data-context-reward]");
const contextRewardCopy = document.querySelector("[data-context-reward-copy]");
const contextStatus = document.querySelector("[data-context-status]");
const completeContextCheckpointButton = document.querySelector("[data-complete-context-checkpoint]");
const resetContextAdventureButton = document.querySelector("[data-reset-context-adventure]");
const generateContextMovementButton = document.querySelector("[data-generate-context-movement]");
const activeWeb = document.querySelector("[data-active-web]");
const adaptiveAdventure = document.querySelector("[data-adaptive-adventure]");
const missionTabButtons = document.querySelectorAll("[data-mission-tab]");
const missionHub = document.querySelector("[data-mission-hub]");
const missionPanel = document.querySelector("[data-mission-panel]");
const journalReturnButton = document.querySelector("[data-journal-return]");
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
const resetConversionTrailButton = document.querySelector("[data-reset-conversion-trail]");
const conversionStepButtons = document.querySelectorAll("[data-complete-conversion-step]");
const conversionSteps = document.querySelectorAll("[data-conversion-step]");
const conversionProgressDots = document.querySelectorAll("[data-conversion-progress-dot]");
const conversionAppStatus = document.querySelector("[data-conversion-app-status]");
const conversionHonestyConfirmButton = document.querySelector("[data-conversion-honesty-confirm]");
const conversionHonestyStatus = document.querySelector("[data-conversion-honesty-status]");
const conversionGospelConfirmButton = document.querySelector("[data-conversion-gospel-confirm]");
const conversionGospelStatus = document.querySelector("[data-conversion-gospel-status]");
const conversionResponseTypeInputs = document.querySelectorAll("[data-conversion-response-type]");
const conversionResponseNoteInput = document.querySelector("[data-conversion-response-note]");
const conversionResponseConfirmButton = document.querySelector("[data-conversion-response-confirm]");
const conversionResponseStatus = document.querySelector("[data-conversion-response-status]");
const conversionFollowupNameInput = document.querySelector("[data-conversion-followup-name]");
const conversionFollowupConfirmButton = document.querySelector("[data-conversion-followup-confirm]");
const conversionFollowupStatus = document.querySelector("[data-conversion-followup-status]");
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
const totalConversionTrailSteps = conversionSteps.length;
let conversionTrailProgress = Number(localStorage.getItem("gold-vein-conversion-progress") || "0");
let activeRedeemCode = "";
let activeContextKey = localStorage.getItem("gold-vein-active-context") || "home";
let activeContextProgress = Number(localStorage.getItem(`gold-vein-context-${activeContextKey}-progress`) || "0");
let activeMissionTab = localStorage.getItem("gold-vein-active-mission-tab") || "map";
let activeAdventureView = localStorage.getItem("gold-vein-active-adventure-view") || "choose";
let activeTreasureType = "Financial gift";

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
let isConversionHonestyConfirmed =
  localStorage.getItem("gold-vein-conversion-honesty-confirmed") === "true";
let isConversionGospelConfirmed =
  localStorage.getItem("gold-vein-conversion-gospel-confirmed") === "true";
let isConversionResponseConfirmed =
  localStorage.getItem("gold-vein-conversion-response-confirmed") === "true";
let isConversionFollowupConfirmed =
  localStorage.getItem("gold-vein-conversion-followup-confirmed") === "true";
let watermarkCompassDetail = "";

const redemptionPasses = {
  "DEMO-NOT-REDEEMABLE": {
    location: "Prototype only",
    adventure: "Gold Vein No. 1",
    treasure: "No active redemption"
  }
};

const contextAdventures = {
  gospel: {
    title: "Gospel Adventure",
    summary: "Look to Jesus Christ, bring honest questions into the light, and take the next step toward faith.",
    awareness: "Longing, questions, conviction, hope",
    scripture: "John 3:1-18",
    challenge: "Look to Christ.",
    challengeCopy: "Read the gospel invitation slowly and name what you honestly see, want, resist, or need.",
    reward: "Christ revealed.",
    rewardCopy: "The treasure is not a better self-image. The treasure is Jesus Christ given for sinners.",
    map: {
      passage: "John 3:1-18",
      history: "Nicodemus, a respected religious teacher, comes to Jesus at night with questions about who He is and what God is doing.",
      context: "Jesus tells him that entrance into the kingdom requires new birth from above, then points to the Son of Man lifted up so whoever believes may have eternal life.",
      inner: "Notice curiosity, fear, shame, control, resistance, desire, and the ache to be made new rather than merely improved.",
      power: "The gospel reveals God's love in the giving of His Son. The invitation is to look to Christ, believe, and receive life.",
      crossReferences: ["Numbers 21:4-9", "Ezekiel 36:25-27", "Romans 5:6-8", "2 Corinthians 5:17-21"]
    },
    actions: {
      challenge: [
        ["Read honestly", "Read John 3:1-18 and write the sentence that feels most alive, confusing, or confronting."],
        ["Name the need", "Write one honest sentence beginning with: I need Jesus to..."],
        ["Ask for light", "Pray: Lord Jesus, show me what is true and help me respond honestly."]
      ],
      reward: [
        ["Gospel clarity", "Name what the passage says God gives, what the Son does, and what believing receives."],
        ["Honest response", "Choose the most honest response: I believe, I want to believe, I have questions, or I am resisting."],
        ["New birth longing", "Write what you want Jesus to make new."]
      ],
      connect: [
        ["Ask a believer", "Ask a follower of Jesus to read John 3 with you and help you understand the gospel."],
        ["Request prayer", "Message someone: I am on a Gold Vein Gospel Adventure. Will you pray with me and help me take the next step?"],
        ["Bring questions", "Write your top question and share it with a mature believer, pastor, or trusted friend."]
      ]
    },
    outdoor: {
      title: "Light Walk",
      from: "Where you are sitting",
      to: "A doorway, window, sidewalk, or quiet outside place",
      prompt: "As you move toward light, ask Jesus to bring what is hidden into truth, mercy, and life."
    },
    checkpoints: [
      ["Look", "Read John 3:1-18 and look toward Jesus Christ, not merely your own effort."],
      ["Name", "Write your honest response to the gospel invitation."],
      ["Connect", "Invite a follower of Jesus to pray, answer questions, and walk with you."],
      ["Respond", "Take the next faithful step toward repentance, faith, baptism, church, or follow-up."]
    ]
  },
  maturity: {
    title: "Mature Disciple Adventure",
    summary: "Move from being stuck or passive into practiced faith, love, endurance, and disciple-making.",
    awareness: "Formation, habits, obedience, witness",
    scripture: "2 Peter 1:3-11",
    challenge: "Practice what has been given.",
    challengeCopy: "Choose one virtue Peter names and practice it today in a visible, embodied way.",
    reward: "Fruitful assurance.",
    rewardCopy: "Maturity is not performance for approval. It is participation in the life and power Christ has given.",
    map: {
      passage: "2 Peter 1:3-11",
      history: "Peter writes to believers to strengthen them against corruption, false teaching, forgetfulness, and fruitless faith.",
      context: "The passage begins with what God has already granted, then calls believers to diligent practice that confirms calling and choosing.",
      inner: "Notice passivity, discouragement, double-mindedness, hidden habits, fear of effort, and the desire for maturity without practice.",
      power: "Christ's divine power grants what is needed for life and godliness. Practiced faith becomes fruitful, stable, and ready to make disciples.",
      crossReferences: ["John 15:1-8", "Galatians 5:22-25", "Hebrews 5:12-14", "Matthew 28:18-20"]
    },
    actions: {
      challenge: [
        ["Practice one virtue", "Choose faith, moral excellence, knowledge, self-control, perseverance, godliness, brotherly kindness, or love and practice it today."],
        ["Interrupt one habit", "Name one stuck pattern and take one concrete step of obedience away from it."],
        ["Teach what you received", "Share one truth from 2 Peter 1:3-11 with someone who could use encouragement."]
      ],
      reward: [
        ["Fruit noticed", "Name one small fruit that appeared through obedience."],
        ["Assurance strengthened", "Write how practicing these things helps you not stumble."],
        ["Power remembered", "Record what Christ has already granted, not just what you still lack."]
      ],
      connect: [
        ["Invite accountability", "Ask a mature believer to check in with you about the practice you chose."],
        ["Disciple someone", "Invite someone younger in faith to read the passage and practice one step with you."],
        ["Report fruit", "Tell a trusted person what you practiced, what was hard, and what fruit appeared."]
      ]
    },
    outdoor: {
      title: "Practice Walk",
      from: "The place where you feel stuck",
      to: "A nearby path, hallway, porch, or outside place",
      prompt: "Walk as a physical sign that maturity moves. Ask which practice needs to become embodied today."
    },
    checkpoints: [
      ["Receive", "Name what Christ has granted for life and godliness."],
      ["Practice", "Choose one virtue and do something concrete with it."],
      ["Connect", "Invite accountability, prayer, counsel, or a disciple-making conversation."],
      ["Give", "Carry what you practiced outward by encouraging, teaching, serving, or following up."]
    ]
  },
  home: {
    title: "Home Adventure",
    summary: "Welcome Christ into the ordinary room and let peace become embodied obedience.",
    awareness: "Bodily presence, attention, peace",
    scripture: "Luke 10:38-42",
    challenge: "Prepare the room.",
    challengeCopy: "Clear one small space and ask what love requires here.",
    reward: "Peace received.",
    rewardCopy: "A quiet place becomes a sign of grace received and carried outward.",
    map: {
      passage: "Luke 10:38-42",
      history: "Jesus enters the home of Martha and Mary during His journey toward Jerusalem.",
      context: "The passage contrasts anxious service with attentive discipleship at Jesus' feet.",
      inner: "Notice the pull between performance, distraction, resentment, and receiving Christ's presence.",
      power: "Christ names the good portion and invites the household into peace before productivity.",
      crossReferences: ["Psalm 46:10", "John 15:4-5", "Philippians 4:6-7"]
    },
    actions: {
      challenge: [
        ["Prepare a place", "Clear one small surface and make it available for prayer, Scripture, or hospitality."],
        ["Practice presence", "Sit for two minutes without fixing anything. Ask what Jesus is drawing your attention toward."],
        ["Serve from peace", "Do one quiet act of service without announcing it."]
      ],
      reward: [
        ["Peace marker", "Name one place where anxiety loosened."],
        ["Household grace", "Notice one sign that Christ is already present in the room."],
        ["Good portion", "Write one sentence about what mattered most."]
      ],
      connect: [
        ["Invite prayer", "Text someone: I am doing a Gold Vein Home Adventure. Would you pray for peace in my home?"],
        ["Bless the room", "Encourage someone who shares or enters this space."],
        ["Ask and listen", "Ask: how are you doing in this season at home?"]
      ]
    },
    outdoor: {
      title: "Threshold Walk",
      from: "Inside the room",
      to: "Doorway, porch, sidewalk, or mailbox",
      prompt: "Notice the change in your body as you cross the threshold. Ask how peace can move from the room into the world."
    },
    checkpoints: [
      ["Notice", "Look around the room. What is your body carrying here?"],
      ["Receive", "Ask the Lord to meet you in this ordinary place."],
      ["Connect", "Encourage, serve, or gently check on someone connected to this home."],
      ["Give", "Carry peace outward through one concrete act of love."]
    ]
  },
  work: {
    title: "Work Adventure",
    summary: "Let your workday become a trail of faithfulness, witness, excellence, and mercy.",
    awareness: "Pressure, responsibility, integrity, people",
    scripture: "Colossians 3:23-24",
    challenge: "Bless the work in front of you.",
    challengeCopy: "Choose one task and do it before the Lord with attention and love.",
    reward: "Faithful presence.",
    rewardCopy: "Your labor becomes a place where hidden obedience can reveal Christ.",
    map: {
      passage: "Colossians 3:23-24",
      history: "Paul wrote Colossians while imprisoned, teaching believers how union with Christ reshapes ordinary life, households, work, and witness.",
      context: "Colossians 3 moves from the new self in Christ into daily relationships. Work is no longer merely performed for human approval; it is offered to the Lord.",
      inner: "The passage exposes divided motives: resentment, eye-service, fear of people, laziness, ambition, or despair. It asks the worker to become present before Christ.",
      power: "The reward is not merely a paycheck or recognition. The inheritance comes from the Lord Christ, who gives dignity and eternal weight to hidden faithfulness.",
      crossReferences: ["Ephesians 6:5-8", "1 Corinthians 10:31", "Proverbs 16:3", "Matthew 5:16"]
    },
    actions: {
      challenge: [
        ["Single-task offering", "Choose one task and do it as unto the Lord, without cutting corners or seeking applause."],
        ["Hidden faithfulness", "Do one unseen act that helps the work or the people around you."],
        ["Integrity checkpoint", "Correct one small thing that would be easy to ignore."]
      ],
      reward: [
        ["Dignity restored", "Name how Christ gives meaning to work that feels ordinary or unseen."],
        ["Clean motive", "Notice one place where fear of people loosened."],
        ["Witness spark", "Record any opening for kindness, excellence, prayer, or gospel witness."]
      ],
      connect: [
        ["Encourage a coworker", "Send or speak one specific encouragement to someone connected to your work."],
        ["Ask for wisdom", "Invite a trusted believer to pray over a task, decision, or pressure point."],
        ["Serve the team", "Do one practical thing that lightens someone else's burden."]
      ]
    },
    outdoor: {
      title: "Workplace Walk",
      from: "Your task space",
      to: "Break area, parking lot, hallway, or nearby coffee shop",
      prompt: "As you move, notice who makes your work possible. Pray for one person connected to your labor."
    },
    checkpoints: [
      ["Notice", "Name the pressure, person, or task most present right now."],
      ["Receive", "Ask the Lord for wisdom, courage, patience, and clean motives."],
      ["Connect", "Encourage one coworker, customer, teammate, or leader."],
      ["Give", "Serve with excellence and record what fruit appeared."]
    ]
  },
  project: {
    title: "Project Adventure",
    summary: "Move your calling, burden, build, or study out of fog and into faithful next steps.",
    awareness: "Focus, fear, stewardship, calling",
    scripture: "Nehemiah 2:17-18",
    challenge: "Take the next faithful step.",
    challengeCopy: "Pick one action small enough to complete and meaningful enough to matter.",
    reward: "Clarity uncovered.",
    rewardCopy: "A project becomes a place to practice stewardship instead of striving.",
    map: {
      passage: "Nehemiah 2:17-18",
      history: "Nehemiah returns to Jerusalem after exile and calls the people to rebuild what is broken.",
      context: "The work begins with honest assessment, shared burden, and confidence in the gracious hand of God.",
      inner: "Notice fear of failure, scattered attention, false urgency, and the desire to build alone.",
      power: "God strengthens willing hands when calling becomes shared obedience.",
      crossReferences: ["Proverbs 16:3", "Haggai 1:7-8", "Ephesians 2:10", "James 1:5"]
    },
    actions: {
      challenge: [
        ["Name the wall", "Write the project in one clear sentence and name what is broken or unfinished."],
        ["Small build", "Complete one task that moves the work forward today."],
        ["Remove friction", "Clear one distraction or obstacle from the project space."]
      ],
      reward: [
        ["Clarity", "Write the next step that became clearer."],
        ["Shared courage", "Notice where courage increased after naming the work."],
        ["Stewardship", "Identify one gift or resource already in your hand."]
      ],
      connect: [
        ["Invite counsel", "Ask one person for wisdom, prayer, or practical help."],
        ["Report progress", "Tell a trusted person what step you completed."],
        ["Serve through the project", "Name who this work is meant to bless."]
      ]
    },
    outdoor: {
      title: "Clarity Walk",
      from: "Your project space",
      to: "A sidewalk, courtyard, nearby table, or window with open sky",
      prompt: "Let movement clear the fog. Name one next faithful step before returning to the work."
    },
    checkpoints: [
      ["Name", "Write the project, burden, or assignment in one clear sentence."],
      ["Receive", "Ask what grace is already present for this work."],
      ["Connect", "Invite one trusted person to pray, advise, or build with you."],
      ["Give", "Complete one concrete step and offer the fruit back to God."]
    ]
  },
  travel: {
    title: "Travel Adventure",
    summary: "Let the road, commute, airport, errand, or transition become a trail of witness.",
    awareness: "Movement, interruption, hospitality, patience",
    scripture: "Luke 24:13-35",
    challenge: "Notice the person along the way.",
    challengeCopy: "Pause long enough to see who is near while you are moving.",
    reward: "The road becomes holy ground.",
    rewardCopy: "Travel becomes more than getting there; it becomes attention to Christ on the way.",
    map: {
      passage: "Luke 24:13-35",
      history: "Two disciples walk away from Jerusalem after the crucifixion, confused and disappointed, before the risen Jesus draws near.",
      context: "Jesus interprets Scripture on the road and turns ordinary travel into revelation, burning hearts, and witness.",
      inner: "Notice grief, distraction, delay, disappointment, and the places where hope feels hidden.",
      power: "The risen Christ is able to meet travelers on the way and send them back with witness.",
      crossReferences: ["Psalm 119:105", "Isaiah 40:31", "Hebrews 13:2", "Acts 8:26-40"]
    },
    actions: {
      challenge: [
        ["Attentive movement", "Move through this route without numbing out. Notice who is near."],
        ["Delay as doorway", "If interrupted, receive the delay as part of the trail."],
        ["Road prayer", "Pray for one person or place you pass."]
      ],
      reward: [
        ["Burning heart", "Name one truth that became warm or alive on the way."],
        ["Holy ground", "Notice one ordinary place that became spiritually significant."],
        ["Witness carried", "Record what you can carry into your destination."]
      ],
      connect: [
        ["Kindness in transit", "Speak kindness to someone serving, waiting, or traveling."],
        ["Send witness", "Message someone one sentence of encouragement from the road."],
        ["Arrive with purpose", "Enter your destination ready to bless, not merely arrive."]
      ]
    },
    outdoor: {
      title: "Road Attention",
      from: "Where you are now",
      to: "The next stop on your route",
      prompt: "Treat the space between points as part of the trail. Notice interruption, patience, and who is near."
    },
    checkpoints: [
      ["Begin", "Ask the Lord to make you attentive while you move."],
      ["Receive", "Receive the delay, route, or errand as part of the trail."],
      ["Connect", "Speak kindness, pray silently, or encourage someone along the way."],
      ["Give", "Carry witness from the road into your destination."]
    ]
  },
  conflict: {
    title: "Conflict Adventure",
    summary: "Bring a stuck, tense, or painful place into the light of Christ with humility.",
    awareness: "Emotion, fear, anger, truth, repair",
    scripture: "Matthew 5:23-24",
    challenge: "Move toward repair.",
    challengeCopy: "Before reacting, ask what humility, truth, or mercy requires.",
    reward: "Grace in the hard place.",
    rewardCopy: "Conflict becomes a checkpoint where repentance and love can become visible.",
    map: {
      passage: "Matthew 5:23-24",
      history: "In the Sermon on the Mount, Jesus teaches kingdom righteousness that reaches motives, relationships, anger, and reconciliation.",
      context: "Worship and reconciliation are held together. Jesus calls disciples to take relational repair seriously.",
      inner: "Notice defensiveness, fear, anger, avoidance, shame, and the temptation to win instead of love.",
      power: "Christ brings truth and mercy into the hard place, creating a path toward repentance, repair, and peace.",
      crossReferences: ["Romans 12:18", "James 1:19-20", "Ephesians 4:29-32", "2 Corinthians 5:18-20"]
    },
    actions: {
      challenge: [
        ["Pause before reacting", "Name what you feel and ask what obedience requires before responding."],
        ["Own your part", "Write one sentence of confession without blame-shifting."],
        ["Move toward peace", "Choose a wise next step: prayer, counsel, apology, boundary, or honest conversation."]
      ],
      reward: [
        ["Humility unlocked", "Name one place where self-protection loosened."],
        ["Truth with mercy", "Record one truthful sentence that does not attack."],
        ["Repair path", "Identify the next faithful step toward peace."]
      ],
      connect: [
        ["Ask for prayer", "Invite a mature believer to pray before you act."],
        ["Seek counsel", "Ask someone wise to help you see clearly."],
        ["Reach carefully", "Send a humble, truthful message that opens the door to repair."]
      ]
    },
    outdoor: {
      title: "Cooling Walk",
      from: "The place of tension",
      to: "A neutral place where you can breathe and pray",
      prompt: "Walk slowly enough for your body to come under love. Ask what truth and mercy require before you return."
    },
    checkpoints: [
      ["Pause", "Name what you feel without letting it rule you."],
      ["Receive", "Ask Jesus for humility, truth, courage, and mercy."],
      ["Connect", "Reach toward repair, counsel, confession, prayer, or wise help."],
      ["Give", "Offer a truthful next step without manipulation or avoidance."]
    ]
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

const getShareUrl = (target) => {
  const baseUrl = window.location.origin === "null"
    ? window.location.href.split("#")[0]
    : `${window.location.origin}${window.location.pathname}`;
  return `${baseUrl}#${target}`;
};

const setTemporaryButtonText = (button, message) => {
  const originalText = button.dataset.originalText || button.textContent.trim();
  button.dataset.originalText = originalText;
  button.textContent = message;
  window.setTimeout(() => {
    button.textContent = originalText;
  }, 2200);
};

const getJournalEntries = () => {
  try {
    return JSON.parse(localStorage.getItem("gold-vein-journal-entries") || "[]");
  } catch {
    return [];
  }
};

const setJournalEntries = (entries) => {
  localStorage.setItem("gold-vein-journal-entries", JSON.stringify(entries));
};

const getAdventureDrafts = () => {
  try {
    return JSON.parse(localStorage.getItem("gold-vein-adventure-drafts") || "[]");
  } catch {
    return [];
  }
};

const setAdventureDrafts = (drafts) => {
  localStorage.setItem("gold-vein-adventure-drafts", JSON.stringify(drafts));
};

const getSupportPledges = () => {
  try {
    return JSON.parse(localStorage.getItem("gold-vein-support-pledges") || "[]");
  } catch {
    return [];
  }
};

const setSupportPledges = (pledges) => {
  localStorage.setItem("gold-vein-support-pledges", JSON.stringify(pledges));
};

const escapeHtml = (value) =>
  String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const trailLinks = {
  "coffee-shop-trail": "adventure-app",
  "conversion-trail": "conversion-adventure-app",
  "emmaus-road": "emmaus-adventure-app",
  "home-peace-trail": "home-adventure-app",
  "nearby-neighbor": "global-adventure-app",
  "the-word-trail": "adventure"
};

const categoryHeadlines = {
  "gospel-adventure": "Look to Christ.",
  "disciple-maker-adventure": "Carry the treasure.",
  "freedom-adventure": "Walk out of hiding.",
  "prepared-gift-adventure": "Bless with a tangible sign."
};

const getTrailHref = (trail) => `#${trailLinks[trail.slug] || "creator"}`;

const renderBackendAdventureCategories = (categories) => {
  if (!adventureCategoryGrid || !Array.isArray(categories) || !categories.length) {
    return;
  }

  adventureCategoryGrid.innerHTML = categories
    .map((category, index) => {
      const trails = Array.isArray(category.trails) ? category.trails : [];
      const trailLinksHtml = trails.length
        ? trails
            .map(
              (trail) =>
                `<a href="${escapeHtml(getTrailHref(trail))}">${escapeHtml(trail.title)}</a>`
            )
            .join("")
        : '<a href="#creator">Create first trail</a>';

      return `
        <article class="category-card ${index === 0 ? "featured" : ""}">
          <div>
            <span>${escapeHtml(category.title)}</span>
            <h3>${escapeHtml(categoryHeadlines[category.slug] || "Follow the trail.")}</h3>
            <p>${escapeHtml(category.summary)}</p>
          </div>
          <div class="trail-chip-list">
            ${trailLinksHtml}
          </div>
        </article>
      `;
    })
    .join("");
};

const loadBackendAdventures = async () => {
  if (!adventureCategoryGrid) {
    return;
  }

  try {
    const response = await fetch("/api/adventures", {
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Adventure API unavailable");
    }

    const data = await response.json();
    renderBackendAdventureCategories(data.categories);
    if (backendAdventuresStatus) {
      backendAdventuresStatus.textContent = "Adventure categories loaded from the backend.";
      backendAdventuresStatus.dataset.state = "success";
    }
  } catch {
    if (backendAdventuresStatus) {
      backendAdventuresStatus.textContent =
        "Using built-in adventure categories until the backend is available.";
      backendAdventuresStatus.dataset.state = "quiet";
    }
  }
};

const getContextProgressKey = (contextKey) => `gold-vein-context-${contextKey}-progress`;
const getContextUnlockKey = (contextKey) => `gold-vein-context-${contextKey}-unlocks`;
const getContextTreasureKey = (contextKey) => `gold-vein-context-${contextKey}-treasures`;
const getContextMovementKey = (contextKey) => `gold-vein-context-${contextKey}-movement`;
const getContextEvidenceKey = (contextKey) => `gold-vein-context-${contextKey}-evidence`;

const getContextUnlocks = (contextKey) => {
  try {
    return JSON.parse(localStorage.getItem(getContextUnlockKey(contextKey)) || "{}");
  } catch {
    return {};
  }
};

const setContextUnlock = (contextKey, type, index) => {
  const unlocks = getContextUnlocks(contextKey);
  unlocks[type] = index;
  localStorage.setItem(getContextUnlockKey(contextKey), JSON.stringify(unlocks));
};

const getContextTreasures = (contextKey) => {
  try {
    return JSON.parse(localStorage.getItem(getContextTreasureKey(contextKey)) || "[]");
  } catch {
    return [];
  }
};

const saveContextTreasure = (contextKey, treasure) => {
  const treasures = getContextTreasures(contextKey);
  treasures.unshift({
    id: Date.now(),
    savedAt: new Date().toISOString(),
    ...treasure
  });
  localStorage.setItem(getContextTreasureKey(contextKey), JSON.stringify(treasures.slice(0, 8)));
};

const getContextMovement = (contextKey) => Number(localStorage.getItem(getContextMovementKey(contextKey)) || "0");

const getContextEvidence = (contextKey) => {
  try {
    return JSON.parse(localStorage.getItem(getContextEvidenceKey(contextKey)) || "{}");
  } catch {
    return {};
  }
};

const getCurrentEvidenceId = (contextKey) =>
  `${getContextMovement(contextKey)}-${Number(localStorage.getItem(getContextProgressKey(contextKey)) || "0")}`;

const hasCurrentEvidence = (contextKey) => {
  const evidence = getContextEvidence(contextKey);
  return Boolean(evidence[getCurrentEvidenceId(contextKey)]?.note);
};

const saveCurrentEvidence = (contextKey, note) => {
  const adventure = contextAdventures[contextKey] || contextAdventures.home;
  const checkpoints = getAdaptiveCheckpoints(contextKey);
  const progress = Number(localStorage.getItem(getContextProgressKey(contextKey)) || "0");
  const movement = getContextMovement(contextKey);
  const [checkpointLabel] = checkpoints[progress] || ["Checkpoint"];
  const evidence = getContextEvidence(contextKey);
  evidence[getCurrentEvidenceId(contextKey)] = {
    note,
    checkpoint: checkpointLabel,
    movement,
    savedAt: new Date().toISOString()
  };
  localStorage.setItem(getContextEvidenceKey(contextKey), JSON.stringify(evidence));

  const now = new Date();
  const entries = getJournalEntries();
  entries.unshift({
    id: Date.now(),
    savedAt: now.toISOString(),
    trail: `${adventure.title}${movement ? ` · Movement ${movement + 1}` : ""}`,
    date: now.toISOString().slice(0, 10),
    time: now.toTimeString().slice(0, 5),
    weather: cleanWeatherValue(journalWeatherInput?.value || ""),
    place: adventure.outdoor?.title || adventure.title,
    scripture: adventure.map.passage,
    treasure: note,
    nextStep: `Checkpoint evidence: ${checkpointLabel}`
  });
  setJournalEntries(entries);
  renderJournalEntries();
};

const getContextJournalEntries = (contextKey) => {
  const adventure = contextAdventures[contextKey] || contextAdventures.home;
  return getJournalEntries().filter((entry) => normalizeTrailName(entry.trail).startsWith(adventure.title));
};

const getSelectedActionTitle = (adventure, unlocks, type, fallback) => {
  const index = unlocks[type];
  return Number.isInteger(index) && adventure.actions?.[type]?.[index]
    ? adventure.actions[type][index][0]
    : fallback;
};

const getAdaptiveCheckpoints = (contextKey) => {
  const adventure = contextAdventures[contextKey] || contextAdventures.home;
  const movement = getContextMovement(contextKey);

  if (!movement) {
    return adventure.checkpoints;
  }

  const unlocks = getContextUnlocks(contextKey);
  const treasures = getContextTreasures(contextKey);
  const challenge = getSelectedActionTitle(adventure, unlocks, "challenge", adventure.challenge);
  const reward = getSelectedActionTitle(adventure, unlocks, "reward", adventure.reward);
  const connect = getSelectedActionTitle(adventure, unlocks, "connect", "Invite someone into the trail");
  const treasure = treasures[0]?.type || "a tangible act of love";

  return [
    [
      "Remember",
      `Return to ${adventure.map.passage}. What has Christ already revealed in this trail?`
    ],
    [
      "Practice",
      `Take the next layer of "${challenge}" with greater attention, humility, and obedience.`
    ],
    [
      "Connect",
      `Bring someone into "${connect}" so the trail does not stay private.`
    ],
    [
      "Give",
      `Carry "${reward}" outward through ${treasure.toLowerCase()} or another concrete sign of grace.`
    ]
  ];
};

const setContextStatus = (message, state = "") => {
  if (!contextStatus) {
    return;
  }

  contextStatus.textContent = message;
  contextStatus.dataset.state = state;
};

const setActiveAdventureView = (view) => {
  activeAdventureView = view;
  localStorage.setItem("gold-vein-active-adventure-view", view);
  updateAdventureFocus();
};

const updateAdventureFocus = () => {
  const isChoosing = activeAdventureView === "choose";
  const isPathFocused = activeAdventureView === "path";
  const isWebFocused = activeAdventureView === "web";

  document.body.dataset.adventureFocus = activeAdventureView;

  if (adventureIntro) {
    adventureIntro.hidden = isPathFocused;
  }
  if (contextGrid) {
    contextGrid.hidden = !isChoosing;
  }
  if (adventureReturnBar) {
    adventureReturnBar.hidden = isChoosing;
  }
  if (activeWeb) {
    activeWeb.hidden = isChoosing || isPathFocused;
  }
  if (adaptiveAdventure) {
    adaptiveAdventure.dataset.focusMode = activeAdventureView;
  }
  if (missionHub) {
    missionHub.hidden = isChoosing;
  }
  if (returnToWebButton) {
    returnToWebButton.hidden = isChoosing || isWebFocused;
  }
};

const openMissionPath = (key, shouldScroll = true) => {
  activeMissionTab = key;
  localStorage.setItem("gold-vein-active-mission-tab", activeMissionTab);
  setActiveAdventureView("path");
  renderMissionPanel();
  renderActiveWeb();

  if (shouldScroll) {
    missionPanel?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const returnToActiveWeb = () => {
  setActiveAdventureView("web");
  renderActiveWeb();
  activeWeb?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const renderContextAdventure = () => {
  const adventure = contextAdventures[activeContextKey] || contextAdventures.home;
  const checkpoints = getAdaptiveCheckpoints(activeContextKey);
  const movement = getContextMovement(activeContextKey);
  activeContextProgress = Math.min(
    Math.max(activeContextProgress, 0),
    checkpoints.length
  );

  contextOptionButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.contextOption === activeContextKey);
  });

  if (contextTitle) {
    contextTitle.textContent = movement ? `${adventure.title} · Movement ${movement + 1}` : adventure.title;
  }
  if (contextSummary) {
    contextSummary.textContent = adventure.summary;
  }
  if (contextAwareness) {
    contextAwareness.textContent = adventure.awareness;
  }
  if (contextScripture) {
    contextScripture.textContent = adventure.scripture;
  }
  if (contextProgress) {
    const isComplete = activeContextProgress >= checkpoints.length;
    contextProgress.textContent = isComplete
      ? `Movement ${movement + 1} complete · adventure open`
      : `Checkpoint ${activeContextProgress + 1} of ${checkpoints.length}`;
  }
  if (contextChallenge) {
    contextChallenge.textContent = adventure.challenge;
  }
  if (contextChallengeCopy) {
    contextChallengeCopy.textContent = adventure.challengeCopy;
  }
  if (contextReward) {
    contextReward.textContent = adventure.reward;
  }
  if (contextRewardCopy) {
    contextRewardCopy.textContent = adventure.rewardCopy;
  }
  if (contextCheckpoints) {
    const visibleCheckpoints = checkpoints.filter((_, index) => index <= activeContextProgress);
    const currentEvidenceSaved = hasCurrentEvidence(activeContextKey);
    const webNodes = checkpoints
      .map((_, index) => {
        const state =
          index < activeContextProgress
            ? "complete"
            : index === activeContextProgress
              ? currentEvidenceSaved ? "revealed" : "active"
              : "locked";
        return `<span data-state="${state}"></span>`;
      })
      .join("");

    contextCheckpoints.innerHTML = `
      <div class="trail-web" aria-label="Gold Vein trail web">
        <div class="trail-web-line"></div>
        ${webNodes}
      </div>
    ` + visibleCheckpoints
      .map(([label, copy], index) => {
        const state =
          index < activeContextProgress
            ? "complete"
            : index === activeContextProgress && activeContextProgress < checkpoints.length
              ? currentEvidenceSaved ? "active" : "gate"
              : "complete";
        const stateLabel =
          state === "complete" ? "Complete" : state === "gate" ? "Locked" : "Now";
        const shouldHideCheckpoint = state === "gate";

        return `
          <article class="checkpoint-card" data-state="${state}">
            <span>${escapeHtml(stateLabel)} · ${escapeHtml(label)}</span>
            <h3>${escapeHtml(shouldHideCheckpoint ? "Mission gate" : label)}</h3>
            <p>${escapeHtml(shouldHideCheckpoint ? "Record evidence from a challenge, connection, or outdoor movement to reveal this checkpoint." : copy)}</p>
          </article>
        `;
      })
      .join("") +
      (activeContextProgress >= checkpoints.length
        ? `
          <article class="checkpoint-card next-movement-card" data-state="active">
            <span>Next Movement</span>
            <h3>The trail is still alive.</h3>
            <p>Gold Vein can generate the next movement from what you unlocked, saved, and carried on this trail.</p>
          </article>
        `
        : "");
  }
  if (completeContextCheckpointButton) {
    completeContextCheckpointButton.hidden =
      activeContextProgress >= checkpoints.length || !hasCurrentEvidence(activeContextKey);
  }
  if (generateContextMovementButton) {
    generateContextMovementButton.hidden = activeContextProgress < checkpoints.length;
  }
  renderActiveWeb();
  renderMissionPanel();
  updateAdventureFocus();
};

const getActiveWebNodes = () => {
  const adventure = contextAdventures[activeContextKey] || contextAdventures.home;
  const unlocks = getContextUnlocks(activeContextKey);
  const treasures = getContextTreasures(activeContextKey);
  const journalEntries = getContextJournalEntries(activeContextKey);
  const evidenceSaved = hasCurrentEvidence(activeContextKey);

  return [
    {
      key: "map",
      label: "Map",
      detail: adventure.map.passage,
      state: activeMissionTab === "map" ? "active" : "available",
      action: "tab"
    },
    {
      key: "challenge",
      label: "Challenge",
      detail: Number.isInteger(unlocks.challenge) ? "Chosen" : "Choose",
      state: activeMissionTab === "challenge" ? "active" : evidenceSaved ? "complete" : "available",
      action: "tab"
    },
    {
      key: "reward",
      label: "Reward",
      detail: Number.isInteger(unlocks.reward) ? "Named" : "Name",
      state: activeMissionTab === "reward" ? "active" : Number.isInteger(unlocks.reward) ? "complete" : "available",
      action: "tab"
    },
    {
      key: "connect",
      label: "Connect",
      detail: Number.isInteger(unlocks.connect) ? "Chosen" : "Invite",
      state: activeMissionTab === "connect" ? "active" : Number.isInteger(unlocks.connect) ? "complete" : "available",
      action: "tab"
    },
    {
      key: "treasure",
      label: "Treasure",
      detail: treasures.length ? "Given" : "Give",
      state: activeMissionTab === "treasure" ? "active" : treasures.length ? "complete" : "available",
      action: "tab"
    },
    {
      key: "journal",
      label: "Journal",
      detail: journalEntries.length ? `${journalEntries.length} saved` : "Record",
      state: journalEntries.length ? "complete" : "available",
      action: "journal"
    }
  ];
};

const renderActiveWeb = () => {
  if (!activeWeb) {
    return;
  }

  const adventure = contextAdventures[activeContextKey] || contextAdventures.home;
  const movement = getContextMovement(activeContextKey);
  const nodes = getActiveWebNodes();
  const webPoints = {
    map: [50, 20],
    challenge: [76, 35],
    reward: [76, 65],
    treasure: [50, 80],
    connect: [24, 65],
    journal: [24, 35]
  };
  const linkMarkup = nodes
    .map(
      (node) => {
        const [x, y] = webPoints[node.key] || [50, 50];
        return `
          <path class="web-link" data-web-line-to="${escapeHtml(node.key)}" data-web-action="${escapeHtml(node.action)}" data-state="${escapeHtml(node.state)}" d="M50 50 L${x} ${y}" />
        `;
      }
    )
    .join("");
  const nodeMarkup = nodes
    .map(
      (node) => `
        <button type="button" data-web-node="${escapeHtml(node.key)}" data-web-action="${escapeHtml(node.action)}" data-state="${escapeHtml(node.state)}">
          <span>${escapeHtml(node.label)}</span>
          <strong>${escapeHtml(node.detail)}</strong>
        </button>
      `
    )
    .join("");

  activeWeb.innerHTML = `
    <div class="active-web-header">
      <div>
        <span>Active Web</span>
        <h3>${escapeHtml(adventure.title)}${movement ? ` · Movement ${movement + 1}` : ""}</h3>
      </div>
      <p>Follow the gold vein. Each node opens the next place to move.</p>
    </div>
    <div class="active-web-map" data-active-node="${escapeHtml(activeMissionTab)}">
      <svg class="active-web-lines" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <polygon class="web-ring" points="50,20 76,35 76,65 50,80 24,65 24,35"></polygon>
        ${linkMarkup}
      </svg>
      <div class="web-core" data-state="${hasCurrentEvidence(activeContextKey) ? "revealed" : "active"}">
        <span>Now</span>
        <strong>${escapeHtml(activeContextProgress + 1)}</strong>
      </div>
      ${nodeMarkup}
    </div>
  `;
};

const selectContextAdventure = (contextKey, message = "Adventure updated.") => {
  if (!contextAdventures[contextKey]) {
    return;
  }

  activeContextKey = contextKey;
  activeContextProgress = Number(localStorage.getItem(getContextProgressKey(contextKey)) || "0");
  localStorage.setItem("gold-vein-active-context", contextKey);
  activeMissionTab = "map";
  localStorage.setItem("gold-vein-active-mission-tab", activeMissionTab);
  setActiveAdventureView("web");
  renderContextAdventure();
  setContextStatus(message, "success");
  activeWeb?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const renderActionOptions = (type) => {
  const adventure = contextAdventures[activeContextKey] || contextAdventures.home;
  const options = adventure.actions?.[type] || [];
  const unlocks = getContextUnlocks(activeContextKey);
  const selectedIndex = Number.isInteger(unlocks[type]) ? unlocks[type] : -1;
  const selectedOption = selectedIndex >= 0 ? options[selectedIndex] : null;
  const evidence = getContextEvidence(activeContextKey)[getCurrentEvidenceId(activeContextKey)];

  return `
    <div class="mission-option-grid">
      ${options
        .map(
          ([title, copy], index) => `
            <button class="${selectedIndex === index ? "selected" : ""}" type="button" data-action-unlock="${escapeHtml(type)}" data-action-index="${index}">
              <span>${selectedIndex === index ? "Unlocked" : "Option"} · ${escapeHtml(type)}</span>
              <strong>${escapeHtml(title)}</strong>
              <small>${escapeHtml(copy)}</small>
            </button>
          `
        )
        .join("")}
    </div>
    ${
      selectedOption
        ? `
          <div class="evidence-panel">
            <span>Evidence Required</span>
            <h3>${escapeHtml(selectedOption[0])}</h3>
            <p>${escapeHtml(selectedOption[1])}</p>
            <label>
              What did you do?
              <textarea data-evidence-note rows="3" placeholder="Write what happened, who was involved, what you noticed, or what you practiced.">${escapeHtml(evidence?.note || "")}</textarea>
            </label>
            <button class="button primary" type="button" data-save-context-evidence>
              Save Evidence and Reveal Checkpoint
            </button>
          </div>
        `
        : `
          <div class="evidence-panel muted-evidence">
            <span>Mission Gate</span>
            <p>Choose an option above, do it in real life, then record evidence to reveal the checkpoint.</p>
          </div>
        `
    }
  `;
};

const renderMissionReturnControls = () => `
  <div class="mission-return-controls">
    <button class="button secondary" type="button" data-return-to-web>
      Back to Active Web
    </button>
    <button class="button secondary" type="button" data-open-journal-from-path>
      Open Journal
    </button>
  </div>
`;

const renderMissionPanel = () => {
  if (!missionPanel) {
    return;
  }

  const adventure = contextAdventures[activeContextKey] || contextAdventures.home;
  const map = adventure.map;
  const treasures = getContextTreasures(activeContextKey);

  missionTabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.missionTab === activeMissionTab);
  });

  if (activeMissionTab === "map") {
    missionPanel.innerHTML = `
      <article class="scripture-map-card">
        ${renderMissionReturnControls()}
        <span>Scripture Map</span>
        <h3>${escapeHtml(map.passage)}</h3>
        <div class="map-grid">
          <details open>
            <summary>History</summary>
            <p>${escapeHtml(map.history)}</p>
          </details>
          <details open>
            <summary>Context</summary>
            <p>${escapeHtml(map.context)}</p>
          </details>
          <details>
            <summary>Bodily / Psychological Awareness</summary>
            <p>${escapeHtml(map.inner)}</p>
          </details>
          <details>
            <summary>Power</summary>
            <p>${escapeHtml(map.power)}</p>
          </details>
        </div>
        <div class="reference-strip">
          ${map.crossReferences.map((reference) => `<span>${escapeHtml(reference)}</span>`).join("")}
        </div>
      </article>
    `;
    return;
  }

  if (activeMissionTab === "challenge") {
    missionPanel.innerHTML = `
      <article class="mission-card">
        ${renderMissionReturnControls()}
        <span>Challenge Options</span>
        <h3>Choose a step to unlock.</h3>
        <p>Each challenge draws the ${escapeHtml(adventure.title)} back to ${escapeHtml(map.passage)}.</p>
        <div class="outdoor-prompt">
          <span>Outdoor Movement</span>
          <strong>${escapeHtml(adventure.outdoor.title)}</strong>
          <p><b>Point A:</b> ${escapeHtml(adventure.outdoor.from)}<br><b>Point B:</b> ${escapeHtml(adventure.outdoor.to)}<br>${escapeHtml(adventure.outdoor.prompt)}</p>
        </div>
        ${renderActionOptions("challenge")}
      </article>
    `;
    return;
  }

  if (activeMissionTab === "reward") {
    missionPanel.innerHTML = `
      <article class="mission-card">
        ${renderMissionReturnControls()}
        <span>Reward Options</span>
        <h3>Name the treasure uncovered.</h3>
        <p>Rewards are not trophies. They are signs of grace received, noticed, and carried outward.</p>
        ${renderActionOptions("reward")}
      </article>
    `;
    return;
  }

  if (activeMissionTab === "connect") {
    missionPanel.innerHTML = `
      <article class="mission-card">
        ${renderMissionReturnControls()}
        <span>Connection Options</span>
        <h3>Bring someone onto the trail.</h3>
        <p>Invite prayer, encouragement, counsel, service, or witness so the adventure does not stay private.</p>
        ${renderActionOptions("connect")}
      </article>
    `;
    return;
  }

  missionPanel.innerHTML = `
    <article class="mission-card">
      ${renderMissionReturnControls()}
      <span>Treasure Options</span>
      <h3>Give a real-world treasure.</h3>
      <p>Choose a tangible act that fits the person and the trail: a financial gift, note, prayer, service, meal, resource, or follow-up.</p>
      <div class="treasure-action-grid">
        <button class="${activeTreasureType === "Financial gift" ? "selected" : ""}" type="button" data-treasure-type="Financial gift">Financial Gift</button>
        <button class="${activeTreasureType === "Written note" ? "selected" : ""}" type="button" data-treasure-type="Written note">Write Note</button>
        <button class="${activeTreasureType === "Prayer" ? "selected" : ""}" type="button" data-treasure-type="Prayer">Pray</button>
        <button class="${activeTreasureType === "Service" ? "selected" : ""}" type="button" data-treasure-type="Service">Serve</button>
      </div>
      <label>
        Treasure note
        <textarea data-treasure-note rows="3" placeholder="Who are you blessing, and what treasure are you giving?"></textarea>
      </label>
      <button class="button primary" type="button" data-save-context-treasure>Save Treasure</button>
      <div class="treasure-log">
        ${
          treasures.length
            ? treasures
                .map(
                  (treasure) => `
                    <article>
                      <strong>${escapeHtml(treasure.type)}</strong>
                      <span>${escapeHtml(treasure.note || "No note added.")}</span>
                    </article>
                  `
                )
                .join("")
            : '<p class="empty-journal">No treasures saved on this context yet.</p>'
        }
      </div>
    </article>
  `;
};

const setJournalDateTimeDefaults = () => {
  const now = new Date();
  const date = now.toISOString().slice(0, 10);
  const time = now.toTimeString().slice(0, 5);

  if (journalDateInput && !journalDateInput.value) {
    journalDateInput.value = date;
  }

  if (journalTimeInput && !journalTimeInput.value) {
    journalTimeInput.value = time;
  }
};

const prefillJournalFromActiveAdventure = () => {
  const form = notesButton?.closest("form");
  const adventure = contextAdventures[activeContextKey] || contextAdventures.home;
  const movement = getContextMovement(activeContextKey);

  if (!form || !adventure) {
    return;
  }

  const trailInput = form.elements.trail;
  const placeInput = form.elements.place;
  const scriptureInput = form.elements.scripture;

  if (trailInput && !trailInput.value) {
    trailInput.value = `${adventure.title}${movement ? ` · Movement ${movement + 1}` : ""}`;
  }
  if (placeInput && !placeInput.value) {
    placeInput.value = adventure.outdoor?.title || adventure.title;
  }
  if (scriptureInput && !scriptureInput.value) {
    scriptureInput.value = adventure.map?.passage || "";
  }
};

const returnFromJournal = () => {
  const returnHash = localStorage.getItem("gold-vein-journal-return-hash") || "now-adventure";
  window.location.hash = returnHash;

  if (returnHash === "now-adventure") {
    setActiveAdventureView(activeAdventureView === "choose" ? "web" : activeAdventureView);
    window.requestAnimationFrame(() => {
      const target = activeAdventureView === "path" ? missionPanel : activeWeb;
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
};

const weatherDescriptions = {
  0: "Clear",
  1: "Mostly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Freezing fog",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Heavy drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Rain showers",
  81: "Rain showers",
  82: "Heavy rain showers",
  95: "Storms reported nearby",
  96: "Storms reported nearby",
  99: "Storms reported nearby"
};

const setWeatherStatus = (message, state = "") => {
  if (!weatherStatus) {
    return;
  }

  weatherStatus.textContent = message;
  weatherStatus.dataset.state = state;
};

const formatWeather = (currentWeather) => {
  const description = weatherDescriptions[currentWeather.weathercode] || "Weather recorded";
  const temperature = Math.round((currentWeather.temperature * 9) / 5 + 32);
  const wind = Math.round(currentWeather.windspeed);
  return `${description}, ${temperature}F, wind ${wind} mph`;
};

const cleanWeatherValue = (weather) =>
  String(weather || "").replace(/,\s*reported\s+\d{1,2}:\d{2}\s*(AM|PM)?$/i, "");

const normalizeTrailName = (trail) => trail?.trim() || "Gold Vein Trail";

const renderJournalEntries = () => {
  if (!journalList) {
    return;
  }

  const entries = getJournalEntries();

  if (!entries.length) {
    journalList.innerHTML = '<p class="empty-journal">No adventure history saved yet.</p>';
    return;
  }

  const groupedEntries = entries.reduce((groups, entry) => {
    const trail = normalizeTrailName(entry.trail);
    if (!groups[trail]) {
      groups[trail] = [];
    }
    groups[trail].push(entry);
    return groups;
  }, {});

  journalList.innerHTML = Object.entries(groupedEntries)
    .map(
      ([trail, trailEntries]) => `
        <section class="journal-trail-group">
          <div class="journal-group-heading">
            <div>
              <span>Trail</span>
              <h3>${escapeHtml(trail)}</h3>
            </div>
            <strong>${trailEntries.length} ${trailEntries.length === 1 ? "entry" : "entries"}</strong>
          </div>
          <div class="journal-entry-stack">
            ${trailEntries
              .map(
                (entry) => `
                  <article class="journal-entry">
                    <div class="journal-entry-topline">
                      <span>${escapeHtml(entry.date || "Undated")} · ${escapeHtml(entry.time || "No time")}</span>
                      <strong>${escapeHtml(entry.place || "Place not recorded")}</strong>
                    </div>
                    <dl>
                      <div>
                        <dt>Weather</dt>
                        <dd>${escapeHtml(cleanWeatherValue(entry.weather) || "Not recorded")}</dd>
                      </div>
                      <div>
                        <dt>Saved</dt>
                        <dd>${escapeHtml(entry.savedAt ? new Date(entry.savedAt).toLocaleDateString() : "Not recorded")}</dd>
                      </div>
                    </dl>
                    <p><strong>Word:</strong> ${escapeHtml(entry.scripture || "Not recorded")}</p>
                    <p><strong>Treasure:</strong> ${escapeHtml(entry.treasure || "Not recorded")}</p>
                    <p><strong>Next step:</strong> ${escapeHtml(entry.nextStep || "Not recorded")}</p>
                  </article>
                `
              )
              .join("")}
            </div>
        </section>
      `
    )
    .join("");
};

const getCreatorFormData = () => {
  const form = saveAdventureButton?.closest("form") || previewAdventureButton?.closest("form");

  if (!form) {
    return null;
  }

  const data = Object.fromEntries(new FormData(form).entries());
  return {
    title: data.title?.trim() || "Untitled Gold Vein Adventure",
    collection: data.collection?.trim() || "Custom",
    scripture: data.scripture?.trim() || "Scripture map not set",
    place: data.place?.trim() || "Place or unlock not set",
    smallTreasure: data.smallTreasure?.trim() || "Small treasure not set",
    bigTreasure: data.bigTreasure?.trim() || "Big treasure not set",
    firstStep: data.firstStep?.trim() || "First instruction not set",
    connection: data.connection?.trim() || "Connection prompt not set",
    witness: data.witness?.trim() || "Give / witness step not set"
  };
};

const renderAdventurePreview = (draft) => {
  if (!adventurePreview || !draft) {
    return;
  }

  adventurePreview.innerHTML = `
    <article class="creator-card">
      <span>${escapeHtml(draft.collection)}</span>
      <h3>${escapeHtml(draft.title)}</h3>
      <dl>
        <div>
          <dt>Scripture Map</dt>
          <dd>${escapeHtml(draft.scripture)}</dd>
        </div>
        <div>
          <dt>Place / Unlock</dt>
          <dd>${escapeHtml(draft.place)}</dd>
        </div>
        <div>
          <dt>Small Treasure</dt>
          <dd>${escapeHtml(draft.smallTreasure)}</dd>
        </div>
      </dl>
      <div class="creator-step-list">
        <p><strong>Go:</strong> ${escapeHtml(draft.firstStep)}</p>
        <p><strong>Look:</strong> ${escapeHtml(draft.bigTreasure)}</p>
        <p><strong>Connect:</strong> ${escapeHtml(draft.connection)}</p>
        <p><strong>Give:</strong> ${escapeHtml(draft.witness)}</p>
      </div>
    </article>
  `;
};

const renderAdventureDrafts = () => {
  if (!adventureDraftList) {
    return;
  }

  const drafts = getAdventureDrafts();

  if (!drafts.length) {
    adventureDraftList.innerHTML = '<p class="empty-journal">No draft adventures saved yet.</p>';
    return;
  }

  adventureDraftList.innerHTML = drafts
    .map(
      (draft) => `
        <article class="creator-draft">
          <div>
            <span>${escapeHtml(draft.collection)}</span>
            <h3>${escapeHtml(draft.title)}</h3>
          </div>
          <p>${escapeHtml(draft.scripture)} · ${escapeHtml(draft.place)}</p>
          <small>Saved ${escapeHtml(draft.savedAt ? new Date(draft.savedAt).toLocaleString() : "locally")}</small>
        </article>
      `
    )
    .join("");
};

const renderSupportPledges = () => {
  if (!supportPledgeList) {
    return;
  }

  const pledges = getSupportPledges();

  if (!pledges.length) {
    supportPledgeList.innerHTML = '<p class="empty-journal">No support notes saved yet.</p>';
    return;
  }

  supportPledgeList.innerHTML = pledges
    .map(
      (pledge) => `
        <article class="support-pledge">
          <div>
            <span>${escapeHtml(pledge.supportType)}</span>
            <strong>$${escapeHtml(pledge.amount)}</strong>
          </div>
          <p>${escapeHtml(pledge.purpose || "No purpose note added.")}</p>
          <small>${escapeHtml(pledge.note || "No contact note.")}</small>
        </article>
      `
    )
    .join("");
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
    activeRedeemCode = detail || "DEMO-NOT-REDEEMABLE";
    renderRedemption();
  }

  if (pageId === "field-notes") {
    setJournalDateTimeDefaults();
    prefillJournalFromActiveAdventure();
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

const compassStepLabels = {
  watermark: ["Go", "Receive", "Look", "Connect", "Give"],
  global: ["Place", "Receive", "Look", "Connect", "Give"],
  home: ["Place", "Receive", "Look", "Connect", "Give"],
  emmaus: ["Road", "Receive", "Look", "Connect", "Give"],
  conversion: ["Look", "Hear", "Word", "Respond", "Follow"]
};

const updateTrailCompass = ({ trailKey, progress, total, detail, state = "" }) => {
  const compass = document.querySelector(`[data-trail-compass="${trailKey}"]`);

  if (!compass) {
    return;
  }

  const labels = compassStepLabels[trailKey] || compassStepLabels.watermark;
  const activeIndex = Math.min(progress, Math.max(total - 1, 0));
  const isComplete = progress >= total;
  const label = isComplete ? "Trail Complete" : `Step ${activeIndex + 1} · ${labels[activeIndex]}`;
  const turn = isComplete ? 360 : activeIndex * (360 / Math.max(total, 1));
  const labelNode = compass.querySelector("[data-compass-label]");
  const detailNode = compass.querySelector("[data-compass-detail]");

  compass.style.setProperty("--compass-turn", `${turn}deg`);
  compass.dataset.state = isComplete ? "complete" : state;
  if (labelNode) {
    labelNode.textContent = label;
  }
  if (detailNode) {
    detailNode.textContent = detail;
  }
};

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

const setConversionHonestyStatus = (message, state = "") => {
  if (!conversionHonestyStatus) {
    return;
  }

  conversionHonestyStatus.textContent = message;
  conversionHonestyStatus.dataset.state = state;
};

const setConversionHonestyConfirmed = (confirmed) => {
  isConversionHonestyConfirmed = confirmed;
  localStorage.setItem("gold-vein-conversion-honesty-confirmed", String(confirmed));
};

const setConversionGospelStatus = (message, state = "") => {
  if (!conversionGospelStatus) {
    return;
  }

  conversionGospelStatus.textContent = message;
  conversionGospelStatus.dataset.state = state;
};

const setConversionGospelConfirmed = (confirmed) => {
  isConversionGospelConfirmed = confirmed;
  localStorage.setItem("gold-vein-conversion-gospel-confirmed", String(confirmed));
};

const getSelectedConversionResponseType = () =>
  Array.from(conversionResponseTypeInputs).find((input) => input.checked)?.value || "";

const setConversionResponseStatus = (message, state = "") => {
  if (!conversionResponseStatus) {
    return;
  }

  conversionResponseStatus.textContent = message;
  conversionResponseStatus.dataset.state = state;
};

const setConversionResponseConfirmed = (confirmed) => {
  isConversionResponseConfirmed = confirmed;
  localStorage.setItem("gold-vein-conversion-response-confirmed", String(confirmed));
};

const setConversionFollowupStatus = (message, state = "") => {
  if (!conversionFollowupStatus) {
    return;
  }

  conversionFollowupStatus.textContent = message;
  conversionFollowupStatus.dataset.state = state;
};

const setConversionFollowupConfirmed = (confirmed) => {
  isConversionFollowupConfirmed = confirmed;
  localStorage.setItem("gold-vein-conversion-followup-confirmed", String(confirmed));
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
      "This code is not currently listed as an active Gold Vein pass. No public redemption is available.";
    redeemButton.disabled = true;
    return;
  }

  redeemLocation.textContent = pass.location;
  redeemAdventure.textContent = pass.adventure;
  redeemTreasure.textContent = pass.treasure;
  redeemButton.disabled = isRedeemed;

  if (isRedeemed) {
    redeemState.textContent = "Demo Reviewed";
    redeemMessage.textContent =
      "This demo pass has already been reviewed on this device. Return to the trail and continue the adventure.";
  } else {
    redeemState.textContent = "Demo Only";
    redeemMessage.textContent =
      "This prototype does not authorize a free coffee, item, or staff redemption. Mark it reviewed only for testing.";
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
        ? "Step 1 is ready. Location verification is disabled in this public prototype."
        : stepStatusMessages[trailProgress - 1] || "Trail progress saved.";
  }

  updateTrailCompass({
    trailKey: "watermark",
    progress: trailProgress,
    total: totalTrailSteps,
    detail:
      trailProgress >= totalTrailSteps
        ? "Trail complete. Carry the treasure forward."
        : trailProgress === 0
          ? watermarkCompassDetail ||
            (isLocationVerified
              ? "Prototype location reviewed. Step 1 is ready."
              : "Location verification is disabled in this public prototype.")
          : stepStatusMessages[trailProgress - 1] || "Trail progress saved.",
    state: trailProgress === 0 && !isLocationVerified && watermarkCompassDetail ? "error" : ""
  });

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
  "Place confirmed. Receive the Nearby Neighbor Trail.",
  "Trail received. Open the Scripture Map.",
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

  updateTrailCompass({
    trailKey: "global",
    progress: globalTrailProgress,
    total: totalGlobalTrailSteps,
    detail:
      globalTrailProgress >= totalGlobalTrailSteps
        ? "Trail complete. Carry mercy forward."
        : globalTrailProgress === 0
          ? isGlobalLocationVerified
            ? "Nearby place confirmed. Step 1 is ready."
            : "Confirm your nearby place."
          : globalStepStatusMessages[globalTrailProgress - 1] || "Global trail progress saved.",
    state: globalTrailProgress === 0 && isGlobalLocationVerified ? "success" : ""
  });

  if (globalTrailProgress === 0 && isGlobalLocationVerified) {
    setGlobalLocationStatus("Place confirmed. You can complete Step 1.", "success");
  }

  if (globalTrailProgress === 1 && isGlobalPassConfirmed) {
    setGlobalPassStatus("Trail received. You can complete Step 2.", "success");
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

  updateTrailCompass({
    trailKey: "home",
    progress: homeTrailProgress,
    total: totalHomeTrailSteps,
    detail:
      homeTrailProgress >= totalHomeTrailSteps
        ? "Trail complete. Carry peace forward."
        : homeTrailProgress === 0
          ? isHomePlaceConfirmed
            ? "Home place confirmed. Step 1 is ready."
            : "Confirm your room or table."
          : homeStepStatusMessages[homeTrailProgress - 1] || "Home trail progress saved.",
    state: homeTrailProgress === 0 && isHomePlaceConfirmed ? "success" : ""
  });

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

  updateTrailCompass({
    trailKey: "emmaus",
    progress: emmausTrailProgress,
    total: totalEmmausTrailSteps,
    detail:
      emmausTrailProgress >= totalEmmausTrailSteps
        ? "Trail complete. Carry the witness that Christ is risen."
        : emmausTrailProgress === 0
          ? isEmmausPlaceConfirmed
            ? "Road confirmed. Step 1 is ready."
            : "Confirm the road beneath your feet."
          : emmausStepStatusMessages[emmausTrailProgress - 1] || "Emmaus trail progress saved.",
    state: emmausTrailProgress === 0 && isEmmausPlaceConfirmed ? "success" : ""
  });

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

const conversionStepStatusMessages = [
  "Honest willingness confirmed. Hear the gospel invitation.",
  "Gospel invitation received. Open the Scripture Map.",
  "Passage experienced. Name your honest response.",
  "Honest response confirmed. Connect for follow-up.",
  "The Conversion Trail is complete. Follow Christ with His people."
];

const clampConversionProgress = () => {
  conversionTrailProgress = Math.min(
    Math.max(conversionTrailProgress, 0),
    totalConversionTrailSteps
  );
};

const renderConversionTrail = () => {
  clampConversionProgress();

  conversionSteps.forEach((step) => {
    const stepIndex = Number(step.dataset.conversionStep);
    const button = step.querySelector("[data-complete-conversion-step]");
    const isComplete = stepIndex < conversionTrailProgress;
    const isActive = stepIndex === conversionTrailProgress;
    const isLocked = stepIndex > conversionTrailProgress;

    step.classList.toggle("complete", isComplete);
    step.classList.toggle("active", isActive);
    step.classList.toggle("locked", isLocked);
    step.setAttribute("aria-disabled", String(isLocked));

    if (button) {
      const requiresHonestyCheck = stepIndex === 0 && !isConversionHonestyConfirmed;
      const requiresGospelCheck = stepIndex === 1 && !isConversionGospelConfirmed;
      const requiresResponseCheck = stepIndex === 3 && !isConversionResponseConfirmed;
      const requiresFollowupCheck = stepIndex === 4 && !isConversionFollowupConfirmed;
      button.disabled =
        isLocked ||
        isComplete ||
        requiresHonestyCheck ||
        requiresGospelCheck ||
        requiresResponseCheck ||
        requiresFollowupCheck;
      if (isComplete) {
        button.textContent = "Completed";
      }
    }
  });

  conversionProgressDots.forEach((dot) => {
    const dotIndex = Number(dot.dataset.conversionProgressDot);
    dot.classList.toggle("complete", dotIndex < conversionTrailProgress);
    dot.classList.toggle("active", dotIndex === conversionTrailProgress);
  });

  if (conversionAppStatus) {
    conversionAppStatus.textContent =
      conversionTrailProgress === 0
        ? "Step 1 is ready. Begin with honesty before God."
        : conversionStepStatusMessages[conversionTrailProgress - 1] ||
          "Conversion Trail progress saved.";
  }

  updateTrailCompass({
    trailKey: "conversion",
    progress: conversionTrailProgress,
    total: totalConversionTrailSteps,
    detail:
      conversionTrailProgress >= totalConversionTrailSteps
        ? "Trail complete. Follow Christ with His people."
        : conversionTrailProgress === 0
          ? isConversionHonestyConfirmed
            ? "Honesty confirmed. Step 1 is ready."
            : "Begin with honesty before God."
          : conversionStepStatusMessages[conversionTrailProgress - 1] ||
            "Conversion Trail progress saved.",
    state: conversionTrailProgress === 0 && isConversionHonestyConfirmed ? "success" : ""
  });

  if (conversionTrailProgress === 0 && isConversionHonestyConfirmed) {
    setConversionHonestyStatus("Honest willingness confirmed. You can complete Step 1.", "success");
  }

  if (conversionTrailProgress === 1 && isConversionGospelConfirmed) {
    setConversionGospelStatus("Gospel invitation received. You can complete Step 2.", "success");
  }

  if (conversionTrailProgress === 3 && isConversionResponseConfirmed) {
    setConversionResponseStatus("Honest response confirmed. You can complete Step 4.", "success");
  }

  if (conversionTrailProgress === 4 && isConversionFollowupConfirmed) {
    setConversionFollowupStatus("Follow-up confirmed. You can complete the trail.", "success");
  }
};

notesButton?.addEventListener("click", () => {
  const form = notesButton.closest("form");
  const data = new FormData(form);
  const entry = {
    id: Date.now(),
    savedAt: new Date().toISOString(),
    ...Object.fromEntries(data.entries())
  };
  entry.weather = cleanWeatherValue(entry.weather);
  const entries = getJournalEntries();
  entries.unshift(entry);
  setJournalEntries(entries);
  renderJournalEntries();
  form.reset();
  setJournalDateTimeDefaults();
  setStatus(notesButton, "Journal entry saved in this browser.");
  window.setTimeout(returnFromJournal, 450);
});

journalReturnButton?.addEventListener("click", returnFromJournal);

previewAdventureButton?.addEventListener("click", () => {
  const draft = getCreatorFormData();
  renderAdventurePreview(draft);
  if (creatorStatus) {
    creatorStatus.textContent = "Draft preview updated.";
  }
});

saveAdventureButton?.addEventListener("click", () => {
  const draft = getCreatorFormData();

  if (!draft) {
    return;
  }

  const drafts = getAdventureDrafts();
  const savedDraft = {
    id: Date.now(),
    savedAt: new Date().toISOString(),
    ...draft
  };

  drafts.unshift(savedDraft);
  setAdventureDrafts(drafts);
  renderAdventurePreview(savedDraft);
  renderAdventureDrafts();
  if (creatorStatus) {
    creatorStatus.textContent = "Adventure draft saved in this browser.";
  }
});

shareAdventureButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const target = button.dataset.shareTarget || "top";
    const title = button.dataset.shareTitle || "Gold Vein Adventure";
    const url = getShareUrl(target);
    const text = `I am inviting you into a Gold Vein adventure: ${title}.`;

    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
        setTemporaryButtonText(button, "Adventure Sent");
        return;
      }

      await navigator.clipboard.writeText(`${text}\n${url}`);
      setTemporaryButtonText(button, "Link Copied");
    } catch {
      setTemporaryButtonText(button, "Copy Link Failed");
    }
  });
});

supportOptionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (supportTypeInput) {
      supportTypeInput.value = button.dataset.supportOption || "Give Freely";
    }
    if (supportStatus) {
      supportStatus.textContent = `${supportTypeInput?.value || "Support"} selected. Add an amount, save a note, then open Venmo.`;
    }
    setTemporaryButtonText(button, "Selected");
  });
});

supportAmountOptionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (supportAmountInput) {
      supportAmountInput.value = button.dataset.supportAmountOption || "";
    }
  });
});

saveSupportPledgeButton?.addEventListener("click", () => {
  const form = saveSupportPledgeButton.closest("form");
  const data = Object.fromEntries(new FormData(form).entries());
  const amount = Number(data.amount);

  if (!amount || amount < 1) {
    if (supportStatus) {
      supportStatus.textContent = "Choose or enter a support amount before saving a support note.";
    }
    return;
  }

  const pledge = {
    id: Date.now(),
    savedAt: new Date().toISOString(),
    supportType: data.supportType?.trim() || "Give Freely",
    amount: amount.toFixed(0),
    purpose: data.purpose?.trim() || "",
    note: data.note?.trim() || ""
  };
  const pledges = getSupportPledges();
  pledges.unshift(pledge);
  setSupportPledges(pledges);
  renderSupportPledges();
  form.reset();
  if (supportTypeInput) {
    supportTypeInput.value = pledge.supportType;
  }
  if (supportStatus) {
    supportStatus.textContent =
      "Support note saved locally. Open Venmo to send the gift when you are ready.";
  }
});

useWeatherButton?.addEventListener("click", () => {
  if (!navigator.geolocation) {
    setWeatherStatus("Location is not available in this browser.", "error");
    return;
  }

  useWeatherButton.disabled = true;
  setWeatherStatus("Getting weather for your location...", "checking");

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}&current_weather=true&temperature_unit=celsius&windspeed_unit=mph`
        );

        if (!response.ok) {
          throw new Error("Weather request failed");
        }

        const data = await response.json();

        if (!data.current_weather) {
          throw new Error("Missing weather");
        }

        if (journalWeatherInput) {
          journalWeatherInput.value = formatWeather(data.current_weather);
        }

        setWeatherStatus("Nearby reported weather added. You can edit it if needed.", "success");
      } catch {
        setWeatherStatus("Weather could not be loaded. You can type it manually.", "error");
      } finally {
        useWeatherButton.disabled = false;
      }
    },
    () => {
      useWeatherButton.disabled = false;
      setWeatherStatus("Location permission is needed to add weather automatically.", "error");
    },
    {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 12000
    }
  );
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

contextOptionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const contextKey = button.dataset.contextOption || "home";
    selectContextAdventure(contextKey, `${contextAdventures[contextKey]?.title || "Adventure"} opened.`);
  });
});

missionTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openMissionPath(button.dataset.missionTab || "map");
  });
});

returnToAdventuresButton?.addEventListener("click", () => {
  setActiveAdventureView("choose");
  contextGrid?.scrollIntoView({ behavior: "smooth", block: "start" });
});

returnToWebButton?.addEventListener("click", returnToActiveWeb);

activeWeb?.addEventListener("click", (event) => {
  const node = event.target.closest("[data-web-node], [data-web-line-to]");

  if (!node) {
    return;
  }

  const key = node.dataset.webNode || node.dataset.webLineTo || "map";
  const action = node.dataset.webAction || "tab";

  if (action === "journal") {
    localStorage.setItem("gold-vein-journal-return-hash", "now-adventure");
    window.location.hash = "field-notes";
    document.querySelector("#field-notes")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  openMissionPath(key);
  const openedNode = activeWeb.querySelector(`[data-web-node="${CSS.escape(key)}"] span`);
  setContextStatus(`${openedNode?.textContent || "Node"} opened on the active web.`, "success");
});

missionPanel?.addEventListener("click", (event) => {
  const returnButton = event.target.closest("[data-return-to-web]");
  if (returnButton) {
    returnToActiveWeb();
    return;
  }

  const journalButton = event.target.closest("[data-open-journal-from-path]");
  if (journalButton) {
    localStorage.setItem("gold-vein-journal-return-hash", "now-adventure");
    window.location.hash = "field-notes";
    return;
  }

  const unlockButton = event.target.closest("[data-action-unlock]");
  if (unlockButton) {
    const type = unlockButton.dataset.actionUnlock;
    const index = Number(unlockButton.dataset.actionIndex || 0);
    setContextUnlock(activeContextKey, type, index);
    renderMissionPanel();
    renderActiveWeb();
    setContextStatus(`${type[0].toUpperCase()}${type.slice(1)} unlocked for this trail.`, "success");
    return;
  }

  const treasureButton = event.target.closest("[data-treasure-type]");
  if (treasureButton) {
    activeTreasureType = treasureButton.dataset.treasureType || "Financial gift";
    missionPanel.querySelectorAll("[data-treasure-type]").forEach((button) => {
      button.classList.toggle("selected", button === treasureButton);
    });
    setContextStatus(`${activeTreasureType} selected as a treasure option.`, "success");
    return;
  }

  const saveTreasureButton = event.target.closest("[data-save-context-treasure]");
  if (saveTreasureButton) {
    const note = missionPanel.querySelector("[data-treasure-note]")?.value?.trim() || "";
    saveContextTreasure(activeContextKey, {
      type: activeTreasureType,
      note
    });
    renderMissionPanel();
    renderActiveWeb();
    setContextStatus("Treasure saved to this adventure context.", "success");
    return;
  }

  const saveEvidenceButton = event.target.closest("[data-save-context-evidence]");
  if (saveEvidenceButton) {
    const note = missionPanel.querySelector("[data-evidence-note]")?.value?.trim() || "";

    if (!note) {
      setContextStatus("Write evidence from the action before revealing the checkpoint.", "error");
      return;
    }

    saveCurrentEvidence(activeContextKey, note);
    renderContextAdventure();
    renderActiveWeb();
    setContextStatus("Evidence saved. The checkpoint is now revealed.", "success");
  }
});

completeContextCheckpointButton?.addEventListener("click", () => {
  const checkpoints = getAdaptiveCheckpoints(activeContextKey);

  if (!hasCurrentEvidence(activeContextKey)) {
    setContextStatus("Complete a mission action and save evidence before this checkpoint opens.", "error");
    return;
  }

  if (activeContextProgress >= checkpoints.length) {
    setContextStatus("This movement is complete. Generate the next movement when you are ready.", "success");
    return;
  }

  activeContextProgress += 1;
  localStorage.setItem(getContextProgressKey(activeContextKey), String(activeContextProgress));
  renderContextAdventure();

  if (activeContextProgress >= checkpoints.length) {
    setContextStatus("Movement complete. Gold Vein can now generate the next movement from this trail.", "success");
  } else {
    const [nextLabel] = checkpoints[activeContextProgress];
    setContextStatus(`Checkpoint saved. Next: ${nextLabel}.`, "success");
  }
});

generateContextMovementButton?.addEventListener("click", () => {
  const nextMovement = getContextMovement(activeContextKey) + 1;
  localStorage.setItem(getContextMovementKey(activeContextKey), String(nextMovement));
  activeContextProgress = 0;
  localStorage.setItem(getContextProgressKey(activeContextKey), "0");
  localStorage.removeItem(getContextUnlockKey(activeContextKey));
  activeMissionTab = "map";
  localStorage.setItem("gold-vein-active-mission-tab", activeMissionTab);
  renderContextAdventure();
  setContextStatus(`Movement ${nextMovement + 1} generated from what you carried on this trail.`, "success");
});

resetContextAdventureButton?.addEventListener("click", () => {
  activeContextProgress = 0;
  localStorage.setItem(getContextProgressKey(activeContextKey), "0");
  localStorage.setItem(getContextMovementKey(activeContextKey), "0");
  renderContextAdventure();
  setContextStatus("This context adventure has been reset to the first movement.", "success");
});

searchButton?.addEventListener("click", () => {
  setStatus(searchButton, "Choose a collection above, or open one of the available adventure cards.");
});

checkLocationButton?.addEventListener("click", () => {
  if (!navigator.geolocation) {
    setLocationStatus("Location is not available in this browser.", "error");
    return;
  }

  checkLocationButton.disabled = true;
  setLocationStatus("Previewing the future location-check pattern...", "checking");
  updateTrailCompass({
    trailKey: "watermark",
    progress: trailProgress,
    total: totalTrailSteps,
    detail: "Previewing the future location-check pattern...",
    state: "checking"
  });

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
        watermarkCompassDetail = "Prototype location reviewed. Step 1 is ready.";
        setLocationStatus("Prototype location reviewed. You can complete Step 1.", "success");
      } else {
        setLocationVerified(false);
        watermarkCompassDetail = `Future partner-location check previewed from about ${distanceMiles.toFixed(1)} miles away.`;
        setLocationStatus(
          `Future partner-location check previewed from about ${distanceMiles.toFixed(1)} miles away.`,
          "error"
        );
      }

      checkLocationButton.disabled = false;
      renderTrail();
    },
    () => {
      setLocationVerified(false);
      watermarkCompassDetail = "Location permission is needed to unlock this step.";
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
  updateTrailCompass({
    trailKey: "global",
    progress: globalTrailProgress,
    total: totalGlobalTrailSteps,
    detail: "Confirming your nearby place...",
    state: "checking"
  });

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
  setGlobalPassStatus("Trail received. You can complete Step 2.", "success");
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

conversionHonestyConfirmButton?.addEventListener("click", () => {
  setConversionHonestyConfirmed(true);
  setConversionHonestyStatus("Honest willingness confirmed. You can complete Step 1.", "success");
  renderConversionTrail();
});

conversionGospelConfirmButton?.addEventListener("click", () => {
  setConversionGospelConfirmed(true);
  setConversionGospelStatus("Gospel invitation received. You can complete Step 2.", "success");
  renderConversionTrail();
});

conversionResponseTypeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    setConversionResponseConfirmed(false);
    setConversionResponseStatus("Confirm the honest response note to continue.");
    renderConversionTrail();
  });
});

conversionResponseNoteInput?.addEventListener("input", () => {
  setConversionResponseConfirmed(false);
  setConversionResponseStatus("Confirm the honest response note to continue.");
  renderConversionTrail();
});

conversionResponseConfirmButton?.addEventListener("click", () => {
  const responseType = getSelectedConversionResponseType();
  const responseNote = conversionResponseNoteInput?.value.trim();

  if (!responseType) {
    setConversionResponseConfirmed(false);
    setConversionResponseStatus("Choose the response that is most honest right now.", "error");
    renderConversionTrail();
    return;
  }

  if (!responseNote) {
    setConversionResponseConfirmed(false);
    setConversionResponseStatus("Add one honest sentence before continuing.", "error");
    renderConversionTrail();
    return;
  }

  setConversionResponseConfirmed(true);
  localStorage.setItem(
    "gold-vein-conversion-response",
    JSON.stringify({
      responseType,
      responseNote
    })
  );
  setConversionResponseStatus("Honest response confirmed. You can complete Step 4.", "success");
  renderConversionTrail();
});

conversionFollowupNameInput?.addEventListener("input", () => {
  setConversionFollowupConfirmed(false);
  setConversionFollowupStatus("Confirm the follow-up connection to complete this trail.");
  renderConversionTrail();
});

conversionFollowupConfirmButton?.addEventListener("click", () => {
  const followupName = conversionFollowupNameInput?.value.trim();

  if (!followupName) {
    setConversionFollowupConfirmed(false);
    setConversionFollowupStatus("Add a follow-up person before completing the trail.", "error");
    renderConversionTrail();
    return;
  }

  setConversionFollowupConfirmed(true);
  localStorage.setItem("gold-vein-conversion-followup-name", followupName);
  setConversionFollowupStatus(`Follow-up confirmed with ${followupName}.`, "success");
  renderConversionTrail();
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
  watermarkCompassDetail = "";
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
      "I understand this is a demo",
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
      "I received the trail",
      "I experienced the passage",
      "I connected with someone",
      "I gave the treasure"
    ];
    button.textContent = labels[stepIndex] || button.textContent;
  });
  setGlobalLocationStatus("Place confirmation required before this step can be completed.");
  setGlobalPassStatus("Receive the trail to unlock the Scripture Map.");
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

conversionStepButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const completedStep = Number(button.dataset.completeConversionStep);
    if (completedStep !== conversionTrailProgress) {
      return;
    }

    conversionTrailProgress = Math.min(completedStep + 1, totalConversionTrailSteps);
    localStorage.setItem("gold-vein-conversion-progress", String(conversionTrailProgress));
    renderConversionTrail();
  });
});

resetConversionTrailButton?.addEventListener("click", () => {
  conversionTrailProgress = 0;
  setConversionHonestyConfirmed(false);
  setConversionGospelConfirmed(false);
  setConversionResponseConfirmed(false);
  setConversionFollowupConfirmed(false);
  localStorage.setItem("gold-vein-conversion-progress", "0");
  localStorage.removeItem("gold-vein-conversion-response");
  localStorage.removeItem("gold-vein-conversion-followup-name");
  conversionResponseTypeInputs.forEach((input) => {
    input.checked = false;
  });
  if (conversionResponseNoteInput) {
    conversionResponseNoteInput.value = "";
  }
  if (conversionFollowupNameInput) {
    conversionFollowupNameInput.value = "";
  }
  conversionStepButtons.forEach((button) => {
    const stepIndex = Number(button.dataset.completeConversionStep);
    const labels = [
      "I am willing to look to Christ",
      "I received the gospel invitation",
      "I experienced the passage",
      "I named my response",
      "I connected for follow-up"
    ];
    button.textContent = labels[stepIndex] || button.textContent;
  });
  setConversionHonestyStatus("Honest willingness is required before continuing.");
  setConversionGospelStatus("Receive the gospel invitation to unlock the Scripture Map.");
  setConversionResponseStatus("Honest response confirmation required before continuing.");
  setConversionFollowupStatus("Follow-up connection required before this trail can be completed.");
  renderConversionTrail();
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
  redeemMessage.textContent = "Demo reviewed. Returning to the trail with Step 3 unlocked.";
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
renderConversionTrail();
setJournalDateTimeDefaults();
renderJournalEntries();
renderAdventureDrafts();
renderSupportPledges();
renderContextAdventure();
loadBackendAdventures();
showActivePage();
window.addEventListener("hashchange", showActivePage);
