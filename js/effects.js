import spellJson from '../data/effectList.json' assert { type: 'json' };

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
        let featRequirements = feat.prequisites;
        let art = feat.art;
        let description = feat.description;
        let keywords = feat.magicSchool;
        let keywordsText = "";
        let call = feat.call;

        if(featName != "Effect interactions/priority"){
          keywordsText = "<hr id='hrId'><p id='popupKeywordTextPTag'><i id='popupKeywordText'>Keywords: ";

          for (let i = 0; i < keywords.length; i++) {
          
            if(i < (keywords.length - 1)){
              keywordsText += manageKeywordsOnPopup(keywords[i]) + ", ";
            }
            else{ keywordsText += manageKeywordsOnPopup(keywords[i]) + " "; }  
          }

          description = "<p><i id='popupMaterialCost'>Call: " + call + " </i></p>" + description;
        }

        let url = "./img/Effects/" + art + ".png";

        keywordsText + "</i>";

        description += keywordsText + "</p>";

        featCode +=
          "<div class=\"item\">" +
            "<div class=\"item-icon iconsize\" data-bgimage=\"" + url + "\" name=\"item-icon\" id = \"" + featName + "\" data-description = \"" + description + "\" style=\"background-color: " + featPathColour + "; background-image: url('');\"></div>" + 
            "<div class=\"item-text-container text\">" +
              "<div class=\"item-title feat-description-title-text\" style=\" color:" + featPathColour + ";    \">" + featName + "</div>" +
              "<div class=\"feat-description-requirements-text\" style=\"color:" + featPathColour + ";\">Call: " + call + "</div>" +
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

  return keyword;
}

addSectionContainer("addSectionContainer");

var itemIconElements = document.getElementsByClassName("item-icon"); 

for(let element of itemIconElements){

  element.addEventListener("click", e => event.stopPropagation(), true);
  element.addEventListener("click", e => showHide(element.id), true);
}

document.addEventListener("click", e => hidePopup(e), true)
  