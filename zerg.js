// zerg.js - Zerg race, faction cards, tactical cards, and units
addRace("zerg", "Zerg", "Biomass");

addCards("zerg", {
  kerrigan: { name:"Kerrigan's Swarm", slots:{Hero:1, Elite:2, Core:3}, resource:1,
    abilities:[
      {name:"Wild Mutation", type:"Active", phase:"Any Phase",
        text:"If the active unit is ON CREEP, the Unit gains BUFF Speed (1) and its first Weapon used gains PRECISION (1)."},
      {name:"Zerg Creep", type:"Passive", phase:"Any Phase",
        text:"During Army Building, select exactly one Creep Card and add it to their Army List, paying its listed cost (if any)."},
      {name:"Omega Network", type:"Active", phase:"Movement Phase",
        text:"If there is no Friendly Omega Worm on the battlefield, set a Friendly Omega Worm Unit anywhere on GROUND LEVEL of the battlefield, more than 10\" away from any Enemy model. This Round, the Omega Worm is not eligible to use its Special Abilities (excluding Structure)."}
    ]},
  zagara: { name:"Zagara's Swarm", slots:{Hero:1, Core:4, Support:1}, resource:1,
    abilities:[
      {name:"Instinctive Reaction", type:"Reaction", phase:"Any Phase",
        text:"Use when an Enemy Unit declares a Close Combat Attack against a Friendly Unit. That Friendly Unit becomes eligible to make an Evade Roll against that attack."},
      {name:"Zerg Creep", type:"Passive", phase:"Any Phase",
        text:"During Army Building, select exactly one Creep Card and add it to their Army List, paying its listed cost (if any)."},
      {name:"Scourge Queen", type:"Active", phase:"Combat Phase",
        text:"If the active Unit contains more models than the combined number of models in all Engaged Enemy Units, its Close Combat Weapons gain INSTANT and PRECISION (4)."}
    ]},
  swarm: { name:"Zerg Swarm", slots:{Elite:1, Core:3, Support:1}, resource:1,
    abilities:[
      {name:"Brood Instinct", type:"Reaction", phase:"Any Phase",
        text:"Use before a Friendly Unit makes an Evade Roll. Apply a +1 Modifier to that roll."},
      {name:"Zerg Creep", type:"Passive", phase:"Any Phase",
        text:"During Army Building, select exactly one Creep Card and add it to their Army List, paying its listed cost (if any)."},
      {name:"Rapid Burrowing", type:"Active", phase:"Movement Phase",
        text:"Select one Friendly, Unengaged Ground Zerg Unit on the battlefield. That Unit gains the Burrowed Status, even if it has already been Activated this Round."}
    ]}
});

