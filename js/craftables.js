const blacksmithJson = {

  "featPath": [
      {
          "pathName" : "Student Blacksmith:",
          "featPathColour" : "maroon",
          "feats":[
              {
                  "featName" : "Fortifying Leathers",
                  "art" : "bracers",
                  "itemType" : "Light armour",
                  "description" : "This item is a set of light armour.- Attunes to torso. While attuned, whenever you activate a Resistance Feat to gain Immunity X 10s, instead gain Immunity X 30s.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["3 Bronze", "1 Dung", "1 Pelt"]
              },
              {
                  "featName" : "Improved Steel",
                  "art" : "all-for-one",
                  "itemType" : "Heavy armour",
                  "description" : "This item is a set of heavy armour. Attunes to torso. While attuned, this armour gives +1 Armour hits when worn.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["1 Bone", "3 Gold", "1 Heart", "1 Incense"]
              },
              {
                  "featName" : "Lengthy Silence",
                  "art" : "silenced",
                  "itemType" : "Large Weapon",
                  "description" : "This item is a large weapon. Attunes to hand. While attuned, when you activate the Cutthroat Feat with this large weapon, you may additionally generate the Mute 10s Effect on your next successful weapon blow with this weapon within 10s,. This is in addition to the normal damage for a weapon blow.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["2 Iron", "2 Bone", "1 Pelt", "1 Parchment"]
              },
              {
                  "featName" : "Piercing Blade",
                  "art" : "split-body",
                  "itemType" : "Medium Weapon",
                  "description" : "This item is a medium weapon. Attunes to hand. While attuned, when you activate the Penetrating Strike Feat with this medium weapon, you may additionally generate the Through Effect on your next successful weapon blow with this weapon within 10s,. This is in addition to the normal damage for a weapon blow.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["2 Dung", "1 Ink", "1 Iron", "2 Silver"]
              },
              {
                  "featName" : "Powerful Bow",
                  "art" : "heavy-arrow",
                  "itemType" : "Ranged Weapon",
                  "description" : "This item is a ranged weapon. Attunes to hand. While attuned, when you activate the Repelling  Blow Feat with this ranged weapon, you may additionally generate the Push Effect on your next successful weapon blow with this weapon within 10s. This is in addition to the Damage Effect of a weapon blow",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["2 Bronze", "2 Iron", "1 Flower", "1 Wax"]
              },
              {
                  "featName" : "Student Windfall Forging",
                  "art" : "windfall",
                  "itemType" : "Windfall",
                  "description" : "Randomly produces a single Student level Durable item",
                  "craftableKeyword" : ["Windfall"],
                  "ingeredientCost" : ["2 Metals", "1 Animal", "1 Processed"]
              }
          ]
      },
      {
          "pathName" : "Apprentice Blacksmith:",
          "featPathColour" : "navy",
          "feats":[
              {
                  "featName" : "Apprentice Windfall Forging",
                  "art" : "bracers",
                  "itemType" : "Windfall",
                  "description" : "Randomly produces a single Apprentice level Durable item.",
                  "craftableKeyword" : ["Windfall"],
                  "ingeredientCost" : ["3 metals", "2 Animal", "1 Plant "]
              },
              {
                  "featName" : "Breaking Bow",
                  "art" : "double-shot",
                  "itemType" : "Ranged weapon",
                  "description" : "This item is a ranged weapon. Attunes to hand. While attuned, when you activate the Shattering Strike Feat with this ranged weapon you may additionally generate the Shatter Effect on the next successful weapon blow with this weapon within 10s. This Effect will only work on a shield (for safety reasons).",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["1 Bark", "5 Bronze", "2 Dung", "1 Leaf"]
              },
              {
                  "featName" : "Creviced Steel",
                  "art" : "shard-sword",
                  "itemType" : "Heavy armour",
                  "description" : "This item is a set of heavy armour. Attunes to torso. While attuned, you count as resisting searching even if you would not normally be able to do so.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["4 Copper", "2 Gold", "1 Iron", "2 Seed"]
              },
              {
                  "featName" : "Honed Dagger ",
                  "art" : "stiletto",
                  "itemType" : "Small weapon",
                  "description" : "This item is a small weapon. Attunes to hand. While attuned, reduce the cost of generating the Through Effect by weapon blow with this weapon by 1 Vigour to a minimum of 1 Vigour",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["2 Bone", "2 Fang", "1 Flower", "3 Gold", "1 Pelt"]
              },
              {
                  "featName" : "Offensive Blade",
                  "art" : "reaper-scythe",
                  "itemType" : "Medium Weapon",
                  "description" : "This item is a medium weapon. Attunes to hand. While attuned, reduce the cost of generating the Bane Effect by weapon blow with this weapon by 1 Vigour to a minimum of 1 Vigour.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["3 Copper", "1 Glass", "2 Gold", "1 Leaf", "2 Silver"]
              },
              {
                  "featName" : "Shattering Staff",
                  "art" : "crescent-staff",
                  "itemType" : "Large Weapon",
                  "description" : "This item is a large weapon. Attunes to hand. While attuned, reduce the cost of generating the Shatter Effect by weapon blow with this weapon by 1 Vigour to a minimum of 1 Vigour.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["4 Iron", "1 Parchment", "1 Root", "3 Silver"]
              },
              {
                  "featName" : "Strengthened Leathers",
                  "art" : "leather-vest",
                  "itemType" : "Light armour",
                  "description" : "This item is a set of light armor. Attunes to torso. While attuned, this armour gives +1 Armour hits when worn",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["1 Bronze", "2 Fang", "1 Incense", "5 Pelt"]
              }
          ]
      },
      {
          "pathName" : "Journeyman Blacksmith:",
          "featPathColour" : "maroon",
          "feats":[
              {
                  "featName" : "Armour of Broad Resistance",
                  "art" : "cape-armor",
                  "itemType" : "Light armour",
                  "description" : "This item is a set of light armour. Attunes to torso. While attuned, when you activate a Resistance Feat while wearing this armor, all of your Resistance Feats activate for no additional cost.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["1 Bone", "2 Dung", "1 Glass", "1 Incense", "2 Iron", "1 Leaf", "4 Silver"]
              },
              {
                  "featName" : "Death of the Mage",
                  "art" : "energy-shield",
                  "itemType" : "All weapon types",
                  "description" : "This item is a weapon or any type. Attunes to hand. While attuned, you may spend 3 Vigour to generate the Cure Ward Effect by weapon blow with this weapon in addition to the Damage Effect of the weapon blow.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["2 Bone", "1 Glass", "3 Heart", "5 Iron", "1 Seed"]
              },
              {
                  "featName" : "Fear of the Unsettled",
                  "art" : "fear-undead",
                  "itemType" : "All weapon types",
                  "description" : "This item is a weapon or any type. Attunes to hand. While attuned, you may spend 2 Vigour to generate the Fear Undead Effect by weapon blow with this weapon in addition to the Damage Effect of the weapon blow.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["2 Bone", "2 Fang", "5 Gold", "1 Pelt", "1 Root", "1 Parchment"]
              },
              {
                  "featName" : "Fear of the Wicked",
                  "art" : "fear-gwyllt",
                  "itemType" : "All weapon types",
                  "description" : "This item is a weapon or any type. Attunes to hand. While attuned, you may spend 2 Vigour to generate the Fear Gwyllt Effect by weapon blow with this weapon in addition to the Damage Effect of a the weapon blow.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["6 Copper", "3 Fang", "1 Flower", "1 Incense", "1 Pelt"]
              },
              {
                  "featName" : "Journeyman Windfall Forging",
                  "art" : "windfall",
                  "itemType" : "Windfall",
                  "description" : "Randomly produces a single Journeyman level Durable item.",
                  "craftableKeyword" : ["Windfall"],
                  "ingeredientCost" : ["4 metals", "2 animals", "1 Plant", "1 Processed"]
              },
              {
                  "featName" : "Stunning Bow",
                  "art" : "frozen-arrow",
                  "itemType" : "Ranged Weapon",
                  "description" : "This item is a ranged weapon. Attunes to hand. While attuned, you may spend 1 Vigour to generate the Daze Effect by weapon blow with this weapon , in addition to the Damage Effect of the weapon blow.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["1 Bark", "6 Bronze", "3 Dung", "1 Fang", "1 Wax"]
              },
              {
                  "featName" : "Unbreakable Armour",
                  "art" : "heavy-helm",
                  "itemType" : "Heavy armour",
                  "description" : "This item is a set of heavy armour. Attunes to torso. While attuned, you may cast the Spell <b>Protection Sunder 1 minute</b> only targetting yourself for 5 Vigour as per the spellcasting rules.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["1 Flower", "2 Gold", "1 Heart", "2 Iron", "1 Leaf", "5 Silver"]
              }
          ]
      },
      {
          "pathName" : "Master Blacksmith:",
          "featPathColour" : "navy",
          "feats":[
              {
                  "featName" : "Armour of Leadership",
                  "art" : "uprising",
                  "itemType" : "All armour types",
                  "description" : "This item is a set of armour of any type. Attunes to torso. While attuned, you may cast the Spell “Mass Protection Rampage 5 minutes” for 5 vigour as per the spellcasting rules.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["2 Bark", "4 Bone", "2 Copper", "1 Gold", "2 Incense", "4 Silver"]
              },
              {
                  "featName" : "Death’s Grip",
                  "art" : "pirate-flag",
                  "itemType" : "All weapon types",
                  "description" : "This item is a weapon of any type. Attunes to hand. While attuned, you may spend 3 Vigour to generate the Halt 10s Effect by weapon blow with this weapon in addition to the Damage Effect of the weapon blow",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["Bronze", "2 Copper", "1 Flower", "4 Heart", "2 Ink"]
              },
              {
                  "featName" : "Masterwork Armour",
                  "art" : "breastplate",
                  "itemType" : "All armour types",
                  "description" : "This item is a set of armour of any type. Attunes to torso. While attuned, this armour gives +2 Armour hits when worn.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["6 Copper", "4 Fang", "1 Gold", "1 Leaf", "3 Parchment"]
              },
              {
                  "featName" : "Master Windfall Forging",
                  "art" : "windfall",
                  "itemType" : "Windfall",
                  "description" : "Randomly produces a single Master level Durable item.",
                  "craftableKeyword" : ["Windfall"],
                  "ingeredientCost" : ["5 metals", "2 animal", "1 plants", "2 processed"]
              },
              {
                  "featName" : "Pacifying Edge",
                  "art" : "cure-rampage",
                  "itemType" : "All weapon types",
                  "description" : "This item is a weapon of any type. Attunes to hand. While attuned, you may spend 2 Vigour to generate the Cure Rampage Effect by weapon Blow with this weapon, in addition to the Damage Effect of the weapon blow",
                  "craftableKeyword" : ["Windfall"],
                  "ingeredientCost" : ["1 Fang", "1 Glass", "7 Gold", "2 Heart", "1 Ink", "1 Root", "2 Wax"]
              },
              {
                  "featName" : "Provocative Barb",
                  "art" : "barbed-arrow",
                  "itemType" : "Ranged Weapon",
                  "description" : "This item is a ranged weapon Attunes to hand. While attuned, you may spend 3 Vigour to generate the Rampage 10s Effect by weapon blow with this weapon , in addition to the Damage Effect of the weapon blow.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["2 Bronze", "4 Dung", "6 Iron", "2 Seed", "1 Wax"]
              },
              {
                  "featName" : "True Foe’s Weapon",
                  "art" : "bane",
                  "itemType" : "All weapon types",
                  "description" : "This item is a weapon of any type. Attunes to hand. While attuned, when you activate any Feat that allows you to strike for the (X) Bane Effect, additionally strike for the (X) Bane Effect on your next successful weapon blow within 10s.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["1 Bronze", "1 Ink", "1 Iron", "4 Pelt", "2 Root", "6 Silver"]
              }
          ]
      }
  ]
}

