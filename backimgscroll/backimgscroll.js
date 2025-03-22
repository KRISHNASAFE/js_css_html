bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", ()=>{
    updateImage();
});

function updateImage(){
    bgImageEl.style.opacity = 1 - (window.pageYOffset / 800);
    //console.log(window.pageYOffset, 1 - (windows.pageYOffset / 800));
    bgImageEl.style.backgroundSize = 100 - (window.pageYOffset / 400) + "%";
}


