// missions.js - Mission cards and Deployment maps by game mode
addMissions([
  {id:"ms_artefact", name:"Artefact Hunt", mode:"skirmish", supply:3, perRound:1, rounds:5,
    parameters:["All Mission Markers are Activated."],
    scoring:[
      "Score VPs equal to Enemy Supply destroyed this Round.",
      "End of Round 5: Gain 3 VP for each Friendly Unit that CLAIM Mission Marker and it is Wholly Within Friendly Zone of Influence.",
      "Gain 1 VP for each Mission Marker associated with your colour that is not currently CLAIM by an Enemy Unit."
    ],
    additional:[
      "Scoring Phase: From the Start of the Second Round, if a Unit is Within 3\" of a Controlled Mission Marker that is Neutral or associated with the Opponent colour, that Unit may CLAIM it.",
      "CLAIM: Place the Mission Marker on the Unit Card.",
      "A Unit carrying a Mission Marker must DROP it if:"
    ],
    dropIf:[
      "It resolves a PLACE effect.",
      "It has its Current Supply Value reduced.",
      "It is Engaged with Enemies having a greater combined Current Supply Value."
    ]},
  {id:"ms_divide", name:"Divide and Conquer", mode:"skirmish", supply:4, perRound:1, rounds:4,
    parameters:[
      "All Mission Markers are Activated.",
      "Split the battlefield into four quarters as shown on the Deployment Card."
    ],
    scoring:[
      "Score VPs equal to Enemy Supply destroyed this Round.",
      "From the Start of the First Round: Calculate the Total Current Supply in each battlefield quarter. Gain 1 VP for each quarter where your Total Current Supply is higher than the Opponent's. Only Units Wholly Within a quarter contribute their Supply to this check. If a Unit controls a Mission Marker, that Unit is worth 1 extra Supply for controlling quarters.",
      "Gain 2 VP for Controlling Mission Marker 5."
    ],
    additional:["Special Winning Conditions: The game ends immediately if a Player leads by 8+ VPs."]},
  {id:"ms_fire", name:"Fire in the Sky", mode:"skirmish", supply:3, perRound:2, rounds:5,
    parameters:[
      "All Mission Markers are Activated.",
      "During battlefield setup, place a D6 next to each Mission Marker to track its Sabotage Level. Set the starting Sabotage Level of each Mission Marker to 1."
    ],
    scoring:[
      "Score VPs equal to Enemy Supply destroyed this Round.",
      "From the Start of the Second Round: Gain VP for each Controlled Mission Marker that is Neutral or associated with the Opponent colour. The VP gained is equal to the Sabotage Level on the marker.",
      "Sabotage Level 3 = 3 VP. Sabotage Level 2 = 2 VP. Sabotage Level 1 = 1 VP."
    ],
    additional:[
      "Assault Phase: If an Unengaged Unit is Within 3\" of a Controlled Mission Marker, this unit may perform Sabotage Action instead of a standard action.",
      "Sabotage Action: Decrease or Increase that Mission Marker's Sabotage Level by 1 (to a minimum of 1 or maximum of 3)."
    ]},
  {id:"ms_frontlines", name:"Frontlines", mode:"skirmish", supply:3, perRound:1, rounds:5,
    parameters:["All Mission Markers are Activated."],
    scoring:[
      "Score VPs equal to Enemy Supply destroyed this Round.",
      "From the Start of the Second Round: Gain 1 VP for each Controlled Mission Marker. Gain an additional 2 VPs for a Marker if you gained Control of it from the Opponent this Round."
    ],
    additional:["Special Winning Conditions: The game ends immediately if a Player leads by 8+ VPs."]},
  {id:"ms_gather", name:"Gather the Resources", mode:"skirmish", supply:3, perRound:1, rounds:5,
    parameters:["All Mission Markers are Activated."],
    scoring:[
      "Score VPs equal to Enemy Supply destroyed this Round.",
      "From the Start of the Second Round: Gain 2 VPs for each Controlled Mission Marker associated with the Opponent colour."
    ],
    additional:[
      "Assault Phase: If an Unengaged Unit is Within 3\" of a Controlled Neutral Mission Marker or associated with the Opponent, this unit may perform the Gather Action instead of a standard action.",
      "Gather Action: Gain 1 VP.",
      "Special Winning Conditions: The game ends immediately if a Player leads by 8+ VPs."
    ]},
  {id:"ms_hold", name:"Hold Position", mode:"skirmish", supply:3, perRound:1, rounds:5,
    parameters:["All Mission Markers are Activated."],
    scoring:[
      "Score VPs equal to Enemy Supply destroyed this Round.",
      "From the Start of the Second Round: Gain 1 VP for each Controlled Mission Marker that is Neutral or associated with your colour. Gain 2 VPs for each Controlled Mission Marker associated with the Opponent colour."
    ],
    additional:["Special Winning Conditions: The game ends immediately if a Player leads by 8+ VPs."]},
  {id:"ms_supply", name:"Supply Drop", mode:"skirmish", supply:4, perRound:1, rounds:4,
    parameters:[
      "All Mission Markers are Deactivated.",
      "Start of the Round (2–4): Randomly determine one Deactivated Mission Marker (1, 2, 5) and flip it to its Activated side."
    ],
    scoring:[
      "Score VPs equal to Enemy Supply destroyed this Round.",
      "From the Start of the Second Round: For each activated Controlled Mission Marker, gain VPs equal to the Game Round number in which that Mission Marker was Activated and remove it."
    ],
    additional:["Special Winning Conditions: The game ends immediately if a Player leads by 8+ VPs."]},

  {id:"md_artefact", name:"Artefact Hunt", mode:"standard", supply:6, perRound:2, rounds:5,
    parameters:["All Mission Markers are Activated."],
    scoring:[
      "Score VPs equal to Enemy Supply destroyed this Round.",
      "End of Round 5: Gain 4 VP for each Friendly Unit that CLAIM Mission Marker and it is Wholly Within Friendly Zone of Influence.",
      "Gain 2 VP for each Mission Marker associated with your colour that is not currently CLAIM by an Enemy Unit."
    ],
    additional:[
      "Scoring Phase: From the Start of the Second Round, if a Unit is Within 3\" of a Controlled Mission Marker that is Neutral or associated with the Opponent colour, that Unit may CLAIM it.",
      "CLAIM: Place the Mission Marker on the Unit Card.",
      "A Unit carrying a Mission Marker must DROP it if:"
    ],
    dropIf:[
      "It has its Current Supply Value reduced.",
      "Before it resolves a PLACE effect.",
      "It is Engaged with Enemies having a greater combined Current Supply Value.",
      "It is Destroyed, removed from the battlefield, or returned."
    ]},
  {id:"md_divide", name:"Divide and Conquer", mode:"standard", supply:8, perRound:2, rounds:4,
    parameters:[
      "All Mission Markers are Activated.",
      "Split the battlefield into four quarters as shown on the Deployment Card."
    ],
    scoring:[
      "Score VPs equal to Enemy Supply destroyed this Round.",
      "From the Start of the First Round: Calculate the Total Current Supply in each battlefield quarter. Gain 1 VP for each quarter where your Total Current Supply is higher than the Opponent's. Only Units Wholly Within a quarter contribute their Supply to this check. If a Unit controls a Mission Marker, that Unit is worth 1 extra Supply for controlling quarters.",
      "Gain 2 VP for Controlling Mission Marker 5."
    ],
    additional:["Special Winning Conditions: The game ends immediately if a Player leads by 10+ VPs."]},
  {id:"md_fire", name:"Fire in the Sky", mode:"standard", supply:5, perRound:3, rounds:5,
    parameters:[
      "All Mission Markers are Activated.",
      "During battlefield setup, place a D6 next to each Mission Marker to track its Sabotage Level. Set the starting Sabotage Level of each Mission Marker to 1."
    ],
    scoring:[
      "Score VPs equal to Enemy Supply destroyed this Round.",
      "From the Start of the Second Round: Gain VP for each Controlled Mission Marker that is Neutral or associated with the Opponent colour. The VP gained is equal to the Sabotage Level on the marker.",
      "Sabotage Level 3 = 3 VP. Sabotage Level 2 = 2 VP. Sabotage Level 1 = 1 VP."
    ],
    additional:[
      "Assault Phase: If an Unengaged Unit is Within 3\" of a Controlled Mission Marker, this unit may perform Sabotage Action instead of a standard action.",
      "Sabotage Action: Decrease or Increase that Mission Marker's Sabotage Level by 1 (to a minimum of 1 or maximum of 3).",
      "Special Winning Conditions: The game ends immediately if a Player leads by 10+ VPs."
    ]},
  {id:"md_frontlines", name:"Frontlines", mode:"standard", supply:6, perRound:2, rounds:5,
    parameters:["All Mission Markers are Activated."],
    scoring:[
      "Score VPs equal to Enemy Supply destroyed this Round.",
      "From the Start of the Second Round: Gain 1 VP for each Controlled Mission Marker. Gain an additional 2 VPs for a Marker if you gained Control of it from the Opponent this Round."
    ],
    additional:["Special Winning Conditions: The game ends immediately if a Player leads by 10+ VPs."]},
  {id:"md_gather", name:"Gather the Resources", mode:"standard", supply:6, perRound:2, rounds:5,
    parameters:["All Mission Markers are Activated."],
    scoring:[
      "Score VPs equal to Enemy Supply destroyed this Round.",
      "From the Start of the Second Round: Gain 2 VPs for each Controlled Mission Marker associated with the Opponent colour."
    ],
    additional:[
      "Assault Phase: If an Unengaged Unit is Within 3\" of a Controlled Neutral Mission Marker or associated with the Opponent, this unit may perform the Gather Action instead of a standard action.",
      "Gather Action: Gain 1 VP.",
      "Special Winning Conditions: The game ends immediately if a Player leads by 10+ VPs."
    ]},
  {id:"md_hold", name:"Hold Position", mode:"standard", supply:6, perRound:2, rounds:5,
    parameters:["All Mission Markers are Activated."],
    scoring:[
      "Score VPs equal to Enemy Supply destroyed this Round.",
      "From the Start of the Second Round: Gain 1 VP for each Controlled Mission Marker that is Neutral or associated with your colour. Gain 2 VPs for each Controlled Mission Marker associated with the Opponent colour."
    ],
    additional:["Special Winning Conditions: The game ends immediately if a Player leads by 10+ VPs."]},
  {id:"md_supply", name:"Supply Drop", mode:"standard", supply:6, perRound:2, rounds:5,
    parameters:[
      "All Mission Markers are Deactivated.",
      "Start of the Round (1–4): Randomly determine one Deactivated Mission Marker (1–4) and flip it to its Activated side.",
      "Start of Round 5: Mission Marker 5 is automatically Activated."
    ],
    scoring:[
      "Score VPs equal to Enemy Supply destroyed this Round.",
      "From the Start of the first Round: For each activated Controlled Mission Marker, gain VPs equal to the Game Round number in which that Mission Marker was Activated and remove it."
    ],
    additional:["Special Winning Conditions: The game ends immediately if a Player leads by 12+ VPs."]}
]);