// ---- Tactical cards ----
// cards:["swarm"] = only usable with that faction card. unique:true = max 1.
// creep:true = Creep Card; Zerg Creep on the faction card requires exactly one.
addTactical([
  {id:"zt_accelcreep", name:"Accelerating Creep", gas:0, races:["zerg"], cards:["swarm"], unique:true, creep:true,
    abilities:[
      {name:"Speed on Creep", type:"Passive", phase:"Any Phase",
        text:"If the active Friendly Zerg Unit is ON CREEP, increase its Speed characteristic by 1."},
      {name:"Living Glob of Tissue", type:"Passive", phase:"Any Phase",
        text:"Creep Tumor tokens have STAY IN PLAY and DISPLACEMENT."},
      {name:"Creep Removal", type:"Passive", phase:"Any Phase",
        text:"If an Enemy Unit ends a Move, Deploy, Run, Charge or Disengage action Within 1\" of a Friendly Creep Tumor token, remove that token from the battlefield."}
    ]},
  {id:"zt_cocoon", name:"Cocoon", gas:30, slots:{Elite:1}, races:["zerg"], unique:true,
    abilities:[
      {name:"Spawn Larva", type:"Active", phase:"Movement Phase",
        text:"The active Friendly non-Unique Biological Unit with a Size Characteristic of 1 resolves the RESPAWN (2) effect."},
      {name:"Ravager Morph", type:"Active", phase:"Movement Phase",
        text:"Once per Game. The active Friendly Roach Unit performs MORPH (Ravager) 1."}
    ]},
  {id:"zt_defiler", name:"Defiler Mound", gas:35, slots:{Elite:1, Support:1}, races:["zerg"], resource:1, unique:true,
    abilities:[
      {name:"Poisonous Essence", type:"Active", phase:"Movement Phase",
        text:"Set a Faction Indicator on the active Friendly Unit. At the end of the Assault Phase, all Biological Enemy Units Engaged with the marked Unit suffer NON-LETHAL DAMAGE (2)."},
      {name:"Tunnel Network", type:"Active", phase:"Movement Phase",
        text:"The active, Unengaged Ground Unit is returned to Reserves instead of performing an action."}
    ]},
  {id:"zt_evo", name:"Evolution Chamber", gas:25, slots:{Core:1}, races:["zerg"], resource:1,
    abilities:[
      {name:"Carapace", type:"Reaction", phase:"Any Phase",
        text:"Use before a Friendly Unit makes an Armour Roll. That Unit gains TOUGH (1) for this roll."},
      {name:"Extended Claws", type:"Active", phase:"Assault Phase",
        text:"The active Unit gains a +1 Modifier to all IMPACT Hit Rolls."}
    ]},
  {id:"zt_hatchery", name:"Hatchery", gas:30, slots:{Support:1}, races:["zerg"], resource:1,
    abilities:[
      {name:"Lie in Wait", type:"Active", phase:"Movement Phase",
        text:"The active, Unengaged Ground Unit gains the Burrowed Status."},
      {name:"Creep Spread", type:"Active", phase:"Movement Phase",
        text:"Set a Creep Tumor token on the battlefield Within 6\" (Line of Sight is not required) of either a Friendly Entry Edge or an existing Friendly Creep Tumor token."}
    ]},
  {id:"zt_hydraden", name:"Hydralisk Den", gas:30, slots:{Elite:2}, races:["zerg"], resource:1,
    abilities:[
      {name:"Missile Attacks", type:"Active", phase:"Assault Phase",
        text:"The active Unit’s first Ranged Weapon used gains PRECISION (1)."}
    ]},
  {id:"zt_lair", name:"Lair", gas:35, slots:{Elite:1, Core:1}, races:["zerg"], resource:1, unique:true,
    abilities:[
      {name:"Predation", type:"Active", phase:"Any Phase",
        text:"The active Unit’s Close Combat Weapons gain INSTANT."},
      {name:"Creep Spread", type:"Active", phase:"Movement Phase",
        text:"Set a Creep Tumor token on the battlefield Within 6\" (Line of Sight is not required) of either a Friendly Entry Edge or an existing Friendly Creep Tumor token."}
    ]},
  {id:"zt_malignant", name:"Malignant Creep", gas:10, races:["zerg"], cards:["kerrigan"], unique:true, creep:true,
    abilities:[
      {name:"Living Glob of Tissue", type:"Passive", phase:"Any Phase",
        text:"Creep Tumor tokens have STAY IN PLAY and DISPLACEMENT."},
      {name:"Creep Removal", type:"Passive", phase:"Any Phase",
        text:"If an Enemy Unit ends a Move, Deploy, Run, Charge or Disengage action Within 1\" of a Friendly Creep Tumor token, remove that token from the battlefield."},
      {name:"Malevolent Matriarch", type:"Passive", phase:"Assault Phase",
        text:"If the active Friendly Zerg Unit declares a Charge action while ON CREEP, it gains +1 Modifier to IMPACT Hit Rolls."}
    ]},
  {id:"zt_overlord", name:"Overlord", gas:35, slots:{Hero:1, Elite:1, Core:1}, races:["zerg"], resource:1, unique:true,
    abilities:[
      {name:"Ventral Sacs", type:"Active", phase:"Movement Phase",
        text:"Set a Faction Indicator anywhere on the battlefield more than 10\" away from any Enemy model. At the End of the Round, the controlling player may Deploy one Ground Unit from Reserves in base-to-base contact with this Faction Indicator."},
      {name:"Excrete Creep", type:"Active", phase:"Assault Phase",
        text:"Set a Creep Tumor token on the battlefield Within 6\" (Line of Sight is not required) of either a Friendly Entry Edge or an existing Friendly Creep Tumor token."}
    ]},
  {id:"zt_overseer", name:"Overseer", gas:25, slots:{Support:1}, races:["zerg"], resource:1, unique:true,
    abilities:[
      {name:"Oversight Mode", type:"Active", phase:"Movement Phase",
        text:"Set a Faction Indicator anywhere on the battlefield. While Enemy Units are Within 6\" of this Faction Indicator, they lose HIDDEN Status."},
      {name:"Pneumatized Carapace", type:"Reaction", phase:"Assault Phase",
        text:"Use after a Friendly Unit rolls a D6 for Charge Distance. Roll an additional D6 and use the higher result to calculate the total Charge Distance."}
    ]},
  {id:"zt_reactive", name:"Reactive Creep", gas:10, races:["zerg"], unique:true, creep:true,
    abilities:[
      {name:"Reactive Tissue", type:"Passive", phase:"Any Phase",
        text:"While a Friendly Zerg Unit is ON CREEP, it gains DODGE (1) against any attacks targeting it."},
      {name:"Living Glob of Tissue", type:"Passive", phase:"Any Phase",
        text:"Creep Tumor tokens have STAY IN PLAY and DISPLACEMENT."},
      {name:"Creep Removal", type:"Passive", phase:"Any Phase",
        text:"If an Enemy Unit ends a Move, Deploy, Run, Charge or Disengage action Within 1\" of a Friendly Creep Tumor token, remove that token from the battlefield."}
    ]},
  {id:"zt_roachwarren", name:"Roach Warren", gas:25, slots:{Core:1}, races:["zerg"], resource:1,
    abilities:[
      {name:"Nasty Surprise", type:"Active", phase:"Assault Phase",
        text:"The active Ground Unit loses the Burrowed Status."}
    ]},
  {id:"zt_pool", name:"Spawning Pool", gas:25, slots:{Core:1}, races:["zerg"], resource:1,
    abilities:[
      {name:"Feral Rage", type:"Active", phase:"Combat Phase",
        text:"The active Unit’s first Close Combat Weapon used gains PRECISION (2)."}
    ]},
  {id:"zt_sixpool", name:"Spawning Pool (Six Pool)", gas:35, slots:{Core:2}, races:["zerg"], resource:2, unique:true,
    abilities:[
      {name:"Timing Push", type:"Active", phase:"Movement Phase",
        text:"The active Zergling Unit Deploys from any table edge that is not a Player’s Entry Edge. This action must end more than 10\" away from any Enemy model."},
      {name:"Feral Rage", type:"Active", phase:"Combat Phase",
        text:"The active Unit’s first Close Combat Weapon used gains PRECISION (2)."}
    ]}
]);

