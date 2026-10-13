// protoss.js - Protoss race, faction cards, tactical cards, and units
addRace("protoss", "Protoss", "Psionic Energy");

addCards("protoss", {
  daelaam: { name:"Daelaam", slots:{Elite:1, Core:3, Support:1}, resource:1,
    abilities:[
      {name:"Dae’Uhl", type:"Reaction", phase:"Any Phase",
        text:"When a Friendly Unit receives Damage, reduce the Total Damage by 2 (to a minimum of 1)."},
      {name:"Mass Recall", type:"Active", phase:"Movement Phase",
        text:"Once per Game. Set a Faction Indicator anywhere on the battlefield. All Friendly Protoss Units Within 6\" of this Faction Indicator are removed from the battlefield and returned to Reserves."}
    ]},
  khalai: { name:"Khalai", slots:{Hero:1, Elite:2, Core:3}, resource:1,
    abilities:[
      {name:"Pylon Warp-In", type:"Active", phase:"Movement Phase",
        text:"If there is no Friendly Pylon on the battlefield, set a Friendly Pylon Unit anywhere on the GROUND LEVEL of the battlefield more than 10\" away from any Enemy model. This Round, the Pylon is not eligible to use its Special Abilities (excluding Structure)."},
      {name:"Bound by the Khala", type:"Active", phase:"Movement Phase",
        text:"At the end of the active Unit’s Activation, select one other Friendly Unit eligible to Activate in the current Phase. Immediately Activate that Unit."}
    ]},
  nerazim: { name:"Nerazim", slots:{Elite:3, Hero:1, Core:2}, resource:1,
    abilities:[
      {name:"Might Of The Nerazim", type:"Reaction", phase:"Any Phase",
        text:"If a Friendly Unit loses the HIDDEN Status, it gains Buff Speed (2) and its first Weapon used gains CRITICAL HIT (2)."},
      {name:"Darkness Descends", type:"Active", phase:"Movement Phase",
        text:"The active Biological Unit gains the HIDDEN Status until the End of the Round."}
    ]},
  templar: { name:"Templar Caste", slots:{Support:2, Hero:1, Core:3}, resource:1,
    abilities:[
      {name:"Our Duty is Unending", type:"Active", phase:"Any Phase",
        text:"Once per Game. Select up to two of your Exhausted Tactical Cards. Return them to the Ready state."},
      {name:"Khassar de Templari", type:"Active", phase:"Movement Phase",
        text:"Instead of performing an action, select one other Friendly Biological Unit that has already been Activated this Phase. That Unit immediately performs one action available in the current Phase, then suffers NON-LETHAL DAMAGE (3)."}
    ]}
});

