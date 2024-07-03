const spellJson = {

  "featPath": [
      {
          "pathName" : "Student Arcanist:",
          "featPathColour" : "purple",
          "feats":[
              {
                  "featName" : "Amulet of Increased Potential",
                  "art" : "necklace",
                  "description" : "This item is an amulet or talisman. Attunes to neck. While attuned, increase your maximum Vigour cap by 3. This does not affect your current Vigour. If you deattune to this item your maximum Vigour immediately resets to what it was without this item, your current Vigour is unaffected unless it would be more than your maximum and if so they decrease to your maximum.",
                  "craftableKeyword" : ["Durable"],
                  "ingeredientCost" : ["1 Copper", "1 Heart", "1 Incense", "1 Ink", "1 Iron", "1 Leaf"]
              },
              {
                "featName" : "Crystal of the Clear Mind",
                "art" : "crystal-growth",
                "description" : "This item is a crystal. On use, generates the Protection Daze 5 minute and Protection Charm 5 minute Effects.",
                "craftableKeyword" : ["Consumable"],
                "ingeredientCost" : ["1 Bark", "1 Incense"]
            },
            {
              "featName" : "Lesser Eye of the Shaper",
              "art" : "warlock-eye",
              "description" : "This item is an eye of the Shaper. This item allows an enclosed structure, like a tent, that has stood in place since dawn to be treated as a ritual circle for rituals of up to difficulty 5.",
              "craftableKeyword" : ["Durable"],
              "ingeredientCost" : ["1 Bronze", "1 Fang", "2 Incense", "1 Parchment", "1 Seed"]
          },
          {
            "featName" : "Student Ritual Effigy",
            "art" : "puppet",
            "description" : "This item is an effigy. On use, gives +5 to the ritual score of the ritual it is used in.",
            "craftableKeyword" : ["Consumable"],
            "ingeredientCost" : ["1 Heart", "1 Wax"]
        },
        {
          "featName" : "Student Spellbook Transcription",
          "art" : "spell-book",
          "description" : "This item is a magical focus. Attunes to hand. On creation, the crafter transcribes a first level Spell they can cast. While attuned you may cast that Spell for the normal Vigour cost.",
          "craftableKeyword" : ["Consumable"],
          "ingeredientCost" : ["1 Bark", "1 Fang", "1 Ink", "1 Parchment", "1 Silver", "1 Wax"]
        },
        {
          "featName" : "Student Windfall Arcanistry",
          "art" : "windfall",
          "description" : "Randomly produces 3 of a Student level Consumable or a single Student level Durable Item.",
        "craftableKeyword" : ["Windfall"],
        "ingeredientCost" : ["1 metal", "1 Plant", "2 Processed"]
      },
      {
        "featName" : "Unrelenting Rant",
        "art" : "crystalize",
        "description" : "This item is a crystal. On use, generates the Protection Mute 5 minute and Protection Mindslash 5 minute Effects when consumed.",
        "craftableKeyword" : ["Consumable"],
        "ingeredientCost" : ["1 Bone", "1 Glass"]
      }
      ]
      },
      {
        "pathName" : "Apprentice Arcanist:",
        "featPathColour" : "green",
        "feats":[
            {
                "featName" : "Apprentice Spellbook Transcription",
                "art" : "burning-book",
                "description" : "This item is a magical focus. Attunes to hand. On creation, the crafter transcribes a second level Spell they can cast. While attuned you may cast that Spell for the normal Vigour cost.",
                "craftableKeyword" : ["Durable"],
                "ingeredientCost" : ["1 Copper", "1 Flower", "3 Glass", "1 Leaf", "1 Pelt", "1 Seed", "1 Silver"]
            },
            {
              "featName" : "Apprentice Ritual Effigy",
              "art" : "voodoo-doll",
              "description" : "This item is an effigy. On use, gives +10 to the ritual score of a ritual it is used in.",
              "craftableKeyword" : ["Consumable"],
              "ingeredientCost" : ["1 Fang", "2 Ink"]
          },
          {
            "featName" : "Apprentice Windfall Arcanistry",
            "art" : "windfall",
            "description" : "Randomly produces 3 of an Apprentice level Consumable or a single Student level Durable Item.",
            "craftableKeyword" : ["Windfall"],
            "ingeredientCost" : ["1 metal", "1 animal", "1 plant", "3 processed"]
          },
          {
          "featName" : "Greater Eye of the Shaper",
          "art" : "warlock-eye-plus",
          "description" : "This item is an eye of the Shaper. This item allows an enclosed structure, like a tent, that has stood in place since dawn to be treated as a ritual circle for rituals of up to difficulty 10.",
          "craftableKeyword" : ["Durable"],
          "ingeredientCost" : ["1 Bark", "3 Heart", "1 Iron", "3 Parchment", "1 Root"]
      },
      {
        "featName" : "Warding Charm",
        "art" : "feather-necklace",
        "description" : "Generate the Ward 2 Effect. This Ward is broken if your current armour value is greater than 0.",
        "craftableKeyword" : ["Consumable"],
        "ingeredientCost" : ["1 Copper", "1 Glass", "1 Incense"]
      },
      {
      "featName" : "Talisman of Barbarous Vitality",
      "art" : "skull-signet",
      "description" : "This item is an amulet or talisman. Attunes to neck. This item may only be attuned by a character who is not wearing any armour. While attuned, your maximum Body hits per location are increased by +1. This does not increase your current Body hits, which must be raised through healing.",
      "craftableKeyword" : ["Durable"],
      "ingeredientCost" : ["3 Bone", "1 Bronze", "1 Gold", "2 Ink", "2 Wax"]
      },
      {
      "featName" : "Wand of Increased Potential",
      "art" : "lunar-wand",
      "description" : "This item is a magical focus. Attunes to hand. While attuned, Iincrease your maximum Vigour cap by 6.This does not affect your current Vigour. If you deattune to this item your maximum Vigour immediately resets to what it was without this item, your current Vigour is unaffected unless it would be more than your maximum and if so they decrease to your maximum",
      "craftableKeyword" : ["Durable"],
      "ingeredientCost" : ["1 Bronze", "3 Dung", "2 Incense", "1 Leaf", "1 Seed", "1 Silver"]
      }
    ]
      },
      {
        "pathName" : "Journeyman Arcanist:",
        "featPathColour" : "purple",
        "feats":[
            {
                "featName" : "Amulet of the Gwyllt Foe",
                "art" : "holy-symbol",
                "description" : "This item is an amulet or talisman.Attunes to neck. While attuned, reduces the cost of Spells and Effects that have the Gwyllt target category by 1 Vigour, to a minimum of 1 Vigour.",
                "craftableKeyword" : ["Durable"],
                "ingeredientCost" : ["1 Glass", "1 Gold", "1 Incense", "3 Ink", "1 Iron", "1 Leaf", "3 Pelt", "1 Root"]
            },
            {
              "featName" : "Amulet of the Prodigy",
              "art" : "gem-pendant",
              "description" : "This item is an amulet or talisman.Attunes to neck. On creation, the crafter chooses one school of magic (Evocation, Enchantment, or Transmutation). You may cast Spells of that school for 1 Vigour less than normal to a minimum of 1.",
              "craftableKeyword" : ["Durable"],
              "ingeredientCost" : ["2 Fang", "2 Flower", "4 Glass", "1 Gold", "1 Incense", "1 Root", "1 Silver"]
            },
            {
              "featName" : "Champion of Life’s Amulet",
              "art" : "intricate-necklace",
              "description" : "This item is an amulet or talisman.Attunes to neck. While attuned, reduces the cost of Spells and Effects that have the Undead target category by 1 Vigour, to a minimum of 1 Vigour.",
              "craftableKeyword" : ["Durable"],
              "ingeredientCost" : ["2 Bark", "1 Bone", "1 Bronze", "1 Copper", "3 Parchment", "4 Wax"]
            },
            {
              "featName" : "Journeyman Ritual Effigy",
              "art" : "candle-skull",
              "description" : "This item is an effigy. On use, gives +15 to the ritual score of a ritual it is used in.",
              "craftableKeyword" : ["Consumable"],
              "ingeredientCost" : ["2 Dung, 1 Ink, 1 Iron"]
            },
            {
            "featName" : "Journeyman Spellbook Transcription",
            "art" : "gift-of-knowledge",
            "description" : "This item is a magical focus. Attunes to hand. On creation, the crafter transcribes a third level Spell they can cast. While attuned you may cast that Spell for the normal Vigour cost.",
            "craftableKeyword" : ["Durable"],
            "ingeredientCost" : ["1 Bark, 2 Copper, 1 Flower, 1 Glass, 2 Heart, 1 Leaf, 4 Parchment"]
            },
            {
            "featName" : "Journeyman Windfall Arcanistry",
            "art" : "windfall",
            "description" : "Randomly produces 3 of a Journeyman level Consumable or a single Student level Durable Item.",
            "craftableKeyword" : ["Windfall"],
            "ingeredientCost" : ["1 metals", "1 animals", "2 plants", "4 processed"]
            },
            {
            "featName" : "Lesser Way Stone",
            "art" : "menhir",
            "description" : "This item is a way stone. On use, it allows you to perform a ritual of up to difficulty 5 without a ritual circle, remaining within 5 metres of the item.",
            "craftableKeyword" : ["Consumable"],
            "ingeredientCost" : ["1 Glass", "1 Incense", "1 Silver", "1 Wax"]
           }
        ]
      },
      {
        "pathName" : "Master Arcanist:",
        "featPathColour" : "green",
        "feats":[
            {
                "featName" : "Amulet of Boundless Vitality",
                "art" : "necklace-display",
                "description" : " This item is an amulet or talisman. Attunes to neck. This item may only be attuned by a character who is not wearing any armour. While attuned, your maximum Body hits per location are increased by +2. This does not increase your current Body hits, which must be raised through healing.",
                "craftableKeyword" : ["Durable"],
                "ingeredientCost" : ["1 Bronze", "2 Dung", "1 Fang", "2 Flower", "4 Glass", "1 Incense", "1 Ink", "2 Iron", "1 Silver"]
            },
            {
              "featName" : "Casting Crystal",
              "art" : "topaz",
              "description" : "This item is a crystal. On use, for the next 30s the next 4 Spells you cast may be cast for 0 Vigour.",
              "craftableKeyword" : ["Consumable"],
              "ingeredientCost" : ["1 Fang", "1 Gold", "1 Ink", "1 Root", "1 Wax"]
            },
            {
              "featName" : "Greater Way Stone ",
              "art" : "greater-menhir",
              "description" : "This item is a way stone. On use, it allows you to perform a ritual of up to difficulty 10 without a ritual circle, remaining within 5 metres of the item.",
              "craftableKeyword" : ["Consumable"],
              "ingeredientCost" : ["1 Incense", "1 Seed", "3 Wax "]
            },
            {
              "featName" : "Master Ritual Effigy",
              "art" : "ifrit",
              "description" : "This item is an effigy. On use, gives +20 to the ritual score of the ritual it is used in.",
              "craftableKeyword" : ["Consumable"],
              "ingeredientCost" : ["1 Bone", "1 Bronze", "1 Ink", "1 Leaf", "1 Parchment"]
            },
            {
            "featName" : "Master Spellbook Transcription",
            "art" : "enlightenment",
            "description" : "This item is a magical focus. Attunes to hand. On creation, the crafter transcribes a fourth level Spell they can cast. While attuned you may cast that Spell for the normal Vigour cost.",
            "craftableKeyword" : ["Durable"],
            "ingeredientCost" : ["1 Bark", "2 Bone", "1 Fang", "3 Ink", "4 Parchment", "2 Root", "2 Seed"]
            },
            {
            "featName" : "Master Windfall Arcanistry",
            "art" : "windfall",
            "description" : "Randomly produces 3 of a Master level Consumable or a single Student level Durable Item.",
            "craftableKeyword" : ["Windfall"],
            "ingeredientCost" : ["1 metals", "2 animals", "3 plants", "4 processed"]
            },
            {
            "featName" : "Wand of the Nemesis",
            "art" : "crystal-wand",
            "description" : "This item is a magical focus. Attunes to hand. On creation, the crafter chooses a target category(mortal, beast, gwyllt, or undead). While attuned, all Spells you cast that affect only this target category have their Vigour cost reduced by 1 to a minimum of 1 Vigour.",
            "craftableKeyword" : ["Durable"],
            "ingeredientCost" : ["1 Bark", "1 Fang", "2 Flower", "2 Heart", "5 Incense", "2 Leaf", "2 Pelt"]
           }
        ]
      }
  ]
}

