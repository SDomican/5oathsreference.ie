import featJson from '../data/featList.json' assert { type: 'json' };

function addSectionContainer(idToAmend){
  featJson.featPath.forEach((feat) => apendText(feat));
}

function apendText(featPath){

  var featsArray = featPath.feats;
  var pathName = featPath.pathName;
  console.log(pathName);

  var featCode = "<div class=\"section-container\">" + 
  "<div class=\"section-title\">" +
      "<span class=\"float-right\">" + pathName + "</span>" +
  "</div>" +
  "<div class=\"section-content\">" +
      "<div class=\"section-row section-subtitle text fontsize\">" +
          "You can move at any time during your turn (before, after, or during actions)." +
      "</div>" +
      "<div class=\"section-row\">";
      
      featsArray.forEach(feat => {

        var featName = feat.featName;
        var featRequirements = feat.prequisites;

        console.log(featRequirements);

        featCode +=
        "<div class=\"item itemsize\">" +
          "<div class=\"item-icon iconsize icon-run\" style=\"background-color: brown;\" onclick=\"showHide()\" ></div>" +
          "<div class=\"item-text-container text\">" +
            "<div class=\"item-title\">" + featName + "</div>" +
            "<div class=\"item-desc\">Prerequisites: " + featRequirements + "</div>" +
        "</div>" +
    "</div>";
      });

    featCode +=   
  "</div>" +
  "</div>" +
"</div>";

document.getElementById("featsContainer").innerHTML += featCode;

}

// function fetch(){
//   // console.log(featJson);
//   featJson.featPath.forEach(element => {
//     console.log(element.name);
//   });
// }

addSectionContainer("addSectionContainer");
