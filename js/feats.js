import featJson from '../data/featList.json' assert { type: 'json' };
import downtimeJson from '../data/downtimeList.json' assert { type: 'json' };



function addSectionContainer(idToAmend){

  var path = window.location.pathname;
  var page = path.split("/").pop();

  if(page ==="downtime.html"){
    downtimeJson.featPath.forEach((feat) => apendText(feat));
  }else{
    featJson.featPath.forEach((feat) => apendText(feat));
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
        let featRequirements = feat.prequisites;
        let art = feat.art;
        let description = feat.description;

        let keywords = feat.keywords;
        let keywordsText = "<hr id='hrId'><p id='popupKeywordTextPTag'><i id='popupKeywordText'>Keywords: ";

        for (let i = 0; i < keywords.length; i++) {
          
          if(i < (keywords.length - 1)){
            keywordsText += manageKeywordsOnPopup(keywords[i]) + ", ";
          }
          else{ keywordsText += manageKeywordsOnPopup(keywords[i]) + " "; }  
        }

        keywordsText + "</i>";
        description += keywordsText + "</p>";

        if(pathName === "Way of the ritualist"){
          let difficulty = feat.difficulty;
          let materialCosts = feat.materialCosts;

          if(materialCosts !== "N/A" && materialCosts !== "None"){
            description = "<p><i id='popupMaterialCost'>Material Costs: " + materialCosts + " </i></p>" + description;
          }

          if(difficulty !== "N/A"){
            description = "<p><i id='popupDifficulty' >Difficulty: " + difficulty + " </i></p>" + description;
          }
        }

        let url = "./img/Feats/" + pathName + "/" + art + ".png";

        featCode +=
          "<div class=\"item\">" +
            "<div class=\"item-icon iconsize expandable\" data-bgimage=\"" + url + "\" name=\"item-icon\" id = \"" + featName + "\" data-description = \"" + description + "\" style=\"background-color: " + featPathColour + "; background-image: url('');\"></div>" +
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

document.getElementById("featsContainer").innerHTML += featCode;
}

addSectionContainer("addSectionContainer");

var itemIconElements = document.getElementsByClassName("item-icon"); 

for(let element of itemIconElements){

  element.addEventListener("click", e => event.stopPropagation(), true);
  element.addEventListener("click", e => showHide(element.id), true);
}

document.addEventListener("click", e => hidePopup(e), true)


function manageKeywordsOnPopup(keyword){
  let returnText = "";

  return keyword;

  // switch(keyword){
  // case "En":
  //   return "Enchantment"
  // default:
  //   return "N/A"
  // }

}

