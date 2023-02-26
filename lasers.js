const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the text to display
const text = "ENS";

// Set the font size and style
const fontSize = 120;
context.font = `${fontSize}px Arial`;
context.fillStyle = "white";

// Get the width of the text
const textWidth = context.measureText(text).width;

// Set the initial position of the text
let x = (canvas.width - textWidth) / 2;
let y = canvas.height / 2;

// Define the speed and direction of the laser lights
let speed = 15;
let dx = speed;
let dy = 0;

// Define the distance between each laser light
const laserSpacing = 10;

// Draw the text on the canvas
for (let i = 0; i < text.length; i++) {
  // Get the current character in the text
  const char = text.charAt(i);

  // Draw the current character
  context.fillText(char, x, y);

  // Move to the next character
  x += context.measureText(char).width + laserSpacing;
}

// Move the laser lights across the screen
function moveLaserLights() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the text on the canvas
  for (let i = 0; i < text.length; i++) {
    // Get the current character in the text
    const char = text.charAt(i);

    // Draw the current character
    context.fillText(char, x, y);

    // Move to the next character
    x += context.measureText(char).width + laserSpacing;
  }

  // Check if the laser lights have reached the edge of the screen
  if (x + dx > canvas.width || x + dx < 0) {
    dx = -dx;
  }

  // Move the laser lights
  x += dx;
  y += dy;
}

// Update the animation
function update() {
  moveLaserLights();
  requestAnimationFrame(update);
}

// Start the animation
update();