const spellJson = {

  "featPath": [
      {
          "pathName" : "Student Alchemist:",
          "featPathColour" : "green",
          "feats":[
              {
                  "featName" : "Armour Polish",
                  "art" : "armour-polish",
                  "description" : "This item is a potion. On use, this potion generates the Global Repair 1 Effect.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Flower", "1 Seed"]
              },
              {
                  "featName" : "Coagulant Potion",
                  "art" : "coagulant-potion",
                  "description" : "This item is a potion. This potion may only affect a character not in their death count. On use, for the next hour extend your death count by 60 seconds.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Bark", "1 Heart"]
              },
              {
                  "featName" : "Increased Vitality",
                  "art" : "increased-vitality",
                  "description" : "This item is a potion. On use, gain +1 maximum and current Body hits for 5 mins when consumed. You may only be under the effect of one instance of this potion at a time. After 5 minutes your maximum hits reset to normal, your current hits are unaffected unless they would be more than your maximum and if so they decrease to your maximum.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Bark","1 Seed"]
              },
              {
                  "featName" : "Restorative Balm",
                  "art" : "restorative-balm",
                  "description" : "This item is a potion. On use, generate the Global Heal 1 Effect.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Bone", "1 Root"]
              },
              {
                  "featName" : "Student Windfall Alchemy",
                  "art" : "windfall",
                  "description" : "Randomly produces 3 of a Student level Consumable.",
                  "craftableKeyword" : ["Windfall"],
                  "ingeredientCost" : ["3 plant","1 Animal"]
              },
              {
                  "featName" : "Stunning Poison",
                  "art" : "stunning-poison",
                  "description" : "This item is a poison and must be applied to a weapon on use. On use, the next weapon blow with the weapon to which the poison has been applied generates the Daze 10s Effect in addition to the Damage Effect of the weapon blow.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Flower", "1 Leaf"]
              },
              {
                  "featName" : "Tonic Potion",
                  "art" : "tonic-potion",
                  "description" : "This item is a potion. On use, regain 6 Vigour.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Bark", "1 Flower"]
              }
          ]
      },
      {
          "pathName" : "Apprentice Alchemist:",
          "featPathColour" : "maroon",
          "feats":[
              {
                  "featName" : "Apprentice Windfall Alchemy",
                  "art" : "windfall",
                  "description" : "Randomly produces 3 of a Apprentice level Consumable.",
                  "craftableKeyword" : ["Windfall"],
                  "ingeredientCost" : ["3 Plant", "2 Animal", "1 processed"]
              },
              {
                  "featName" : "Bracing Brew",
                  "art" : "protection-strikedown",
                  "description" : "This item is a potion. On use, generate the Protection Push 10 min Effect. ",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Bark", "1 Pelt", "1 Flower"]
              },
              {
                  "featName" : "Curing Tonic ",
                  "art" : "cure-disease",
                  "description" : "This item is a potion. On use, generate the Cure Disease Effect.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Flower", "1 Glass", "1 Heart"]
              },
              {
                  "featName" : "Cleansing Tonic",
                  "art" : "cure-venom",
                  "description" : "This item is a potion. On use, generate the Cure Venom Effect.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Incense", "1 Seed", "1 Wax"]
              },
              {
                  "featName" : "Flesh and Steel",
                  "art" : "flesh-and-steel",
                  "description" : "This item is a potion. On use, generates the Global Heal 1 and Global Repair 1 Effects.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Fang", "1 Leaf", "1 Root"]
              },
              {
                  "featName" : "Locking Poison",
                  "art" : "halt",
                  "description" : "This item is a poison and must be applied to a weapon on use. On use, the next weapon blow with the weapon to which the poison has been applied generates the Halt 30s Effect in addition to the Damage Effect of the weapon blow.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Dung", "1 Seed","1 Root"]
              },
              {
                  "featName" : "Mystic Counterstrike",
                  "art" : "cure-ward",
                  "description" : "This item is a poison and must be applied to a weapon on use. On use, the next weapon blow with the weapon to which the poison has been applied generates the Cure Ward Effect in addition to the Damage Effect of the weapon blow.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Bark", "1 Bone", "1 Seed"]
              }
          ]
      },
      {
          "pathName" : "Journeyman Alchemist:",
          "featPathColour" : "green",
          "feats":[
              {
                  "featName" : "Armour Salve",
                  "art" : "chain-mail",
                  "description" : "This item is a potion. On use, generates the Full Global Repair Effect.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Dung", "2 Leaf", "1 Ink"]
              },
              {
                  "featName" : "Dazzling Liquid",
                  "art" : "mass-daze",
                  "description" : "This item is a potion. On use, generate the Mass Daze 10s Effect. This Effect may not target an arc.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Bark", "1 Bone", "1 Glass", "1 Seed"]
              },
              {
                  "featName" : "Health Tonic",
                  "art" : "hospital-cross",
                  "description" : "This item is a potion. On use, generates the Full Global Heal Effect.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Fang", "1 Flower", "1 Gold", "1 Leaf"]
              },
              {
                  "featName" : "Journeyman Windfall Alchemy ",
                  "art" : "windfall",
                  "description" : "Randomly produces 3 of a Journeyman level Consumable",
                  "craftableKeyword" : ["Windfall"],
                  "ingeredientCost" : ["3 Plants", "2 Animal", "2 Processed", "1 Metal"]
              },
              {
                  "featName" : "Muffling Smoke ",
                  "art" : "mass-mute30",
                  "description" : "This item is a potion. On use, generate the Mass Mute 30s Effect. This Effect may not target an arc.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Bronze", "1 Leaf", "1 Parchment", "1 Seed"]
              },
              {
                  "featName" : "Purging Poison",
                  "art" : "cure-protection",
                  "description" : "This item is a poison and must be applied to a weapon on use. On use, the next weapon blow with the weapon to which the poison has been applied generates the Cure Protection Effect in addition to the Damage Effect of the weapon blow.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Bark", "1 Flower", "1 Pelt", "1 Seed"]
              },
              {
                  "featName" : "Vigour Tonic",
                  "art" : "vigour-tonic",
                  "description" : "This item is a potion. On use, regain 12 Vigour.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Fang", "1 Incense", "1 Seed", "1 Silver"]
              }
          ]
      },
      {
          "pathName" : "Master Alchemist:",
          "featPathColour" : "maroon",
          "feats":[
              {
                  "featName" : "Flash Freeze",
                  "art" : "mass-halt",
                  "description" : "This item is a potion. On use, generate the Mass Halt 10s Effect. This Effect may not target an arc.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Flower", "1 Heart", "1 Ink", "1 Iron", "1 Root"]
              },
              {
                  "featName" : "Master Windfall Alchemy",
                  "art" : "windfall",
                  "description" : " Randomly produces 3 of a Master level Consumable.",
                  "craftableKeyword" : ["Windfall"],
                  "ingeredientCost" : ["5 Plants", "2 Animal", "2 Processed", "1 Metal"]
              },
              {
                  "featName" : "Murderer’s Ointment",
                  "art" : "death-juice",
                  "description" : "This item is a poison and must be applied to a weapon on use. On use, the next weapon blow with the weapon to which the poison has been applied generates the Rend Effect in addition to any other effects (including the Damage effect) of the blow",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Bark", "1 Incense", "1 Pelt", "2 Root "]
              },
              {
                  "featName" : "Revitalising Tonic",
                  "art" : "nectar",
                  "description" : "On use, generate the Global Heal 1 and Global Repair 1 Effects and restores 9 Vigour.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Bark", "1 Fang", "1 Leaf", "1 Root", "1 Wax"]
              },
              {
                  "featName" : "Unbreakable Varnish",
                  "art" : "breaking-chain",
                  "description" : "This item is a potion. On use, generate the Protection Sunder 5 minutes Effect when consumed.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Dung", "1 Leaf", "1 Parchment", "1 Seed", "1 Wax"]
              },
              {
                  "featName" : "Vapours of Life",
                  "art" : "mass-undead-bane",
                  "description" : "On use, generate the Mass Undead Bane Chest Effect. This Effect may not target an arc.",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Bone", "1 Copper", "1 Glass", "1 Pelt", "1 Seed"]
              },
              {
                  "featName" : "Vapours of the Moon",
                  "art" : "mass-gwyllt-bane",
                  "description" : "This item is a potion. On use, generate the Mass Gwyllt Bane Chest Effect. This Effect may not target an arc",
                  "craftableKeyword" : ["Consumable"],
                  "ingeredientCost" : ["1 Dung", "1 Flower", "1 Heart", "1 Leaf", "1 Root"]
              }
          ]
      }
  ]
}