// ---- Tactical cards ----
// cards:["nerazim"] = only usable with that faction card. unique:true = max 1.
addTactical([
  {id:"pt_forge", name:"Forge", gas:30, slots:{Elite:1}, races:["protoss"], resource:1,
    abilities:[
      {name:"Ground Weapons", type:"Active", phase:"Assault Phase",
        text:"The active Ground Unit’s first Ranged Weapon used gains CRITICAL HIT (1)."},
      {name:"Ground Armor", type:"Reaction", phase:"Any Phase",
        text:"Use before a Friendly Ground Unit makes an Armour Roll. That Unit gains TOUGH (1) for this roll."}
    ]},
  {id:"pt_gateway", name:"Gateway", gas:25, slots:{Core:2}, races:["protoss"], resource:1,
    abilities:[
      {name:"Quick Strikes", type:"Active", phase:"Combat Phase",
        text:"The active Unit’s first Close Combat Weapon used gains PRECISION (2)."}
    ]},
  {id:"pt_gatechrono", name:"Gate Chronoboosted", gas:35, slots:{Elite:1, Core:1}, races:["protoss"], resource:1, unique:true,
    abilities:[
      {name:"Zealous Charge", type:"Active", phase:"Movement Phase",
        text:"The active Unit gains BUFF Speed (2)."},
      {name:"Quick Strikes", type:"Active", phase:"Combat Phase",
        text:"The active Unit’s first Close Combat Weapon used gains PRECISION (2)."}
    ]},
  {id:"pt_nexus", name:"Nexus", gas:40, slots:{Core:2}, races:["protoss"], resource:1, unique:true,
    abilities:[
      {name:"Ancient Pride", type:"Active", phase:"Any Phase",
        text:"The active Unit’s first Weapon used gains INSTANT."},
      {name:"Strategic Recall", type:"Active", phase:"Movement Phase",
        text:"The active, Unengaged Ground Unit is returned to Reserves instead of performing an action."}
    ]},
  {id:"pt_observer", name:"Observer", gas:25, slots:{Support:1}, races:["protoss"], resource:1, unique:true,
    abilities:[
      {name:"Surveillance", type:"Active", phase:"Movement Phase",
        text:"Set a Faction Indicator anywhere on the battlefield. While Enemy Units are Within 6\" of this Faction Indicator, they lose HIDDEN Status."},
      {name:"Gravitic Boosters", type:"Reaction", phase:"Assault Phase",
        text:"Use after a Friendly Unit rolls a D6 for Charge Distance. Add 1 to the Charge Distance for this Unit."}
    ]},
  {id:"pt_ocnexus", name:"Overcharged Nexus", gas:35, slots:{Elite:1, Core:1}, races:["protoss"], resource:1, unique:true,
    abilities:[
      {name:"Photon Overcharge", type:"Reaction", phase:"Any Phase",
        text:"Use when an Enemy Unit enters the battlefield from Reserves via a location other than its own Entry Edge. That Unit immediately suffers HITS 3 (1)."},
      {name:"Strategic Recall", type:"Active", phase:"Movement Phase",
        text:"The active, Unengaged Ground Unit is returned to Reserves instead of performing an action."}
    ]},
  {id:"pt_powerfield", name:"Power Field", gas:40, slots:{Hero:1, Elite:1, Core:1}, races:["protoss"], resource:1, unique:true,
    abilities:[
      {name:"Guardian Shell", type:"Reaction", phase:"Any Phase",
        text:"Use before a Friendly Ground Unit makes an Armour Roll. That Unit gains DODGE (2) for this roll."}
    ]},
  {id:"pt_robo", name:"Robotics Facility", gas:35, slots:{Elite:1}, races:["protoss"], resource:1, unique:true,
    abilities:[
      {name:"Plasma Shields", type:"Reaction", phase:"Any Phase",
        text:"Use before a Friendly Mechanical Ground Unit makes an Armour Roll. If this Unit has the Shielded Status, it gains TOUGH (1) and DODGE (1) for this roll."}
    ]},
  {id:"pt_archives", name:"Templar Archives", gas:40, slots:{Support:2}, races:["protoss"], resource:1, unique:true,
    abilities:[
      {name:"Ancestral Wisdom", type:"Reaction", phase:"Any Phase",
        text:"Once per Round, when a Friendly Support Unit activates a Special Ability that costs PE, resolve that ability with its PE cost reduced by 1 (to a minimum of 0). Do not Exhaust this card."}
    ]},
  {id:"pt_twilight", name:"Twilight Council", gas:40, slots:{Elite:1, Support:1}, races:["protoss"], resource:1, unique:true,
    abilities:[
      {name:"Veil of Shadows", type:"Reaction", phase:"Any Phase",
        text:"Use after a Friendly Unit resolves a PLACE effect. That Unit immediately resolves the HEAL (2) effect."},
      {name:"Weapons of the Firstborn", type:"Active", phase:"Assault Phase",
        text:"The active Ground Unit’s first Ranged Weapon used gains BUFF Range (4)."}
    ]},
  {id:"pt_voidseeker", name:"Void Seeker", gas:40, slots:{Core:1}, races:["protoss"], cards:["nerazim"], resource:1, unique:true,
    abilities:[
      {name:"Personal Transport", type:"Active", phase:"Movement Phase",
        text:"Instead of performing an action, the active, Unengaged Ground Unit is returned to Reserves. Then, it performs a Deploy action."},
      {name:"Anakh Su'n", type:"Active", phase:"Movement Phase",
        text:"This Unit gains the HIDDEN Status until it performs another action."}
    ]},
  {id:"pt_warpgate", name:"Warp Gate", gas:40, slots:{Core:2}, races:["protoss"], resource:1, unique:true,
    abilities:[
      {name:"Warp In", type:"Active", phase:"Movement Phase",
        text:"The active Ground Unit Deploys from any table edge that is not a player’s Entry Edge. This deployment must end more than 10\" away from any Enemy model. The controlling player cannot use this ability if another Friendly Ground Unit has already Deployed this Round."},
      {name:"Quick Strikes", type:"Active", phase:"Combat Phase",
        text:"The active Unit’s first Close Combat Weapon used gains PRECISION (2)."}
    ]},
  {id:"pt_warpprism", name:"Warp Prism", gas:35, slots:{Core:2}, races:["protoss"], resource:1, unique:true,
    abilities:[
      {name:"Phase", type:"Active", phase:"Movement Phase",
        text:"The active Unit resolves the PLACE (3) effect."},
      {name:"Warp Conduit", type:"Active", phase:"Movement Phase",
        text:"Set a Faction Indicator anywhere on the battlefield more than 10\" away from any Enemy model. At the End of the Round, the controlling player may Deploy one Ground Unit from Reserves in base-to-base contact with this Faction Indicator."}
    ]}
]);

