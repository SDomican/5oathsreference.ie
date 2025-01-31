const featJson = {

  "featPath": [
      {
          "pathName" : "Open Feats",
          "featPathColour" : "blue",
          "feats":[
              {
                  "featName" : "The Path of Peace: Peacesworn",
                  "prequisites" : "Nothing",
                  "art" : "peace-dove",
                  "description" : "<span>You have sworn the Sixth Oath, the Oath of Peace. You gain an aura that makes this fact obvious to all other creatures, and will be phys repped with a white tabard. Most creatures will be reluctant to strike you or cast Spells at you unless provoked.<p id='hrId'>You may not take any Feat with the Combat keyword, and if you have any when you take this Feat they are lost and replace with Feats that do not have the Combat keyword. This includes Feats with the Species keyword. A full list of combat/non-combat Feats is provided in Appendix 1.</p><p id='hrId'>A Peacesworn character can’t use an item which confers the ability to cause the Damage Effect or another negative Effect. Peacesworn characters are always immune to the Rampage Effect, and may not lose this Immunity.</p><span>",
                  "keywords" : ["Path of Peace"]
              },
              {
                  "featName" : "Path of Renewal: Weeping",
                  "prequisites" : "Nothing",
                  "art" : "weeping",
                  "description" : "<span><p id='hrId'>You may take any Realm Feat at character creation, this Feat does not need to match where your character began their new life as a Weeping. You may also choose any species for the purpose of taking Way of the Affinity Feats, this choice does not need to match your species but can not be changed after character creation.</p><p id='hrId'>If you participate in a ritual led by a non-Weeping character, you add a 1 point penalty to the total ritual score after any points you contribute due to your other Feats. If you participate in a ritual led by a Weeping character (including you) where the circle is composed entirely of Weeping characters, you add a 1 point bonus to the total ritual score after any points you contribute due to your other Feats. You may not take any Way of the Ritualist Feat with the Quiescent keyword.</p> You may Instantly cast the Detect Weeping Spell for 0 Vigour. Due to the nature of this condition, Weeping does not cost a Feat but must be taken at character creation.</span>",
                  "keywords" : ["Path of Renewal"]
              }
          ]
      },
      {
          "pathName" : "Realm Feats",
          "featPathColour" : "maroon",
          "feats":[
              {
                  "featName" : "Stubborn as a Goat",
                  "prequisites" : "Baol",
                  "art" : "ram",
                  "description" : "You are adept navigating hilly regions. You may reactively spend 1 Vigour to gain Immunity Push for 10s. You are also familiar with a wide range of Locations in Baol, and each event you attend you will receive a report on recent events in Baol.",
                  "keywords" : ["Realm", "Resistance"]
              },
              {
                  "featName" : "Careful Hands",
                  "prequisites" : "Bruid",
                  "art" : "gloves",
                  "description" : "You have learned the value of keeping your tools to hand in the dangerous forests of Bruid. You may reactively spend 1 Vigour to gain Immunity Fumble for 10s. You are also familiar with a wide range of Locations in Bruid, and each event you attend you will receive a report on recent events in Bruid.",
                  "keywords" : ["Realm", "Resistance"]
              },
              {
                  "featName" : "Strident Voice",
                  "prequisites" : "Draíod",
                  "art" : "shouting",
                  "description" : "You are well used to shouting over your rivals in debates in your homeland. You may reactively spend 1 Vigour to gain Immunity Mute 10s. You are also familiar with a wide range of Locations in Draíod, and each event you attend you will receive a report on recent events in Draíod.",
                  "keywords" : ["Realm", "Resistance"]
              },
              {
                  "featName" : "Loyalty Undivided",
                  "prequisites" : "Siabhal",
                  "art" : "public-speaker",
                  "description" : "The politics of your homeland have taught you to know your own mind. You may reactively spend 1 Vigour gain Immunity Charm 10s. You are also familiar with a wide range of Locations in Siabhal, and each event you attend you will receive a report on recent events in Siabhal.",
                  "keywords" : ["Realm", "Resistance"]
              }
              ,
              {
                  "featName" : "Clarity of Focus",
                  "prequisites" : "Uasa",
                  "art" : "dagger-rose",
                  "description" : "You are used to watching for daggers in the dark and are seldom surprised. You may reactively spend 1 Vigour to gain Immunity Daze 10s. You are also familiar with a wide range of Locations in Uasa, and each event you attend you will receive a report on recent events in Uasa.",
                  "keywords" : ["Leather and Steel, Resistance"]
              }
          ]
      },
      {
          "pathName" : "Creidhe",
          "featPathColour" : "purple",
          "feats":[
              {
                  "featName" : "Careful Maintenance",
                  "prequisites" : "Creidhe",
                  "art" : "anvil",
                  "description" : "<span>You may spend a downtime action to refresh the duration of a durable item that has not expired. This costs half (rounded down) of the total ingredients required to craft the item, you choose which of the ingredients are required to refresh the Duration. You may use this to maintain items that you are not able to craft. If you attempt to use this ability and do not have the required ingredients available the action will fail but you will be told what ingredients are needed. This Feat can not be used to extend the Duration of any Item crafted with the Joint Purpose Feat.</span>",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Unshakable Camaraderie",
                  "prequisites" : "Creidhe, Fathach",
                  "art" : "unshakable_camaraderie",
                  "description" : "You may generate the effect Protection Rampage 5 mins or the effect Cure Rampage for 2 Vigour, as per the normal spellcasting rules.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Odds and Ends",
                  "prequisites" : "Creidhe, Human",
                  "art" : "swap-bag",
                  "description" : "The first Travel action you take each downtime generates 4 random ingredients in addition to its usual effects.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Ever Onwards",
                  "prequisites" : "Creidhe, Leasair",
                  "art" : "gear-hammer",
                  "description" : "You may repair weapons, shields, and armour while moving at walking speed. The target of the repair may also be moving.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Deft Hands",
                  "prequisites" : "Creidhe, Krieger",
                  "art" : "sewing-string",
                  "description" : "You may repair a shattered or otherwise destroyed weapon, shield, or item with 10s of roleplayed action. This Feat does not reduce the time required to repair armour, but you may repair all armour types regardless of what you can use yourself. This includes characters which have the Pillar of the Community Feat. This Feat counts as the prerequisite for purchasing the Squire Feat.",
                  "keywords" : ["Affinity"]
              }
          ]
      },
      {
          "pathName" : "Drakeblooded",
          "featPathColour" : "darkolivegreen",
          "feats":[
              {
                  "featName" : "Dragon’s Roar",
                  "prequisites" : "Drakeblooded",
                  "art" : "drakkar-dragon",
                  "description" : "By Concentrating and roleplaying a roar, bellow, or similar dramatic display you may generate the effect “Fear 10s” at a target within normal Spellcasting range for 2 Vigour, generating this Effect does not require a free hand.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Endless Reach/chain lightning",
                  "prequisites" : "Drakeblooded, Human",
                  "art" : "chain-lightning",
                  "description" : "<span>So long as you maintain Concentration, after you cast a Single Target spell, you may immediately Instant Cast the same spell on a different target for 1 less Vigour (to a minimum of 1). This may be repeated any number of times for different targets at increasing cost, such that the second instant cast costs the base cost, the third instant cast costs base cost plus 1, and so on. The costs of these additional castings may not be reduced. This Feat may not be combined with any of the Way of Sorcerous Schools Feats or the Expanded Potential Feat.</span>",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Closing the Circle",
                  "prequisites" : "Drakeblooded, Leasair",
                  "art" : "crafting",
                  "description" : "You may reduce the cost of an item you are crafting by destroying one non-expired item. The item you destroy in this way contributes two-thirds (rounded up) of the number of ingredients required to craft the destroyed item.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Profitable Prowl",
                  "prequisites" : "Drakeblooded, Krieger",
                  "art" : "snatch",
                  "description" : "The first Travel action you take each downtime generates 40 Pingin in addition to its usual effects.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Furious Endurance",
                  "prequisites" : "Drakeblooded, Krieger",
                  "art" : "confrontation",
                  "description" : "By Concentrating and roleplaying a show of heroic defiance (such as a battle cry or beating your chest) you may spend 2 Vigour to generate the effect Global Healing 1 on yourself only. The cost of this effect may not be reduced. This can be performed without a free hand. This can not be performed while unconscious.",
                  "keywords" : ["Affinity"]
              }
          ]
      },
      {
          "pathName" : "Fathach",
          "featPathColour" : "Black",
          "feats":[
              {
                  "featName" : "Pillar of the Community",
                  "prequisites" : "Fathach",
                  "art" : "rock-golem",
                  "description" : "<span>Your body locations may be targeted with the Repair effect by anyone who can repair any type of armour (including yourself). The roleplayed action takes as long as it takes the repairer to repair armour. <p id='hrId'>When subject to the Repair Effect on any body location, take an equivalent Heal Effect to the target location instead. When healed this way, you may ignore the Disease effect. This does not allow you to ignore Protection or Immunity Healing. While unconscious you may remain aware of your surroundings and able to speak. You may not move or Concentrate while unconscious.</p></span>",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Expanded Potential",
                  "prequisites" : "Fathach, Human",
                  "art" : "muscle-up",
                  "description" : "You may extend the duration of any Single Target ability you possess that has a non-instantaneous duration when you cast it. You may increase the duration by one step for 3 Vigour. An ability may only be increased by one step. The steps are 10s → 30s → 60s → 5mins → 10mins. This Feat does not combine with any Way of Sorcerous Schools Feats or Chain Lightning.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Joint Purpose",
                  "prequisites" : "Fathach, Vartach",
                  "art" : "fizzing-flask",
                  "description" : "You may spend two downtime actions to craft one durable item with the effects of two recipes that you can craft, consuming the full cost of both recipes. The recipes must be of the same type (both armour, both weapons, etc.) and may not provide the same effect (such as both giving a bonus to Armour Value). The item produced may not have its duration extended by Careful Maintenance. You may also Repair Fathach with the Pillar of the Community Feat as though you were able to Repair Armour.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Prosperous Works",
                  "prequisites" : "Fathach, Wildling",
                  "art" : "plow",
                  "description" : "At the start of each game gain one additional ingredient for each level of the Artisan, Farmer, Hunter, and/or Miner Feats you have.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Unshakeable Camaraderie",
                  "prequisites" : "Creidhe, Fathach",
                  "art" : "unshakable_camaraderie",
                  "description" : "You may generate the effect Protection Rampage 5 mins or the effect Cure Rampage for 2 Vigour, as per the normal spellcasting rules.",
                  "keywords" : ["Affinity"]
              }
          ]
      },
      {
          "pathName" : "Firetouched",
          "featPathColour" : "Green",
          "feats":[
              {
                  "featName" : "Inner Power",
                  "prequisites" : "Firetouched",
                  "art" : "embraced-energy",
                  "description" : "You may choose to lose 1 Body hit from every location instead of paying the Vigour cost to activate any Feat or cast any Spell that you have with a base cost of 4 Vigour or less. This Feat does not combine with any Way of Sorcerous Schools Feats.<p id='hrId'>While you may enter an unconscious or bleeding state this way, you may not use this Feat if any location is already on -1. The damage is applied immediately after the Effect is generated.</p>",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Bloody Resistance",
                  "prequisites" : "Firetouched, Vartach",
                  "art" : "fire-dash",
                  "description" : "When targeted by a Mass Effect, you may choose to lose 1 Body hit from every location instead of taking the Effect. When you activate this ability you must reply 'No Effect' to the Effect you were targeted with. While you may enter an unconscious or bleeding state this way, you may not use this Feat if any location is already on -1.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Beacon of Life ",
                  "prequisites" : "Firetouched, Krieger",
                  "art" : "fomorian",
                  "description" : "You may generate the effect Rampage Undead 10s (C/En) or the effect Fear Undead 10s for 2 Vigour, as per the normal spellcasting rules. You may also generate the effect Detect Undead for 1 Vigour, as per the normal spellcasting rules",
                  "keywords" : ["Affinity", "Combat"]
              },
              {
                  "featName" : "Unexpected Opportunities",
                  "prequisites" : "Firetouched, Wildling",
                  "art" : "target-prize",
                  "description" : "This Feat allows you to craft Windfall recipes for which you possess the appropriate Alchemist, Arcanist, or Blacksmith Feat. There is a small chance of Windfall recipes producing unlisted items from time to time.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Waste Not, Want Not",
                  "prequisites" : "Firetouched, Vartach",
                  "art" : "bell-shield",
                  "description" : "If you are under a Protection which expires without you having been targeted by the effect it was protecting against, regain 1 Vigour.",
                  "keywords" : ["Affinity"]
              }
          ]
      },
      {
          "pathName" : "Human",
          "featPathColour" : "Red",
          "feats":[
              {
                  "featName" : "Ingenious Craft",
                  "prequisites" : "Human",
                  "art" : "recycle",
                  "description" : "You may use crafting materials as though they were any other materials of the same type needed for the recipe. (The four types are metal, animal, plant, and processed material – so you could use iron instead of bronze, or fang instead of dung.)",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Endless Reach/chain lightning",
                  "prequisites" : "Drakeblooded, Human",
                  "art" : "chain-lightning",
                  "description" : "So long as you maintain Concentration, after you cast a Single Target spell, you may immediately Instant Cast the same spell on a different target for 1 less Vigour (to a minimum of 1). This may be repeated any number of times for different targets at increasing cost, such that the second instant cast costs the base cost, the third instant cast costs base cost plus 1, and so on. The costs of these additional castings may not be reduced. This Feat may not be combined with any of the Way of Sorcerous Schools Feats or the Expanded Potential Feat.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Expanded Potential",
                  "prequisites" : "Fathach, Human",
                  "art" : "muscle-up",
                  "description" : "You may extend the duration of any Single Target ability you possess that has a non-instantaneous duration when you cast it. You may increase the duration by one step for 3 Vigour. An ability may only be increased by one step. The steps are 10s → 30s → 60s → 5mins → 10mins. This Feat does not combine with any Way of Sorcerous Schools Feats or Chain Lightning.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Fascinations and Distractions",
                  "prequisites" : "Human, Vartach",
                  "art" : "distraction",
                  "description" : "You may generate the effect Daze 30s Mortal (C/Ev) or the effect Identify for 2 Vigour, as per the normal spellcasting rules.",
                  "keywords" : ["Affinity", "Combat"]
              },
              {
                  "featName" : "Odds and Ends",
                  "prequisites" : "Creidhe, Human",
                  "art" : "swap-bag",
                  "description" : "The first Travel action you take each downtime generates 4 random ingredients in addition to its usual effects.",
                  "keywords" : ["Affinity"]
              }
          ]
      },
      {
          "pathName" : "Leasair",
          "featPathColour" : "Olive",
          "feats":[
              {
                  "featName" : "Lasting Impressions",
                  "prequisites" : "Leasair",
                  "art" : "elf-ear",
                  "description" : "Take 2 additional realm Feats. This Feat counts as any one prerequisite Feat for the purposes of Resistance Feats.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Ever Onwards",
                  "prequisites" : "Creidhe, Leasair",
                  "art" : "gear-hammer",
                  "description" : "You may repair weapons, shields, and armour while moving at walking speed. The target of the repair may also be moving.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Closing the Circle",
                  "prequisites" : "Drakeblooded, Leasair",
                  "art" : "crafting",
                  "description" : "You may reduce the cost of an item you are crafting by destroying one non-expired item. The item you destroy in this way contributes two-thirds (rounded up) of the number of ingredients required to craft the destroyed item.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "What Doesn’t Kill You",
                  "prequisites" : "Leasair, Wildling",
                  "art" : "skull-crossed-bones",
                  "description" : "When this character is subject to an Effect with a Non-Instantaneous Duration which runs its entire duration naturally, they may choose to become Immune to that Effect for 30s immediately after the triggering Effect ends.",
                  "keywords" : ["Affinity", "Combat"]
              },
              {
                  "featName" : "Quick Exit",
                  "prequisites" : "Leasair, Wildling",
                  "art" : "run",
                  "description" : "Travel does not take an action in downtime for you, you still may not take more than 4 Travel actions in a single Downtime.",
                  "keywords" : ["Affinity"]
              }
          ]
      },
      {
          "pathName" : "Krieger",
          "featPathColour" : "#363945",
          "feats":[
              {
                  "featName" : "In the Face of Danger",
                  "prequisites" : "Krieger",
                  "art" : "orc-head",
                  "description" : "You may reactively spend 3 Vigour to gain Immunity Fear 10s and Instant Cast Mass Cure Fear (Tr). This does not require a free hand.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Beacon of Life ",
                  "prequisites" : "Firetouched, Krieger",
                  "art" : "fomorian",
                  "description" : "You may generate the effect Rampage Undead 10s (C/En) or the effect Fear Undead 10s for 2 Vigour, as per the normal spellcasting rules. You may also generate the effect Detect Undead for 1 Vigour, as per the normal spellcasting rules",
                  "keywords" : ["Affinity", "Combat"]
              },
              {
                  "featName" : "Furious Endurance",
                  "prequisites" : "Drakeblooded, Krieger",
                  "art" : "confrontation",
                  "description" : "By Concentrating and roleplaying a show of heroic defiance (such as a battle cry or beating your chest) you may spend 2 Vigour to generate the effect Global Healing 1 on yourself only. The cost of this effect may not be reduced. This can be performed without a free hand. This can not be performed while unconscious.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Deft Hands",
                  "prequisites" : "Creidhe, Krieger",
                  "art" : "sewing-string",
                  "description" : "You may repair a shattered or otherwise destroyed weapon, shield, or item with 10s of roleplayed action. This Feat does not reduce the time required to repair armour, but you may repair all armour types regardless of what you can use yourself. This includes characters which have the Pillar of the Community Feat. This Feat counts as the prerequisite for purchasing the Squire Feat.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Profitable Prowl",
                  "prequisites" : "Drakeblooded, Krieger",
                  "art" : "snatch",
                  "description" : "The first Travel action you take each downtime generates 8 Pingin in addition to its usual effects.",
                  "keywords" : ["Affinity"]
              }
          ]
      },
      {
          "pathName" : "Vartach",
          "featPathColour" : "#9C4722",
          "feats":[
              {
                  "featName" : "Mark of Destiny",
                  "prequisites" : "Vartach",
                  "art" : "sundial",
                  "description" : "Choose any two Spells or Feats that each cost 2 or more Vigour to use. This choice is permanent and cannot be changed. The chosen Spells or Feats permanently cost 1 less Vigour for you to use. When making this choice, you may choose a Spell or Feat you do not have: if so, you only gain the benefits once you acquire that Spell or Feat. This does not lower the level of the Spell, if you chose a Spell.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Joint Purpose",
                  "prequisites" : "Fathach, Vartach",
                  "art" : "fizzing-flask",
                  "description" : "You may spend two downtime actions to craft one durable item with the effects of two recipes that you can craft, consuming the full cost of both recipes. The recipes must be of the same type (both armour, both weapons, etc.) and may not provide the same effect (such as both giving a bonus to Armour Value). The item produced may not have its duration extended by Careful Maintenance. You may also Repair Fathach with the Pillar of the Community Feat as though you were able to Repair Armour.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Bloody Resistance",
                  "prequisites" : "Firetouched, Vartach",
                  "art" : "fire-dash",
                  "description" : "When targeted by a Mass Effect, you may choose to lose 1 Body hit from every location instead of taking the Effect. When you activate this ability you must reply <b>No Effect</b> to the Effect you were targeted with. While you may enter an unconscious or bleeding state this way, you may not use this Feat if any location is already on -1.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Waste Not, Want Not",
                  "prequisites" : "Firetouched, Vartach",
                  "art" : "bell-shield",
                  "description" : "If you are under a Protection which expires without you having been targeted by the effect it was protecting against, regain 1 Vigour.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Fascinations and Distractions",
                  "prequisites" : "Human, Vartach",
                  "art" : "distraction",
                  "description" : "You may generate the effect Daze 30s Mortal (C/Ev) or the effect Identify for 2 Vigour, as per the normal spellcasting rules.",
                  "keywords" : ["Affinity", "Combat"]
              }
          ]
      },
      {
          "pathName" : "Wildlings",
          "featPathColour" : "#FF6F61",
          "feats":[
              {
                  "featName" : "In Beast’s Clothing",
                  "prequisites" : "Wildling",
                  "art" : "hunting-horn",
                  "description" : "You may generate the effect Mass Charm Beast (C/En) 30s for 3 Vigour, as per the normal spellcasting rules. You may also generate the effect Detect Beast for 1 Vigour, as per the normal spellcasting rules",
                  "keywords" : ["Affinity", "Combat"]
              },
              {
                  "featName" : "Unexpected Opportunities",
                  "prequisites" : "Firetouched, Wildling",
                  "art" : "target-prize",
                  "description" : "This Feat allows you to craft Windfall recipes for which you possess the appropriate Alchemist, Arcanist, or Blacksmith Feat. There is a small chance of Windfall recipes producing unlisted items from time to time.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Prosperous Works",
                  "prequisites" : "Fathach, Wildling",
                  "art" : "plow",
                  "description" : "At the start of each game gain one additional ingredient for each level of the Artisan, Farmer, Hunter, and/or Miner Feats you have.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "Quick Exit",
                  "prequisites" : "Leasair, Wildling",
                  "art" : "run",
                  "description" : "Travel does not take an action in downtime for you, you still may not take more than 4 Travel actions in a single Downtime.",
                  "keywords" : ["Affinity"]
              },
              {
                  "featName" : "What Doesn’t Kill You",
                  "prequisites" : "Leasair, Wildling",
                  "art" : "skull-crossed-bones",
                  "description" : "When this character is subject to an Effect with a Non-Instantaneous Duration which runs its entire duration naturally, they may choose to become Immune to that Effect for 30s immediately after the triggering Effect ends.",
                  "keywords" : ["Affinity", "Combat"]
              }
          ]
      }

  ]
}