var mq = window.matchMedia( "(max-width: 480px)" );

var path = window.location.pathname;
var page = path.split("/").pop();

function addSectionContainer(idToAmend){
  if(page ==="blacksmith.html"){
    blacksmithJson.featPath.forEach((feat) => apendText(feat));
  }else{
    spellJson.featPath.forEach((feat) => apendText(feat));
  }

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
        let featRequirements = feat.ingeredientCost.toString();
        featRequirements = replaceAll(featRequirements, ",", ", ");
        let art = feat.art;
        let description = feat.description;
        let keywords = feat.craftableKeyword;
        let keywordsText = "<hr id='hrId'><p id='popupKeywordTextPTag'><i id='popupKeywordText'>Keywords: ";
        let materialCosts = feat.ingeredientCost.toString();
        materialCosts = replaceAll(materialCosts, ",", ", ");

        for (let i = 0; i < keywords.length; i++) {
          
          if(i < (keywords.length - 1)){
            keywordsText += manageKeywordsOnPopup(keywords[i]) + ", ";
          }
          else{ keywordsText += manageKeywordsOnPopup(keywords[i]) + " "; }  
        }

        keywordsText + "</i>";
        description += keywordsText + "</p>";

        if(page ==="blacksmith.html"){
          let itemType = feat.itemType;
          description = "<p><i id='popupMaterialCost'>Item Type: " + itemType + " </i></p>" + description;
        }

        description = "<p><i id='popupMaterialCost'>Material Cost: " + materialCosts + " </i></p>" + description;

        let url = "./img/Craftables/" + art + ".png";

        featCode +=
          "<div class=\"item-wider\">" +
            "<div class=\"item-icon iconsize-consumables expandable\" data-bgimage=\"" + url + "\" name=\"item-icon\" id = \"" + featName + "\" data-description = \"" + description + "\" style=\"background-color: " + featPathColour + "; background-image: url('');\"></div>" +
            "<div class=\"item-text-container-taller text expandable\">" +
              "<div class=\"item-title feat-description-title-text-larger expandable\" style=\" color:" + featPathColour + ";    \">" + featName + "</div>" +
              "<div class=\"feat-description-requirements-text-larger expandable\" style=\"color:" + featPathColour + ";\">(Cost): " + featRequirements + "</div>" +
            "</div>" +       
          "</div>";

          if(mq.matches){
            featCode = replaceAll("(Cost): ", "");
            featCode = featCode.replace("item-wider", "item");
            featCode = featCode.replace("item-text-container-taller", "item-text-container");
            featCode = featCode.replace("item-icon iconsize-consumables", "item-icon iconsize");
          }
        });

    featCode +=   
      "</div>" +
    "</div>" +
  "</div>";

