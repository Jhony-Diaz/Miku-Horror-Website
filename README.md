# Miku Horror Website

A work-in-progress browser horror-game prototype built with HTML, CSS, JavaScript, Three.js, and three-vrm. A 3D mascot floats across the screen and randomly changes which game page she occupies.

## Current features

- Procedural side-to-side movement and faster vertical bobbing using sine waves.
- A transparent WebGL canvas with camera, lighting, and a VRM character.
- Random left/right/stay choices every 40 seconds across four pages.
- Callback-driven visibility updates and location persistence with localStorage.
- Health display and early game-page layouts.

## Run locally

1. Obtain a VRM model you have permission to use and place it at `Models/miku.vrm`. The model is not included in this repository; its redistribution terms have not yet been verified.
2. Serve this folder with a local HTTP server, such as VS Code's Live Server extension. If Python is installed, you can alternatively run `python -m http.server 8000` from this folder and open `http://localhost:8000`.
3. Open `index.html` through the server. Internet access is needed for the libraries loaded from jsDelivr.

The mascot appears only on her current saved page. Moving between HTML pages reloads the 3D scene and restarts the movement timer. This is a prototype, not a finished game.

## How it works

- `miku.js` manages the mascot's game location and movement timer.
- `home.js` connects game state, saving, health, and page visibility through a callback.
- `saveManager.js` serializes game state to localStorage and restores it on page load.
- `miku3d.js` loads the model and renders its floating motion with requestAnimationFrame.
- `miku-test.html` and `miku-wave-test.html` are standalone model experiments.

The project explores JavaScript classes, callbacks, timers, DOM manipulation, persistent state, and procedural 3D animation. The test pages currently use lowercase `models` paths; on case-sensitive servers these must match the `Models` directory.

## Assets

Third-party characters, models, and images belong to their respective owners. No license for those assets is granted by this repository. Asset credits and redistribution permissions are still being documented.
