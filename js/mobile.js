
var mq = window.matchMedia( "(max-width: 480px)" );


function mobileExpand(sectionContainerId){

    if (mq.matches) {

        let element = document.getElementById(sectionContainerId);
        let sectionContainer = element.lastChild;

        let sectionRow = sectionContainer.firstChild;
        let sectionRowChildren = sectionRow.childNodes;

        let popupElement = document.getElementById("popupId");
        let isPopupOpen = popupElement.classList.contains("popupVisible");

        sectionRowChildren.forEach(item => {

            let itemTextContainerDiv = item.lastChild;
            let artContainerDiv = item.firstChild;
            let featDescriptionDiv = itemTextContainerDiv.firstChild;
            let featDescriptionRequirementsDiv = itemTextContainerDiv.lastChild;

            if(itemTextContainerDiv.style.height === "5%" && isPopupOpen != true){
                itemTextContainerDiv.style.height = "0";
                featDescriptionDiv.style.display = "none";
                featDescriptionRequirementsDiv.style.display = "none";

                artContainerDiv.style.display = "none";
            }
            else if(isPopupOpen != true){
                itemTextContainerDiv.style.height = "5%";
                featDescriptionDiv.style.display = "block";
                featDescriptionRequirementsDiv.style.display = "block";
                
                artContainerDiv.style.width = "20%";
                artContainerDiv.style.padding = "10%";
                artContainerDiv.style.margin = "1%";

                artContainerDiv.style.display = "block";

                popupElement.classList.remove("popupVisible");
            }
            else{ popupElement.classList.remove("popupVisible"); }
        });
       
    }

}