var mq = window.matchMedia( "(max-width: 480px)" );

function addSectionContainer(idToAmend){
  spellJson.featPath.forEach((feat) => apendText(feat));
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
        featRequirements = replaceAll(featRequirements,",", ", ");
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
        description = "<p><i id='popupMaterialCost'>Material Cost: " + materialCosts + " </i></p>" + description + keywordsText;

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
            featCode = featCode.replaceAll("(Cost): ","");
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
  case "En":
    return "Enchantment"
  case "Ev":
    return "Evocation";
  case "Tr":
    return "Transmutation";
  case "Mass":
    returnText = "<span id='keyword' class='tooltip' data-tooltip='The Mass Modifier can be added to many Effects, determined by Feats and magic items. Using the Mass Modifier with an Effect means the Effect will be used on everyone within 5m of the character generating the Effect, apart from the character themselves. The character may indicate an arc with both hands in front of them, which allows them to target all characters within that arc. The character generating a Mass Effect must specify who will be targeted when completing their call. For example, the character may add “…all around me” or simply “Mass” before the Effect to target every character within 5m, or “…all within this arc” to target specific characters. The arc must be the area in front of the character between their arms, a character may not designate the area behind them as the arc for a Mass Effect.' data-tooltip-position='bottom'>Mass</span>";
    return returnText;
  case "Windfall":
    returnText = "<span id='keyword'  class='tooltip' data-tooltip='Windfall Recipes (w) produce random Durable or Consumable items of the appropriate level. These Recipes may only be crafted by characters possessing the “Unexpected Opportunities” Feat.' data-tooltip-position='bottom'>Windfall</span>";
    return returnText;
  case "Consumable":
    returnText = "<span id='keyword'  class='tooltip' data-tooltip='Consumable items (c) have a duration of 3 events from the downtime they are made, and may only be used once before they are destroyed.'data-tooltip-position='bottom'>Consumable</span>";
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
  