var popupVisible = false;

function showHide() {

  console.log("showHide");

    let x = document.getElementById("popupId");
    let bodyElement = document.getElementById("body");
   
    console.log("popupBefore: " + popupVisible);
    console.log("DarkenBefore: " + bodyElement.classList);

    if(bodyElement.classList.contains("darken") || popupVisible){
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

    console.log("popupAfter: " + popupVisible);
    console.log("DarkenAfter: " + bodyElement.classList);
    console.log("<------------------------------>");
  }

  function hidePopup(){

    console.log("hidePopup -  popupVisible: " + popupVisible);

    if(popupVisible){
      
      console.log("Running showHide from popVisible");
      showHide();
    }

    // var popup = document.getElementById("popupId");
    // var bodyElement = document.getElementById("body");

    // if(popup.style.display = "block"){
    //   bodyElement.classList.remove("darken");
    // }

  }



