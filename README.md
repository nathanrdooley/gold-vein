# Gold Vein

Gold Vein invites people into Spirit-led spaces and places where grace meets faith, Scripture gives
light, and Jesus Christ is revealed as the treasure.

## V1

This first version is a static PWA-style website with multiple prototype adventures:

- Landing page for Gold Vein
- Discovery/search surface for available trails
- Core loop: Receive, Go, Connect, Obey, Reflect, Testify
- Interactive adventure app prototype with locked and unlocked instructions
- Compartmental app-page navigation from the home screen
- Installable PWA metadata for phone testing
- Partner Location Trail: Gold Vein No. 1
- Global Nearby Trail: The Nearby Neighbor
- Home Trail: The Table and the Room
- Walkable / Hikeable Trail: The Road and the Burning Heart
- Adventure metadata for trail type, difficulty, time, companions, verification, and treasure evidence
- Printable letter
- Observation-first framework
- Focused Scripture maps
- Field notes section
- Local note saving in the browser
- Testimony preparation flow

See `PILOT_PLAN.md` for the current pilot plan, Watermark coffee test, unlock system, and suggested
next technical milestones.

See `MOBILE_APP_PLAN.md` for the Capacitor app-store path, native build steps, required developer
tools, and store submission checklist.

## Redemption Pilot

The first real-world coffee test can use prepaid shop credit instead of payment automation.

- A $20 Watermark gift card balance is used to start the pilot.
- The app shows a unique code such as `GV-WM-NO1-001`.
- The code proves the participant is on Gold Vein Adventure No. 1.
- Watermark redeems one coffee from the prepaid Gold Vein gift card balance.
- The code is checked off manually for the pilot.
- Later, Glen can turn this into digital redemption tracking with one-time codes.

## Local Preview

Run a static server from this folder:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Then open:

```txt
http://127.0.0.1:8080/
```

To test from a phone on the same Wi-Fi, start the server with:

```sh
python3 -m http.server 8080 --bind 0.0.0.0
```

Then open the Mac's Wi-Fi IP address on the phone, such as:

```txt
http://10.0.3.90:8080/
```

On iPhone, open the URL in Safari, tap Share, then choose **Add to Home Screen**.

## Files

- `index.html` - page structure and content
- `styles.css` - responsive visual design
- `script.js` - app unlock flow, print, field notes, and testimony interactions
- `manifest.json` - installable app metadata
- `service-worker.js` - app shell caching
- `PILOT_PLAN.md` - project brief and V1 pilot plan
- `MOBILE_APP_PLAN.md` - iOS/Android app-store preparation plan
- `PRIVACY.md` - privacy policy draft for review before public launch
- `capacitor.config.json` - Capacitor native app wrapper configuration
- `package.json` - mobile wrapper scripts and dependencies
- `assets/gold-vein-hero.png` - hero image
- `assets/gold-vein-icon.svg` - app icon