addDeployments([
  {id:"ds_abandoned", name:"Abandoned Camp", mode:"skirmish", img:"maps/1770386182779_Abandoned_Camp(Skirmish).jpg"},
  {id:"ds_agria", name:"Agria Valley", mode:"skirmish", img:"maps/1770386234296_Agria_Valley(Skirmish).jpg"},
  {id:"ds_char", name:"Char Plains", mode:"skirmish", img:"maps/1770733782980_Char_Plains(Skirmish).jpg"},
  {id:"ds_dirtside", name:"Dirt Side", mode:"skirmish", img:"maps/1770386312441_Dirt_Side(Skirmish).jpg"},
  {id:"ds_frontier", name:"Frontier", mode:"skirmish", img:"maps/1770386351581_Frontier(Skirmish).jpg"},
  {id:"ds_powerlines", name:"Power Lines", mode:"skirmish", img:"maps/1791551540971_Power_lines(Skirmish).jpg"},
  {id:"dd_acropolis", name:"Acropolis", mode:"standard", img:"maps/1770385822136_Acropolis.jpg"},
  {id:"dd_breach", name:"Breach", mode:"standard", img:"maps/1770386049364_Breach.jpg"},
  {id:"dd_gauntlet", name:"Gauntlet", mode:"standard", img:"maps/1770385629894_Gauntlet.jpg"},
  {id:"dd_proving", name:"Proving Grounds", mode:"standard", img:"maps/1770385908421_Proving_Grounds.jpg"},
  {id:"dd_typhoon", name:"Typhoon", mode:"standard", img:"maps/1770385751232_Typhoon.jpg"},
  {id:"dd_onebridge", name:"One Bridge Too Close", mode:"standard", img:"maps/1791551420892_One_bridge_too_close.jpg"}
]);

fileLoaded();
