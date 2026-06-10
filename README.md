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

See `PILOT_PLAN.md` for the future partner-location pilot, unlock system, and suggested
next technical milestones.

See `MOBILE_APP_PLAN.md` for the Capacitor app-store path, native build steps, required developer
tools, and store submission checklist.

See `BACKEND.md` for the Supabase database schema, Vercel API routes, shared journey model,
progress tracking, messages, support notes, and redemption-code backend.

## Redemption Pilot Status

The public V1 is a prototype. No Watermark Coffee Shop redemption is active, and the app should not
be presented to staff as a free coffee pass.

- The app may show non-redeemable demo pass language while the concept is tested.
- Any real partner-location redemption must be separately approved, funded, and communicated with
  the partner before launch.
- A future version can turn this into digital redemption tracking with one-time codes.

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
- `BACKEND.md` - backend setup guide and API route documentation
- `db/schema.sql` - Supabase/Postgres database schema and seed data
- `api/` - Vercel serverless API routes for adventures, journeys, progress, messages, notes, support, and redemptions
- `capacitor.config.json` - Capacitor native app wrapper configuration
- `package.json` - mobile wrapper scripts and dependencies
- `assets/gold-vein-hero.png` - hero image
- `assets/gold-vein-icon.svg` - app icon
