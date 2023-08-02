import spellJson from '../data/spellList.json' assert { type: 'json' };

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

        let spellCall = feat.call;
        let featName = feat.featName;
        let featRequirements = feat.prequisites;
        let art = feat.art;
        let description = "<span id='popupKeywordTextPTag'><i>Call: " + spellCall + "</i></span><br><br>" + feat.description;
        let keywords = feat.magicSchool;
        let keywordsText = "<hr id='hrId'><p id='popupKeywordTextPTag'><i id='popupKeywordText'>Keywords: ";
        let magicSchool = filterMagicSchool(feat.magicSchool);

        for (let i = 0; i < keywords.length; i++) {
          
          if(i < (keywords.length - 1)){
            keywordsText += manageKeywordsOnPopup(keywords[i]) + ", ";
          }
          else{ keywordsText += manageKeywordsOnPopup(keywords[i]) + " "; }  
        }

        keywordsText + "</i>";
        description += keywordsText + "</p>";
        let url = "./img/Spells/" + art + ".png";

        featCode +=
          "<div class=\"item\">" +
            "<div class=\"item-icon iconsize\" data-bgimage=\"" + url + "\" name=\"item-icon\" id = \"" + featName + "\" data-description = \"" + description + "\" style=\"background-color: " + featPathColour + "; background-image: url('');\"></div>" +
            "<div class=\"item-text-container text expandable\">" +
              "<div class=\"item-title feat-description-title-text expandable\" style=\" color:" + featPathColour + ";    \">" + featName + "</div>" +
              "<div class=\"feat-description-requirements-text expandable\" style=\"color:" + featPathColour + ";\">(School): " + magicSchool + "</div>" +
            "</div>" +       
          "</div>";
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
  case "Global":
    returnText = "<span id='keyword'  class='tooltip' data-tooltip='Global is a Modifier that can be applied to the Damage, Healing or Repair Effects, which allows the Effect to target all 6 locations on the target character’s body. A Global Damage Effect will target all 6 locations on the targets body, and remove 1 Body hit from each location, removing Armour hits first as normal. A Global Healing 1 Effect will target all 6 locations on the target character’s body, and restore 1 Body hit to each location. A Global Repair 1 Effect will target all 6 locations on the target character’s body, and restore 1 Armour hit to each location. This Modifier can be combined with the Full Modifier.' data-tooltip-position='bottom'>Global</span>";
    return returnText;
  case "C":
    returnText = "<span id='keyword'  class='tooltip' data-tooltip='If you decided that your character was a Peacesworn, your character will not be able to take any Feats that have the Combat keyword.'data-tooltip-position='bottom'>Combat</span>";
    return returnText; 
  default:
    return "N/A"
  }

}

function filterMagicSchool(magicSchoolList){

  let listToReturn = "";

  magicSchoolList.forEach(element => {

    if(element === "En" || element === "Ev" || element === "Tr"){
      listToReturn += element;
    }
  });

  return listToReturn;
}



addSectionContainer("addSectionContainer");

var itemIconElements = document.getElementsByClassName("item-icon"); 

for(let element of itemIconElements){

  element.addEventListener("click", e => event.stopPropagation(), true);
  element.addEventListener("click", e => showHide(element.id), true);
}

document.addEventListener("click", e => hidePopup(e), true)
  