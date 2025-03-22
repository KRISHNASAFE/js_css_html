const containerEl = document.querySelector(".container");

const careers = ["YouTuber", "Developer", "Freelancer", "Instructor",  "Teacher"];

let characterIndex = 0;
let careerIndex = 0;

updateText();

function updateText(){
    containerEl.innerHTML = `
        <h2>I am  ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"}${careers[careerIndex].slice(0,characterIndex)}</h2>
`;
characterIndex++;
if(characterIndex === careers[careerIndex].length){
    careerIndex++;
    characterIndex = 0;
}
if(careerIndex === careers.length){
    careerIndex = 0;
}
setTimeout(updateText, 200);

}

