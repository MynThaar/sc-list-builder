// terran.js - Terran race, faction cards, tactical cards, and units
addRace("terran", "Terran", "Command Points");
addCards("terran", {
  nova: { name:"Nova Covert Ops", unique:true, slots:{Hero:1, Elite:1, Core:3, Support:1}, resource:1,
    abilities:[
      {name:"Griffin Support", type:"Active", phase:"Movement Phase",
        text:"Set a Friendly Sabotage Drone Unit Within 12\" of a Friendly Unit, more than 1\" away from any Enemy model. Remove this Unit at the End of the Round."},
      {name:"Mark for Death", type:"Active", phase:"Movement Phase",
        text:"Target an Enemy Unit on the battlefield. When a Friendly Unit makes an Attack targeting that Unit, its first Melee or Ranged Weapon used gains CRITICAL HIT (1) and PRECISION (1)."}
    ]},
  raynor: { name:"Raynor's Raiders", unique:true, slots:{Hero:1, Core:3, Support:1}, resource:1,
    abilities:[
      {name:"Rapid Ingress", type:"Active", phase:"Movement Phase",
        text:"Set a Friendly Point Defence Drone Unit anywhere on the battlefield, more than 1\" away from any Enemy model. Remove this Unit at the End of the Round."},
      {name:"Ready for Pickup?", type:"Active", phase:"Movement Phase",
        text:"Once per Game. The active Unit resolves the PLACE (12) effect. Models set by this effect cannot be set up Within the Engagement Range of any Enemy Unit. This resolves instead of performing a standard action."}
    ]},
  armed: { name:"Terran Armed Forces", unique:true, slots:{Elite:1, Core:3, Support:1}, resource:1,
    abilities:[
      {name:"Tactical Retreat", type:"Active", phase:"Movement Phase",
        text:"The active Unit ignores the Disengage penalty for the remainder of the Round."},
      {name:"Terran Tenacity", type:"Active", phase:"Movement Phase",
        text:"Once per Game. Immediately claim the First Player Marker. No other player may claim the First Player Marker for the remainder of this Phase."}
    ]}
});