document.getElementById("featsContainer").innerHTML += featCode;
}

function manageKeywordsOnPopup(keyword){
  let returnText = "";

  switch(keyword){
  case "Windfall":
    returnText = "<span id='keyword' class='tooltip' data-tooltip='Windfall Recipes (w) produce random Durable or Consumable items of the appropriate level. These Recipes may only be crafted by characters possessing the “Unexpected Opportunities” Feat.' data-tooltip-position='bottom'>Windfall</span>";
    return returnText;
  case "Consumable":
    returnText = "<span id='keyword' class='tooltip' data-tooltip='Consumable items (c) have a duration of 3 events from the downtime they are made, and may only be used once before they are destroyed.'data-tooltip-position='bottom'>Consumable</span>";
    return returnText;  
  case "Durable":
    returnText = "<span id='keyword' class='tooltip' data-tooltip='Durable items (d) have a duration of 3 events from the downtime they are made, but may be used multiple times.'data-tooltip-position='bottom'>Durable</span>";
    return returnText;    
  default:
    return "N/A"
  }

}




addSectionContainer("addSectionContainer");

var itemIconElements = document.getElementsByClassName("item-icon"); 


for(let element of itemIconElements){

  element.addEventListener("click", e => event.stopPropagation(), true);
  element.addEventListener("click", e => showHide(element.id), true);
}

document.addEventListener("click", e => hidePopup(e), true)


function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }
  
  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
  }
  