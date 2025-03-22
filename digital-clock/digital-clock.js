const hourEl = document.getElementById("hour");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");
const ampmEl = document.getElementById("ampm");



function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    if("h>12"){
        h = h - 12
        ampm = "PM"
    }

    hourEl.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    ampmEl, (innerText = ampm);
}

updateClock();