var mq = window.matchMedia( "(max-width: 1400px)" );
var mobileMatch = window.matchMedia( "(max-width: 480px)" );

var isMobile = mobileMatch.matches;
var isLaptopOrSmaller = mq.matches;

function addSectionContainer(idToAmend){
  featJson.featPath.forEach((feat) => apendText(feat));
}

function apendText(featPath){

  let featsArray = featPath.feats;
  let pathName = featPath.pathName;
  let featPathColour = featPath.featPathColour;
  let sectionContainerId = "sectionContainer_" + pathName.split(" ").join("");

  let featCode = 
  "<div class=\"section-container\" id=\"" + sectionContainerId + "\" style=\"background-color: " + featPathColour + ";\" onclick=\"mobileExpand('" + sectionContainerId + "')\" >" + 
    "<div class=\"section-title\">" +
      "<span class=\"featPath-description-title-text\">" + pathName + "</span>" +
    "</div>" +
    "<div class=\"section-content\">" +
      "<div class=\"section-row\">";

      featsArray.forEach(feat => {

        let featName = feat.featName;
        let featRequirements = feat.prequisites;
        let art = feat.art;
        let description = feat.description;
        let keywords = feat.keywords;
        let keywordsText = "<hr id='hrId'><p id='popupKeywordTextPTag'><i id='popupKeywordText'>Keywords: " + keywords;

        keywordsText + "</i>";
        description += keywordsText.replace(",", ", ") + "</p>";

        if((featName != "Path of Renewal: Weeping" && featName != "The Path of Peace: Peacesworn") && isLaptopOrSmaller){
            description = "<p><i id='popupMaterialCost'>Prerequisite: " + featRequirements + " </i></p>" + description;
        }
      
        let url = "./img/Realm_Feats/" + art + ".png";

        featCode +=
          "<div class=\"item\">" +
            "<div class=\"item-icon iconsize expandable\" data-bgimage=\"" + url + "\" name=\"item-icon\" id = \"" + "realmFeatTag!" + pathName + "_" + featName + "\" data-description = \"" + description + "\" style=\"background-color: " + featPathColour + "; background-image: url('');\"></div>" +
            "<div class=\"item-text-container text expandable\">" +
              "<div class=\"item-title feat-description-title-text expandable\" style=\" color:" + featPathColour + ";    \">" + featName + "</div>" +
              "<div class=\"feat-description-requirements-text expandable\" style=\"color:" + featPathColour + ";\">(P): " + featRequirements + "</div>" +
            "</div>" +       
          "</div>";
        });

    featCode +=   
      "</div>" +
    "</div>" +
  "</div>";

if(isMobile){
    featCode = featCode.replaceAll("<span>You have sworn the Sixth Oath, the Oath of Peace. ", "<span style='font-size:10px;'>You have sworn the Sixth Oath, the Oath of Peace. ");
    featCode = featCode.replaceAll("<span><p id='hrId'>You may take any Realm Feat at character creation,", "<span style='font-size:9px;'><p id='hrId'>You may take any Realm Feat at character creation,");
    featCode = featCode.replaceAll("<span>You may spend a downtime action to refresh the duration", "<span style='font-size:11px;'>You may spend a downtime action to refresh the duration");
    featCode = featCode.replaceAll("<span>So long as you maintain Concentration, after you cast a Single Target spell", "<span style='font-size:10px;'>So long as you maintain Concentration, after you cast a Single Target spell");
    featCode = featCode.replaceAll("<span>Your body locations may be targeted with the Repair effect by anyone", "<span style='font-size:11px;'>Your body locations may be targeted with the Repair effect by anyone");
}

document.getElementById("featsContainer").innerHTML += featCode;
}

addSectionContainer("addSectionContainer");

var itemIconElements = document.getElementsByClassName("item-icon"); 

for(let element of itemIconElements){

  element.addEventListener("click", e => event.stopPropagation(), true);
  element.addEventListener("click", e => showHide(element.id), true);
}

document.addEventListener("click", e => hidePopup(e), true)
  