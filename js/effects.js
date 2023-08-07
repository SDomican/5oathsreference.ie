import spellJson from '../data/effectList.json' assert { type: 'json' };
var mq = window.matchMedia( "(max-width: 480px)" );

var isMobile = mq.matches;

function addSectionContainer(idToAmend){
  spellJson.featPath.forEach((feat) => apendText(feat));
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
        let keywords = feat.magicSchool;
        let keywordsText = "";
        let call = feat.call;

        if(featName != "Effect priority" &&  featName != "Searching & IC Theft" &&  featName != "Restrained"){
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
            "<div class=\"item-icon iconsize expandable\" data-bgimage=\"" + url + "\" name=\"item-icon\" id = \"" + featName + "\" data-description = \"" + description + "\" style=\"background-color: " + featPathColour + "; background-image: url('');\"></div>" + 
            "<div class=\"item-text-container text expandable\">" +
              "<div class=\"item-title feat-description-title-text expandable\" style=\" color:" + featPathColour + ";    \">" + featName + "</div>" +
              "<div class=\"feat-description-requirements-text expandable\" style=\"color:" + featPathColour + ";\">Call: " + call + "</div>" +
            "</div>" +       
          "</div>";        
        });

    featCode +=   
      "</div>" +
    "</div>" +
  "</div>";

if(isMobile){
  featCode = featCode.replace("<p id='hrId'> E.g. If your character is hit with Rampage 30s, and 15 seconds into the duration of that they suffer the Lure Effect. Lure has priority as it is higher on the list for mental Effects than Rampage. Your character follows the Lure Effect’s directions for the next 10 seconds, before reverting to the Rampage Effect for the final 5 seconds of its duration.</p>","");

  featCode = featCode.replace("(eg “Crawling out of the ground 5! Crawling out of the ground 4!...”)","");
  featCode = featCode.replace("For example: “Destroying the evidence 10! Destroying the evidence 9! Destroying the evidence 8!...”.","");
  featCode = featCode.replace("Physical Effects priority", "Physical priority");
  featCode = featCode.replace("Mental Effects priority", "Mental priority");
  featCode = featCode.replace("<p>Most Immunities are reactive. What this means is that Feat or items will grant a character the ability to spend Vigour and become immune to an Effect when they are targeted with the Effect. If they spend the Vigour, the character declares “No Effect”, and gains the Immunity which lasts for a further short duration as specified by the Feat or item.</p>", "");
  featCode = featCode.replace("At no point should a player be out of character grappled or restrained. However there may be situations where a character needs to be restrained. To do so, you will need a phys rep of some kind, such as a ribbon or a sash.", "");
}

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
  