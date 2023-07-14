var popupVisible = false;

function showHide() {

  console.log("showHide");

    let x = document.getElementById("popupId");
    let bodyElement = document.getElementById("body");

    if(bodyElement.classList.contains("darken")){
      bodyElement.classList.remove("darken");
    }
    else {
      bodyElement.classList.add("darken");
    }

    if (x.style.display === "none") {
      x.style.display = "block";
      popupVisible = true;
    }
    else {
      x.style.display = "none";
      popupVisible = false;
    }
  }

  function hidePopup(){

    console.log("hidePopup");
    console.log("popupVisible: " + popupVisible);

    // var popup = document.getElementById("popupId");
    // var bodyElement = document.getElementById("body");

    // if(popup.style.display = "block"){
    //   bodyElement.classList.remove("darken");
    // }

  }
  

