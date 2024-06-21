const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container")

//console.log(bottomcontainerEl);
console.log(bottomContainerEl.offsetTop)

//console.log(navbarEl);

window.addEventListener("scroll", ()=> {
    //console.log("Scrolled")
    //console.log(window.scrollY);
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active")
    }
    else{
        navbarEl.classList.remove("active")
    }

} );




