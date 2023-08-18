// lib/logoGenerator.js
const { Triangle, Circle, Square } = require('./shapes');

function createLogoSVG(userInput) {
  const { text, textColor, shape, shapeColor } = userInput;

  // Use the user input and shape classes to generate the SVG content
  let svgContent = '';

  if (shape === 'triangle') {
    // Create a Triangle instance and add it to svgContent
  } else if (shape === 'circle') {
    // Create a Circle instance and add it to svgContent
  } else if (shape === 'square') {
    // Create a Square instance and add it to svgContent
  }

  // Add text and colors to svgContent

  return svgContent;
}

module.exports = { createLogoSVG };
