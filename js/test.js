import featJson from '../data/featList.json' assert { type: 'json' };

const bodyElement = document.getElementById("body");

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



const parentDiv = document.getElementById('test-parentItemContainer');
const childDiv = document.getElementById('test-childItemContainer');
const parentTitleDiv = document.getElementById('test-parentItemTitle');

parentDiv.addEventListener('click', function(event) {
  // specify the action to take when the div is clicked
  let clickedId = event.target.id;
  let isChildDivActive = childDiv.classList.contains("active");

  if(!isChildDivActive){expandFeatDiv();}
  else if(clickedId !== "test-childItemContainer"){shrinkFeatDiv();}

  event.stopImmediatePropagation();
});
  
bodyElement.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  console.log("Body");
  if(childDiv.classList.contains("active")){
    shrinkFeatDiv();
  }
});

parentTitleDiv.addEventListener('click', function(event) {
  // specify the action to take when the div is clicked
  let isChildDivActive = childDiv.classList.contains("active");
  console.log("parentTitleDiv");

  if(!isChildDivActive){expandFeatDiv();}
  else {shrinkFeatDiv();}

  event.stopImmediatePropagation();
});

function expandFeatDiv(){
  childDiv.style.height = "8vh";
  childDiv.classList.add("active");
  parentDiv.style.height = "20vh";
}

function shrinkFeatDiv(){
  childDiv.style.height = "0vh";
  childDiv.classList.remove("active");
  parentDiv.style.height = "10vh";
}