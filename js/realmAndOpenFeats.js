import featJson from '../data/realmAndOpenFeats.json' assert { type: 'json' };

function addSectionContainer(idToAmend){
  featJson.featPath.forEach((feat) => apendText(feat));
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
      console.log(featsArray);
      featsArray.forEach(feat => {

        let featName = feat.featName;
        let featRequirements = feat.prequisites;
        let art = feat.art;
        console.log("Art:" + art);
        let description = feat.description;

        if(pathName === "Way of the ritualist"){
          let difficulty = feat.difficulty;
          let materialCosts = feat.materialCosts;

          if(materialCosts !== "N/A" && materialCosts !== "None"){
            description = "<p><i>Material Costs: " + materialCosts + " </i></p>" + description;
          }

          if(difficulty !== "N/A"){
            description = "<p><i>Difficulty: " + difficulty + " </i></p>" + description;
          }
        }

        featCode +=
          "<div class=\"item\">" +
            "<div class=\"item-icon iconsize\" name=\"item-icon\" id = \"" + featName + "\" data-description = \"" + description + "\" style=\"background-color: " + featPathColour + "; background-image: url('./img/Realm_Feats/" + art + ".png');\"></div>" +
            "<div class=\"item-text-container text\">" +
              "<div class=\"item-title feat-description-title-text\" style=\" color:" + featPathColour + ";    \">" + featName + "</div>" +
              "<div class=\"feat-description-requirements-text\" style=\"color:" + featPathColour + ";\">(P): " + featRequirements + "</div>" +
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
  