// ---- Hero units ----
addUnits("protoss", [
  {id:"p_artanis", name:"Artanis", slot:"Hero", unique:true,
    squad:[["-",0],["1-1",1],["-",0]], pts:[270],
    tags:["Biological","Psionic","Ground"],
    stats:{SHLD:4, SPD:7, EVA:"5+", ARM:"4+", HP:8, SIZE:2},
    abilities:[
      {name:"Commander", type:"Passive", phase:"Any Phase",
        text:"Treat this Unit’s Supply characteristic as increased by 1 for Controlling and Contesting Mission Markers, completing objectives, and resolving Disengage checks."},
      {name:"Phase Prism", type:"Passive", phase:"Movement Phase",
        text:"When Artanis is nominated to deploy from Reserves, it may resolve the PLACE (0) effect from another Friendly Unit. That Friendly Unit is removed from the battlefield and returned to Reserves. Artanis' Activation ends."},
      {name:"Hierarch’s Stand", type:"Reaction", cost:1, phase:"Assault Phase",
        text:"When another Friendly Unit Within 8\" is declared as the target of a Ranged Attack and this Unit is a valid target, redirect the attack to this Unit. This Unit is eligible to make an Evade Roll against the redirected attack. This Special Ability remains active until the End of the current Activation."},
      {name:"Lightning Dash", type:"Reaction", cost:1, phase:"Assault Phase",
        text:"After this Unit resolves a successful Charge action, it may declare a second Charge action against a different Enemy Unit, ignoring the restriction on Charging while Engaged. The Devastating Charge ability does not trigger a second time."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (6) 4+ effect."}
    ],
    weapons:[
      {name:"Twilight Blades Strike", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"2+", surge:"Armoured", sdie:"D3",   dmg:3, kw:""},
      {name:"Twilight Blades Sweep",  phase:"Combat Phase", rng:"E", tgt:"Ground", roa:6, hit:"2+", surge:"Light",    sdie:"D3+1", dmg:1, kw:""}
    ]},

  {id:"p_tassadar", name:"Tassadar", slot:"Hero", unique:true,
    squad:[["-",0],["1-1",1],["-",0]], pts:[230],
    tags:["Biological","Psionic","Ground"],
    stats:{SHLD:3, SPD:7, EVA:"5+", ARM:"5+", HP:6, SIZE:2},
    abilities:[
      {name:"Commander", type:"Passive", phase:"Any Phase",
        text:"Treat this Unit’s Supply characteristic as increased by 1 for Controlling and Contesting Mission Markers, completing objectives, and resolving Disengage checks."},
      {name:"Force Wall", type:"Active", cost:1, phase:"Movement Phase",
        text:"Set two Force Wall tokens Wholly Within 8\" in an unoccupied space. Units of Size 2 or lower cannot move across the Force Wall. Models of Size 3 or more can move over it, and it's then removed."},
      {name:"Executor's Will", type:"Active", cost:1, phase:"Movement Phase",
        text:"Target two Enemy Units on the battlefield (Line of Sight is not required) and place a Faction Indicator next to each of them. During the next Assault Phase, if either of these Units ends its Activation while its Faction Indicator remains on the battlefield, you may Activate two Friendly Units consecutively. Remove both Faction Indicators after any Enemy Unit completes its Activation in the following Assault Phase."},
      {name:"Khala's Gift", type:"Active", cost:0, phase:"Movement Phase",
        text:"Target another Friendly Biological Unit Within 12\". Until the End of the Round, that Unit resolves its first Special Ability with the cost reduced by 1 (to a minimum of 0)."},
      {name:"Telekinetic Push", type:"Active", cost:1, phase:"Assault Phase",
        text:"Set each Friendly Force Wall token Wholly Within 6\" of its current position."},
      {name:"Psi Lightning", type:"Active", cost:0, phase:"Assault Phase",
        text:"Each Unit Within 2\" of one or more Friendly Force Wall tokens suffers 1 Damage."}
    ],
    weapons:[
      {name:"Resonance Beam", phase:"Assault Phase", rng:"12", tgt:"All",    roa:6, hit:"3+", surge:"Armoured", sdie:"D3", dmg:1, kw:"INSTANT"},
      {name:"Strike",         phase:"Combat Phase",  rng:"E",  tgt:"Ground", roa:6, hit:"4+", surge:"-",        sdie:"-",  dmg:1, kw:""}
    ]},

  {id:"p_zeratul", name:"Zeratul", slot:"Hero", unique:true,
    squad:[["-",0],["1-1",1],["-",0]], pts:[230],
    tags:["Biological","Psionic","Ground"],
    stats:{SHLD:3, SPD:7, EVA:"5+", ARM:"5+", HP:5, SIZE:2},
    abilities:[
      {name:"One With the Shadows", type:"Passive", phase:"Any Phase",
        text:"After this Unit fully resolves an Action, it gains the HIDDEN Status."},
      {name:"Prophetic Vision", type:"Reaction", cost:1, phase:"Any Phase",
        text:"REPEATABLE. Use when this Unit is selected as the target of an attack. This Unit's Evade characteristic is treated as 4+ against this attack and cannot be modified."},
      {name:"Sentenced to Death", type:"Active", cost:1, phase:"Movement Phase",
        text:"Target Enemy Unit on the battlefield. Whenever Zeratul makes a Close Combat Attack targeting the selected Unit, its weapon gains CRITICAL HIT (2)."},
      {name:"Void Prison", type:"Active", cost:1, phase:"Movement Phase",
        text:"Set a Faction Indicator on the battlefield Within 8\" of this Unit. While Enemy Units are Within 2\" of this Faction Indicator they suffer DEBUFF Speed (2)."},
      {name:"Void Blink", type:"Active", cost:1, phase:"Assault Phase",
        text:"If Unengaged, resolve the PLACE (6) effect."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (4) 4+ effect."},
      {name:"Shadow Strike", type:"Active", cost:1, phase:"Combat Phase",
        text:"All Enemy Units Engaged with this Unit suffer HITS 4 (1)."}
    ],
    weapons:[
      {name:"Master Warp Blade", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:4, hit:"3+", surge:"Light, Armoured", sdie:"D3", dmg:2, kw:"INSTANT"}
    ]}
]);

// ---- Core units ----
addUnits("protoss", [
  {id:"p_adept", name:"Adept", slot:"Core",
    squad:[["1-2",0],["3-4",1],["-",0]], pts:[160],
    tags:["Biological","Light","Ground"],
    stats:{SHLD:2, SPD:"5/8", EVA:"5+", ARM:"5+", HP:3, SIZE:2},
    abilities:[
      {name:"Psionic Presence", type:"Passive", phase:"Any Phase",
        text:"All Weapons of Friendly Units targeting an Enemy Unit Within 4\" of this Unit’s Shade token gain PRECISION (1)."},
      {name:"Psionic Transfer", type:"Active", cost:1, phase:"Movement Phase",
        text:"Set a Shade token Wholly Within 12\" of any model in this Unit. At the End of the Round, the controlling player may set all models of this Unit In Coherency, treating the Shade token as the Leading Model. The Shade token has DISPLACEMENT."}
    ],
    weapons:[
      {name:"Glaive Cannon", phase:"Assault Phase", rng:"8", tgt:"All",    roa:2, hit:"3+", surge:"Light", sdie:"D3+1", dmg:1, kw:"ANTI-EVADE (1)"},
      {name:"Strike",        phase:"Combat Phase",  rng:"E", tgt:"Ground", roa:1, hit:"4+", surge:"-",     sdie:"-",    dmg:1, kw:""}
    ],
    upgrades:[
      {id:"p_adept_resonating", name:"Resonating Glaives", pts:20, type:"Active", cost:1, phase:"Assault Phase",
        text:"This Unit's Glaive Cannon gains BUFF RoA (1)."},
      {id:"p_adept_guidance", name:"Guidance", pts:10, type:"Passive", phase:"Assault Phase",
        text:"This Unit's Glaive Cannon Ranged weapon gains ANTI-EVADE (2)."},
      {id:"p_adept_glaive_strike", name:"Glaive Strike", pts:20, phase:"Combat Phase", replaces:"Strike",
        weapons:[{name:"Glaive Strike", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:1, hit:"4+", surge:"Light", sdie:"D3", dmg:1, kw:"PIERCE Light (2)"}]}
    ]},

  {id:"p_watchers", name:"Nerazim Watchers (Adept)", slot:"Core",
    squad:[["1-2",0],["3-4",1],["-",0]], pts:[210],
    tags:["Protoss","Nerazim","Biological","Light","Ground"],
    stats:{SHLD:2, SPD:"5/8", EVA:"5+", ARM:"5+", HP:3, SIZE:2},
    abilities:[
      {name:"Path of Shadows", type:"Active", cost:1, phase:"Any Phase",
        text:"This Unit gains HIDDEN Status until it performs another action."},
      {name:"Nerazim Farsight", type:"Passive", phase:"Any Phase",
        text:"While Enemy Units are Within 6\" of this Unit's Shade token, they lose HIDDEN Status."},
      {name:"Psionic Transfer", type:"Active", cost:1, phase:"Movement Phase",
        text:"Set a Shade token Wholly Within 12\" of any model in this Unit. At the End of the Round, the controlling player may set all models of this Unit in Coherency, treating the Shade token as the Leading Model. The Shade token has DISPLACEMENT."}
    ],
    weapons:[
      {name:"Glaive Cannon", phase:"Assault Phase", rng:"8", tgt:"All",    roa:3, hit:"3+", surge:"Light", sdie:"D3+1", dmg:1, kw:"ANTI-EVADE (1), PINPOINT"},
      {name:"Strike",        phase:"Combat Phase",  rng:"E", tgt:"Ground", roa:1, hit:"5+", surge:"-",     sdie:"-",    dmg:1, kw:""}
    ]},

  {id:"p_zealot", name:"Zealot", slot:"Core",
    squad:[["1-1",1],["2-3",2],["-",0]], pts:[170],
    tags:["Biological","Light","Ground"],
    stats:{SHLD:3, SPD:"4/7", EVA:"5+", ARM:"5+", HP:4, SIZE:2},
    abilities:[
      {name:"Charge", type:"Active", cost:1, phase:"Assault Phase",
        text:"When determining Charge Distance for this Unit, roll 2D6 instead of D6 and use the higher result to add to the Unit’s Speed characteristic."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (3) 4+ effect."}
    ],
    weapons:[
      {name:"Psi Blades", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:4, hit:"3+", surge:"Light", sdie:"D3", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"p_zealot_aiur", name:"My Life for Aiur", pts:10, type:"Passive", phase:"Any Phase",
        text:"When this Unit resolves IMPACT, each eligible model generates 1 additional IMPACT die."},
      {id:"p_zealot_legs", name:"Leg Enhancements", pts:20, type:"Active", cost:1, phase:"Movement Phase",
        text:"This Unit performs a 2\" Move action. This does not count towards its action limit."},
      {id:"p_zealot_round", name:"Zealous Round", pts:10, type:"Reaction", cost:0, phase:"Assault Phase",
        text:"When this Unit is not Activated and receives Damage, the controlling player may count this Unit as Activated in this Phase (flip its Activation Marker) to reduce the Total Damage by 2."},
      {id:"p_zealot_stand", name:"We Stand as One", pts:20, type:"Passive", phase:"Combat Phase",
        text:"When this Unit makes a Close Combat Attack, if the target is Engaged with at least 1 other Friendly Unit, this Unit's Close Combat Weapon gains PRECISION (2)."}
    ]}
]);

// ---- Elite units ----
addUnits("protoss", [
  {id:"p_immortal", name:"Immortal", slot:"Elite",
    squad:[["-",0],["1-1",2],["-",0]], pts:[280],
    tags:["Armoured","Mechanical","Ground"],
    stats:{SHLD:6, SPD:7, EVA:"-", ARM:"4+", HP:8, SIZE:3},
    abilities:[
      {name:"Improved Barrier", type:"Reaction", cost:0, phase:"Any Phase",
        text:"Use when this Unit is selected as the target of an attack. If this Unit has the Shielded Status, the Damage characteristic of the attacking weapon is treated as a maximum of 1 for this attack."},
      {name:"Indomitable", type:"Passive", phase:"Assault Phase",
        text:"While Engaged, this Unit may target and be targeted by Unengaged Enemy Units. In both cases, the defending Unit gains an Evade Roll against those attacks."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (4) 3+ effect."}
    ],
    weapons:[
      {name:"Left Photon Disruptor",  phase:"Assault Phase", rng:"12", tgt:"Ground", roa:4, hit:"3+", surge:"Armoured", sdie:"D3", dmg:2, kw:"CONCENTRATED FIRE (1), LONG RANGE (16\")"},
      {name:"Right Photon Disruptor", phase:"Assault Phase", rng:"12", tgt:"Ground", roa:4, hit:"3+", surge:"Armoured", sdie:"D3", dmg:2, kw:"CONCENTRATED FIRE (1), LONG RANGE (16\"), SIDEARM"},
      {name:"Stomp",                  phase:"Combat Phase",  rng:"E",  tgt:"Ground", roa:3, hit:"3+", surge:"-",        sdie:"-",  dmg:1, kw:""}
    ],
    upgrades:[
      {id:"p_immortal_overcharge", name:"Shield Overcharge", pts:20, type:"Reaction", cost:1, phase:"Any Phase",
        text:"Use before this Unit makes an Armour Roll. If this Unit has the Shielded Status, It gains TOUGH (2) for this roll."},
      {id:"p_immortal_left_phase", name:"Left Phase Disruptor", pts:20, phase:"Assault Phase", replaces:"Left Photon Disruptor",
        weapons:[{name:"Left Phase Disruptor", phase:"Assault Phase", rng:"12", tgt:"Ground", roa:4, hit:"3+", surge:"Armoured", sdie:"D3", dmg:1, kw:"PIERCE Armoured (3)"}]},
      {id:"p_immortal_right_phase", name:"Right Phase Disruptor", pts:20, phase:"Assault Phase", replaces:"Right Photon Disruptor",
        weapons:[{name:"Right Phase Disruptor", phase:"Assault Phase", rng:"12", tgt:"Ground", roa:4, hit:"3+", surge:"Armoured", sdie:"D3", dmg:1, kw:"PIERCE Armoured (3), SIDEARM"}]},
      {id:"p_immortal_fury", name:"Fury Unyielding", pts:20, type:"Passive", phase:"Assault Phase",
        text:"While this Unit is Within 3\" of a Mission Marker, its Ranged Weapons gain CRITICAL HIT (1) when targeting an Enemy Unit that is also Within 3\" of that same Mission Marker."},
      {id:"p_immortal_ancients", name:"For the Ancients", pts:20, type:"Passive", phase:"Assault Phase",
        text:"When this Unit makes a Ranged Attack, if the target Unit is more than 8\" away, the attacking weapons gain PRECISION (1)."}
    ]},

  {id:"p_praetor", name:"Praetor Guard (Zealot)", slot:"Elite", unique:true,
    squad:[["1-1",1],["2-3",2],["-",0]], pts:[260],
    tags:["Khalai","Biological","Light","Ground"],
    stats:{SHLD:3, SPD:"4/7", EVA:"5+", ARM:"5+", HP:4, SIZE:2},
    abilities:[
      {name:"Shield Overcharge", type:"Passive", phase:"Any Phase",
        text:"This Unit gains TOUGH (2) on the first Armour Roll each Round."},
      {name:"Leg Enhancements", type:"Active", cost:1, phase:"Movement Phase",
        text:"This Unit performs a 2\" Move action. This does not count towards its action limit."},
      {name:"Charge", type:"Active", cost:1, phase:"Assault Phase",
        text:"When determining Charge Distance for this Unit, roll 2D6 instead of D6 and use the higher result to add to the Unit’s Speed characteristic."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (3) 4+ effect."},
      {name:"Titan Killers", type:"Passive", phase:"Combat Phase",
        text:"When this Unit makes a Close Combat Attack, and the target is Size 3 or larger, the weapon’s Damage characteristic is treated as 2."},
      {name:"Precognition", type:"Passive", phase:"Combat Phase",
        text:"This Unit is eligible to make an Evade roll against all attacks targeting it."}
    ],
    weapons:[
      {name:"Psi Blades", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:4, hit:"3+", surge:"Light", sdie:"D3", dmg:1, kw:""}
    ]},

  {id:"p_stalker", name:"Stalker", slot:"Elite",
    squad:[["-",0],["1-1",1],["2-2",2]], pts:[160,270],
    tags:["Armoured","Mechanical","Ground"],
    stats:{SHLD:3, SPD:"4/8", EVA:"6+", ARM:"4+", HP:6, SIZE:3},
    abilities:[
      {name:"Squadron", type:"Passive", phase:"Any Phase",
        text:"This Unit’s Horizontal Coherency is 4\"."},
      {name:"Blink", type:"Active", cost:1, phase:"Movement Phase",
        text:"Resolve the PLACE (6) effect. Models set by this effect cannot be set up Within the Engagement Range of any Enemy Unit."}
    ],
    weapons:[
      {name:"Particle Disruptors", phase:"Assault Phase", rng:"12", tgt:"All",    roa:4, hit:"3+", surge:"Armoured", sdie:"D3", dmg:2, kw:""},
      {name:"Stomp",               phase:"Combat Phase",  rng:"E",  tgt:"Ground", roa:2, hit:"5+", surge:"-",        sdie:"-",  dmg:1, kw:""}
    ],
    upgrades:[
      {id:"p_stalker_shadows", name:"Path of Shadows", pts:[20,40], type:"Active", cost:1, phase:"Any Phase",
        text:"This Unit gains HIDDEN Status until it performs another action."},
      {id:"p_stalker_fury", name:"Fury of the Nerazim", pts:[20,30], type:"Passive", phase:"Assault Phase",
        text:"When this Unit attacks an Enemy Unit that has already been Activated during this Phase, its Particle Disruptors gain INSTANT for that attack."}
    ]}
]);

// ---- Support units ----
addUnits("protoss", [
  {id:"p_hightemplar", name:"High Templar", slot:"Support",
    squad:[["1-1",0],["2-2",1],["3-4",2]], pts:[130,200],
    tags:["Biological","Light","Psionic","Ground"],
    stats:{SHLD:3, SPD:"4/7", EVA:"6+", ARM:"5+", HP:3, SIZE:2},
    abilities:[
      {name:"Our Minds as One", type:"Passive", phase:"Any Phase",
        text:"While this Unit's Current Supply Value is 2, it gains the following effects: The first Special Ability resolved by this Unit each Round has its PE cost reduced by 1 (to a minimum of 0). Apply a +1 Modifier to the dice rolled for its Psionic Storm Special Ability."},
      {name:"Feedback", type:"Active", cost:1, phase:"Movement Phase",
        text:"Target one Enemy Mechanical or Psionic Unit Within 8\". Until the End of the Round, after that Unit resolves an Active or Reaction Special Ability (excluding abilities granted by a Tactical Card or Faction Card), it suffers NON-LETHAL DAMAGE (3)."}
    ],
    weapons:[
      {name:"Psi Blast", phase:"Assault Phase", rng:"8", tgt:"All",    roa:1, hit:"3+", surge:"Light", sdie:"D3", dmg:2, kw:"INSTANT"},
      {name:"Strike",    phase:"Combat Phase",  rng:"E", tgt:"Ground", roa:1, hit:"4+", surge:"-",     sdie:"-",  dmg:1, kw:""}
    ],
    upgrades:[
      {id:"p_hightemplar_storm", name:"Psionic Storm", pts:[20,30], type:"Active", cost:2, phase:"Movement Phase",
        text:"Set a Psionic Storm token Within 10\" and Line of Sight of this Unit. This token is not removed if this Unit is Destroyed. At the End of each Phase, set a Psionic Storm Blast Template on the centre of this token. For each Unit that has at least one model whose base is partially covered by the template, roll 3 dice, plus 1 additional die for each model in that Unit whose base is partially covered. For each result of 5+, that Unit suffers an effect depending on the current Phase: Movement Phase: NON-LETHAL DAMAGE (1). Assault Phase: 1 Damage. If multiple effects trigger at the End of the Assault Phase, resolve them in the order specified in Part 8.9.4."},
      {id:"p_hightemplar_farsight", name:"Farsight", pts:20, type:"Active", cost:1, phase:"Movement Phase",
        text:"Target one Friendly Unit Within 12\". Until the End of the Round, that Unit is eligible to make an Evade Roll against any attacks targeting it."}
    ]},

  {id:"p_sentry", name:"Sentry", slot:"Support",
    squad:[["1-1",0],["2-2",1],["-",0]], pts:[130],
    tags:["Light","Mechanical","Psionic","Ground"],
    stats:{SHLD:2, SPD:"4/7", EVA:"6+", ARM:"5+", HP:4, SIZE:1},
    abilities:[
      {name:"Restoration", type:"Reaction", cost:1, phase:"Any Phase",
        text:"Use when a Friendly Unit Within 4\" receives a DEBUFF. Remove all DEBUFFS from it."},
      {name:"Force Field", type:"Active", cost:1, phase:"Movement Phase",
        text:"Set a Force Field token Within 8\" in an unoccupied space. Units of Size 2 or lower cannot move across Force Fields. Models of Size 3 or more can move over it, and it's then removed."},
      {name:"Guardian Shield", type:"Active", cost:1, phase:"Movement Phase",
        text:"All Ranged Attacks targeting a Friendly Unit Within 4\" (Line of Sight is not required) are made with 1 fewer die in the Attack Pool."}
    ],
    weapons:[
      {name:"Disruption Beam", phase:"Assault Phase", rng:"8", tgt:"All",    roa:2, hit:"2+", surge:"-", sdie:"-", dmg:1, kw:"INSTANT"},
      {name:"Beam",            phase:"Combat Phase",  rng:"E", tgt:"Ground", roa:2, hit:"3+", surge:"-", sdie:"-", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"p_sentry_projectors", name:"Solid-Field Projectors", pts:10, type:"Active", cost:1, phase:"Movement Phase",
        text:"Set a Force Field token Within 8\" in an unoccupied space. Units of Size 2 or lower cannot move across Force Fields. Models of Size 3 or more can move over it, and it's then removed."},
      {id:"p_sentry_hallucination", name:"Hallucination", pts:20, type:"Reaction", cost:0, phase:"Assault Phase",
        text:"When an Enemy Unit declares a Ranged Attack against a Friendly Unit Within 4\", the targeted Friendly Unit is eligible to make an Evade Roll against that attack."}
    ]},

  {id:"p_twilighttemplar", name:"Twilight Templar (High Templar)", slot:"Support", unique:true,
    squad:[["1-1",0],["2-2",1],["-",0]], pts:[230],
    tags:["Protoss","Templar Caste","Biological","Light","Psionic","Ground"],
    stats:{SHLD:3, SPD:"4/7", EVA:"6+", ARM:"5+", HP:3, SIZE:2},
    abilities:[
      {name:"Bound by the Khala", type:"Reaction", cost:0, phase:"Any Phase",
        text:"Use when the Current Supply Value of another Friendly Unit Within 8\" of this Unit is reduced. Return one Non-Unique Exhausted Tactical Card to the Ready state."},
      {name:"Warp-In", type:"Active", cost:1, phase:"Movement Phase",
        text:"Resolve the PLACE (6) effect."},
      {name:"Psionic Gale", type:"Active", cost:2, phase:"Movement Phase",
        text:"Set a Psionic Storm token Within 10\" and Line of Sight of this Unit. This token is not removed if this Unit is Destroyed. At the End of each Phase, set a Psionic Storm Blast Template on the centre of this token. For each Unit that has at least one model whose base is partially covered by the template, roll 3 dice, plus 1 additional die for each model in that Unit whose base is partially covered. For each result of 4+, that Unit suffers an effect depending on the current Phase: Movement Phase: NON-LETHAL DAMAGE (1). Assault Phase: 1 Damage. If multiple effects trigger at the End of the Assault Phase, resolve them in the order specified in Part 8.9.4."},
      {name:"Feedback", type:"Active", cost:1, phase:"Movement Phase",
        text:"Target one Enemy Mechanical or Psionic Unit Within 8\". Until the End of the Round, after that Unit resolves an Active or Reaction Special Ability (excluding abilities granted by a Tactical Card or Faction Card), it suffers NON-LETHAL DAMAGE (3)."}
    ],
    weapons:[
      {name:"Psi Blast", phase:"Assault Phase", rng:"8", tgt:"All",    roa:2, hit:"3+", surge:"Light", sdie:"D3", dmg:2, kw:"INSTANT"},
      {name:"Strike",    phase:"Combat Phase",  rng:"E", tgt:"Ground", roa:1, hit:"4+", surge:"-",     sdie:"-",  dmg:1, kw:""}
    ]}
]);

// ---- Structure units ----
addUnits("protoss", [
  {id:"p_pylon", name:"Pylon", slot:"Structure",
    squad:[["-",0],["1-1",0],["-",0]], pts:[0],
    tags:["Khalai","Armoured","Ground"],
    stats:{SHLD:2, SPD:"-", EVA:"-", ARM:"5+", HP:8, SIZE:3},
    abilities:[
      {name:"Structure", type:"Passive", phase:"Any Phase",
        text:"This Unit cannot be Activated in any Phase and cannot perform actions. Additionally, its Current Supply Value is treated as 0, and it can never Control or Contest Mission Markers, ignoring the standard Zero Supply Exception. This Unit cannot be a target of an ability, unless stated otherwise."},
      {name:"Khalai Ingenuity", type:"Passive", phase:"Any Phase",
        text:"Once per Round, when a Friendly Unit Within 4\" of this Pylon uses a Special Ability that costs Psionic Energy, that ability’s PE cost is reduced by 1."},
      {name:"Warp Conduit", type:"Passive", phase:"Movement Phase",
        text:"Once per Round, the controlling player may deploy a Ground Unit from Reserves using this Pylon base as the Entry Edge. This Unit's Activation ends."}
    ]}
]);

fileLoaded();
