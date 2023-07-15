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


function populateFeatPopup(featName){

  // var matchingResult = featJson['featPath'].filter(function(x){ return x.featName == featName; });
  // var matchingResult = featJson;

  
  // console.log("Match: " + matchingResult);

  var popupTextElement = document.getElementById("popupTitle");
  popupTextElement.innerHTML = featName;

}


