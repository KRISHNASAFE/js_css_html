const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", ()=>{
    console.log("Clicked!");
    
});

function addNewImages(){
    const newImageEl = document.createElement("img");
    newImageEl.src = `https://picsum.photos/400?random=${Math.floor(Math.random()*2000)}`;
    imageContainerEl.appendChild(newImageEl);
}




/*
<img src="https://picsum.photos/400?random=1">
        <img src="https://picsum.photos/400?random=2">
        <img src="https://picsum.photos/400?random=3">
        <img src="https://picsum.photos/400?random=4">
        <img src="https://picsum.photos/400?random=6">
        <img src="https://picsum.photos/400?random=7">
        <img src="https://picsum.photos/400?random=8">
        <img src="https://picsum.photos/400?random=9">
        <img src="https://picsum.photos/400?random=10">
        <img src="https://picsum.photos/400?random=11">
        <img src="https://picsum.photos/400?random=12">
        <img src="https://picsum.photos/400?random=13">
        <img src="https://picsum.photos/400?random=14">
        <img src="https://picsum.photos/400?random=15">
        <img src="https://picsum.photos/400?random=16">
        <img src="https://picsum.photos/400?random=17">
        <img src="https://picsum.photos/400?random=18">
        <img src="https://picsum.photos/400?random=19">
        <img src="https://picsum.photos/400?random=20">
        <img src="https://picsum.photos/400?random=21">
        <img src="https://picsum.photos/400?random=22">
        <img src="https://picsum.photos/400?random=23">
        <img src="https://picsum.photos/400?random=24">
*/

