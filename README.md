# Gold Vein

Gold Vein is a Spirit-led, Scripture-supported disciple-making adventure where participants follow
small steps of obedience into real-world encounters that reveal the treasures of God's Word, His
people, and His Kingdom.

## V1

This first version is a static website with one adventure:

- Landing page for Gold Vein
- Discovery/search surface for available trails
- Core loop: Receive, Go, Connect, Obey, Reflect, Testify
- Interactive adventure app prototype with locked and unlocked instructions
- Installable PWA metadata for phone testing
- Start Adventure section
- Gold Vein No. 1
- Adventure metadata for trail type, difficulty, time, companions, verification, and treasure evidence
- Printable letter
- Observation-first framework
- Focused Scripture map
- Field notes section
- Local note saving in the browser
- Testimony preparation flow

## Redemption Pilot

The first real-world coffee test can use prepaid shop credit instead of payment automation.

- Nathan starts with a $20 Watermark gift card balance.
- The app shows a unique code such as `GV-WM-NO1-001`.
- The code proves the participant is on Gold Vein Adventure No. 1.
- Watermark redeems one coffee from the prepaid gift card balance.
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
- `assets/gold-vein-hero.png` - hero image
- `assets/gold-vein-icon.svg` - app icon
