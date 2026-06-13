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
const adventureStatePanel = document.querySelector(".adventure-state-panel");
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
const installPrompt = document.querySelector("[data-install-prompt]");
const installAppButton = document.querySelector("[data-install-app]");
const dismissInstallButton = document.querySelector("[data-dismiss-install]");
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
let activeCompanionContact = localStorage.getItem("gold-vein-active-companion") || "Glen";

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
    summary: "Move from honest condition to the saving power of the gospel, received by grace through faith in Jesus Christ.",
    awareness: "Curiosity, conviction, shame, resistance, hunger, faith",
    scripture: "John 3:1-18",
    challenge: "Look to Christ.",
    challengeCopy: "Read the gospel invitation slowly, name your condition honestly, and respond to grace by faith.",
    reward: "Christ revealed.",
    rewardCopy: "The treasure is not a better self-image. The treasure is Jesus Christ given for sinners, received by grace through faith.",
    map: {
      passage: "John 3:1-18",
      history: "Nicodemus, a respected religious teacher, comes to Jesus at night with questions about who He is and what God is doing.",
      context: "Jesus tells him that entrance into the kingdom requires new birth from above, then points to the Son of Man lifted up so whoever believes may have eternal life.",
      inner: "Notice curiosity, conviction, shame, control, resistance, hunger, and the ache to be made new rather than merely improved.",
      power: "The power of the gospel is not accessed by self-rescue. Grace opens the way; faith receives Christ, His mercy, His new birth, and His life.",
      crossReferences: ["Ephesians 2:1-10", "Romans 5:6-11", "2 Corinthians 5:17-21", "Revelation 21:21"]
    },
    actions: {
      challenge: [
        ["Name your condition", "Choose the most honest word for where you are: curious, convicted, ashamed, resistant, hungry, or ready to believe. Write why."],
        ["Look to Christ", "Read John 3:14-18 and write what Christ has done, what grace gives, and what faith receives."],
        ["Respond by faith", "Pray or write an honest response: Lord Jesus, I cannot save myself. I look to You for mercy, new birth, and life."]
      ],
      reward: [
        ["Grace received", "Name where grace met you before you could fix yourself."],
        ["Faith awakened", "Write the honest response that is forming: I believe, I want to believe, help my unbelief, or I am still resisting."],
        ["New birth witness", "Name any evidence of new desire, conviction, peace, courage, repentance, or love for Christ."]
      ],
      connect: [
        ["Ask a believer", "Ask a follower of Jesus to read John 3 with you and help you understand the gospel."],
        ["Request prayer", "Message someone: I am on a Gold Vein Gospel Adventure. Will you pray with me and help me take the next step?"],
        ["Bring questions", "Write your top question and share it with a mature believer, pastor, or trusted friend."],
        ["Name your response", "If you are trusting Christ, tell a trusted believer: I am responding to the gospel and need help walking forward."]
      ]
    },
    outdoor: {
      title: "Light Walk",
      from: "Where you are sitting",
      to: "A doorway, window, sidewalk, or quiet outside place",
      prompt: "As you move toward light, ask Jesus to bring what is hidden into truth, mercy, and life."
    },
    checkpoints: [
      ["Condition", "Name where you honestly are before God without hiding or performing."],
      ["Grace", "Look to Jesus Christ and receive the gospel as grace, not self-repair."],
      ["Faith", "Write or speak your honest response to Christ: belief, desire, questions, or resistance."],
      ["Witness", "Invite a trusted believer into prayer, follow-up, church, baptism, or continued discipleship."]
    ]
  },
  maturity: {
    title: "Mature Disciple Adventure",
    summary: "Move from immature or stalled discipleship into healthy practice, Spirit-formed fruit, and disciple-making witness.",
    awareness: "Immaturity, practice, fruit, endurance, multiplication",
    scripture: "2 Peter 1:3-11",
    challenge: "Practice what has been given.",
    challengeCopy: "Receive Christ's power, choose one practice, and make maturity visible in embodied obedience.",
    reward: "Fruitful assurance.",
    rewardCopy: "Maturity is not performance for approval. It is the visible fruit of Christ's power becoming practiced, stable, and shareable.",
    map: {
      passage: "2 Peter 1:3-11",
      history: "Peter writes to believers to strengthen them against corruption, false teaching, forgetfulness, and fruitless faith.",
      context: "The passage begins with what God has already granted, then calls believers to diligent practice that confirms calling and choosing.",
      inner: "Notice passivity, immaturity, discouragement, double-mindedness, hidden habits, fear of effort, and the desire for maturity without practice.",
      power: "Christ's divine power grants what is needed for life and godliness. Practiced faith becomes fruitful, stable, and able to strengthen others.",
      crossReferences: ["John 15:1-8", "Galatians 5:22-25", "Hebrews 5:12-14", "Matthew 28:18-20", "2 Timothy 2:1-2"]
    },
    actions: {
      challenge: [
        ["Receive power", "Write what 2 Peter 1 says Christ has already granted before you try to practice anything."],
        ["Practice one virtue", "Choose faith, moral excellence, knowledge, self-control, perseverance, godliness, brotherly kindness, or love and practice it today."],
        ["Interrupt immaturity", "Name one immature pattern and take one concrete step of obedience away from it."],
        ["Multiply what you received", "Share one truth, practice, or encouragement with someone who could become stronger in Christ."]
      ],
      reward: [
        ["Fruit noticed", "Name one small fruit that appeared through obedience."],
        ["Stability strengthened", "Write how practicing these things helps you not stumble."],
        ["Power remembered", "Record what Christ has already granted, not just what you still lack."],
        ["Disciple-maker spark", "Name one person who could be strengthened by what Christ formed in you."]
      ],
      connect: [
        ["Invite accountability", "Ask a mature believer to check in with you about the practice you chose."],
        ["Disciple someone", "Invite someone younger in faith to read the passage and practice one step with you."],
        ["Report fruit", "Tell a trusted person what you practiced, what was hard, and what fruit appeared."],
        ["Open a practice loop", "Set one follow-up time to repeat the practice, review fruit, and encourage someone else."]
      ]
    },
    outdoor: {
      title: "Practice Walk",
      from: "The place where you feel stuck",
      to: "A nearby path, hallway, porch, or outside place",
      prompt: "Walk as a physical sign that maturity moves. Ask which practice needs to become embodied today."
    },
    checkpoints: [
      ["Power", "Name what Christ has granted for life and godliness before you act."],
      ["Practice", "Choose one virtue and do something concrete with it."],
      ["Fruit", "Name the Spirit-formed evidence that appeared through practiced obedience."],
      ["Multiply", "Carry what you practiced outward by encouraging, teaching, serving, or following up."]
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

const scriptureTextLibrary = {
  "John 3:1-18": {
    title: "John 3:1-18",
    text: "Jesus answered him, \"Most certainly, I tell you, unless one is born anew, he can't see God's Kingdom.\" ... \"As Moses lifted up the serpent in the wilderness, even so must the Son of Man be lifted up, that whoever believes in him should not perish, but have eternal life.\" ... \"For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.\"",
    feedback: "The gospel does not begin with self-repair. It begins with new birth, looking to Christ, and receiving life from God."
  },
  "Ephesians 2:1-10": {
    title: "Ephesians 2:1-10",
    text: "You were dead in trespasses and sins ... but God, being rich in mercy ... made us alive together with Christ. By grace you have been saved through faith, and that not of yourselves; it is the gift of God ... created in Christ Jesus for good works.",
    feedback: "Grace is the doorway and faith is the receiving. Good works come after mercy makes the dead alive; they do not purchase life."
  },
  "Romans 5:6-11": {
    title: "Romans 5:6-11",
    text: "While we were still weak, at the right time Christ died for the ungodly ... God commends his own love toward us, in that while we were yet sinners, Christ died for us ... we also rejoice in God through our Lord Jesus Christ.",
    feedback: "The gospel reaches people while they are weak, ungodly, and unable to rescue themselves. Peace with God is received through Christ."
  },
  "2 Peter 1:3-11": {
    title: "2 Peter 1:3-11",
    text: "His divine power has granted to us all things that pertain to life and godliness ... For this very cause, adding on your part all diligence, in your faith supply moral excellence ... for if you do these things, you will never stumble. For thus you will be richly supplied with the entrance into the eternal Kingdom of our Lord and Savior, Jesus Christ.",
    feedback: "Maturity is evidence of grace at work. Practice does not replace Christ's power; it participates in what Christ has already granted."
  },
  "John 15:1-8": {
    title: "John 15:1-8",
    text: "I am the vine. You are the branches. He who remains in me, and I in him, bears much fruit, for apart from me you can do nothing ... By this is my Father glorified, that you bear much fruit; and so you will be my disciples.",
    feedback: "Fruitfulness comes from abiding in Christ, not independent religious effort. Mature disciples remain, receive, and bear fruit."
  },
  "Hebrews 5:12-14": {
    title: "Hebrews 5:12-14",
    text: "When by reason of the time you ought to be teachers, you again need to have someone teach you ... solid food is for those who are full grown, who by reason of use have their senses exercised to discern good and evil.",
    feedback: "Maturity develops through practiced discernment. The goal is not information only, but trained senses and useful obedience."
  },
  "Matthew 28:18-20": {
    title: "Matthew 28:18-20",
    text: "All authority has been given to me in heaven and on earth. Go, and make disciples of all nations ... teaching them to observe all things that I commanded you. Behold, I am with you always.",
    feedback: "Healthy disciples become disciple makers under Christ's authority and presence."
  },
  "2 Timothy 2:1-2": {
    title: "2 Timothy 2:1-2",
    text: "You therefore, my child, be strengthened in the grace that is in Christ Jesus. The things which you have heard from me among many witnesses, commit the same to faithful people, who will be able to teach others also.",
    feedback: "Disciple-making is multiplication by grace: strengthened people entrust truth to others who can teach others also."
  },
  "Luke 10:38-42": {
    title: "Luke 10:38-42",
    text: "Martha was distracted with much serving ... The Lord answered her, \"Martha, Martha, you are anxious and troubled about many things, but one thing is needed. Mary has chosen the good part, which will not be taken away from her.\"",
    feedback: "Anxiety often pulls the soul into proving and performing. Jesus restores attention before action."
  },
  "Colossians 3:23-24": {
    title: "Colossians 3:23-24",
    text: "And whatever you do, work heartily, as for the Lord, and not for men, knowing that from the Lord you will receive the reward of the inheritance; for you serve the Lord Christ.",
    feedback: "Hidden faithfulness matters. Work becomes worship when it is offered before Christ instead of performed for approval."
  },
  "Nehemiah 2:17-18": {
    title: "Nehemiah 2:17-18",
    text: "\"You see the bad situation that we are in, how Jerusalem lies waste ... Come, let's build up the wall of Jerusalem.\" ... They said, \"Let's rise up and build.\" So they strengthened their hands for the good work.",
    feedback: "Calling often begins with honest assessment, shared courage, and strengthened hands."
  },
  "Luke 24:13-35": {
    title: "Luke 24:13-35",
    text: "Jesus himself came near, and went with them ... Beginning from Moses and from all the prophets, he explained to them in all the Scriptures the things concerning himself ... They said to one another, \"Weren't our hearts burning within us, while he spoke to us along the way?\"",
    feedback: "The road can become revelation. Confusion is not the end when Christ draws near and opens the Scriptures."
  },
  "Matthew 5:23-24": {
    title: "Matthew 5:23-24",
    text: "\"If therefore you are offering your gift at the altar, and there remember that your brother has anything against you, leave your gift there before the altar, and go your way. First be reconciled to your brother, and then come and offer your gift.\"",
    feedback: "The Spirit does not separate worship from repair. Humility, truth, and reconciliation become evidence of kingdom life."
  },
  "1 Corinthians 3:10-15": {
    title: "1 Corinthians 3:10-15",
    text: "No one can lay any other foundation than that which has been laid, which is Jesus Christ ... each man's work will be revealed. For the Day will declare it, because it is revealed in fire; and the fire itself will test what sort of work each man's work is.",
    feedback: "Christ is the foundation. The testing fire does not destroy what is truly built by the Spirit; it reveals what lasts."
  },
  "1 Peter 1:6-9": {
    title: "1 Peter 1:6-9",
    text: "You have been grieved in various trials, that the proof of your faith, which is more precious than gold that perishes even though it is tested by fire, may be found to result in praise, glory, and honor at the revelation of Jesus Christ.",
    feedback: "Testing can expose pain and weakness, but in Christ it can also prove faith more precious than gold."
  },
  "Galatians 5:16-25": {
    title: "Galatians 5:16-25",
    text: "Walk by the Spirit, and you won't fulfill the lust of the flesh ... the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faith, gentleness, and self-control.",
    feedback: "The Spirit's activity becomes visible as sinful reaction is brought into the light and new fruit begins to appear."
  },
  "Revelation 21:21": {
    title: "Revelation 21:21",
    text: "The twelve gates were twelve pearls ... The street of the city was pure gold, like transparent glass.",
    feedback: "Gold Vein is aiming toward this final vision: a path made pure by God's glory, transparent before Him, and full of the life of the Lamb."
  }
};

const getScriptureText = (reference) =>
  scriptureTextLibrary[reference] || {
    title: reference,
    text: "Open this passage and read it slowly. Let the text itself test, comfort, correct, and guide the next faithful step.",
    feedback: "This passage is connected to the trail as a supporting witness. Ask how it confirms, corrects, or deepens the main map."
  };

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

let deferredInstallPrompt = null;

window.addEventListener("beforeinstallprompt", (event) => {
  if (localStorage.getItem("gold-vein-install-dismissed") === "true") {
    return;
  }

  event.preventDefault();
  deferredInstallPrompt = event;
  if (installPrompt) {
    installPrompt.hidden = false;
  }
});

installAppButton?.addEventListener("click", async () => {
  if (!deferredInstallPrompt) {
    return;
  }

  installPrompt.hidden = true;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
});

dismissInstallButton?.addEventListener("click", () => {
  localStorage.setItem("gold-vein-install-dismissed", "true");
  deferredInstallPrompt = null;
  if (installPrompt) {
    installPrompt.hidden = true;
  }
});

window.addEventListener("appinstalled", () => {
  localStorage.setItem("gold-vein-install-dismissed", "true");
  deferredInstallPrompt = null;
  if (installPrompt) {
    installPrompt.hidden = true;
  }
});

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

const postFieldNote = async (entry) => {
  try {
    const response = await fetch("/api/field-notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        trail_title: normalizeTrailName(entry.trail),
        place: entry.place,
        weather: entry.weather,
        scripture: entry.scripture,
        treasure: entry.treasure,
        next_step: entry.nextStep,
        note_date: entry.date,
        note_time: entry.time
      })
    });

    if (!response.ok) {
      throw new Error("Field note API unavailable");
    }

    return true;
  } catch {
    return false;
  }
};

