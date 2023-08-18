// lib/logoGenerator.js
import { Triangle, Circle, Square } from './shapes.js'; // Adjust the path accordingly

function createLogoSVG(userInput) {
  const { text, textColor, shape, shapeColor } = userInput;

  let shapeInstance;

  if (shape === 'triangle') {
    shapeInstance = new Triangle();
  } else if (shape === 'circle') {
    shapeInstance = new Circle();
  } else if (shape === 'square') {
    shapeInstance = new Square();
  }

  // Construct the SVG content using shapeInstance and user input
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.getSVGMarkup(shapeColor)}

      <text x="50%" y="50%" font-family="Arial" font-size="16" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
    </svg>
  `;

  return svgContent;
}

export { createLogoSVG };
