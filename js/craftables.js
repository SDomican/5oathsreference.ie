import spellJson from '../data/craftableList.json' assert { type: 'json' };

function addSectionContainer(idToAmend){
  spellJson.featPath.forEach((feat) => apendText(feat));
}

function apendText(featPath){

  let featsArray = featPath.feats;
  let pathName = featPath.pathName;
  let featPathColour = featPath.featPathColour;

  let featCode = 
  "<div class=\"section-container\" style=\"background-color: " + featPathColour + ";\">" + 
    "<div class=\"section-title\">" +
      "<span class=\"featPath-description-title-text\">" + pathName + "</span>" +
    "</div>" +
    "<div class=\"section-content\">" +
      "<div class=\"section-row\">";
      
      featsArray.forEach(feat => {

        let featName = feat.featName;
        let featRequirements = feat.ingeredientCost;
        let art = feat.art;
        let description = feat.description;
        let keywords = feat.craftableKeyword;
        let keywordsText = "<hr id='hrId'><p id='popupKeywordTextPTag'><i id='popupKeywordText'>Keywords: ";

        for (let i = 0; i < keywords.length; i++) {
          
          if(i < (keywords.length - 1)){
            keywordsText += manageKeywordsOnPopup(keywords[i]) + ", ";
          }
          else{ keywordsText += manageKeywordsOnPopup(keywords[i]) + " "; }  
        }

        keywordsText + "</i>";
        description += keywordsText + "</p>";

        featCode +=
          "<div class=\"item\">" +
            "<div class=\"item-icon iconsize\" name=\"item-icon\" id = \"" + featName + "\" data-description = \"" + description + "\" style=\"background-color: " + featPathColour + "; background-image: url('./img/Craftables/" + "/" + art + ".png');\"></div>" +
            "<div class=\"item-text-container text\">" +
              "<div class=\"item-title feat-description-title-text\" style=\" color:" + featPathColour + ";    \">" + featName + "</div>" +
              "<div class=\"feat-description-requirements-text\" style=\"color:" + featPathColour + ";\">(Req): " + featRequirements + "</div>" +
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
    returnText = "<span id='keyword' class='tooltip' data-tooltip='The Mass Modifier can be added to many Effects, determined by Feats and magic items. Using the Mass Modifier with an Effect means the Effect will be used on everyone within 5m of the character generating the Effect, apart from the character themselves. The character may indicate an arc with both hands in front of them, which allows them to target all characters within that arc. The character generating a Mass Effect must specify who will be targeted when completing their call. For example, the character may add “…all around me” or simply “Mass” before the Effect to target every character within 5m, or “…all within this arc” to target specific characters. The arc must be the area in front of the character between their arms, a character may not designate the area behind them as the arc for a Mass Effect.' data-tooltip-position='bottom' style='margin-top: 60px;'>Mass</span>";
    return returnText;
  case "Windfall":
    returnText = "<span id='keyword'  class='tooltip' data-tooltip='Windfall Recipes (w) produce random Durable or Consumable items of the appropriate level. These Recipes may only be crafted by characters possessing the “Unexpected Opportunities” Feat.' data-tooltip-position='bottom' style='margin-top: 60px;'>Windfall</span>";
    return returnText;
  case "Consumable":
    returnText = "<span id='keyword'  class='tooltip' data-tooltip='Consumable items (c) have a duration of 3 events from the downtime they are made, and may only be used once before they are destroyed.'data-tooltip-position='bottom' style='margin-top: 60px;'>Consumable</span>";
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
  