const saveJournalEntry = async (entry) => {
  const entries = getJournalEntries();
  entries.unshift(entry);
  setJournalEntries(entries);
  renderJournalEntries();
  return postFieldNote(entry);
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
const getContextChallengeKey = (contextKey) => `gold-vein-context-${contextKey}-challenge-actions`;
const getContextRewardKey = (contextKey) => `gold-vein-context-${contextKey}-rewards`;
const getContextDirectionKey = (contextKey) => `gold-vein-context-${contextKey}-formation-direction`;

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

const getChallengeActions = (contextKey) => {
  try {
    return JSON.parse(localStorage.getItem(getContextChallengeKey(contextKey)) || "{}");
  } catch {
    return {};
  }
};

const setChallengeAction = (contextKey, key, value = true) => {
  const actions = getChallengeActions(contextKey);
  actions[key] = value;
  localStorage.setItem(getContextChallengeKey(contextKey), JSON.stringify(actions));
  return actions;
};

const isChallengeActionReceived = (action) =>
  action === true || action?.rewardReceived === true;

const getCompletedChallengeCount = (contextKey) =>
  Object.values(getChallengeActions(contextKey)).filter(isChallengeActionReceived).length;

const hasChallengeGateOpen = (contextKey) => getCompletedChallengeCount(contextKey) >= 2;

const getReceivedRewards = (contextKey) => {
  try {
    return JSON.parse(localStorage.getItem(getContextRewardKey(contextKey)) || "{}");
  } catch {
    return {};
  }
};

const setReceivedReward = (contextKey, key, value) => {
  const rewards = getReceivedRewards(contextKey);
  rewards[key] = value;
  localStorage.setItem(getContextRewardKey(contextKey), JSON.stringify(rewards));
  return rewards;
};

const getFormationDirection = (contextKey) => {
  try {
    return JSON.parse(localStorage.getItem(getContextDirectionKey(contextKey)) || "null");
  } catch {
    return null;
  }
};

const setFormationDirection = (contextKey, value) => {
  localStorage.setItem(
    getContextDirectionKey(contextKey),
    JSON.stringify({
      savedAt: new Date().toISOString(),
      ...value
    })
  );
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
  void saveJournalEntry({
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
  const checkpoints = getAdaptiveCheckpoints(activeContextKey);
  const isMovementComplete = activeContextProgress >= checkpoints.length;
  const isCheckpointReady = hasCurrentEvidence(activeContextKey) || isMovementComplete;

  document.body.dataset.adventureFocus = activeAdventureView;

  if (adventureIntro) {
    adventureIntro.hidden = !isChoosing;
  }
  if (contextGrid) {
    contextGrid.hidden = !isChoosing;
  }
  if (adventureReturnBar) {
    adventureReturnBar.hidden = isChoosing;
  }
  if (activeWeb) {
    activeWeb.hidden = !isWebFocused;
  }
  if (adaptiveAdventure) {
    adaptiveAdventure.hidden = !isPathFocused;
    adaptiveAdventure.dataset.focusMode = activeAdventureView;
  }
  if (adventureStatePanel) {
    adventureStatePanel.hidden = !isPathFocused || !isCheckpointReady;
  }
  if (contextCheckpoints) {
    contextCheckpoints.hidden = !isPathFocused || !isCheckpointReady;
  }
  if (missionHub) {
    missionHub.hidden = !isPathFocused;
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
    const scrollToPanel = () => {
      missionPanel?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.requestAnimationFrame(() => {
      scrollToPanel();
      window.setTimeout(scrollToPanel, 180);
    });
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
  const challengeCount = getCompletedChallengeCount(activeContextKey);
  const rewardCount = Object.keys(getReceivedRewards(activeContextKey)).length;

  return [
    {
      key: "map",
      label: "Map",
      detail: adventure.map.passage,
      state: activeMissionTab === "map" && activeAdventureView === "path" ? "active" : "available",
      action: "tab"
    },
    {
      key: "challenge",
      label: "Practice",
      detail: challengeCount ? `${Math.min(challengeCount, 2)}/2 built` : "Choose",
      state: activeMissionTab === "challenge" && activeAdventureView === "path" ? "active" : hasChallengeGateOpen(activeContextKey) ? "complete" : "available",
      action: "tab"
    },
    {
      key: "reward",
      label: "Receive",
      detail: rewardCount ? `${rewardCount} received` : "Receive",
      state: activeMissionTab === "reward" && activeAdventureView === "path" ? "active" : rewardCount ? "complete" : "available",
      action: "tab"
    },
    {
      key: "connect",
      label: "Connect",
      detail: Number.isInteger(unlocks.connect) ? "Chosen" : "Invite",
      state: activeMissionTab === "connect" && activeAdventureView === "path" ? "active" : Number.isInteger(unlocks.connect) ? "complete" : "available",
      action: "tab"
    },
    {
      key: "treasure",
      label: "Give",
      detail: treasures.length ? "Given" : "Give",
      state: activeMissionTab === "treasure" && activeAdventureView === "path" ? "active" : treasures.length ? "complete" : "available",
      action: "tab"
    },
    {
      key: "journal",
      label: "Notes",
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
  window.requestAnimationFrame(() => {
    activeWeb?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
};

const getChallengeRewardFeedback = (title) =>
  `This activation is evidence of formation, not performance. If it was done in faith, repentance, love, truth, or obedience, it is the kind of work that agrees with Christ as the foundation. Receive the encouragement, name the fruit, and let it become something stronger than a passing impulse.`;

const getRewardFeedback = (title) =>
  `${title} is not a competing prize. Receive it as one possible sign of grace from the trail. Let it name what the Spirit may be forming, strengthening, correcting, or making visible.`;

const getNextMissionTab = (currentTab) => {
  const order = ["map", "challenge", "reward", "connect", "treasure", "signal", "vein", "journal"];
  const currentIndex = order.indexOf(currentTab);
  return order[Math.min(currentIndex + 1, order.length - 1)] || "reward";
};

const getMissionTabLabel = (tab) =>
  ({
    map: "Map",
    challenge: "Practice",
    reward: "Receive",
    connect: "Connect",
    treasure: "Give",
    signal: "Signal",
    vein: "Vein",
    journal: "Journal Web"
  })[tab] || "Next";

const getDirectionNextTarget = (direction) => {
  const savedTarget = direction?.nextTab || getNextMissionTab(activeMissionTab);
  return savedTarget === activeMissionTab ? getNextMissionTab(activeMissionTab) : savedTarget;
};

const getFormationDirectionCopy = (direction) => {
  const adventure = contextAdventures[activeContextKey] || contextAdventures.home;
  const movement = getContextMovement(activeContextKey) + 1;
  const checkpoints = getAdaptiveCheckpoints(activeContextKey);
  const completedIndex = Number.isInteger(direction?.completedIndex)
    ? direction.completedIndex
    : Math.max(activeContextProgress - 1, 0);
  const [checkpointLabel] = checkpoints[completedIndex] || checkpoints[activeContextProgress] || ["Checkpoint"];
  const rewardTitle = direction?.rewardTitle || adventure.reward || "Reward";
  const source = direction?.source || "checkpoint";

  if (activeContextKey === "gospel") {
    return {
      eyebrow: source === "reward" ? "Reward Received" : "Checkpoint Direction",
      title: source === "reward" ? "Grace is being named." : `${checkpointLabel} has been witnessed.`,
      where:
        source === "reward"
          ? `You are at Movement ${movement} with the gospel open before you. ${rewardTitle} has been received as trail fruit, not as proof earned by effort.`
          : `You have saved evidence for ${checkpointLabel}. The trail is asking whether your response is moving from hearing about Christ toward trusting Christ.`,
      changed:
        "If your honest response is repentance and faith in Jesus Christ, name that as receiving the saving power of the gospel: born again by grace through faith, not self-improvement. Gold Vein can witness that direction, while Christ Himself is the foundation and assurance.",
      next:
        "Tell a trusted believer, pastor, or companion what you believe happened. Then keep moving into connection, prayer, baptismal/church follow-up, and a life that begins to bear Spirit fruit.",
      stage: "Gospel response"
    };
  }

  if (activeContextKey === "maturity") {
    const stage =
      activeContextProgress <= 1
        ? "Receiving practice"
        : activeContextProgress === 2
          ? "Healthy disciple"
          : "Disciple maker";
    return {
      eyebrow: source === "reward" ? "Reward Received" : "Checkpoint Direction",
      title: source === "reward" ? "Fruit is becoming visible." : `${checkpointLabel} has been built into the trail.`,
      where:
        source === "reward"
          ? `You are at Movement ${movement} receiving ${rewardTitle} as formation fruit.`
          : `You have completed a checkpoint in the maturity trail. The path is moving from immature reaction toward trained faithfulness.`,
      changed:
        "This is the maturity arc: an immature disciple receives correction and practice, a healthy disciple walks by the Spirit with steadier obedience, and a disciple maker begins helping others follow Christ too.",
      next:
        "Move toward the next node with one concrete practice: record what changed, invite accountability, and look for someone you can encourage with what Christ is forming in you.",
      stage
    };
  }

  return {
    eyebrow: source === "reward" ? "Reward Received" : "Checkpoint Direction",
    title: source === "reward" ? "Formation fruit has been received." : `${checkpointLabel} has been witnessed.`,
    where:
      source === "reward"
        ? `You are at Movement ${movement} in the ${adventure.title}. ${rewardTitle} has been received without ranking it above any other grace.`
        : `You have saved checkpoint evidence in the ${adventure.title}. The trail now has a witness of what was practiced, repaired, resisted, or received.`,
    changed:
      "The change may be conviction, confession, steadier attention, repair, courage, love, patience, or a clearer refusal of the old reaction. Name what agrees with the Spirit and let it become repeatable.",
    next:
      "Move to the next node, carry the evidence with you, and let the next action make the hidden formation visible in real life.",
    stage: adventure.title
  };
};

const renderFormationDirection = () => {
  const direction = getFormationDirection(activeContextKey);

  if (!direction) {
    return "";
  }

  const copy = getFormationDirectionCopy(direction);
  const nextTab = getDirectionNextTarget(direction);
  const nextLabel = getMissionTabLabel(nextTab);

  return `
    <section class="formation-direction-card" data-source="${escapeHtml(direction.source || "checkpoint")}">
      <span>${escapeHtml(copy.eyebrow)} · ${escapeHtml(copy.stage)}</span>
      <h3>${escapeHtml(copy.title)}</h3>
      <div class="formation-direction-grid">
        <article>
          <strong>Where you are</strong>
          <p>${escapeHtml(copy.where)}</p>
        </article>
        <article>
          <strong>How you have changed</strong>
          <p>${escapeHtml(copy.changed)}</p>
        </article>
        <article>
          <strong>Where you are going</strong>
          <p>${escapeHtml(copy.next)}</p>
        </article>
      </div>
      <button class="button primary" type="button" data-open-direction-next="${escapeHtml(nextTab)}">
        Continue to ${escapeHtml(nextLabel)}
      </button>
    </section>
  `;
};

const renderRewardOptions = () => {
  const adventure = contextAdventures[activeContextKey] || contextAdventures.home;
  const rewards = adventure.actions?.reward || [];
  const receivedRewards = getReceivedRewards(activeContextKey);

  return `
    <div class="reward-receive-grid">
      ${rewards
        .map(([title, copy], index) => {
          const key = `reward-${index}`;
          const received = receivedRewards[key];
          return `
            <article class="reward-receive-card" data-state="${received ? "received" : "open"}">
              <span>${received ? "Received" : "Available Fruit"}</span>
              <h3>${escapeHtml(title)}</h3>
              <p>${escapeHtml(copy)}</p>
              <div class="reward-feedback">
                <strong>Feedback</strong>
                <p>${escapeHtml(getRewardFeedback(title))}</p>
              </div>
              <label>
                Reflection
                <textarea data-reward-note="${escapeHtml(key)}" rows="3" placeholder="Where did you notice this fruit, grace, correction, or courage?" ${received ? "disabled" : ""}>${escapeHtml(received?.note || "")}</textarea>
              </label>
              <button class="button ${received ? "secondary" : "primary"}" type="button" data-receive-reward="${escapeHtml(key)}" ${received ? "disabled" : ""}>
                ${received ? "Received" : "Receive This"}
              </button>
            </article>
          `;
        })
        .join("")}
    </div>
    <div class="evidence-panel muted-evidence">
      <span>Reward Posture</span>
      <p>Receive any fruit that is true. You do not need to choose one over another; the trail may reveal several kinds of grace at once.</p>
    </div>
  `;
};

const renderActionOptions = (type) => {
  const adventure = contextAdventures[activeContextKey] || contextAdventures.home;
  const options = adventure.actions?.[type] || [];
  const unlocks = getContextUnlocks(activeContextKey);
  const selectedIndex = Number.isInteger(unlocks[type]) ? unlocks[type] : -1;
  const selectedOption = selectedIndex >= 0 ? options[selectedIndex] : null;
  const evidence = getContextEvidence(activeContextKey)[getCurrentEvidenceId(activeContextKey)];

  if (type === "challenge") {
    const challengeActions = getChallengeActions(activeContextKey);
    const completedCount = getCompletedChallengeCount(activeContextKey);
    const gateOpen = completedCount >= 2;
    const scripture = getScriptureText(adventure.map.passage);

    const renderChallengeActivation = ({ key, title, copy, source = "Challenge" }) => {
      const action = challengeActions[key];
      const isAwaitingReward = action && !isChallengeActionReceived(action);
      const isComplete = isChallengeActionReceived(action);
      const note = typeof action === "object" ? action.note || "" : "";

      return `
        <article class="challenge-activation" data-state="${isComplete ? "complete" : isAwaitingReward ? "reward" : "ready"}">
          <span>${isComplete ? "Received" : isAwaitingReward ? "Reward Ready" : "Activation"} · ${escapeHtml(source)}</span>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(copy)}</p>
          <details class="challenge-scripture">
            <summary>Read Scripture before completing</summary>
            <p><strong>${escapeHtml(scripture.title)}:</strong> ${escapeHtml(scripture.text)}</p>
            <p>${escapeHtml(scripture.feedback)}</p>
          </details>
          <label class="challenge-acknowledgement">
            <input type="checkbox" data-challenge-scripture-ack="${escapeHtml(key)}" ${isAwaitingReward || isComplete ? "checked" : ""} ${isComplete ? "disabled" : ""}>
            I read and acknowledged the Scripture for this activation.
          </label>
          <label>
            Activation note
            <textarea data-challenge-note="${escapeHtml(key)}" rows="3" placeholder="What did you do, notice, resist, confess, repair, or practice?" ${isComplete ? "disabled" : ""}>${escapeHtml(note)}</textarea>
          </label>
          ${
            isAwaitingReward
              ? `
                <div class="challenge-reward-prompt">
                  <span>Reward Feedback</span>
                  <h3>Receive what was built.</h3>
                  <p>${escapeHtml(getChallengeRewardFeedback(title))}</p>
                  <button class="button primary" type="button" data-receive-challenge-reward="${escapeHtml(key)}">
                    Accept and Receive
                  </button>
                </div>
              `
              : `
                <button class="button ${isComplete ? "secondary" : "primary"}" type="button" data-complete-challenge-action="${escapeHtml(key)}" ${isComplete ? "disabled" : ""}>
                  ${isComplete ? "Built into the trail" : "Complete This Challenge"}
                </button>
              `
          }
        </article>
      `;
    };

    return `
      <div class="challenge-progress" data-state="${gateOpen ? "complete" : "active"}">
        <span>Challenge Gate</span>
        <h3>${completedCount} of 2 challenge activations complete</h3>
        <p>Complete at least two challenge activations. The goal is not to collect tasks, but to build something on Christ that will remain when tested.</p>
      </div>
      <div class="mission-option-grid challenge-option-grid">
        ${options
          .map(([title, copy], index) => {
            const key = `challenge-${index}`;
            return renderChallengeActivation({ key, title, copy });
          })
          .join("")}
      </div>
      ${
        gateOpen
          ? `
            <div class="evidence-panel">
              <span>Checkpoint Evidence</span>
              <h3>What was built that will not burn?</h3>
              <p>Name the obedience, repentance, repair, love, or Spirit-fruit that became visible through the challenges.</p>
              <label>
                Evidence from the challenge
                <textarea data-evidence-note rows="3" placeholder="What did the Spirit expose, correct, strengthen, or build?">${escapeHtml(evidence?.note || "")}</textarea>
              </label>
              <button class="button primary" type="button" data-save-context-evidence>
                Save Evidence and Reveal Checkpoint
              </button>
            </div>
          `
          : `
            <div class="evidence-panel muted-evidence">
              <span>Still Building</span>
              <p>Complete one more challenge activation before checkpoint evidence opens.</p>
            </div>
          `
      }
    `;
  }

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

const renderTrailStepGuide = () => {
  const order = ["map", "challenge", "reward", "connect", "treasure", "signal", "vein", "journal"];
  const currentIndex = Math.max(order.indexOf(activeMissionTab), 0);

  return `
    <nav class="trail-step-guide" aria-label="Trail order">
      ${order
        .map((step, index) => {
          const state = index < currentIndex ? "passed" : index === currentIndex ? "current" : "next";
          return `<span data-state="${state}">${escapeHtml(getMissionTabLabel(step))}</span>`;
        })
        .join("")}
    </nav>
  `;
};

const renderActiveNoteBox = (stage, prompt) => {
  const adventure = contextAdventures[activeContextKey] || contextAdventures.home;

  return `
    <div class="active-note-box" data-note-stage="${escapeHtml(stage)}">
      <span>Active Notes · ${escapeHtml(stage)}</span>
      <h3>Write while the trail is open.</h3>
      <p>${escapeHtml(prompt)}</p>
      <textarea data-active-note rows="3" placeholder="Write a live note, observation, prayer, evidence, question, or follow-up."></textarea>
      <button class="button primary" type="button" data-save-active-note>
        Save to Journal
      </button>
      <small>This saves to your local Adventure History and submits to the field-notes database when available.</small>
      <input type="hidden" data-active-note-trail value="${escapeHtml(adventure.title)}">
    </div>
  `;
};

const renderScriptureReview = (map) => {
  const references = [map.passage, ...(map.crossReferences || []), "1 Corinthians 3:10-15", "1 Peter 1:6-9", "Galatians 5:16-25"];
  const uniqueReferences = [...new Set(references)];

  if (!uniqueReferences.length) {
    return "";
  }

  return `
    <details class="scripture-review" open>
      <summary>Scriptures to Review</summary>
      <div class="scripture-review-list">
        ${uniqueReferences
          .map((reference) => {
            const passage = getScriptureText(reference);
            return `
              <details>
                <summary>${escapeHtml(passage.title)}</summary>
                <p><strong>Text:</strong> ${escapeHtml(passage.text)}</p>
                <p><strong>Feedback:</strong> ${escapeHtml(passage.feedback)}</p>
              </details>
            `;
          })
          .join("")}
      </div>
    </details>
  `;
};

const renderGospelVisionPanel = () => {
  if (activeContextKey === "gospel") {
    return `
      <section class="formation-vision-panel">
        <span>Final Vision · Revelation 21:21</span>
        <h3>The path ends in transparent gold.</h3>
        <p>Gold Vein begins with grace meeting a person in a real condition, but its horizon is the city of God: a street of pure gold, clear as glass, where the Lamb is the light. Every honest gospel response is a small trail marker toward that kingdom.</p>
      </section>
    `;
  }

  if (activeContextKey === "maturity") {
    return `
      <section class="formation-vision-panel">
        <span>Formation Vision · 2 Timothy 2:1-2</span>
        <h3>Grace becomes strong enough to entrust.</h3>
        <p>The Mature Disciple trail moves from received power to practiced fruit to multiplied witness. The aim is not a private improvement project, but a disciple strengthened in grace who can help others follow Christ.</p>
      </section>
    `;
  }

  return "";
};

const getSoulCarePrompts = () =>
  {
    if (activeContextKey === "gospel") {
      return [
        ["curious", "I am curious, but not sure"],
        ["convicted", "I feel convicted and exposed"],
        ["ashamed", "I feel ashamed or unworthy"],
        ["resistant", "I feel resistant"],
        ["hungry", "I want to believe or change"],
        ["ready", "I am ready to trust Christ"]
      ];
    }

    if (activeContextKey === "maturity") {
      return [
        ["passive", "I feel passive or stalled"],
        ["immature", "I see an immature pattern"],
        ["undisciplined", "I resist practice or consistency"],
        ["fruit", "I see some fruit forming"],
        ["ready-to-teach", "I am ready to help someone else"],
        ["weary", "I feel weary in obedience"]
      ];
    }

    return [
      ["convicted", "I feel convicted and exposed"],
      ["defensive", "I feel defensive or resistant"],
      ["ashamed", "I feel ashamed or unworthy"],
      ["hungry", "I feel hungry for change"],
      ["stuck", "I feel stuck in a pattern"],
      ["peace", "I sense peace and courage"]
    ];
  };

const renderSoulCarePrompts = () => `
  <details class="soul-care-panel" open>
    <summary>${activeContextKey === "gospel" ? "Gospel Condition Check" : activeContextKey === "maturity" ? "Disciple Formation Check" : "Soul-Care Check"}</summary>
    <p>${activeContextKey === "gospel" ? "Choose where you honestly are before God. This is not pressure; it is a way to bring your condition into the light where grace can meet faith." : activeContextKey === "maturity" ? "Choose the most honest formation state. This helps the trail move from received grace into practiced obedience and disciple-making witness." : "Choose what feels most honest. This is not a diagnosis; it is a guided checkpoint for bringing the soul into the light of Scripture."}</p>
    <div class="soul-care-grid">
      ${getSoulCarePrompts()
        .map(
          ([key, label]) => `<button type="button" data-soul-prompt="${escapeHtml(key)}">${escapeHtml(label)}</button>`
        )
        .join("")}
    </div>
    <div class="soul-care-feedback" data-soul-feedback>
      Select a condition to receive biblical feedback for the next faithful step.
    </div>
  </details>
`;

const renderNextNodeGuide = (nextNode = "challenge") => {
  const labels = {
    challenge: ["Practice", "Choose two real actions to work through before the checkpoint opens."],
    reward: ["Receive", "Receive and name the grace, fruit, courage, correction, or clarity that appeared."],
    connect: ["Connect", "Invite someone into prayer, counsel, witness, or follow-up."],
    treasure: ["Give", "Offer something concrete as a sign of grace: prayer, note, service, gift, or support."],
    signal: ["Signal", "Let a trusted contact know you are on the trail."],
    vein: ["Vein", "Open the deeper interface and imagine the next layer of the trail."],
    journal: ["Journal Web", "Enter the journal space where the evidence web and saved notes live."]
  };
  const [label, copy] = labels[nextNode] || labels.challenge;

  return `
    <div class="next-node-guide">
      <span>Next Node</span>
      <h3>${escapeHtml(label)}</h3>
      <p>${escapeHtml(copy)}</p>
      <button class="button primary" type="button" data-open-next-node="${escapeHtml(nextNode)}">
        Open ${escapeHtml(label)}
      </button>
    </div>
  `;
};

const renderTrailSupportPrompt = () => `
  <aside class="trail-support-prompt">
    <span>Keep the Trail Open</span>
    <h3>Support a future traveler.</h3>
    <p>The gospel is not for sale. Support can prepare encouragement notes, tangible gifts, mystery paths, hosted trails, or direct blessings for people you meet along the way.</p>
    <div class="trail-support-actions">
      <a class="button secondary" href="#support">Support Trail</a>
      <a class="button secondary" href="https://account.venmo.com/u/Nathan_R_Dooley" target="_blank" rel="noreferrer">Venmo</a>
    </div>
  </aside>
`;

const soulCareFeedback = {
  curious:
    "Curiosity can be a mercy. Come like Nicodemus: bring the questions into the presence of Jesus and ask what is true, not merely what is familiar.",
  convicted:
    "Conviction can be mercy when it moves you toward Christ instead of hiding. Bring the exposed place to Jesus, name it honestly, and ask what repentance should look like in one concrete step.",
  defensive:
    "Defensiveness often protects a place the Spirit wants to heal. Slow down, breathe, and ask: What am I afraid will happen if I tell the truth?",
  resistant:
    "Resistance does not surprise Jesus. Name it plainly. Ask whether you are protecting control, fear, shame, or unbelief, then look again at Christ lifted up for sinners.",
  ashamed:
    "Shame says you should hide. The gospel says Christ is the foundation, and what is brought into His light can be cleansed, rebuilt, and strengthened.",
  hungry:
    "Hunger for change can be evidence of grace already stirring. Choose one practice that agrees with the Spirit: confession, prayer, counsel, restitution, or obedience.",
  ready:
    "If you are ready to trust Christ, respond honestly: confess your need, look to Jesus for mercy and life, and tell a trusted believer so you do not walk alone.",
  passive:
    "Passivity is often a formation signal, not a final identity. Begin with what Christ has granted, then choose one small practice that agrees with His power today.",
  immature:
    "An immature pattern can become a training place when it is brought into the light. Name the reaction, choose one virtue from 2 Peter 1, and practice the opposite in love.",
  undisciplined:
    "Resistance to practice usually weakens fruit over time. Do not start with a grand vow; start with one repeatable act of obedience that can be reviewed with a trusted person.",
  fruit:
    "Visible fruit is meant to be noticed and strengthened. Name it humbly, thank Christ for it, and ask how it can become steady enough to bless someone else.",
  "ready-to-teach":
    "Readiness to help someone else is part of maturity. Entrust what you have received simply: one Scripture, one practice, one follow-up, one person.",
  weary:
    "Weariness needs grace, not shame. Return to Christ's granted power, receive help, and choose a practice small enough to obey without pretending you are not tired.",
  stuck:
    "A stuck pattern needs more than willpower. Look for the loop: trigger, desire, reaction, aftermath. Invite Scripture, a companion, and one embodied interruption into the loop.",
  peace:
    "Peace and courage may be fruit of the Spirit's activity. Do not rush past it. Let it become witness: encouragement, repair, generosity, or faithful follow-through."
};

const getCompanionMessages = () => {
  try {
    return JSON.parse(localStorage.getItem(`gold-vein-companion-messages-${activeContextKey}`) || "[]");
  } catch {
    return [];
  }
};

const setCompanionMessages = (messages) => {
  localStorage.setItem(`gold-vein-companion-messages-${activeContextKey}`, JSON.stringify(messages.slice(0, 24)));
};

const addCompanionMessage = async ({ contact, message, type = "message" }) => {
  const adventure = contextAdventures[activeContextKey] || contextAdventures.home;
  const entry = {
    id: Date.now(),
    contact,
    message,
    type,
    displayName: "You",
    savedAt: new Date().toISOString()
  };
  const messages = getCompanionMessages();
  messages.unshift(entry);
  setCompanionMessages(messages);

  try {
    await fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        journey_group_id: `local-${activeContextKey}`,
        display_name: "Traveler",
        message: `${type === "poke" ? "Poked" : "Messaged"} ${contact} on ${adventure.title}: ${message}`
      })
    });
  } catch {}
};

const companionProfiles = {
  Glen: {
    name: "Glen",
    label: "Trusted Contact"
  },
  Dallas: {
    name: "Dallas",
    label: "Trusted Contact"
  },
  Nathan: {
    name: "Nathan",
    label: "Trusted Contact"
  }
};

const getCompanionProfile = (contact) =>
  companionProfiles[contact] || {
    name: contact || "Contact",
    label: "Trusted Contact"
  };

const renderCompanionMessages = () => {
  const messages = getCompanionMessages();

  return messages.length
    ? messages
        .map(
          (message) => {
            const profile = getCompanionProfile(message.contact);
            return `
            <article>
              <span>${escapeHtml(profile.label)} · ${escapeHtml(profile.name)} · ${escapeHtml(message.type)}</span>
              <p>${escapeHtml(message.message)}</p>
            </article>
          `;
          }
        )
        .join("")
    : '<p class="empty-journal">No companion signals yet.</p>';
};

const renderMissionPanel = () => {
  if (!missionPanel) {
    return;
  }

  const adventure = contextAdventures[activeContextKey] || contextAdventures.home;
  const map = adventure.map;
  const treasures = getContextTreasures(activeContextKey);
  const directionPanel = renderFormationDirection();

  missionTabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.missionTab === activeMissionTab);
  });

  if (activeMissionTab === "map") {
    missionPanel.innerHTML = `
      <article class="scripture-map-card">
        ${renderMissionReturnControls()}
        ${directionPanel}
        ${renderTrailStepGuide()}
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
        ${renderGospelVisionPanel()}
        ${renderScriptureReview(map)}
        ${renderSoulCarePrompts()}
        ${renderActiveNoteBox("Map", `What is ${map.passage} revealing while this adventure is open?`)}
        ${renderNextNodeGuide("challenge")}
        ${renderTrailSupportPrompt()}
      </article>
    `;
    return;
  }

  if (activeMissionTab === "challenge") {
    const challengeActions = getChallengeActions(activeContextKey);
    const outdoorAction = challengeActions.outdoor;
    const outdoorAwaitingReward = outdoorAction && !isChallengeActionReceived(outdoorAction);
    const outdoorComplete = isChallengeActionReceived(outdoorAction);
    const outdoorNote = typeof outdoorAction === "object" ? outdoorAction.note || "" : "";
    const scripture = getScriptureText(adventure.map.passage);
    missionPanel.innerHTML = `
      <article class="mission-card">
        ${renderMissionReturnControls()}
        ${directionPanel}
        ${renderTrailStepGuide()}
        <span>Challenge Options</span>
        <h3>Choose a step to unlock.</h3>
        <p>Each challenge draws the ${escapeHtml(adventure.title)} back to ${escapeHtml(map.passage)}. Complete at least two activations before revealing the checkpoint.</p>
        <div class="outdoor-prompt" data-state="${outdoorComplete ? "complete" : outdoorAwaitingReward ? "reward" : "locked"}">
          <span>${outdoorComplete ? "Outdoor Movement Received" : outdoorAwaitingReward ? "Reward Ready" : "Optional Unlock"} · Outdoor Movement</span>
          <strong>${escapeHtml(adventure.outdoor.title)}</strong>
          <p>This is an optional walk or simple outdoor activity. If you choose it, move from <b>${escapeHtml(adventure.outdoor.from)}</b> to <b>${escapeHtml(adventure.outdoor.to)}</b>. Go slowly enough to notice your body, your thoughts, your surroundings, and the Lord's invitation.</p>
          <p>${escapeHtml(adventure.outdoor.prompt)}</p>
          <details class="challenge-scripture">
            <summary>Read Scripture before completing</summary>
            <p><strong>${escapeHtml(scripture.title)}:</strong> ${escapeHtml(scripture.text)}</p>
            <p>${escapeHtml(scripture.feedback)}</p>
          </details>
          <label class="challenge-acknowledgement">
            <input type="checkbox" data-challenge-scripture-ack="outdoor" ${outdoorAwaitingReward || outdoorComplete ? "checked" : ""} ${outdoorComplete ? "disabled" : ""}>
            I read and acknowledged the Scripture for this outdoor movement.
          </label>
          <label>
            Outdoor note
            <textarea data-challenge-note="outdoor" rows="3" placeholder="What did you notice as you walked or moved outside?" ${outdoorComplete ? "disabled" : ""}>${escapeHtml(outdoorNote)}</textarea>
          </label>
          ${
            outdoorAwaitingReward
              ? `
                <div class="challenge-reward-prompt">
                  <span>Reward Feedback</span>
                  <h3>Receive what was built.</h3>
                  <p>${escapeHtml(getChallengeRewardFeedback(adventure.outdoor.title))}</p>
                  <button class="button primary" type="button" data-receive-challenge-reward="outdoor">
                    Accept and Receive
                  </button>
                </div>
              `
              : `
                <button class="button ${outdoorComplete ? "secondary" : "primary"}" type="button" data-complete-challenge-action="outdoor" ${outdoorComplete ? "disabled" : ""}>
                  ${outdoorComplete ? "Outdoor Movement Built" : "Complete Outdoor Movement"}
                </button>
              `
          }
        </div>
        ${renderActionOptions("challenge")}
        ${renderActiveNoteBox("Challenge", "What did you choose, practice, resist, or notice as you moved into the challenge?")}
      </article>
    `;
    return;
  }

  if (activeMissionTab === "reward") {
    missionPanel.innerHTML = `
      <article class="mission-card">
        ${renderMissionReturnControls()}
        ${directionPanel}
        ${renderTrailStepGuide()}
        <span>Reward Reflections</span>
        <h3>Name the treasure uncovered.</h3>
        <p>Rewards are not trophies or competing choices. Receive whatever fruit is true, and let each one become a sign of grace noticed and carried outward.</p>
        ${renderRewardOptions()}
        ${renderNextNodeGuide("connect")}
        ${renderTrailSupportPrompt()}
        ${renderActiveNoteBox("Reward", "What grace, fruit, courage, clarity, or conviction became visible?")}
      </article>
    `;
    return;
  }

  if (activeMissionTab === "connect") {
    missionPanel.innerHTML = `
      <article class="mission-card">
        ${renderMissionReturnControls()}
        ${directionPanel}
        ${renderTrailStepGuide()}
        <span>Connection Options</span>
        <h3>Bring someone onto the trail.</h3>
        <p>Invite prayer, encouragement, counsel, service, or witness so the adventure does not stay private.</p>
        ${renderActionOptions("connect")}
        ${renderNextNodeGuide("treasure")}
        ${renderActiveNoteBox("Connect", "Who did you contact, what happened, and what follow-up matters?")}
      </article>
    `;
    return;
  }

  if (activeMissionTab === "signal") {
    missionPanel.innerHTML = `
      <article class="mission-card">
        ${renderMissionReturnControls()}
        ${directionPanel}
        ${renderTrailStepGuide()}
        <span>Companion Signal</span>
        <h3>Let someone know you are on the trail.</h3>
        <p>Send a lightweight signal, poke, or comment to a trusted companion. Contacts are shown discreetly in the trail interface.</p>
        <div class="companion-grid">
          <button class="${activeCompanionContact === "Glen" ? "selected" : ""}" type="button" data-companion-contact="Glen" aria-label="Select Glen">
            <span>Trusted Contact</span>
            <strong>Glen</strong>
            <small>Message or poke</small>
          </button>
          <button class="${activeCompanionContact === "Dallas" ? "selected" : ""}" type="button" data-companion-contact="Dallas" aria-label="Select Dallas">
            <span>Trusted Contact</span>
            <strong>Dallas</strong>
            <small>Message or poke</small>
          </button>
          <button class="${activeCompanionContact === "Nathan" ? "selected" : ""}" type="button" data-companion-contact="Nathan" aria-label="Select Nathan">
            <span>Trusted Contact</span>
            <strong>Nathan</strong>
            <small>Message or poke</small>
          </button>
        </div>
        <label>
          Message or comment
          <textarea data-companion-message rows="3" placeholder="I'm on the trail. Pray with me, join me, or watch for what opens."></textarea>
        </label>
        <div class="companion-actions">
          <button class="button primary" type="button" data-send-companion-message>Send Message</button>
          <button class="button secondary" type="button" data-poke-companion>Poke</button>
        </div>
        <div class="companion-log" data-companion-log>
          ${renderCompanionMessages()}
        </div>
        ${renderNextNodeGuide("vein")}
        ${renderActiveNoteBox("Signal", "What happened through companionship, messages, prayer, or invitation?")}
      </article>
    `;
    return;
  }

  if (activeMissionTab === "vein") {
    missionPanel.innerHTML = `
      <article class="mission-card vein-interface">
        ${renderMissionReturnControls()}
        ${directionPanel}
        ${renderTrailStepGuide()}
        <span>Vein Interface</span>
        <h3>A deeper layer of the trail.</h3>
        <p>This is a prototype doorway for the future Gold Vein dimension: shared presence, living trail maps, companion signals, testimony threads, and Spirit-led next moves.</p>
        <div class="vein-orbit" aria-hidden="true">
          <span>Word</span>
          <span>People</span>
          <span>Place</span>
          <strong>Vein</strong>
          <span>Gift</span>
          <span>Witness</span>
          <span>Next</span>
        </div>
        <div class="vein-choice-grid">
          <button type="button" data-vein-mode="listen">Listen for the next thread</button>
          <button type="button" data-vein-mode="gather">Gather companions</button>
          <button type="button" data-vein-mode="testify">Open testimony stream</button>
        </div>
        <p class="form-status" data-vein-status aria-live="polite">Choose a mode to sketch what this layer could become.</p>
        ${renderNextNodeGuide("journal")}
        ${renderTrailSupportPrompt()}
        ${renderActiveNoteBox("Vein", "What should this deeper web interface become as Gold Vein evolves?")}
      </article>
    `;
    return;
  }

  missionPanel.innerHTML = `
    <article class="mission-card">
      ${renderMissionReturnControls()}
      ${directionPanel}
      ${renderTrailStepGuide()}
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
      ${renderNextNodeGuide("signal")}
      ${renderTrailSupportPrompt()}
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
      ${renderActiveNoteBox("Treasure", "What was given, received, sponsored, prepared, or carried forward?")}
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

  const trailGroups = Object.entries(groupedEntries);
  const webPoints = trailGroups.map((_, index) => {
    const angle = trailGroups.length === 1 ? -90 : -90 + (360 / trailGroups.length) * index;
    const radius = trailGroups.length < 3 ? 24 : 34;
    const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
    const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
    return [Math.round(x), Math.round(y)];
  });
  const webLines = webPoints
    .map(([x, y], index) => {
      if (index >= webPoints.length - 1) {
        return "";
      }
      const [nextX, nextY] = webPoints[index + 1];
      return `<line x1="${x}" y1="${y}" x2="${nextX}" y2="${nextY}"></line>`;
    })
    .join("");

  journalList.innerHTML = `
    <section class="journal-web-panel">
      <div class="journal-web-heading">
        <div>
          <span>Evidence Web</span>
          <h3>Adventure dots and Spirit-work records</h3>
        </div>
        <strong>${trailGroups.length} ${trailGroups.length === 1 ? "adventure" : "adventures"}</strong>
      </div>
      <div class="journal-web-space" aria-label="Adventure journal evidence web">
        <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          ${webLines}
        </svg>
        ${trailGroups
          .map(([trail, trailEntries], index) => {
            const [x, y] = webPoints[index];
            const latest = trailEntries[0] || {};
            return `
              <button class="journal-adventure-dot" type="button" style="--dot-x: ${x}%; --dot-y: ${y}%;">
                <span>${escapeHtml(trail.slice(0, 2).toUpperCase())}</span>
                <span class="journal-dot-popover">
                  <strong>${escapeHtml(trail)}</strong>
                  <small>${trailEntries.length} ${trailEntries.length === 1 ? "entry" : "entries"} stored</small>
                  <p>${escapeHtml(latest.treasure || latest.nextStep || "Evidence is being gathered on this trail.")}</p>
                </span>
              </button>
            `;
          })
          .join("")}
      </div>
    </section>
    ${trailGroups
      .map(
        ([trail, trailEntries]) => `
          <details class="journal-trail-group">
            <summary class="journal-group-heading">
              <div>
                <span>Journal Vault</span>
                <h3>${escapeHtml(trail)}</h3>
              </div>
              <strong>Open ${trailEntries.length} ${trailEntries.length === 1 ? "entry" : "entries"}</strong>
            </summary>
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
          </details>
        `
      )
      .join("")}
  `;
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

const showActivePage = ({ shouldScroll = true } = {}) => {
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

  if (activePage && shouldScroll) {
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

notesButton?.addEventListener("click", async () => {
  const form = notesButton.closest("form");
  const data = new FormData(form);
  const entry = {
    id: Date.now(),
    savedAt: new Date().toISOString(),
    ...Object.fromEntries(data.entries())
  };
  entry.weather = cleanWeatherValue(entry.weather);
  const storedRemotely = await saveJournalEntry(entry);
  form.reset();
  setJournalDateTimeDefaults();
  setStatus(
    notesButton,
    storedRemotely
      ? "Journal entry saved in this browser and database."
      : "Journal entry saved in this browser. Database sync will work when the backend is available."
  );
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

  if (!amount || amount < 0.25) {
    if (supportStatus) {
      supportStatus.textContent = "Choose or enter a support amount before saving a support note.";
    }
    return;
  }

  const pledge = {
    id: Date.now(),
    savedAt: new Date().toISOString(),
    supportType: data.supportType?.trim() || "Give Freely",
    amount: amount < 1 ? amount.toFixed(2) : amount.toFixed(0),
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
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const contextKey = button.dataset.contextOption || "home";

    if (getHashParts().pageId !== "now-adventure") {
      history.pushState(null, "", "#now-adventure");
      showActivePage({ shouldScroll: false });
    }

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

missionPanel?.addEventListener("click", async (event) => {
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

  const directionNextButton = event.target.closest("[data-open-direction-next]");
  if (directionNextButton) {
    const nextTarget = directionNextButton.dataset.openDirectionNext || getNextMissionTab(activeMissionTab);
    if (nextTarget === "journal") {
      localStorage.setItem("gold-vein-journal-return-hash", "now-adventure");
      window.location.hash = "field-notes";
      setContextStatus("Journal Web opened from the formation direction.", "success");
      return;
    }
    openMissionPath(nextTarget);
    setContextStatus("Next trail node opened from the formation direction.", "success");
    return;
  }

  const activeNoteButton = event.target.closest("[data-save-active-note]");
  if (activeNoteButton) {
    const noteBox = activeNoteButton.closest("[data-note-stage]");
    const note = noteBox?.querySelector("[data-active-note]")?.value?.trim() || "";
    const stage = noteBox?.dataset.noteStage || "Adventure";
    const adventure = contextAdventures[activeContextKey] || contextAdventures.home;
    const now = new Date();

    if (!note) {
      setContextStatus("Write a note before saving it to the journal.", "error");
      return;
    }

    const storedRemotely = await saveJournalEntry({
      id: Date.now(),
      savedAt: now.toISOString(),
      trail: adventure.title,
      date: now.toISOString().slice(0, 10),
      time: now.toTimeString().slice(0, 5),
      weather: cleanWeatherValue(journalWeatherInput?.value || ""),
      place: `${stage} · ${adventure.outdoor?.title || adventure.title}`,
      scripture: adventure.map?.passage || adventure.scripture,
      treasure: note,
      nextStep: `Active ${stage.toLowerCase()} note`
    });

    noteBox.querySelector("[data-active-note]").value = "";
    setContextStatus(
      storedRemotely
        ? "Note saved to the journal and database."
        : "Note saved locally. It will stay in Adventure History until the database is available.",
      storedRemotely ? "success" : "quiet"
    );
    return;
  }

  const companionButton = event.target.closest("[data-companion-contact]");
  if (companionButton) {
    activeCompanionContact = companionButton.dataset.companionContact || "Glen";
    localStorage.setItem("gold-vein-active-companion", activeCompanionContact);
    renderMissionPanel();
    const profile = getCompanionProfile(activeCompanionContact);
    setContextStatus(`${profile.label} selected: ${profile.name}.`, "success");
    return;
  }

  const companionMessageButton = event.target.closest("[data-send-companion-message], [data-poke-companion]");
  if (companionMessageButton) {
    const isPoke = Boolean(companionMessageButton.closest("[data-poke-companion]"));
    const messageInput = missionPanel.querySelector("[data-companion-message]");
    const message =
      messageInput?.value?.trim() ||
      (isPoke
        ? "I am on the trail. This is a Gold Vein poke."
        : "I am on the trail and wanted you to know.");

    await addCompanionMessage({
      contact: activeCompanionContact,
      message,
      type: isPoke ? "poke" : "message"
    });

    if (messageInput) {
      messageInput.value = "";
    }
    renderMissionPanel();
    const profile = getCompanionProfile(activeCompanionContact);
    setContextStatus(`${isPoke ? "Poked" : "Messaged"} ${profile.name}.`, "success");
    return;
  }

  const veinModeButton = event.target.closest("[data-vein-mode]");
  if (veinModeButton) {
    const status = missionPanel.querySelector("[data-vein-status]");
    const mode = veinModeButton.dataset.veinMode || "listen";
    if (status) {
      status.textContent =
        mode === "listen"
          ? "Listening mode: future trails could surface Scripture, companion signals, and next moves as one living web."
          : mode === "gather"
            ? "Gather mode: this could become a shared room where companions join, respond, pray, and witness."
            : "Testimony mode: this could become a living stream of treasure found across trails.";
    }
    setContextStatus("Vein interface idea selected.", "success");
    return;
  }

  const soulPromptButton = event.target.closest("[data-soul-prompt]");
  if (soulPromptButton) {
    const prompt = soulPromptButton.dataset.soulPrompt || "convicted";
    const feedback = missionPanel.querySelector("[data-soul-feedback]");
    missionPanel.querySelectorAll("[data-soul-prompt]").forEach((button) => {
      button.classList.toggle("selected", button === soulPromptButton);
    });
    if (feedback) {
      feedback.textContent = soulCareFeedback[prompt] || soulCareFeedback.convicted;
    }
    setContextStatus("Soul-care feedback opened. Save what is true as an active note if it needs to be carried forward.", "success");
    return;
  }

  const nextNodeButton = event.target.closest("[data-open-next-node]");
  if (nextNodeButton) {
    const nextNode = nextNodeButton.dataset.openNextNode || "challenge";
    if (nextNode === "journal") {
      localStorage.setItem("gold-vein-journal-return-hash", "now-adventure");
      window.location.hash = "field-notes";
      setContextStatus("Journal Web opened from the trail.", "success");
      return;
    }
    openMissionPath(nextNode);
    setContextStatus("Next node opened from the map.", "success");
    return;
  }

  const challengeActionButton = event.target.closest("[data-complete-challenge-action]");
  if (challengeActionButton) {
    const key = challengeActionButton.dataset.completeChallengeAction || "challenge-0";
    const card = challengeActionButton.closest(".challenge-activation, .outdoor-prompt");
    const acknowledged = Boolean(card?.querySelector(`[data-challenge-scripture-ack="${CSS.escape(key)}"]`)?.checked);
    const note = card?.querySelector(`[data-challenge-note="${CSS.escape(key)}"]`)?.value?.trim() || "";
    const title = card?.querySelector("h3, strong")?.textContent?.trim() || "Challenge activation";

    if (!acknowledged) {
      setContextStatus("Read and acknowledge the Scripture before completing this activation.", "error");
      return;
    }

    if (!note) {
      setContextStatus("Write a note before completing this activation.", "error");
      return;
    }

    setChallengeAction(activeContextKey, key, {
      title,
      note,
      rewardReceived: false,
      completedAt: new Date().toISOString()
    });
    const adventure = contextAdventures[activeContextKey] || contextAdventures.home;
    const now = new Date();
    void saveJournalEntry({
      id: Date.now(),
      savedAt: now.toISOString(),
      trail: adventure.title,
      date: now.toISOString().slice(0, 10),
      time: now.toTimeString().slice(0, 5),
      weather: cleanWeatherValue(journalWeatherInput?.value || ""),
      place: key === "outdoor" ? adventure.outdoor?.title || "Outdoor Movement" : "Challenge Activation",
      scripture: adventure.map?.passage || adventure.scripture,
      treasure: note,
      nextStep: "Receive challenge reward feedback"
    });
    renderMissionPanel();
    renderActiveWeb();
    setContextStatus("Activation completed. Receive the reward feedback to build it into the trail.", "success");
    return;
  }

  const receiveRewardButton = event.target.closest("[data-receive-challenge-reward]");
  if (receiveRewardButton) {
    const key = receiveRewardButton.dataset.receiveChallengeReward || "challenge-0";
    const actions = getChallengeActions(activeContextKey);
    const current = actions[key] && typeof actions[key] === "object" ? actions[key] : {};
    setChallengeAction(activeContextKey, key, {
      ...current,
      rewardReceived: true,
      receivedAt: new Date().toISOString()
    });
    setFormationDirection(activeContextKey, {
      source: "reward",
      rewardTitle: current.title || "Challenge reward",
      nextTab: getCompletedChallengeCount(activeContextKey) >= 2 ? "reward" : "challenge"
    });
    renderMissionPanel();
    renderActiveWeb();
    const count = getCompletedChallengeCount(activeContextKey);
    setContextStatus(
      count >= 2
        ? "Two challenge activations are complete. Checkpoint evidence is now open."
        : "Reward received. Complete one more activation to open checkpoint evidence.",
      "success"
    );
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

  const rewardButton = event.target.closest("[data-receive-reward]");
  if (rewardButton) {
    const key = rewardButton.dataset.receiveReward || "reward-0";
    const card = rewardButton.closest(".reward-receive-card");
    const note = card?.querySelector(`[data-reward-note="${CSS.escape(key)}"]`)?.value?.trim() || "";
    const title = card?.querySelector("h3")?.textContent?.trim() || "Reward";
    const adventure = contextAdventures[activeContextKey] || contextAdventures.home;
    const now = new Date();

    setReceivedReward(activeContextKey, key, {
      title,
      note,
      receivedAt: now.toISOString()
    });
    setFormationDirection(activeContextKey, {
      source: "reward",
      rewardTitle: title,
      nextTab: getNextMissionTab("reward")
    });

    void saveJournalEntry({
      id: Date.now(),
      savedAt: now.toISOString(),
      trail: adventure.title,
      date: now.toISOString().slice(0, 10),
      time: now.toTimeString().slice(0, 5),
      weather: cleanWeatherValue(journalWeatherInput?.value || ""),
      place: "Reward Reflection",
      scripture: adventure.map?.passage || adventure.scripture,
      treasure: note || title,
      nextStep: `Received reward: ${title}`
    });

    renderMissionPanel();
    renderActiveWeb();
    setContextStatus(`${title} received as trail fruit. You can receive another reward if it is also true.`, "success");
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
    const checkpoints = getAdaptiveCheckpoints(activeContextKey);

    if (!note) {
      setContextStatus("Write evidence from the action before revealing the checkpoint.", "error");
      return;
    }

    const completedIndex = activeContextProgress;
    const nextTab = getNextMissionTab(activeMissionTab);
    saveCurrentEvidence(activeContextKey, note);
    setFormationDirection(activeContextKey, {
      source: "checkpoint",
      completedIndex,
      nextTab
    });
    if (activeContextProgress < checkpoints.length) {
      activeContextProgress += 1;
      localStorage.setItem(getContextProgressKey(activeContextKey), String(activeContextProgress));
    }
    activeMissionTab = nextTab;
    localStorage.setItem("gold-vein-active-mission-tab", activeMissionTab);
    renderContextAdventure();
    renderActiveWeb();
    setActiveAdventureView(activeContextProgress >= checkpoints.length ? "path" : "path");
    setContextStatus(
      activeContextProgress >= checkpoints.length
        ? "Evidence saved. This movement is complete."
        : `Evidence saved. Next node opened: ${activeMissionTab}.`,
      "success"
    );
    window.requestAnimationFrame(() => {
      missionPanel?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return;
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

  const completedIndex = activeContextProgress;
  activeContextProgress += 1;
  localStorage.setItem(getContextProgressKey(activeContextKey), String(activeContextProgress));
  setFormationDirection(activeContextKey, {
    source: "checkpoint",
    completedIndex,
    nextTab: getNextMissionTab(activeMissionTab)
  });
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
  localStorage.removeItem(getContextChallengeKey(activeContextKey));
  localStorage.removeItem(getContextRewardKey(activeContextKey));
  localStorage.removeItem(getContextDirectionKey(activeContextKey));
  activeMissionTab = "map";
  localStorage.setItem("gold-vein-active-mission-tab", activeMissionTab);
  renderContextAdventure();
  setContextStatus(`Movement ${nextMovement + 1} generated from what you carried on this trail.`, "success");
});

resetContextAdventureButton?.addEventListener("click", () => {
  activeContextProgress = 0;
  localStorage.setItem(getContextProgressKey(activeContextKey), "0");
  localStorage.setItem(getContextMovementKey(activeContextKey), "0");
  localStorage.removeItem(getContextChallengeKey(activeContextKey));
  localStorage.removeItem(getContextRewardKey(activeContextKey));
  localStorage.removeItem(getContextDirectionKey(activeContextKey));
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
