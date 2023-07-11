function showHide() {
    var x = document.getElementById("popupId");
    var bodyElement = document.getElementById("body");

    if(bodyElement.classList.contains("darken")){
      bodyElement.classList.remove("darken");
    }
    else {
      bodyElement.classList.add("darken");
    }


    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
  }

