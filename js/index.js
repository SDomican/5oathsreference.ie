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

  var element = document.getElementById(elementId);
  console.log("Element: " + element);
  console.log("ElementId: " + element.id);
  console.log("ElementAtt: " + element.getAttributeNames());

  var popupDescription = element.getAttribute("data-description");

  var popupTextElement = document.getElementById("popupTitle");
  popupTextElement.innerHTML = elementId;
  
  var popupDescriptionElement = document.getElementById("popupDescription");
  popupDescriptionElement.innerHTML = popupDescription;
}


