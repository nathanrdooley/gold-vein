# Gold Vein Mobile App Plan

## Goal

Prepare Gold Vein to ship as installable iOS and Android apps while keeping the current web app as
the source of truth.

The recommended path is Capacitor. Capacitor wraps the existing HTML, CSS, and JavaScript app inside
native iOS and Android shells.

## Current Mobile Foundation

This repo now includes:

- `package.json` with Capacitor dependencies and mobile scripts
- `capacitor.config.json` with app id, app name, web directory, and splash settings
- `.gitignore` for generated assets, dependencies, and native build output

Current app id:

```txt
com.goldvein.app
```

Current app name:

```txt
Gold Vein
```

## Required Local Tools

To generate and build the native app projects, the machine needs:

- Node.js with npm
- Xcode for iOS builds
- Android Studio for Android builds
- Apple Developer account for App Store submission
- Google Play Console account for Play Store submission

## Install Dependencies

After Node.js and npm are available, run from the repo root:

```sh
npm install
```

Then prepare the static web app for Capacitor:

```sh
npm run mobile:prepare
```

## Generate Native App Projects

After dependencies are installed, create the iOS and Android projects:

```sh
npx cap add ios
npx cap add android
```

Then sync the current web app into the native projects:

```sh
npm run mobile:sync
```

## Open Native Projects

Open iOS in Xcode:

```sh
npm run mobile:open:ios
```

Open Android in Android Studio:

```sh
npm run mobile:open:android
```

## Store Submission Needs

Before public app-store submission, Gold Vein needs:

- final app icon
- splash screen assets
- iPhone screenshots
- iPad screenshots if supporting iPad
- Android phone screenshots
- short app description
- full app description
- support email
- privacy policy URL
- content rating answers
- Apple privacy nutrition label answers
- Google Play data safety answers
- location permission explanation

## Permissions

Gold Vein currently uses location for adventure confirmation.

Store-facing language should be plain:

```txt
Gold Vein uses your location only when you choose to confirm that you are at an adventure place.
Your location is used to unlock the next step of the trail. The V1 prototype does not send your
location to a server.
```

If future versions add QR scanning, camera permission language will also be needed.

## Important Technical Caveat

The current app stores progress, witness notes, and redemption status in local browser/app storage.

That is enough for a prototype, but not enough for a real public launch with one-time pass
redemption.

Before a serious public release, Gold Vein should add a backend for:

- pass redemption
- one-time code validation
- shared code status across devices
- saved trail progress if accounts are added
- submitted field notes or testimonies

## Recommended App Store Path

### Phase 1: TestFlight / Internal Testing

- Generate iOS app with Capacitor
- Test on Nathan's iPhone
- Invite Glen through TestFlight
- Confirm location permission, app navigation, reset behavior, and all trails

### Phase 2: Android Internal Testing

- Generate Android app with Capacitor
- Test through Google Play internal testing
- Confirm layout and permissions on Android

### Phase 3: Store-Ready Release

- Add privacy policy page
- Add backend redemption for Watermark pilot
- Prepare screenshots and app copy
- Submit to Apple App Store and Google Play

## Suggested First Test Build

For the first native test, do not submit publicly yet.

Goal:

```txt
Install Gold Vein on a phone as a native app and complete one adventure end to end.
```

Recommended first test trail:

```txt
Emmaus No. 1: The Road and the Burning Heart
```

Reason:

- no partner business required
- no payment redemption required
- works anywhere
- tests the app-like trail flow clearly
