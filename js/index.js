var popupVisible = false;

function showHide(elementId) {

    let x = document.getElementById("popupId");
    let bodyElement = document.getElementById("body");

    if (x.style.display === "none" && elementId != undefined) {
      x.style.display = "block";
      x.style.position = "fixed";
      popupVisible = true;
      populateFeatPopup(elementId);
    }
    else {
      x.style.display = "none";
      x.style.position = "sticky";
      popupVisible = false;
    }
}

function hidePopup(event){

  let classList = event.target.classList;
  let id = event.target.id;
  console.log("Id: " + id);
  console.log("Class: " + classList);

  if(popupVisible && classList != "item-icon iconsize" && classList != "flex-container-text-box popup-text-container" && classList != "flex-container-title" && classList != "popup" && classList != "flex-container-image popupImageArt" && id !="hrId" && id!="popupKeywordText" && id!="popupKeywordTextPTag" && id !="toolTip"){ showHide();}
}

function populateFeatPopup(elementId){

  let element = document.getElementById(elementId);
  let colour = element.style.backgroundColor;
  let popupArt = element.style.backgroundImage;
  let popupArtElement = document.getElementById("popupArt");
  let popupContainerElement = document.getElementById("popupId");
  let popupFlexContainerElement = document.getElementById("popupFlexContainer");

  popupFlexContainerElement.style.backgroundColor = colour;
  popupContainerElement.style.backgroundColor = colour;
  popupArtElement.style.backgroundImage = popupArt;
  popupArtElement.style.backgroundColor = colour;

  let popupDescription = element.getAttribute("data-description");

  let popupTextElement = document.getElementById("popupTitle");
  popupTextElement.innerHTML = elementId;
  popupTextElement.style.backgroundColor = colour;
  
  let popupDescriptionElement = document.getElementById("popupDescription");
  popupDescriptionElement.innerHTML = popupDescription;
}