// ---- Tactical cards ----
// unique:true = max 1. All cards here are usable with any Terran faction card.
addTactical([
  {id:"tt_academy", name:"Academy", gas:40, slots:{Support:2}, races:["terran"], resource:1, unique:true,
    abilities:[
      {name:"Advanced Training", type:"Reaction", phase:"Any Phase",
        text:"Once per Round, when a Friendly Support Unit activates a Special Ability that costs CP, resolve that ability with its CP cost reduced by 1 (to a minimum of 0). Do not Exhaust this card."}
    ]},
  {id:"tt_armory", name:"Armory", gas:30, slots:{Elite:1}, races:["terran"], resource:1,
    abilities:[
      {name:"Vehicle Plating", type:"Reaction", phase:"Any Phase",
        text:"Use before a Friendly Mechanical Unit makes an Armour Roll. That Unit gains TOUGH (1) for this roll."},
      {name:"Vehicle Weapons", type:"Active", phase:"Assault Phase",
        text:"The active Mechanical Unit’s first Ranged Weapon used gain CRITICAL HIT (1)."}
    ]},
  {id:"tt_barracks", name:"Barracks", gas:30, slots:{Core:1}, races:["terran"], resource:1,
    abilities:[
      {name:"Go! Go! Go!", type:"Active", phase:"Movement Phase",
        text:"The active Biological Unit performs a 2\" Move action. This does not count towards its action limit."}
    ]},
  {id:"tt_proxy", name:"Barracks (Proxy)", gas:40, slots:{Core:2}, races:["terran"], resource:2, unique:true,
    abilities:[
      {name:"Go! Go! Go!", type:"Active", phase:"Movement Phase",
        text:"The active Biological Unit performs a 2\" Move action. This does not count towards its action limit."},
      {name:"Armed and Ready", type:"Active", phase:"Movement Phase",
        text:"The active Biological Unit Deploys from any table edge that is not a player's Entry Edge. No model may be set up Within 10\" of any Enemy model. This ability cannot be used if another Friendly Biological Unit has already been Deployed this Round."}
    ]},
  {id:"tt_raxtech", name:"Barracks (Tech Lab)", gas:40, slots:{Elite:1, Core:1}, races:["terran"], resource:2, unique:true,
    abilities:[
      {name:"Go! Go! Go!", type:"Active", phase:"Movement Phase",
        text:"The active Biological Unit performs a 2\" Move action. This does not count towards its action limit."},
      {name:"Let's Have a Blast!", type:"Active", phase:"Assault Phase",
        text:"The active Biological Unit’s first Ranged Weapon used gain ANTI-EVADE (1)."}
    ]},
  {id:"tt_dropship", name:"Dropship", gas:35, slots:{Core:1, Support:1}, races:["terran"], resource:1, unique:true,
    abilities:[
      {name:"Strap in!", type:"Active", phase:"Movement Phase",
        text:"The active, Unengaged Ground Unit is returned to Reserves instead of performing an action."},
      {name:"Ready For Dust-off", type:"Active", phase:"Movement Phase",
        text:"Set a Faction Indicator anywhere on the battlefield more than 10\" away from any Enemy model. At the End of the Round, the controlling player may Deploy one Ground Unit from Reserves in base-to-base contact with this Faction Indicator."}
    ]},
  {id:"tt_ebay", name:"Engineering Bay", gas:25, slots:{Core:1}, races:["terran"], resource:1,
    abilities:[
      {name:"Infantry Armor", type:"Reaction", phase:"Any Phase",
        text:"Use before a Friendly Biological Unit makes an Armour Roll. That Unit gains TOUGH (1) for this roll."},
      {name:"Infantry Weapons", type:"Active", phase:"Assault Phase",
        text:"The active Biological Unit’s first Ranged Weapon used gains CRITICAL HIT (1)."}
    ]},
  {id:"tt_factory", name:"Factory", gas:35, slots:{Elite:2}, races:["terran"], resource:1,
    abilities:[
      {name:"Field Repair", type:"Active", phase:"Movement Phase",
        text:"The active Mechanical Unit resolves the HEAL (2) effect."}
    ]},
  {id:"tt_factech", name:"Factory (Tech Lab)", gas:40, slots:{Elite:2}, races:["terran"], resource:1, unique:true,
    abilities:[
      {name:"Field Repair", type:"Active", phase:"Movement Phase",
        text:"The active Mechanical Unit resolves the HEAL (2) effect."},
      {name:"Pound 'em Flat!", type:"Active", phase:"Assault Phase",
        text:"If the active Mechanical Unit has the Stationary Status, its first Ranged Weapon used gains PRECISION (2)."}
    ]},
  {id:"tt_orbital", name:"Orbital Command", gas:25, slots:{Core:1}, races:["terran"], resource:1, unique:true,
    abilities:[
      {name:"ComSat Station", type:"Active", phase:"Movement Phase",
        text:"Select one table edge that is not a player’s Entry Edge. Until the End of the Round, Enemy Units cannot Deploy from that edge."},
      {name:"Scanner Sweep", type:"Active", phase:"Movement Phase",
        text:"Set a Faction Indicator anywhere on the battlefield. While Enemy Units are Within 6\" of this Faction Indicator, they lose HIDDEN Status."}
    ]},
  {id:"tt_depot", name:"Supply Depot", gas:40, slots:{Hero:1, Elite:1, Core:1}, races:["terran"], resource:1, unique:true,
    abilities:[
      {name:"Additional Supply Depots", type:"Active", phase:"Movement Phase",
        text:"The active Unit’s Supply Value is improved by 1 for Controlling and Contesting Mission Markers and completing objectives."}
    ]},
  {id:"tt_vanadium", name:"Vanadium Plating", gas:25, slots:{Support:1}, races:["terran"], resource:1,
    abilities:[
      {name:"Crystalline Alloy", type:"Reaction", phase:"Any Phase",
        text:"Use before a Friendly Mechanical Unit makes an Armour Roll. That Unit gains DODGE (2) for this roll."}
    ]}
]);

