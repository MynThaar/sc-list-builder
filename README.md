# StarCraft List Builder v12.5

Browser list builder for StarCraft: The Miniatures Game, including **Trouble in the Koprulu Sector** campaign mode.

Open [sc-list-builder-v12.html](sc-list-builder-v12.html) (or this repo’s GitHub Pages URL). Everything runs in the browser. Lists and campaign Registers are stored in that browser’s local storage, so each person has their own data.

## Files

- `sc-list-builder-v12.html` — the app
- `sc-data.js` — loader and game settings
- `protoss.js` / `zerg.js` / `terran.js` — faction data
- `missions.js` — missions and deployments
- `Maps/` — deployment map images

## Local use

Serve the folder over HTTP (opening the HTML file directly can block map images):

```
py -m http.server 8765
```

Then visit `http://127.0.0.1:8765/`
