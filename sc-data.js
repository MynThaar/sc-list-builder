// ===================================================================
//  sc-data.js - SETTINGS + LOADER for the list builder.
//  Keep every file in the SAME FOLDER as sc-list-builder-v12.6.html.
//  One data file per faction (race + cards + tactical + units), plus missions.js.
//  To add a new data file: create it, then add its name to DATA_FILES.
//  Every data file must end with:  fileLoaded();
// ===================================================================

const DATA_FILES = [
  "protoss.js",
  "zerg.js",
  "terran.js",
  "missions.js"
];

const PHASES = ["Any Phase","Movement Phase","Assault Phase","Combat Phase"];
const SLOT_TYPES = ["Hero","Core","Elite","Support","Structure","Summons"];
const ABILITY_TYPES = ["Active","Reaction","Passive"];
const STAT_ORDER = ["SHLD","SPD","EVA","ARM","HP","SIZE"];
const WEAPON_COLS = [["rng","RNG"],["tgt","TGT"],["roa","RoA"],["hit","HIT"],["surge","SURGE"],["sdie","S.DIE"],["dmg","DMG"],["kw","KEYWORD"]];

const GAME_MODES = {
  skirmish: {id:"skirmish", name:"Skirmish", table:'36" × 36"', minerals:1000},
  standard: {id:"standard", name:"Standard", table:'36" × 54"', minerals:2000}
};

const DATA = {
  races: {},
  tactical: [],
  missions: [],
  deployments: [],
  gasPercent: 0.10,   // vespene limit = 10% of the mineral limit (rounded down)
  defaultMax: 10,     // max copies of a unit unless it's unique or has its own "max"
  loaded: []
};

// ---- Helpers used by the data files ----
function raceEntry(key){
  return DATA.races[key] || (DATA.races[key] = {name:key, resource:"", cards:{}, units:[]});
}
function addRace(key, name, resource){ const r = raceEntry(key); r.name = name; r.resource = resource; }
function addCards(key, cards){ Object.assign(raceEntry(key).cards, cards); }
function addUnits(key, list){ raceEntry(key).units.push(...list); }
// Optional per-unit upgrades live ON the unit in its data file, e.g.:
//   upgrades:[
//     {id:"p_zealot_legs", name:"Leg Enhancements", pts:20,
//      type:"Active", cost:1, phase:"Movement Phase", text:"Rules text."}
//   ]
// pts = minerals only. Use pts:[20,30] when cost depends on squad size.
// A unit may take several different upgrades, but only one of each.
function addTactical(list){ DATA.tactical.push(...list); }
function addMissions(list){ DATA.missions.push(...list); }
function addDeployments(list){ DATA.deployments.push(...list); }
function fileLoaded(){
  const s = document.currentScript;
  if (s && s.src) DATA.loaded.push(decodeURIComponent(s.src.split("/").pop().split("?")[0]));
}

// ---- Check: runs after all data files, before the builder starts ----
function checkDataFiles(){
  const msgs = [];
  DATA_FILES.filter(f => !DATA.loaded.includes(f)).forEach(f =>
    msgs.push(`<b>${f}</b> didn't load. It's missing, misnamed, or cut off. Its contents are left out.`));
  for (const k in DATA.races){
    const r = DATA.races[k];
    if (!Object.keys(r.cards).length){ msgs.push(`<b>${r.name}</b> has no faction cards, so it's hidden for now.`); delete DATA.races[k]; }
  }
  const seen = new Set();
  for (const k in DATA.races) DATA.races[k].units.forEach(u => {
    if (seen.has(u.id)) msgs.push(`Duplicate unit id <b>${u.id}</b>.`); seen.add(u.id);
  });
  DATA.tactical.forEach(t => { if (seen.has(t.id)) msgs.push(`Duplicate id <b>${t.id}</b>.`); seen.add(t.id); });
  (DATA.missions||[]).forEach(t => { if (seen.has(t.id)) msgs.push(`Duplicate id <b>${t.id}</b>.`); seen.add(t.id); });
  (DATA.deployments||[]).forEach(t => { if (seen.has(t.id)) msgs.push(`Duplicate id <b>${t.id}</b>.`); seen.add(t.id); });
  if (msgs.length){
    const e = document.getElementById("err");
    if (e){ e.style.display = "block"; e.innerHTML = msgs.join("<br>") + "<br><span style='opacity:.7'>Press F12 → Console to see the exact line.</span>"; }
  }
}

// ---- Load the data files in order ----
DATA_FILES.forEach(f => document.write('<script src="' + f + '"><\/script>'));
document.write('<script>checkDataFiles()<\/script>');