// ---- Hero units ----
addUnits("terran", [
  {id:"t_raynor", name:"Jim Raynor", slot:"Hero", unique:true,
    squad:[["-",0],["1-1",1],["-",0]], pts:[280],
    tags:["Biological","Ground"],
    stats:{SHLD:"-", SPD:7, EVA:"5+", ARM:"4+", HP:8, SIZE:2},
    abilities:[
      {name:"Commander", type:"Passive", phase:"Any Phase",
        text:"Treat this Unit’s Supply characteristic as increased by 1 for Controlling and Contesting Mission Markers, completing objectives, and resolving Disengage checks."},
      {name:"Freedom Fighters", type:"Passive", phase:"Any Phase",
        text:"The Supply Value of all Friendly Units Within 8\" of this Unit cannot be reduced below 1 for Contesting Mission Markers and completing objectives."},
      {name:"Orders", type:"Active", cost:"X", phase:"Movement Phase",
        text:"REPEATABLE. Select another Friendly Biological Unit Within 8\", spend CP and apply one of the following effects: 1 CP: That Unit’s first used weapon gains the CRITICAL HIT (2). 1 CP: That Unit ignores the Disengage penalty for the remainder of the Round. 2 CP: Remove the Activation Marker from that Unit."}
    ],
    weapons:[
      {name:"Commando Rifle", phase:"Assault Phase", rng:"18", tgt:"All", roa:3, hit:"3+", surge:"Armoured", sdie:"D3", dmg:1, kw:"BULKY, PIERCE Armoured (3)"},
      {name:"C-14 Rifle", phase:"Assault Phase", rng:"12", tgt:"All", roa:6, hit:"3+", surge:"Light", sdie:"D3+1", dmg:1, kw:"BURST FIRE 8\" (3)"},
      {name:"\"Justice\" Revolver", phase:"Assault Phase", rng:"6", tgt:"Ground", roa:2, hit:"3+", surge:"-", sdie:"-", dmg:2, kw:"ANTI-EVADE (2), SIDEARM, PINPOINT"},
      {name:"Bayonet", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"4+", surge:"Light", sdie:"D3", dmg:1, kw:""}
    ]},

  {id:"t_nova_assault", name:"Nova Assault Mode", slot:"Hero", unique:true,
    excludes:["t_nova_stealth"], summons:"t_holodecoy",
    squad:[["-",0],["1-1",1],["-",0]], pts:[260],
    tags:["Biological","Psionic","Ground"],
    stats:{SHLD:"-", SPD:7, EVA:"5+", ARM:"5+", HP:8, SIZE:2},
    abilities:[
      {name:"Battle Preparation", type:"Passive", phase:"Any Phase",
        text:"During Army Building, your army cannot include both the Nova Assault Mode Unit and the Nova Stealth Mode Unit."},
      {name:"Ghost Visor", type:"Passive", phase:"Any Phase",
        text:"While Enemy Units are Within 6\" of this Unit, they lose the HIDDEN Status."},
      {name:"Holo Decoy", type:"Active", cost:1, phase:"Movement Phase",
        text:"Resolve the SUMMON (Holo Decoy) effect. Then, Holo Decoy may immediately perform a Move action."},
      {name:"Super Stimpack", type:"Active", cost:1, phase:"Movement Phase",
        text:"This Unit gains BUFF Speed (2). Additionally, all its Weapons gain PRECISION (2)."},
      {name:"Phase Reactor Suit", type:"Active", cost:1, phase:"Assault Phase",
        text:"If Unengaged, resolve the PLACE (6) effect."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (4) 4+ effect."}
    ],
    weapons:[
      {name:"Hellfire Shotgun", phase:"Assault Phase", rng:"8", tgt:"Ground", roa:3, hit:"4+", surge:"Light", sdie:"D3", dmg:2, kw:"ANTI-EVADE (1), BURST FIRE 4\" (3)"},
      {name:"Monomolecular Blade", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:8, hit:"3+", surge:"Light, Armoured", sdie:"D6", dmg:1, kw:""}
    ]},

  {id:"t_nova_stealth", name:"Nova Stealth Mode", slot:"Hero", unique:true,
    excludes:["t_nova_assault"], summons:"t_holodecoy",
    squad:[["-",0],["1-1",1],["-",0]], pts:[240],
    tags:["Biological","Psionic","Ground"],
    stats:{SHLD:"-", SPD:7, EVA:"5+", ARM:"5+", HP:8, SIZE:2},
    abilities:[
      {name:"Battle Preparation", type:"Passive", phase:"Any Phase",
        text:"During Army Building, your army cannot include both the Nova Assault Mode Unit and the Nova Stealth Mode Unit."},
      {name:"Tactical Stealth Suit", type:"Passive", phase:"Any Phase",
        text:"After this Unit fully resolves an Action, it gains the HIDDEN Status."},
      {name:"Ghost Visor", type:"Passive", phase:"Any Phase",
        text:"While Enemy Units are Within 6\" of this Unit, they lose the HIDDEN Status."},
      {name:"Super Stimpack", type:"Active", cost:1, phase:"Movement Phase",
        text:"This Unit gains BUFF Speed (2). Additionally, all its Weapons gain PRECISION (2)."},
      {name:"Holo Decoy", type:"Active", cost:1, phase:"Movement Phase",
        text:"Resolve the SUMMON (Holo Decoy) effect. Then, Holo Decoy may immediately perform a Move action."},
      {name:"Operational Efficiency", type:"Passive", phase:"Assault Phase",
        text:"After this Unit fully resolves a Ranged Attack with its C-20A Canister Rifle, if the target Enemy Unit was Destroyed or its Current Supply Value was reduced, the active player may return one of their Exhausted non-Unique Tactical Cards to its Ready state."},
      {name:"Head Shot", type:"Reaction", cost:1, phase:"Assault Phase",
        text:"Once Per Game. While this Unit is Unengaged and has the Stationary Status, when it makes a Ranged Attack with its C-20A Canister Rifle, treat that weapon's Damage characteristic as 3, and it gains CONCENTRATED FIRE (1)."}
    ],
    weapons:[
      {name:"C-20A Canister Rifle", phase:"Assault Phase", rng:"12", tgt:"All", roa:4, hit:"3+", surge:"-", sdie:"-", dmg:2, kw:"CRITICAL HIT (2), LONG RANGE (18\")"},
      {name:"Combat Knife", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:3, hit:"5+", surge:"-", sdie:"-", dmg:1, kw:""}
    ]}
]);

// ---- Core units ----
addUnits("terran", [
  {id:"t_marauder", name:"Marauder", slot:"Core",
    squad:[["1-1",0],["2-2",1],["3-4",2]], pts:[160,290],
    tags:["Armoured","Biological","Ground"],
    stats:{SHLD:"-", SPD:"4/7", EVA:"6+", ARM:"4+", HP:5, SIZE:2},
    abilities:[
      {name:"Stimpack", type:"Active", cost:1, phase:"Movement Phase",
        text:"This Unit suffers NON-LETHAL DAMAGE (2). This Unit gains BUFF Speed (3). Additionally, its Quad K12 and all Close Combat Weapons gain PRECISION (2)."},
      {name:"Concussive Shells", type:"Reaction", cost:1, phase:"Assault Phase",
        text:"When an Enemy declares a Charge against a Friendly Unit Within 8\", that Enemy gains DEBUFF Speed (2)."}
    ],
    weapons:[
      {name:"Quad K12", phase:"Assault Phase", rng:"12", tgt:"Ground", roa:3, hit:"3+", surge:"Armoured", sdie:"D3", dmg:1, kw:"PIERCE Armoured (2)"},
      {name:"Strike", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"4+", surge:"-", sdie:"-", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"t_marauder_vet", name:"Veteran of Tarsonis", pts:[20,40], type:"Passive", phase:"Any Phase",
        text:"While this Unit is Within 3\" of a Mission Marker, its Armour characteristic is increased by 1."},
      {id:"t_marauder_foam", name:"Kinetic Foam", pts:[20,40], type:"Passive", phase:"Any Phase",
        text:"Increase this Unit's Hit Points characteristic by 1."},
      {id:"t_marauder_lts", name:"Laser Targeting Systems", pts:[20,40], type:"Passive", phase:"Assault Phase",
        text:"This Unit’s Quad K12 weapon gains LONG RANGE (16\")."}
    ]},

  {id:"t_marine", name:"Marine", slot:"Core",
    squad:[["1-3",0],["4-6",1],["7-9",2]], pts:[170,220],
    tags:["Biological","Light","Ground"],
    stats:{SHLD:"-", SPD:"4/7", EVA:"5+", ARM:"5+", HP:2, SIZE:2},
    abilities:[
      {name:"Stimpack", type:"Active", cost:1, phase:"Movement Phase",
        text:"This Unit suffers NON-LETHAL DAMAGE (2). This Unit gains BUFF Speed (3). Additionally, its C-14 Rifle and all Close Combat Weapons gain PRECISION (3)."}
    ],
    weapons:[
      {name:"C-14 Rifle", phase:"Assault Phase", rng:"12", tgt:"All", roa:2, hit:"3+", surge:"Light", sdie:"D3", dmg:1, kw:""},
      {name:"Strike", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:1, hit:"5+", surge:"-", sdie:"-", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"t_marine_shield", name:"Combat Shield", pts:[20,30], type:"Active", cost:1, phase:"Movement Phase",
        text:"This Unit is always eligible to make an Evade Roll against any Close Combat Attack targeting it and any Damage from an Enemy Special Ability."},
      {id:"t_marine_agg", name:"AGG-12", pts:10, phase:"Assault Phase", replaces:"C-14 Rifle",
        weapons:[{name:"AGG-12", phase:"Assault Phase", rng:"12", tgt:"Ground", roa:2, hit:"3+", surge:"Armoured", sdie:"D3", dmg:1, kw:"LONG RANGE (18\"), SPECIALIST"}]},
      {id:"t_marine_rocket", name:"Rocket Launcher", pts:40, phase:"Assault Phase",
        weapons:[{name:"Rocket Launcher", phase:"Assault Phase", rng:"12", tgt:"Ground", roa:4, hit:"3+", surge:"-", sdie:"-", dmg:1, kw:"INDIRECT FIRE, LONG RANGE (18\"), SIDEARM, SPECIALIST"}]},
      {id:"t_marine_slug", name:"Slugthrower", pts:[10,20], type:"Passive", phase:"Assault Phase",
        text:"When this Unit makes a Ranged Attack with a C-14 Rifle and the target is Within 8\", that weapon gains ANTI-EVADE (1)."},
      {id:"t_marine_frag", name:"Grenades - Frag", pts:10, type:"Passive", phase:"Assault Phase",
        text:"When this Unit makes a Ranged Attack with a C-14 Rifle and the target is Within 8\", that weapon’s S Dice is replaced by D6."},
      {id:"t_marine_bayonet", name:"Bayonet", pts:[20,30], phase:"Combat Phase", replaces:"Strike",
        weapons:[{name:"Bayonet", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"5+", surge:"-", sdie:"-", dmg:1, kw:""}]}
    ]},

  {id:"t_raidermarine", name:"Raynor's Raider (Marine)", slot:"Core",
    squad:[["-",0],["1-6",1],["-",0]], pts:[230],
    tags:["Raynor's Raiders","Biological","Light","Ground"],
    stats:{SHLD:"-", SPD:"4/7", EVA:"5+", ARM:"5+", HP:2, SIZE:2},
    abilities:[
      {name:"Stimpack", type:"Active", cost:1, phase:"Movement Phase",
        text:"This Unit suffers NON-LETHAL DAMAGE (2). This Unit gains BUFF Speed (3). Additionally, its C-14 Rifle and all Close Combat Weapons gain PRECISION (3)."},
      {name:"Raiders Roll!", type:"Passive", phase:"Movement Phase",
        text:"When this Unit is nominated to deploy from Reserves, it may resolve its Stimpack ability with the CP cost reduced by 1 (to a minimum of 0)."},
      {name:"Rapid Reinforcements", type:"Passive", phase:"Movement Phase",
        text:"When this Unit is nominated to deploy from Reserves, it may resolve the PLACE (10) effect from another Friendly Unit. No model may be set Within 8\" of any Enemy model. This Unit's Activation ends."},
      {name:"Slugthrower", type:"Passive", phase:"Assault Phase",
        text:"When this Unit makes a Ranged Attack with a C-14 Rifle and the target is Within 8\", that weapon gains ANTI-EVADE (1)."},
      {name:"Grenades - Frag", type:"Passive", phase:"Assault Phase",
        text:"When this Unit makes a Ranged Attack with a C-14 Rifle and the target is Within 8\", that weapon’s S Dice is replaced by D6."}
    ],
    weapons:[
      {name:"C-14 Rifle", phase:"Assault Phase", rng:"12", tgt:"All", roa:2, hit:"3+", surge:"Light", sdie:"D3", dmg:1, kw:""},
      {name:"Bayonet", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"5+", surge:"-", sdie:"-", dmg:1, kw:""}
    ]},

  {id:"t_specops_marauder", name:"Spec Ops Marauder (Marauder)", slot:"Core",
    squad:[["1-1",0],["2-2",1],["-",0]], pts:[230],
    tags:["Nova Covert Ops","Armoured","Biological","Ground"],
    stats:{SHLD:"-", SPD:"4/7", EVA:"6+", ARM:"4+", HP:5, SIZE:2},
    abilities:[
      {name:"Spec Ops Armour", type:"Active", cost:1, phase:"Any Phase",
        text:"This Unit gains the HIDDEN Status until it performs another action."},
      {name:"Commando Stimpack", type:"Active", cost:1, phase:"Movement Phase",
        text:"This Unit gains BUFF Speed (3). Additionally, its Quad K12 and all Close Combat Weapons gain PRECISION (2)."},
      {name:"Magrail Munitions", type:"Passive", phase:"Assault Phase",
        text:"This Unit's first Attack in the game with its Quad K12 gains PIERCE Armoured (3)."},
      {name:"Suppression Shells", type:"Reaction", cost:1, phase:"Assault Phase",
        text:"When an Enemy declares a Charge against a Friendly Unit Within 8\", that Enemy gains DEBUFF Speed (3)."}
    ],
    weapons:[
      {name:"Quad K12", phase:"Assault Phase", rng:"12", tgt:"Ground", roa:3, hit:"3+", surge:"Armoured", sdie:"D3", dmg:1, kw:"LONG RANGE (16\"), PIERCE Armoured (2)"},
      {name:"Strike", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:3, hit:"4+", surge:"-", sdie:"-", dmg:1, kw:""}
    ]}
]);

// ---- Elite units ----
addUnits("terran", [
  {id:"t_goliath", name:"Goliath", slot:"Elite",
    squad:[["-",0],["1-1",2],["-",0]], pts:[180],
    tags:["Armoured","Mechanical","Ground"],
    stats:{SHLD:"-", SPD:7, EVA:"-", ARM:"4+", HP:10, SIZE:3},
    abilities:[
      {name:"Target Lock", type:"Active", cost:1, phase:"Movement Phase",
        text:"Select one Enemy Unit Within 12\". Whenever a Friendly Goliath Unit targets that enemy with an Autocannon, that weapon gains Surge Type: Light, Armoured, and S Dice: D3+1."},
      {name:"Indomitable", type:"Passive", phase:"Assault Phase",
        text:"While Engaged, this Unit may target and be targeted by Unengaged Enemy Units. In both cases, the defending Unit gains an Evade Roll against those attacks."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (4) 3+ effect."}
    ],
    weapons:[
      {name:"Autocannon", phase:"Assault Phase", rng:"12", tgt:"Ground", roa:9, hit:"4+", surge:"-", sdie:"-", dmg:1, kw:"LONG RANGE (18\")"},
      {name:"Underbelly Machine Gun", phase:"Assault Phase", rng:"8", tgt:"Ground", roa:6, hit:"3+", surge:"Light", sdie:"D3", dmg:1, kw:"PINPOINT, SIDEARM"},
      {name:"Hellfire Missiles", phase:"Assault Phase", rng:"16", tgt:"Flying", roa:6, hit:"3+", surge:"Light", sdie:"D3", dmg:1, kw:"ANTI-EVADE (1), SIDEARM"},
      {name:"Stomp", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:4, hit:"5+", surge:"-", sdie:"-", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"t_goliath_ares", name:"Ares-Class Targeting System", pts:20, type:"Passive", phase:"Any Phase",
        text:"This Unit’s Autocannon and Underbelly Machine Gun weapons gain PRECISION (1)."},
      {id:"t_goliath_scatter", name:"Scatter Missiles", pts:30, phase:"Assault Phase", replaces:"Hellfire Missiles",
        weapons:[{name:"Scatter Missiles", phase:"Assault Phase", rng:"18", tgt:"Ground", roa:6, hit:"5+", surge:"Light", sdie:"D3", dmg:1, kw:"INDIRECT FIRE, LOCKED IN (6), LONG RANGE (24\"), SIDEARM"}]},
      {id:"t_goliath_haywire", name:"Haywire Missiles", pts:40, phase:"Assault Phase", replaces:"Hellfire Missiles",
        weapons:[{name:"Haywire Missiles", phase:"Assault Phase", rng:"12", tgt:"Ground", roa:3, hit:"3+", surge:"Armoured", sdie:"D3", dmg:1, kw:"PIERCE Armoured (3), SIDEARM"}]}
    ]},

  {id:"t_siege", name:"Siege Tank", slot:"Elite",
    squad:[["-",0],["1-1",2],["-",0]], pts:[220],
    tags:["Armoured","Mechanical","Ground"],
    stats:{SHLD:"-", SPD:7, EVA:"-", ARM:"5+", HP:14, SIZE:2},
    abilities:[
      {name:"Large", type:"Passive", phase:"Any Phase",
        text:"When this Unit's Leading Model moves, it cannot pass through physical gaps smaller than 3\" wide, regardless of its size. If the Leading Model's path of travel passes through, or any model in this Unit ends its movement on a Size 0 or Size 1 Impassible Terrain piece (excluding Tokens) during any movement action, that terrain piece is immediately removed from the game."},
      {name:"Heavy Plating", type:"Passive", phase:"Any Phase",
        text:"When this Unit resolves an Armour Roll, it gains TOUGH (1), provided it does not currently have the SIEGE MODE Status."},
      {name:"Indomitable", type:"Passive", phase:"Assault Phase",
        text:"While Engaged, this Unit may target and be targeted by Unengaged Enemy Units. In both cases, the defending Unit gains an Evade Roll against those attacks."},
      {name:"Point Blank", type:"Passive", phase:"Assault Phase",
        text:"While this Unit has the SIEGE MODE Status, it cannot target Enemy Units it is Engaged with."},
      {name:"Aftershock Rounds", type:"Passive", phase:"Assault Phase",
        text:"When this Unit has the SIEGE MODE Status, its Damage characteristic is treated as equal to the Size characteristic of the current target Unit (to a minimum of 1)."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (4) 3+ effect."}
    ],
    weapons:[
      {name:"Twin Cannon", phase:"Assault Phase", rng:"12", tgt:"Ground", roa:8, hit:"3+", surge:"Armoured", sdie:"D6", dmg:1, kw:"PIERCE Armoured (2)"},
      {name:"Shock Cannon", phase:"Assault Phase", rng:"18", tgt:"Ground", roa:"BT+4", hit:"4+", surge:"Light, Armoured", sdie:"BT", dmg:1, kw:"SIEGE MODE Status"},
      {name:"Rolling Over", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"2+", surge:"-", sdie:"-", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"t_siege_mode", name:"Mode Transformation", pts:20, type:"Active", cost:1, phase:"Movement Phase",
        text:"The active Unit gains or loses the SIEGE MODE Status. While this Unit has the SIEGE MODE Status, its Size characteristic is treated as if it was 3."},
      {id:"t_siege_coord", name:"Coordinated Strike", pts:20, type:"Active", cost:0, phase:"Movement Phase",
        text:"Target a Friendly Non-Engaged Unit on the battlefield (Line of Sight is not required). When this Unit resolves a Ranged Attack using the Shock Cannon weapon profile this Round, it may choose to ignore the weapon's standard Range characteristic. If it does, it may target an Enemy Unit that is Within 8\" of, and Visible to, a model of the selected Friendly Unit, treating that model as the acting model."},
      {id:"t_siege_shaped", name:"Shaped Blast", pts:10, type:"Reaction", cost:0, phase:"Assault Phase",
        text:"Once per Game. When this Unit declares a Ranged Attack action. If this Unit has SIEGE MODE Status, its weapon gains PINPOINT and LOCKED IN (4)."},
      {id:"t_siege_smart", name:"Smart Shells", pts:10, type:"Reaction", cost:0, phase:"Assault Phase",
        text:"Once per Game. When this Unit declares a Ranged Attack action. If this Unit has SIEGE MODE Status, its weapon gains INDIRECT FIRE and LONG RANGE (24)."}
    ]}
]);

// ---- Support units ----
addUnits("terran", [
  {id:"t_medic", name:"Medic", slot:"Support",
    squad:[["1-1",0],["2-3",1],["-",0]], pts:[120],
    tags:["Biological","Light","Ground"],
    stats:{SHLD:"-", SPD:"4/7", EVA:"5+", ARM:"5+", HP:2, SIZE:2},
    abilities:[
      {name:"Life Support", type:"Reaction", cost:1, phase:"Any Phase",
        text:"Use when another Friendly Biological Unit suffers Damage Within 4\". Reduce the Total Damage before allocation by 1 for each model in this Unit that is Within 4\" of the damaged Unit."},
      {name:"Restoration", type:"Reaction", cost:1, phase:"Any Phase",
        text:"Use when a Friendly Unit Within 4\" receives a DEBUFF. Remove all DEBUFFS from it."},
      {name:"Medpack", type:"Active", cost:1, phase:"Movement Phase",
        text:"Select another Friendly Biological Unit Within 4\". Resolve the HEAL (X) effect for the targeted Unit, where X is the number of models in this Unit that are Within 4\" of the target Unit."},
      {name:"Optical Flare", type:"Active", cost:2, phase:"Movement Phase",
        text:"Select one Enemy Unit Within 12\". Until the End of the Round, apply DEBUFF Range (4) to that Unit’s Ranged Weapons. That Unit cannot benefit from LONG RANGE."}
    ],
    weapons:[
      {name:"Strike", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:1, hit:"5+", surge:"-", sdie:"-", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"t_medic_facilities", name:"Advanced Medic Facilities", pts:60, type:"Passive", phase:"Any Phase",
        text:"This Unit’s Supply Value counts as 0 when calculating the Supply Pool."},
      {id:"t_medic_a13", name:"A-13 Flash Grenade Launcher", pts:20, type:"Passive", phase:"Any Phase",
        text:"Increase the Optical Flare special ability's Range to 16\"."},
      {id:"t_medic_stab", name:"Stabilizer Medpacks", pts:20, type:"Passive", phase:"Any Phase",
        text:"When this Unit resolves a Life Support or Medpack ability, treat it as having 1 additional model Within Range for calculating that ability's effects."}
    ]},

  {id:"t_raven", name:"Raven", slot:"Support", summons:"t_autoturret",
    squad:[["-",0],["1-1",1],["-",0]], pts:[170],
    tags:["Light","Mechanical","Flying"],
    stats:{SHLD:"-", SPD:7, EVA:"6+", ARM:"5+", HP:8, SIZE:"-"},
    abilities:[
      {name:"Detection", type:"Passive", phase:"Any Phase",
        text:"While Enemy Units are Within 6\" of this Unit, they lose the HIDDEN Status."},
      {name:"Deploy Auto-Turret", type:"Active", cost:1, phase:"Movement Phase",
        text:"Set a Friendly Auto-Turret Unit Within 6\", and not Within the Engagement Range of any Enemy Unit."},
      {name:"Anti-Armour Missile", type:"Active", cost:1, phase:"Movement Phase",
        text:"Select one Enemy Unit Within 12\". Apply DEBUFF Armour (1)."}
    ],
    weapons:[
      {name:"Railguns", phase:"Assault Phase", rng:"12", tgt:"Ground", roa:4, hit:"3+", surge:"-", sdie:"-", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"t_raven_corvid", name:"Corvid Reactor", pts:30, type:"Passive", phase:"Any Phase",
        text:"This Unit may resolve its first Special Ability with the CP cost reduced by 1 if it targets the closest Enemy Unit."},
      {id:"t_raven_itm", name:"Internal Tech Module", pts:20, type:"Passive", phase:"Movement Phase",
        text:"When this Unit is nominated to deploy from Reserves, it may Deploy from any table edge that is not a player's Entry Edge. This Unit cannot be set Within 8\" of any Enemy model."},
      {id:"t_raven_seeker", name:"Seeker Missile", pts:20, type:"Active", cost:1, phase:"Movement Phase",
        text:"Select one Enemy Unit Within 12\". At the End of the Assault Phase, if that Enemy Unit has the Stationary Status or it is Within 8\" of this Unit, it suffers HITS 4 (2). If that Unit is Engaged, it is eligible to make an Evade Roll against these hits."},
      {id:"t_raven_shrapnel", name:"Explosive Shrapnel Shells", pts:10, type:"Passive", phase:"Assault Phase",
        text:"The Gauss Cannon of the Auto-Turret set by this Unit gains Surge Type: Light and S-Dice: D3+1."}
    ]}
]);

// ---- Structure units ----
addUnits("terran", [
  {id:"t_pdd", name:"Point Defense Drone", slot:"Structure",
    squad:[["-",0],["1-1",0],["-",0]], pts:[0],
    tags:["Raynor's Raiders","Armoured","Flying","Mechanical"],
    stats:{SHLD:"-", SPD:"-", EVA:"6+", ARM:"6+", HP:3, SIZE:"-"},
    abilities:[
      {name:"Point Defense Laser", type:"Passive", phase:"Any Phase",
        text:"When another Friendly Unit Within 4\" is targeted by a Ranged Attack without the INSTANT keyword, remove up to 2 dice from the Attack Pool. Then remove this Unit from the battlefield."},
      {name:"Gliding", type:"Passive", phase:"Any Phase",
        text:"This model has DISPLACEMENT."},
      {name:"Structure", type:"Passive", phase:"Any Phase",
        text:"This Unit cannot be Activated in any Phase and cannot perform actions. Additionally, its Current Supply Value is treated as 0, and it can never Control or Contest Mission Markers, ignoring the standard Zero Supply Exception. This Unit cannot be a target of an ability, unless stated otherwise."}
    ]},

  {id:"t_sabotage", name:"Sabotage Drone", slot:"Structure",
    deployCard:"nova", deployWarn:"Sabotage Drone cannot be deployed without Nova Covert Ops",
    squad:[["-",0],["1-1",0],["-",0]], pts:[0],
    tags:["Armoured","Mechanical","Ground"],
    stats:{SHLD:"-", SPD:"-", EVA:"6+", ARM:"6+", HP:3, SIZE:1},
    abilities:[
      {name:"Structure", type:"Passive", phase:"Any Phase",
        text:"This Unit cannot be Activated in any Phase and cannot perform actions. Additionally, its Current Supply Value is treated as 0, and it can never Control or Contest Mission Markers, ignoring the standard Zero Supply Exception. This Unit cannot be a target of an ability, unless stated otherwise."},
      {name:"Have a Nice Day", type:"Passive", phase:"Assault Phase",
        text:"At the End of the Assault Phase, target each Unit Within 3\" of this Unit (including Units with the Structure ability) suffers HITS 5 (1). If an affected Unit has the Structure ability, that Unit suffers an additional HITS 5 (1)."}
    ]}
]);

// ---- Summons ----
addUnits("terran", [
  {id:"t_autoturret", name:"Auto-Turret", slot:"Summons",
    squad:[["-",0],["1-1",0],["-",0]], pts:[0],
    tags:["Armoured","Mechanical","Ground"],
    stats:{SHLD:"-", SPD:"-", EVA:"-", ARM:"5+", HP:3, SIZE:2},
    abilities:[
      {name:"Timed Life", type:"Passive", phase:"Any Phase",
        text:"Remove this Unit at the End of the Round."},
      {name:"Structure", type:"Passive", phase:"Any Phase",
        text:"This Unit cannot be Activated in any Phase and cannot perform actions. Additionally, its Current Supply Value is treated as 0, and it can never Control or Contest Mission Markers, ignoring the standard Zero Supply Exception. This Unit cannot be a target of an ability, unless stated otherwise."},
      {name:"Overwatch", type:"Reaction", cost:0, phase:"Assault Phase",
        text:"Use when an Enemy Unit ends its Activation Within 8\" of this Unit. This Unit immediately performs a Ranged Attack against that Enemy Unit."}
    ],
    weapons:[
      {name:"Gauss Cannon", phase:"Assault Phase", rng:"8", tgt:"All", roa:6, hit:"3+", surge:"-", sdie:"-", dmg:1, kw:"PINPOINT"}
    ]},

  {id:"t_holodecoy", name:"Holo Decoy", slot:"Summons",
    squad:[["-",0],["1-1",0],["-",0]], pts:[0],
    tags:["Biological","Psionic","Ground"],
    stats:{SHLD:"-", SPD:7, EVA:"6+", ARM:"6+", HP:1, SIZE:2},
    abilities:[
      {name:"Lethal Hologram", type:"Passive", phase:"Any Phase",
        text:"All Weapons of Friendly Units targeting an Enemy Unit Within 4\" of this Unit gain PRECISION (1)."},
      {name:"Timed Life", type:"Passive", phase:"Any Phase",
        text:"Remove this Unit at the End of the Round."},
      {name:"Decoy", type:"Passive", phase:"Any Phase",
        text:"This Unit is never Engaged. It cannot Engage Enemy Units, cannot be Engaged by Enemy Units and cannot perform a Charge Action. This Unit cannot be the target of an ability, unless stated otherwise. It can never Control or Contest Mission Markers."},
      {name:"Surprise!", type:"Passive", phase:"Any Phase",
        text:"At the End of the Round, you can set a Friendly Nova Stealth Mode or Nova Assault Mode in Coherency with this Unit."}
    ]}
]);

fileLoaded();
