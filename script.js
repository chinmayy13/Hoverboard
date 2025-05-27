const container = document.getElementById("container");
const squares = 500;

// Define color themes
const themes = {
  cool: ["blue", "red", "green", "lavender", "yellow"],
  violet: ["#9B5DE5", "#C77DFF", "#7B2CBF ", "#E0AAFF"],
  yellow: ["#FEE440", "#FFD670", "#FFBE0B", "#FFE66D"],
  green: ["#06D6A0", "#118C4F", "#8AC926", "#B7EFCD"],
  red: ["#FF006E", "#D90429", "#EF233C", "#FF6B6B"],
  "b&W": ["#000000", "#555555", "#AAAAAA", "#FFFFFF"],
};

// Default theme
let colors = themes["cool"];

// Dynamically create the dropdown controls
const controls = document.createElement("div");
controls.classList.add("controls");

const label = document.createElement("label");
label.textContent = "Choose a Color Theme: ";
label.style.marginRight = "10px";

const themeSelect = document.createElement("select");
themeSelect.id = "themeSelect";

// Add options to the dropdown
Object.keys(themes).forEach((themeKey) => {
  const option = document.createElement("option");
  option.value = themeKey;
  option.textContent = themeKey.charAt(0).toUpperCase() + themeKey.slice(1);
  themeSelect.appendChild(option);
});

// Add event listener to update colors on change
themeSelect.addEventListener("change", (e) => {
  const selectedTheme = e.target.value;
  colors = themes[selectedTheme];
});

// Add label and select to controls box
controls.appendChild(label);
controls.appendChild(themeSelect);

// Insert controls box into body (before container)
document.body.insertBefore(controls, container);

// Create squares
for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#3e3e3e";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
