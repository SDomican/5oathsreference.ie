import featJson from '../data/featList.json' assert { type: 'json' };

function addSectionContainer(idToAmend){
  featJson.featPath.forEach((feat) => apendText(feat));
}

function apendText(featPath){

  var featsArray = featPath.feats;
  var pathName = featPath.pathName;
  var featPathColour = featPath.featPathColour;

  var featCode = "<div class=\"section-container expandable\">" + 
  "<div class=\"section-title\">" +
      "<span class=\"float-right\"><a href=\"#nav\">" + pathName + "</a></span>" +
  "</div>" +
  "<div class=\"section-content\" id=\"nav\" >" +
      "<div class=\"section-row section-subtitle text fontsize\">" +
          "You can move at any time during your turn (before, after, or during actions)." +
      "</div>" +
      "<div class=\"section-row\">";
      
      featsArray.forEach(feat => {

        var featName = feat.featName;
        var featRequirements = feat.prequisites;
        var art = feat.art;
        var description = feat.description;

        featCode +=
        "<div class=\"item itemsize\">" +
        //   // "<div class=\"item-icon iconsize\" name=\"item-icon\" id = \"" + featName + "\" data-description = \"" + description + "\" style=\"background-color: " + featPathColour + "; background-image: url('./img/Feats/" + pathName + "/" + art + ".png');\"></div>" +
        // //   "<div class=\"item-text-container text\">" +
        // //     // "<div class=\"item-title\">" + featName + "</div>" +
        // //     // "<div class=\"item-desc\">Prerequisites: " + featRequirements + "</div>" +
        "</div>" +
    "</div>";

      });

    featCode +=   
  "</div>" +
  "</div>" +
"</div>";

document.getElementById("featsContainer").innerHTML += featCode;

}

// addSectionContainer("addSectionContainer");

// var itemIconElements = document.getElementsByClassName("item-icon"); 

// for(let element of itemIconElements){

//   element.addEventListener("click", e => event.stopPropagation(), true);
//   element.addEventListener("click", e => showHide(element.id), true);
// }

// document.addEventListener("click", e => hidePopup(), true)



const myDiv = document.getElementById('test-parentItemContainer');
const childDiv = document.getElementById('test-childItemContainer');
console.log(myDiv);

myDiv.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  console.log("clicked");
  // childDiv.style.transition = "0.50s ease-in";
  // childDiv.style.maxHeight = "500px";
  childDiv.style.height = "8vh";

  // max-height: 500px;
  // transition: max-height 0.50s ease-in;
});
  