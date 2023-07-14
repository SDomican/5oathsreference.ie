var popupVisible = false;

function showHide() {

    let x = document.getElementById("popupId");
    let bodyElement = document.getElementById("body");

    if(bodyElement.classList.contains("darken") || popupVisible){
      bodyElement.classList.remove("darken");
    }
    else {
      bodyElement.classList.add("darken");
    }

    if (x.style.display === "none") {
      x.style.display = "block";
      popupVisible = true;

      // console.log(featName);
      // populatePopup(featName);
    }
    else {
      x.style.display = "none";
      popupVisible = false;
    }
  }

  function hidePopup(){
    if(popupVisible){ showHide();}
  }

  function populatePopup(featName){

    console.log(featName);

    var popupTextElement = document.getElementById("popupTitle");
    popupTextElement.innerHTML += "featTitleGoesHere";

  }


