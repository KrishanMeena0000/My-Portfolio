document.addEventListener("DOMContentLoaded", function() {
    let webButton = document.querySelector('#webButton');
let appButton = document.querySelector('#appButton');


webButton.addEventListener("click", function() {
    let webDetail = document.querySelector("#webDetail");
    let webDesign = document.querySelector("#webDesign");
    try{
        if(webDetail.style.display == "none"){
            webDetail.style.display = "block";
            webDesign.classList.add("detailServiceCard");
            webButton.textContent = "Showless";
        }else{
            webDetail.style.display = "none";
            webDesign.classList.remove("detailServiceCard");
            webButton.textContent = "Learnmore";
        }
    }catch(e){
        console.log(e);
    }
});
appButton.addEventListener("click", function() {
    let appDetail = document.querySelector("#appDetail");
    let appDesign = document.querySelector("#appDesign");
    try{
        if(appDetail.style.display == "none"){
            appDetail.style.display = "block";
            appDesign.classList.add("detailServiceCard");
            appButton.textContent = "Showless";
        }else{
            appDetail.style.display = "none";
            appDesign.classList.remove("detailServiceCard");
            appButton.textContent = "Learnmore";
        }
    }catch(e){
        console.log(e);
    }
});

    let seeMore = document.querySelector("#seeMore");
    seeMore.addEventListener("click", function() {
        let moreWork = document.querySelectorAll(".moreWork");
        try{
            moreWork.forEach(function(element) {
                element.style.display = "grid";
                seeMore.style.display = "none";
            });
        }catch(e){
            console.log(e);
        }
    })
    
    }   
);


