# Gold Vein V1 Pilot Plan

## Purpose

Gold Vein invites people into Spirit-led spaces and places where grace meets faith, Scripture gives
light, and Jesus Christ is revealed as the treasure.

The V1 pilot is meant to test whether a simple app-guided adventure can move a participant from
passive content into embodied discipleship: going, receiving, opening Scripture, connecting,
giving, and recording witness.

## What Exists Now

Gold Vein is currently a static PWA-style website deployed through Vercel and backed by GitHub.

Current live app:

- Home and Discover pages
- App-like hash navigation
- Installable phone metadata
- Locked step-by-step adventure interface
- Local browser progress saving
- Field Notes and testimony preparation
- Service worker caching
- Multiple adventure types

Current deployed URL:

```txt
https://gold-vein.vercel.app/
```

## Current Adventure Types

### Partner Location Trail

**Gold Vein No. 1: What Does It Mean to Enter the Kingdom of Christ?**

- Location: future approved partner location
- Scripture Map: 2 Peter 1:3-11
- Unlocks: Place, Pass, Word, Person, Gift/Witness
- Special feature: coffee redemption pass

### Global Nearby Trail

**Global No. 1: The Nearby Neighbor**

- Location: any nearby public place
- Scripture Map: Luke 10:25-37
- Unlocks: Place, Pass, Word, Person, Gift/Witness
- Purpose: mercy, prayer, encouragement, service, and follow-up

### Home Trail

**Home No. 1: The Table and the Room**

- Location: home, room, table, chair, porch, or quiet corner
- Scripture Map: Luke 10:38-42
- Unlocks: Place, Pass, Word, Person, Gift/Witness
- Purpose: peace, presence, listening, service, and household witness

### Walkable / Hikeable Trail

**Emmaus No. 1: The Road and the Burning Heart**

- Location: walk, path, road, trail, or quiet reflective place
- Scripture Map: Luke 24:13-35
- Unlocks: Place, Pass, Word, Person, Gift/Witness
- Purpose: walking with Christ through disappointment, Scripture, recognition, and witness

## Unlock System

Each adventure uses the same basic structure.

### Place

The participant confirms they are in the intended place.

Examples:

- GPS check for an approved partner location
- nearby public place confirmation
- home place confirmation
- walking trail or road confirmation

### Pass

The participant receives or presents a pass.

Possible pass types:

- Redemption Pass: receive a prepared gift
- Handoff Pass: receive the next step from someone
- Companion Pass: connect two people on the same trail
- Sponsor Pass: identify a prepared or funded gift
- Witness Pass: confirm that a real-world moment happened

### Word

The participant opens a Scripture Map.

The Scripture Map helps the participant notice:

- context
- history and culture
- inner life
- Spirit-led attention
- power and fruit

### Person

The participant connects with someone through consent-based conversation, prayer, reflection, or
follow-up.

### Gift / Witness

The participant gives the treasure through prayer, encouragement, service, generosity, testimony,
hospitality, listening, or follow-up, then records a short witness note.

## Future Partner-Location Pilot

Status: not active in the public prototype.

The public V1 must not imply that Watermark Coffee Shop staff should redeem a pass, scan a code, or
provide free coffee. Any real-world test should be separately approved, funded, and communicated
with Watermark staff before launch.

### Simple Version

1. Confirm approval, funding, staff instructions, and redemption limits with Watermark.
2. Create a real one-time pass system that cannot be reused across devices.
3. Train the staff-facing flow before inviting participants.
4. Launch only after the app copy, QR codes, and support process match the approved pilot.

### Public Prototype Code

```txt
DEMO-NOT-REDEEMABLE
```

Meaning:

- `GV` = Gold Vein
- `DEMO` = prototype only
- `NOT-REDEEMABLE` = no free item or staff-facing redemption is authorized

### Current Limitation

The current demo system stores status in the local browser only.

That means it demonstrates a possible experience, but it does not validate one-time codes across
devices and should not be used for real redemption.

## What Needs Testing

### User Experience

- Does the user understand what Gold Vein is?
- Does the Discover page help them choose a trail?
- Do the locked steps feel clear or confusing?
- Does the app feel like an adventure instead of a form?
- Does the participant know what to do next at each step?

### Partner-Location Pilot

- Will the barista understand the pass?
- Is the wording clear enough at the counter?
- Is the redemption process simple enough during a normal coffee workflow?
- Does the coffee gift feel natural, generous, and not awkward?
- Does the participant understand that the coffee points beyond itself?

### Discipleship Fruit

- Did the participant open Scripture?
- Did the participant connect with someone?
- Did the participant give, pray, encourage, serve, or follow up?
- Did the participant record a witness note?
- Did the adventure reveal Christ as the treasure?

### Technical Behavior

- Does location permission work on the deployed app?
- Does the app work when installed to the phone home screen?
- Does the service worker refresh correctly after updates?
- Does each trail keep its own progress?
- Are reset buttons clear and reliable?

## What Glen Could Build Next

### Backend Redemption

Build a small database-backed redemption system.

Needed features:

- unique one-time codes
- code status: issued, valid, redeemed, expired
- redemption timestamp
- device or redeemer notes
- admin view for the partner location or Gold Vein
- prevention of duplicate redemption across devices

### Trail Engine

The current prototype has separate JavaScript logic for each trail.

Glen could turn this into a reusable trail engine:

- one trail data structure
- step definitions
- unlock type definitions
- saved progress per trail
- reusable UI components
- easier creation of new adventures

### Admin Builder

Future builder interface:

- create a trail
- choose trail type
- add Scripture Map
- define unlocks
- assign pass codes
- configure locations or stops
- export printable letters or QR codes

### Maps and Walkable Trails

For walkable and hikeable adventures:

- start point
- optional route
- pause points
- geofenced trail markers
- QR markers at trail stops
- Scripture prompts at each stop
- return-with-witness final step

### Accounts and Testimonies

Later, Gold Vein may need:

- participant accounts
- saved field notes
- private testimonies
- leader or mentor view
- group/church trails
- consent-aware sharing

## Questions for a Future Partner Location

- Can a Gold Vein balance be held at the partner location?
- Can staff redeem from that balance manually?
- Would staff prefer a printed code sheet, a QR page, or both?
- What wording would feel natural at the counter?
- How many pilot redemptions should be allowed?
- Who should approve or monitor the pilot?
- Would the partner want this limited to certain days or times?

## Questions for Glen

- Should the next version stay static, or move to a lightweight backend?
- What database would be simplest for redemption codes?
- Should Vercel serverless functions handle redemption?
- Should trail data live in JSON first?
- How should QR codes be generated and managed?
- What would be the smallest admin view worth building?

## Recommended Next Milestone

Run one small pilot.

Suggested pilot:

1. Keep the prepared-gift trail as the first location-based test.
2. Use one Gold Vein code and one small prepaid balance.
3. Have one or two trusted participants complete the adventure.
4. Watch where they hesitate.
5. Collect field notes and testimony.
6. Revise the wording, unlocks, and redemption flow before scaling.

The goal of the first pilot is not polish. The goal is to discover whether the adventure produces
real movement, real Scripture attention, real connection, and real witness to Jesus Christ.
