var popupVisible = false;

function showHide(elementId) {

    let x = document.getElementById("popupId");
    let bodyElement = document.getElementById("body");

    if (x.style.display === "none" && elementId != undefined) {
      x.style.display = "block";
      x.style.position = "fixed";
      popupVisible = true;
      populateFeatPopup(elementId);
      x.classList.add("popupVisible");
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

  if(popupVisible && classList != "item-icon iconsize" && classList != "flex-container-text-box popup-text-container" && classList != "flex-container-title" && classList != "popup" && classList != "flex-container-image popupImageArt" && id !="hrId" && id!="popupKeywordText" && id!="popupKeywordTextPTag" && id !="popupMaterialCost" && id !="toolTip" && id !="popupDifficulty" && id!="popupFlexContainer" && id!="keyword"){showHide();}
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

  if(popupTextElement.innerHTML.toString().includes("realmFeatTag!")){
    let parentFeat = popupTextElement.innerHTML.toString();
    parentFeat = getSubstring(parentFeat, "!", "_");
    
    let newFeat = popupTextElement.innerHTML.split(parentFeat+"_").pop()
    popupTextElement.innerHTML = newFeat;
  }

  popupDescriptionElement.innerHTML = popupDescription;
}


// Check for IntersectionObserver support
if ('IntersectionObserver' in window) {

  document.addEventListener("DOMContentLoaded", function() {

    function handleIntersection(entries) {

      entries.map((entry) => {
        if (entry.isIntersecting) {
          // Item has crossed our observation
          // threshold - load src from data-src
          entry.target.style.backgroundImage = "url('"+entry.target.dataset.bgimage+"')";
          // Job done for this item - no need to watch it!
          observer.unobserve(entry.target);
        }
      });
    }

    const headers = document.querySelectorAll('.header-container');
    const images = document.querySelectorAll('.item-icon');

    const observer = new IntersectionObserver(
      handleIntersection,
      { rootMargin: "400px" }
    );

    console.log(images);
  images.forEach(image => observer.observe(image));
});

} else {
  // No interaction support? Load all background images automatically
  const headers = document.querySelectorAll('.header-container');
  headers.forEach(header => {
    header.style.backgroundImage = "url('"+header.dataset.bgimage+"')";
  });
}

function getSubstring(str, char1, char2) {
  return str.substring(
    str.indexOf(char1) + 1,
    str.lastIndexOf(char2)
  );
}




