
var mq = window.matchMedia( "(max-width: 480px)" );


function mobileExpand(sectionContainerId){
    if (mq.matches) {
        // window width is at less than 570px
        console.log("mobileExpand: " + sectionContainerId);

        let element = document.getElementById(sectionContainerId);
        console.log(element);

        let children = element.childNodes; 
        let sectionContainer = element.lastChild;

        let sectionRow = sectionContainer.firstChild;
        let sectionRowChildren = sectionRow.children;

        let firstItem = sectionRow.firstChild;
        let firstItemTextContainer = firstItem.lastChild;

        console.log(sectionRowChildren);

        // console.log(sectionContainer);
        // console.log(sectionRow);
        // // console.log(children);
        // console.log(firstItem);
        // console.log(firstItemTextContainer);

        // firstItemTextContainer.style.height = "10vh";

        // sectionRowChildren.forEach(item => {
        //     console.log(item);
        // });




        // sectionContainer.style.height = "50%";
       
    }
    

}


