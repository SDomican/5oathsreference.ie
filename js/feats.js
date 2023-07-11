import featJson from '../data/featList.json' assert { type: 'json' };

function addSectionContainer(idToAmend){
  featJson.featPath.forEach((feat) => apendText(feat));
}

function apendText(featPath){
  // document.getElementById("featsContainer").innerHTML +=
  // "<div class=\"section-title\"><span class=\"float-right\">" + featPath.pathName + "</span></div>";


  document.getElementById("featsContainer").innerHTML +=
  "<div class=\"section-title\">" +
    "<span class=\"float-right\">Way of Leather and Steel </span>" +
  "</div>"
  "<div class=\"section-content\">" + 
    "<div class=\"section-row section-subtitle text fontsize\">" +
      "You can move at any time during your turn (before, after, or during actions)." +
  "</div>" +
  "<div class=\"section-row\">";


  var featsArray = featPath.feats;

  // document.getElementById("featsContainer").innerHTML += "<div class=\"section-content\"><div class=\"section-row section-subtitle text fontsize\">You can move at any time during your turn (before, after, or during actions).</div><div class=\"section-row\">";

  featsArray.forEach(feat => {
    
    var featName = feat.featName;
    console.log("LOG: " + featName)

  //   document.getElementById("featsContainer").innerHTML +=
  // "<div class=\"item itemsize\"><div class=\"item-icon iconsize icon-run\" style=\"background-color: brown;\" onclick=\"showHide()\" ></div><div class=\"item-text-container text\"><div class=\"item-title\">Weapon blow</div><div class=\"item-desc\">Cost: 5ft per 5ft</div></div>";
  // });

  document.getElementById("featsContainer").innerHTML +=
  "<div class=\"item itemsize\">" +
  "<div class=\"item-icon iconsize icon-run\" style=\"background-color: brown;\" onclick=\"showHide()\" ></div>" +
  "<div class=\"item-text-container text\">" +
      "<div class=\"item-title\">Weapon blow</div>" +
      "<div class=\"item-desc\">Cost: 5ft per 5ft</div>" +
  "</div>" +
"</div>"
  });

  document.getElementById("featsContainer").innerHTML += "</div></div>";
}

// function fetch(){
//   // console.log(featJson);
//   featJson.featPath.forEach(element => {
//     console.log(element.name);
//   });
// }

addSectionContainer("addSectionContainer");