// ---- Hero units ----
addUnits("zerg", [
  {id:"z_kerrigan", name:"Kerrigan", slot:"Hero", unique:true,
    squad:[["-",0],["1-1",1],["-",0]], pts:[250],
    tags:["Biological","Psionic","Ground"],
    stats:{SHLD:"-", SPD:7, EVA:"6+", ARM:"5+", HP:9, SIZE:2},
    abilities:[
      {name:"Commander", type:"Passive", phase:"Any Phase",
        text:"Treat this Unit’s Supply characteristic as increased by 1 for Controlling and Contesting Mission Markers, completing objectives, and resolving Disengage checks."},
      {name:"Crushing Grip", type:"Active", cost:1, phase:"Movement Phase",
        text:"Select one Enemy Unit Within 12\". That Unit counts as Activated in this Phase (set an Activation Marker next to it)."},
      {name:"Mutating Carapace", type:"Active", cost:1, phase:"Movement Phase",
        text:"Select one Enemy Unit Within 18\". This Unit is eligible to make an Evade Roll against all attacks made by the selected Enemy Unit, with a +2 Modifier applied to those Evade Rolls."},
      {name:"Leaping Strike", type:"Active", cost:1, phase:"Assault Phase",
        text:"If Unengaged, resolve the PLACE (6) effect."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (4) 4+ effect."}
    ],
    weapons:[
      {name:"Energy Blast", phase:"Assault Phase", rng:"8", tgt:"All", roa:5, hit:"3+", surge:"Light, Armoured", sdie:"D3", dmg:1, kw:""},
      {name:"Blades", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:6, hit:"4+", surge:"-", sdie:"-", dmg:2, kw:"CRITICAL HIT (2)"}
    ]},

  {id:"z_zagara", name:"Zagara", slot:"Hero", unique:true,
    squad:[["-",0],["1-1",1],["-",0]], pts:[250],
    tags:["Biological","Psionic","Ground"],
    stats:{SHLD:"-", SPD:7, EVA:"6+", ARM:"4+", HP:10, SIZE:3},
    abilities:[
      {name:"Commander", type:"Passive", phase:"Any Phase",
        text:"Treat this Unit’s Supply characteristic as increased by 1 for Controlling and Contesting Mission Markers, completing objectives, and resolving Disengage checks."},
      {name:"Transfusion", type:"Reaction", cost:1, phase:"Any Phase",
        text:"Use when another Friendly Biological Unit (including a Structure) suffers Damage Within 4\". Reduce the Total Damage before allocation by 2."},
      {name:"Psionic Link", type:"Passive", phase:"Any Phase",
        text:"Once per Round, if there are at least 7 Friendly models Within 6\" of this Unit, it may resolve its Special Ability with the BM cost reduced by 1."},
      {name:"Broodmother", type:"Active", cost:1, phase:"Movement Phase",
        text:"Apply one of the following effects to all Friendly units (Line of Sight is not required). You cannot apply the effect chosen in the previous Game Round: Units of Size 1 gain a +1 Modifier to all IMPACT Rolls. All weapons of Size 2 Units gain CRITICAL HIT (1). Units of Size 3 or more gain TOUGH (1)."},
      {name:"Infested Drop", type:"Passive", phase:"Movement Phase",
        text:"The base of the Zagara counts as an Entry Edge. Each Round, Friendly Units with a combined Supply cost of 1 may be Deployed via this Entry Edge."},
      {name:"Indomitable", type:"Passive", phase:"Assault Phase",
        text:"While Engaged, this Unit may target and be targeted by Unengaged Enemy Units. In both cases, the defending Unit gains an Evade Roll against those attacks."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (6) 3+ effect."}
    ],
    weapons:[
      {name:"Zagara's Talons", phase:"Assault Phase", rng:"8", tgt:"Ground", roa:4, hit:"3+", surge:"Light, Armoured", sdie:"D3", dmg:2, kw:""},
      {name:"Zagara's Acid Spines", phase:"Assault Phase", rng:"14", tgt:"Flying", roa:8, hit:"3+", surge:"Light, Armoured", sdie:"D3", dmg:1, kw:""},
      {name:"Talons", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:4, hit:"3+", surge:"-", sdie:"-", dmg:1, kw:""}
    ]}
]);

// ---- Core units ----
addUnits("zerg", [
  {id:"z_corpser", name:"Corpser (Roach)", slot:"Core", summons:"z_roachling",
    squad:[["1-1",0],["2-3",1],["-",0]], pts:[220],
    tags:["Armoured","Biological","Ground"],
    stats:{SHLD:"-", SPD:"4/7", EVA:"5+", ARM:"3+", HP:4, SIZE:2},
    abilities:[
      {name:"Burrow", type:"Active", cost:2, phase:"Any Phase",
        text:"If this Unit is Unengaged, it gains or loses the Burrowed Status."},
      {name:"Roachling Infestation", type:"Active", cost:2, phase:"Movement Phase",
        text:"Once per Game. Resolve the SUMMON (Roachling) effect."},
      {name:"Regeneration", type:"Passive", phase:"Assault Phase",
        text:"When this Unit becomes Activated, if it has the Burrowed Status, resolve the HEAL (2) effect."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (3) 4+ effect."}
    ],
    weapons:[
      {name:"Acid Saliva", phase:"Assault Phase", rng:"8", tgt:"Ground", roa:2, hit:"3+", surge:"-", sdie:"-", dmg:1, kw:""},
      {name:"Claws", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:3, hit:"4+", surge:"Light", sdie:"D3+1", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"z_corpser_tunnel", name:"Tunneling Claws", pts:10, type:"Passive", phase:"Any Phase",
        text:"While this Unit has the Burrowed Status, it may perform the Move and Run actions without losing that Status. It may also move through other Units’ bases."},
      {id:"z_corpser_ambush", name:"Burrow Ambush", pts:20, type:"Passive", phase:"Movement Phase",
        text:"When this Unit is nominated to deploy from the Reserves, it may resolve the PLACE (18) effect from the controlling player's Entry Edge. No model may be set Within 10\" of any Enemy model. This Unit's Activation ends."},
      {id:"z_corpser_glial", name:"Glial Reconstitution", pts:10, type:"Active", cost:1, phase:"Movement Phase",
        text:"This Unit gains BUFF SPEED (1), or BUFF SPEED (2) if the Unit is ON CREEP."},
      {id:"z_corpser_bile", name:"Hydriodic Bile", pts:10, type:"Passive", phase:"Assault Phase",
        text:"This Unit's Acid Saliva weapon gains Surge Type: Light, and S Dice: D3+1."}
    ]},

  {id:"z_ravager", name:"Ravager", slot:"Core",
    squad:[["-",0],["1-1",1],["2-2",2]], pts:[160,270],
    tags:["Armoured","Biological","Ground"],
    stats:{SHLD:"-", SPD:"4/8", EVA:"5+", ARM:"5+", HP:9, SIZE:3},
    abilities:[
      {name:"Squadron", type:"Passive", phase:"Any Phase",
        text:"This Unit’s Horizontal Coherency is 4\"."},
      {name:"Corrosive Bile", type:"Active", cost:1, phase:"Movement Phase",
        text:"For each model in this Unit, set one Corrosive Bile token on the battlefield Within 14\" of that model. These tokens are not removed if this Unit is Destroyed. At the End of the Assault Phase, each Unit suffers HITS 5 (1) effect for each of this Unit's Corrosive Bile tokens it is Within 1\" of. Then, remove all of this Unit's Corrosive Bile tokens from the battlefield. If multiple effects trigger at the End of the Assault Phase, resolve them in the order specified in Part 8.9.4."},
      {name:"Deep Tunnel", type:"Active", cost:1, phase:"Movement Phase",
        text:"Set a Ravager Burrow token Wholly Within 12\" of any model in this Unit. At the End of the Round, the controlling player may set all models of this Unit in Coherency, treating the Ravager Burrow token as the Leading Model. The Ravager Burrow token has DISPLACEMENT."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (2) 4+ effect."}
    ],
    weapons:[
      {name:"Plasma Discharge", phase:"Assault Phase", rng:"12", tgt:"Ground", roa:4, hit:"3+", surge:"Light", sdie:"D3+1", dmg:1, kw:""},
      {name:"Claws", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"4+", surge:"-", sdie:"-", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"z_ravager_bloated", name:"Bloated Bile Ducts", pts:[20,40], type:"Passive", phase:"Any Phase",
        text:"Increase the area of effect of this Unit's Corrosive Bile ability to 2\"."},
      {id:"z_ravager_ambush", name:"Burrow Ambush", pts:[20,40], type:"Passive", phase:"Movement Phase",
        text:"When this Unit is nominated to deploy from the Reserves, it may resolve the PLACE (18) effect from the controlling player's Entry Edge. No model may be set Within 10\" of any Enemy model. This Unit's Activation ends."},
      {id:"z_ravager_potent", name:"Potent Bile", pts:[20,40], type:"Passive", phase:"Assault Phase",
        text:"Before an Enemy Unit resolves an Armour Roll against the HITS effect generated by this Unit's Corrosive Bile ability, that Unit suffers DEBUFF Armour (1)."}
    ]},

  {id:"z_roach", name:"Roach", slot:"Core",
    squad:[["1-1",0],["2-3",1],["-",0]], pts:[170],
    tags:["Armoured","Biological","Ground"],
    stats:{SHLD:"-", SPD:"4/7", EVA:"5+", ARM:"3+", HP:4, SIZE:2},
    abilities:[
      {name:"Burrow", type:"Active", cost:2, phase:"Any Phase",
        text:"If this Unit is Unengaged, it gains or loses the Burrowed Status."},
      {name:"Regeneration", type:"Passive", phase:"Assault Phase",
        text:"When this Unit becomes Activated, if it has the Burrowed Status, resolve the HEAL (2) effect."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (2) 4+ effect."}
    ],
    weapons:[
      {name:"Acid Saliva", phase:"Assault Phase", rng:"8", tgt:"Ground", roa:3, hit:"3+", surge:"-", sdie:"-", dmg:1, kw:""},
      {name:"Claws", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"4+", surge:"-", sdie:"-", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"z_roach_tunnel", name:"Tunneling Claws", pts:10, type:"Passive", phase:"Any Phase",
        text:"While this Unit has the Burrowed Status, it may perform the Move and Run actions without losing that Status. It may also move through other Units’ bases."},
      {id:"z_roach_ambush", name:"Burrow Ambush", pts:20, type:"Passive", phase:"Movement Phase",
        text:"When this Unit is nominated to deploy from the Reserves, it may resolve the PLACE (18) effect from the controlling player's Entry Edge. No model may be set Within 10\" of any Enemy model. This Unit's Activation ends."},
      {id:"z_roach_glial", name:"Glial Reconstitution", pts:10, type:"Active", cost:1, phase:"Movement Phase",
        text:"This Unit gains BUFF SPEED (1), or BUFF SPEED (2) if the Unit is ON CREEP."},
      {id:"z_roach_bile", name:"Hydriodic Bile", pts:10, type:"Passive", phase:"Assault Phase",
        text:"This Unit's Acid Saliva weapon gains Surge Type: Light, and S Dice: D3+1."}
    ]},

  {id:"z_roachling", name:"Roachling", slot:"Summons",
    squad:[["-",0],["1-3",0],["-",0]], pts:[0],
    tags:["Biological","Light","Ground"],
    stats:{SHLD:"-", SPD:"4/7", EVA:"6+", ARM:"6+", HP:1, SIZE:1},
    abilities:[
      {name:"Underdeveloped Claws", type:"Passive", phase:"Any Phase",
        text:"This Unit cannot gain Burrowed Status."}
    ],
    weapons:[
      {name:"Claws", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"4+", surge:"-", sdie:"-", dmg:1, kw:""}
    ]},

  {id:"z_swarmling", name:"Swarmling (Zergling)", slot:"Core",
    squad:[["1-6",0],["7-18",1],["-",0]], pts:[210],
    tags:["Biological","Light","Ground"],
    stats:{SHLD:"-", SPD:"4/8", EVA:"5+", ARM:"6+", HP:1, SIZE:1},
    abilities:[
      {name:"Squadron", type:"Passive", phase:"Any Phase",
        text:"This Unit’s Horizontal Coherency is 4\"."},
      {name:"Zergling Reconstitution", type:"Active", cost:1, phase:"Movement Phase",
        text:"Resolve the RESPAWN (2) effect, or RESPAWN (3) if the Unit is ON CREEP."},
      {name:"Metabolic Boost", type:"Active", cost:1, phase:"Assault Phase",
        text:"When determining Charge Distance for this Unit, roll 2D6 instead of D6 and use the higher result to add to the Unit’s Speed characteristic."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (1) 5+ effect."}
    ],
    weapons:[
      {name:"Claws", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"5+", surge:"-", sdie:"-", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"z_swarmling_ambush", name:"Burrow Ambush", pts:20, type:"Passive", phase:"Movement Phase",
        text:"When this Unit is nominated to deploy from the Reserves, it may resolve the PLACE (18) effect from the controlling player's Entry Edge. No model may be set Within 10\" of any Enemy model. This Unit's Activation ends."}
    ]},

  {id:"z_vile", name:"Vile (Roach)", slot:"Core",
    squad:[["1-1",0],["2-3",1],["-",0]], pts:[190],
    tags:["Armoured","Biological","Ground"],
    stats:{SHLD:"-", SPD:"4/7", EVA:"5+", ARM:"3+", HP:4, SIZE:2},
    abilities:[
      {name:"Debilitating Saliva", type:"Reaction", cost:1, phase:"Any Phase",
        text:"Use when an Enemy Unit Within 8\" of this Unit declares a Ranged Attack. Apply DEBUFF Hit (1) to each of that Unit's Ranged Weapons."},
      {name:"Burrow", type:"Active", cost:2, phase:"Any Phase",
        text:"If this Unit is Unengaged, it gains or loses the Burrowed Status."},
      {name:"Regeneration", type:"Passive", phase:"Assault Phase",
        text:"When this Unit becomes Activated, if it has the Burrowed Status, resolve the HEAL (2) effect."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (1) 4+ effect."}
    ],
    weapons:[
      {name:"Acid Saliva", phase:"Assault Phase", rng:"8", tgt:"Ground", roa:4, hit:"3+", surge:"-", sdie:"-", dmg:1, kw:""},
      {name:"Vile Claws", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"4+", surge:"-", sdie:"-", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"z_vile_tunnel", name:"Tunneling Claws", pts:10, type:"Passive", phase:"Any Phase",
        text:"While this Unit has the Burrowed Status, it may perform the Move and Run actions without losing that Status. It may also move through other Units’ bases."},
      {id:"z_vile_ambush", name:"Burrow Ambush", pts:20, type:"Passive", phase:"Movement Phase",
        text:"When this Unit is nominated to deploy from the Reserves, it may resolve the PLACE (18) effect from the controlling player's Entry Edge. No model may be set Within 10\" of any Enemy model. This Unit's Activation ends."},
      {id:"z_vile_glial", name:"Glial Reconstitution", pts:10, type:"Active", cost:1, phase:"Movement Phase",
        text:"This Unit gains BUFF SPEED (1), or BUFF SPEED (2) if the Unit is ON CREEP."},
      {id:"z_vile_bile", name:"Hydriodic Bile", pts:10, type:"Passive", phase:"Assault Phase",
        text:"This Unit's Acid Saliva weapon gains Surge Type: Light, and S Dice: D3+1."}
    ]},

  {id:"z_vileling", name:"Vileling (Zergling)", slot:"Core",
    squad:[["1-6",1],["7-18",2],["-",0]], pts:[180],
    tags:["Zagara's Swarm","Biological","Light","Ground"],
    stats:{SHLD:"-", SPD:"4/8", EVA:"5+", ARM:"6+", HP:1, SIZE:1},
    abilities:[
      {name:"Squadron", type:"Passive", phase:"Any Phase",
        text:"This Unit’s Horizontal Coherency is 4\"."},
      {name:"Burrow Ambush", type:"Passive", phase:"Movement Phase",
        text:"When this Unit is nominated to deploy from the Reserves, it may resolve the PLACE (18) effect from the controlling player's Entry Edge. No model may be set Within 10\" of any Enemy model. This Unit's Activation ends."},
      {name:"Zergling Reconstitution", type:"Active", cost:1, phase:"Movement Phase",
        text:"Resolve the RESPAWN (2) effect, or RESPAWN (3) if the Unit is ON CREEP."},
      {name:"Metabolic Boost", type:"Active", cost:1, phase:"Assault Phase",
        text:"When determining Charge Distance for this Unit, roll 2D6 instead of D6 and use the higher result to add to the Unit’s Speed characteristic."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (1) 5+ effect."},
      {name:"Debilitating Claws", type:"Passive", phase:"Combat Phase",
        text:"After an Enemy Unit suffers Damage from this Unit, apply DEBUFF Hit (1) to each of that Unit’s Weapons."}
    ],
    weapons:[
      {name:"Claws", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"5+", surge:"-", sdie:"-", dmg:1, kw:""}
    ]},

  {id:"z_zergling", name:"Zergling", slot:"Core",
    squad:[["1-6",0],["7-12",1],["13-18",2]], pts:[150,210],
    tags:["Biological","Light","Ground"],
    stats:{SHLD:"-", SPD:"4/8", EVA:"4+", ARM:"6+", HP:1, SIZE:1},
    abilities:[
      {name:"Squadron", type:"Passive", phase:"Any Phase",
        text:"This Unit’s Horizontal Coherency is 4\"."},
      {name:"Metabolic Boost", type:"Active", cost:1, phase:"Assault Phase",
        text:"When determining Charge Distance for this Unit, roll 2D6 instead of D6 and use the higher result to add to the Unit’s Speed characteristic."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (1) 5+ effect."}
    ],
    weapons:[
      {name:"Claws", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"4+", surge:"Light", sdie:"D3", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"z_zergling_ambush", name:"Burrow Ambush", pts:[20,30], type:"Passive", phase:"Movement Phase",
        text:"When this Unit is nominated to deploy from the Reserves, it may resolve the PLACE (18) effect from the controlling player's Entry Edge. No model may be set Within 10\" of any Enemy model. This Unit's Activation ends."},
      {id:"z_zergling_shred", name:"Shredding Claws", pts:10, phase:"Combat Phase", replaces:"Claws",
        weapons:[{name:"Shredding Claws", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"4+", surge:"Light, Armoured", sdie:"D3", dmg:1, kw:""}]},
      {id:"z_zergling_adrenal", name:"Adrenal Glands", pts:20, type:"Passive", phase:"Combat Phase",
        text:"This Unit’s Claws and Shredding Claws weapons gain PRECISION (2)."}
    ]}
]);

// ---- Elite units ----
addUnits("zerg", [
  {id:"z_hydralisk", name:"Hydralisk", slot:"Elite",
    squad:[["1-1",1],["2-2",2],["3-4",3]], pts:[140,260],
    tags:["Biological","Light","Ground"],
    stats:{SHLD:"-", SPD:"4/8", EVA:"5+", ARM:"5+", HP:4, SIZE:2},
    abilities:[
      {name:"Squadron", type:"Passive", phase:"Any Phase",
        text:"This Unit’s Horizontal Coherency is 4\"."},
      {name:"Lunge", type:"Reaction", cost:1, phase:"Assault Phase",
        text:"When another Friendly Unit Within 10\" is the target of a Ranged Attack, after the attack is fully resolved, this Unit, if Unengaged, may perform a Move action Directly Towards the attacking Unit."}
    ],
    weapons:[
      {name:"Needle Spines", phase:"Assault Phase", rng:"12", tgt:"All", roa:3, hit:"3+", surge:"Light, Armoured", sdie:"D3+1", dmg:2, kw:""},
      {name:"Scythe", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"4+", surge:"-", sdie:"-", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"z_hydra_carapace", name:"Ancillary Carapace", pts:[20,30], type:"Passive", phase:"Any Phase",
        text:"This Unit gains TOUGH (1) on the first Armour Roll of each Activation."},
      {id:"z_hydra_lurking", name:"Lurking", pts:10, type:"Passive", phase:"Any Phase",
        text:"If this Unit has Stationary Status, it is eligible to make an Evade Roll against the first Ranged Attack targeting it this Round. If this Unit is ON CREEP, it gains +1 Modifier to this Evade Roll."},
      {id:"z_hydra_ambush", name:"Burrow Ambush", pts:[20,40], type:"Passive", phase:"Movement Phase",
        text:"When this Unit is nominated to deploy from the Reserves, it may resolve the PLACE (18) effect from the controlling player's Entry Edge. No model may be set Within 10\" of any Enemy model. This Unit's Activation ends."},
      {id:"z_hydra_grooved", name:"Grooved Spines", pts:[20,30], type:"Passive", phase:"Assault Phase",
        text:"This Unit's Needle Spines ranged weapon gains LONG RANGE (16\")."}
    ]},

  {id:"z_raptor", name:"Kerrigan Swarm Raptor (Zergling)", slot:"Elite", unique:true,
    squad:[["1-3",0],["4-6",1],["-",0]], pts:[230],
    tags:["Kerrigan's Swarm","Biological","Light","Ground"],
    stats:{SHLD:"-", SPD:"5/9", EVA:"4+", ARM:"5+", HP:2, SIZE:1},
    abilities:[
      {name:"Squadron", type:"Passive", phase:"Any Phase",
        text:"This Unit’s Horizontal Coherency is 4\"."},
      {name:"Raptor Strain", type:"Passive", phase:"Any Phase",
        text:"This Unit can move through IMPASSABLE TERRAIN of Size 4 or less and change elevation without using ACCESS POINTS."},
      {name:"Leap", type:"Active", cost:1, phase:"Assault Phase",
        text:"When determining Charge Distance for this Unit, add 2 to the Charge Distance."},
      {name:"Adrenal Overload", type:"Active", cost:1, phase:"Assault Phase",
        text:"This Unit gains a +1 Modifier to all IMPACT Hit Rolls."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (2) 5+ effect."}
    ],
    weapons:[
      {name:"Claws", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"3+", surge:"Light, Armoured", sdie:"D6", dmg:1, kw:"INSTANT"}
    ]},

  {id:"z_raptorling", name:"Raptor (Zergling)", slot:"Elite",
    squad:[["1-6",0],["7-12",1],["13-18",2]], pts:[210,260],
    tags:["Biological","Light","Ground"],
    stats:{SHLD:"-", SPD:"5/9", EVA:"4+", ARM:"6+", HP:1, SIZE:1},
    abilities:[
      {name:"Squadron", type:"Passive", phase:"Any Phase",
        text:"This Unit’s Horizontal Coherency is 4\"."},
      {name:"Raptor Strain", type:"Passive", phase:"Any Phase",
        text:"This Unit can move through IMPASSABLE TERRAIN of Size 4 or less and change elevation without using ACCESS POINTS."},
      {name:"Adrenal Overload", type:"Active", cost:1, phase:"Assault Phase",
        text:"This Unit gains a +1 Modifier to all IMPACT Hit Rolls."},
      {name:"Metabolic Boost", type:"Active", cost:1, phase:"Assault Phase",
        text:"When determining Charge Distance for this Unit, roll 2D6 instead of D6 and use the higher result to add to the Unit’s Speed characteristic."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (1) 5+ effect."}
    ],
    weapons:[
      {name:"Claws", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"4+", surge:"Light", sdie:"D3", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"z_raptorling_ambush", name:"Burrow Ambush", pts:[20,30], type:"Passive", phase:"Movement Phase",
        text:"When this Unit is nominated to deploy from the Reserves, it may resolve the PLACE (18) effect from the controlling player's Entry Edge. No model may be set Within 10\" of any Enemy model. This Unit's Activation ends."},
      {id:"z_raptorling_shred", name:"Shredding Claws", pts:10, phase:"Combat Phase", replaces:"Claws",
        weapons:[{name:"Shredding Claws", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"4+", surge:"Light, Armoured", sdie:"D3", dmg:1, kw:""}]},
      {id:"z_raptorling_adrenal", name:"Adrenal Glands", pts:20, type:"Passive", phase:"Combat Phase",
        text:"This Unit’s Claws and Shredding Claws weapons gain PRECISION (2)."}
    ]}
]);

// ---- Support units ----
addUnits("zerg", [
  {id:"z_bilelauncher", name:"Bile Launcher", slot:"Support", unique:true,
    squad:[["-",0],["1-1",1],["-",0]], pts:[150],
    tags:["Armoured","Biological","Ground"],
    stats:{SHLD:"-", SPD:"-", EVA:"-", ARM:"4+", HP:10, SIZE:3},
    abilities:[
      {name:"Biological Structure", type:"Passive", phase:"Any Phase",
        text:"This Unit cannot gain the BURROWED Status, cannot be returned to Reserves, and is immune to the IMPACT keyword."},
      {name:"Source of Creep", type:"Passive", phase:"Any Phase",
        text:"A Friendly or Enemy Ground Zerg Unit Within 6\" of this Unit, counts as being ON CREEP."},
      {name:"Detection", type:"Passive", phase:"Any Phase",
        text:"While Enemy Units are Within 6\" of this Unit, they lose the HIDDEN Status."},
      {name:"Burrow Ambush", type:"Passive", phase:"Movement Phase",
        text:"When this Unit is nominated to deploy from the Reserves, it may resolve the PLACE (18) effect from the controlling player's Entry Edge. No model may be set Within 10\" of any Enemy model. This Unit's Activation ends."},
      {name:"Bombard", type:"Active", cost:1, phase:"Movement Phase",
        text:"Set a Bile Bomb token on the battlefield Within 24\" of this Unit. When this Unit resolves a Ranged Attack using the Bile Bomb weapon profile this Round, it may choose to ignore the weapon's standard Range characteristic. If it does, it may target an Enemy Unit that is Within 3\" of that token (Line of Sight is not required), ignoring the HIDDEN Status. After the attack is fully resolved, remove the Bile Bomb token from the battlefield. When the Bile Bomb token is about to be removed, set a Creep Tumor token in base-to-base contact with it. The Bile Bomb token has DISPLACEMENT."},
      {name:"Indomitable", type:"Passive", phase:"Assault Phase",
        text:"While Engaged, this Unit may target and be targeted by Unengaged Enemy Units. In both cases, the defending Unit gains an Evade Roll against those attacks."}
    ],
    weapons:[
      {name:"Bile Bomb", phase:"Assault Phase", rng:"12", tgt:"Ground", roa:6, hit:"3+", surge:"Light, Armoured", sdie:"D3", dmg:1, kw:"PIERCE Armoured (2), PINPOINT"}
    ]},

  {id:"z_defiler", name:"Defiler", slot:"Support",
    squad:[["-",0],["1-1",1],["-",0]], pts:[130],
    tags:["Biological","Light","Psionic","Ground"],
    stats:{SHLD:"-", SPD:7, EVA:"5+", ARM:"5+", HP:8, SIZE:2},
    abilities:[
      {name:"Consume", type:"Passive", phase:"Any Phase",
        text:"When this Unit resolves a Special Ability that costs BM, it can remove one model from a Friendly Unit Within 4\" to generate 1 BM to spend towards that ability’s cost."},
      {name:"Gestate Dark Swarm", type:"Active", cost:0, phase:"Movement Phase",
        text:"Set a Dark Swarm token in an unoccupied space Within 4\" and Line of Sight of this Unit. The Dark Swarm token has DISPLACEMENT."},
      {name:"Dark Swarm", type:"Reaction", cost:1, phase:"Assault Phase",
        text:"REPEATABLE. Use when a Friendly Unit Within 4\" of a Friendly Dark Swarm token is selected as the target of an attack. If this Unit is Within 4\" of the same token, the Targeted Friendly Unit is eligible to make an Evade Roll against that attack. If the targeted Unit is a Size 1, it gains a +1 Modifier to this Evade Roll."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (4) 4+ effect."}
    ],
    weapons:[
      {name:"Claws", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:4, hit:"3+", surge:"-", sdie:"-", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"z_defiler_ambush", name:"Burrow Ambush", pts:20, type:"Passive", phase:"Movement Phase",
        text:"When this Unit is nominated to deploy from Reserves, it may resolve the PLACE (18) effect from the controlling player's Entry Edge. No model may be placed Within 10\" of any Enemy model. This Unit's Activation ends."},
      {id:"z_defiler_plague", name:"Plague", pts:20, type:"Active", cost:"X", phase:"Assault Phase",
        text:"You may spend 1 to 3 BM to activate this ability. Set a Plague Blast Template Wholly Within 10\" and Line of Sight of this Unit. For each Unit that has at least one model whose base is partially covered by the template, roll 2 dice, plus 1 additional die for each model in that Unit whose base is partially covered. That Unit loses its HIDDEN Status, and, depending on the BM spent, it suffers NON-LETHAL DAMAGE (1) for: 1 BM: each result of 5+. 2 BM: each result of 4+. 3 BM: each result of 3+."},
      {id:"z_defiler_bite", name:"Cancerous Bite", pts:20, phase:"Combat Phase",
        weapons:[{name:"Cancerous Bite", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:2, hit:"3+", surge:"-", sdie:"-", dmg:2, kw:"CRITICAL HIT (1), SIDEARM"}]}
    ]},

  {id:"z_queen", name:"Queen", slot:"Support",
    squad:[["-",0],["1-1",1],["-",0]], pts:[140],
    tags:["Armoured","Biological","Psionic","Ground"],
    stats:{SHLD:"-", SPD:4, EVA:"-", ARM:"4+", HP:9, SIZE:3},
    abilities:[
      {name:"Spawn Creep Tumor", type:"Active", cost:1, phase:"Any Phase",
        text:"Set a Creep Tumor token in base-to-base contact with this Unit."},
      {name:"Transfusion", type:"Reaction", cost:1, phase:"Any Phase",
        text:"Use when another Friendly Biological Unit (including a Structure) suffers Damage Within 4\". Reduce the Total Damage before allocation by 2."},
      {name:"Restoration", type:"Reaction", cost:1, phase:"Any Phase",
        text:"Use when a Friendly Unit Within 4\" receives a DEBUFF. Remove all DEBUFFS from it."},
      {name:"Psionic Link", type:"Passive", phase:"Any Phase",
        text:"Once per Round, if there are at least 7 Friendly models Within 6\" of this Unit, it may resolve its Special Ability with the BM cost reduced by 1."},
      {name:"Devastating Charge", type:"Passive", phase:"Assault Phase",
        text:"Immediately after this Unit completes a successful Charge, resolve the IMPACT (4) 3+ effect."}
    ],
    weapons:[
      {name:"Talons", phase:"Assault Phase", rng:"6", tgt:"Ground", roa:4, hit:"4+", surge:"Light", sdie:"D3", dmg:2, kw:""},
      {name:"Acid Spines", phase:"Assault Phase", rng:"12", tgt:"Flying", roa:4, hit:"4+", surge:"Light, Armoured", sdie:"D3", dmg:2, kw:""},
      {name:"Talons", phase:"Combat Phase", rng:"E", tgt:"Ground", roa:3, hit:"4+", surge:"-", sdie:"-", dmg:1, kw:""}
    ],
    upgrades:[
      {id:"z_queen_creep", name:"Creep Speed", pts:10, type:"Passive", phase:"Any Phase",
        text:"While this Unit is ON CREEP, increase this Unit's Speed characteristic by 2."},
      {id:"z_queen_domineering", name:"Domineering Presence", pts:10, type:"Active", cost:1, phase:"Movement Phase",
        text:"Select another Friendly Unit Within 6\" (Line of Sight is not required). That Unit’s Supply characteristic is increased by 1 for Controlling and Contesting Mission Markers and completing objectives."}
    ]}
]);

fileLoaded();
