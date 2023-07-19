import featJson from '../data/featList.json' assert { type: 'json' };

function addSectionContainer(idToAmend){
  featJson.featPath.forEach((feat) => apendText(feat));
}

function apendText(featPath){

  var featsArray = featPath.feats;
  var pathName = featPath.pathName;
  var featPathColour = featPath.featPathColour;

  var featCode = 
  "<div class=\"section-container\" style=\"background-color: " + featPathColour + ";\">" + 
    "<div class=\"section-title\">" +
      "<span class=\"featPath-description-title-text\">" + pathName + "</span>" +
    "</div>" +
    "<div class=\"section-content\">" +
      "<div class=\"section-row\">";
      
      featsArray.forEach(feat => {

        var featName = feat.featName;
        var featRequirements = feat.prequisites;
        var art = feat.art;
        var description = feat.description;

        featCode +=
          "<div class=\"item\">" +
            "<div class=\"item-icon iconsize\" name=\"item-icon\" id = \"" + featName + "\" data-description = \"" + description + "\" style=\"background-color: " + featPathColour + "; background-image: url('./img/Feats/" + pathName + "/" + art + ".png');\"></div>" +
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
  