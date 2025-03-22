const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

//inputEl.checked = false;


function updateBody(params) {
    if(inputEl.checked){
        bodyEl.style.background = "black";
    }
    else{
        bodyEl.style.background = "white";
    }
}

inputEl.addEventListener("input", ()=>{
    updateBody();
});

function updateLocalStorage(){
    localStorage.setItem("mode",JSON.stringify(input    ));
}















//updateBody();