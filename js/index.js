var popupVisible = false;

function showHide(elementId) {

    let x = document.getElementById("popupId");
    let bodyElement = document.getElementById("body");

    if(bodyElement.classList.contains("darken") || popupVisible){
      bodyElement.classList.remove("darken");
    }
    else {
      bodyElement.classList.add("darken");
    }

    if (x.style.display === "none" && elementId != undefined) {
      x.style.display = "block";
      popupVisible = true;
      populateFeatPopup(elementId);
    }
    else {
      x.style.display = "none";
      popupVisible = false;
    }
}

  function hidePopup(){
    if(popupVisible){ showHide();}
  }


function populateFeatPopup(elementId){
  console.log("populateFeatPopup");

  let element = document.getElementById(elementId);

  let popupArt = element.style.backgroundImage;
  let popupArtElement = document.getElementById("popupArt");
  popupArtElement.style.backgroundImage = popupArt;

  let popupDescription = element.getAttribute("data-description");

  let popupTextElement = document.getElementById("popupTitle");
  popupTextElement.innerHTML = elementId;
  
  let popupDescriptionElement = document.getElementById("popupDescription");
  popupDescriptionElement.innerHTML = popupDescription;
}


