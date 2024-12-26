const learnMore = document.getElementById("btn-learn");

learnMore.addEventListener("click", function () {
  document
    .getElementById("about-me-container")
    .scrollIntoView({ behavior: "smooth" });
});

const factsArray = [
  "Skills: HTML5, CSS3(flexbox, Grid), Javascript(ES6+), Typescript",
  "About me: I gym to challenge myself each day and keep my body healthy.",
  "Strengths: I am passionate about making ideas turn into engaging web sites.",
  "About me: I enjoy being out in nature.",
  "Courses: The complete JS course 2024 - UDEMY, Creating Forms in HTML, Creating Layouts with CSS",
  "About me: I grew up around gaming and enjoy playing a multiplayer match now and then.",
  "Strengths: I am excited about sharing my creative ideas as well as my problem solving skills.",
  "Courses: Creating Page Layouts with CSS, Creating Responsive Pages with CSS, CSS Advanced Features, Styling Websites with CSS, Working with Colors and Images in CSS",
  "About me: I enjoyed playing sports (Football, Basketball, Rugby, Cricket) and can still do a few moves",
  "Strengths: Always growing by learning new techniques, frameworks, libraries & the latest innovation.",
  "About me: I enjoy teaching myself guitar as I have always loved music.",
  " Courses: Arrays and Objects in JavaScript, Debugging JavaScript Applications, Error Handling in JavaScript, Functions in JavaScript",
];

const fontFamilies = [
  "Times New Roman",
  "Courier",
  "Arial",
  "sans-serif",
  "Courier New",
  "monospace",
  "Franklin Gothic Medium ",
  "Arial Narrow ",
  "Lucida Sans ",
  "Lucida Sans Regular ",
  "Lucida Grande",
];

let positionIndex = 0;
const positions = [
  { x: 0, y: 0 },
  { x: 200, y: 0 },
  { x: 400, y: 0 },
];

function getRandomFact(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function getRandomFontFamily() {
  const randomIndex = Math.floor(Math.random() * fontFamilies.length);
  return fontFamilies[randomIndex];
}

function getNextPosition() {
  const position = positions[positionIndex];
  positionIndex = (positionIndex + 1) % positions.length;
  return position;
}

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("about-me-container");

  document.querySelector(".fun-facts").addEventListener("click", function () {
    const randomFact = getRandomFact(factsArray);
    const randomFontFamily = getRandomFontFamily();
    const factContainer = document.querySelector(".fact-blocks-container");

    if (factContainer) {
      factContainer.innerHTML = `
        <div class="fact-block">
          <p>${randomFact}</p>
        </div>
      `;
      factContainer.style.display = "block";
      factContainer.style.fontFamily = randomFontFamily;

      const { x, y } = getNextPosition();
      factContainer.style.transform = `translate(${x}px, ${y}px)`;
    } else {
      console.error("Fact container not found!");
    }
  });
});
