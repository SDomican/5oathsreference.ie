import spellJson from '../data/craftableList.json' assert { type: 'json' };
import blacksmithJson from '../data/blacksmithList.json' assert { type: 'json' };

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
        let materialCosts = feat.ingeredientCost;

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
          "<div class=\"item\">" +
            "<div class=\"item-icon iconsize\" data-bgimage=\"" + url + "\" name=\"item-icon\" id = \"" + featName + "\" data-description = \"" + description + "\" style=\"background-color: " + featPathColour + "; background-image: url('');\"></div>" +
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
  