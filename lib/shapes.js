// lib/shapes.js
class Shape {
  constructor() {}

  getSVGMarkup(shapeColor) {
    // Abstract method, should be overridden by subclasses
    return '';
  }
}

class Triangle extends Shape {
  getSVGMarkup(shapeColor) {
    return `
      <polygon points="150,30 120,130 180,130" fill="${shapeColor}" />
    `;
  }
}

class Circle extends Shape {
  getSVGMarkup(shapeColor) {
    return `
      <circle cx="150" cy="100" r="40" fill="${shapeColor}" />
    `;
  }
}

class Square extends Shape {
  getSVGMarkup(shapeColor) {
    return `
      <rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />
    `;
  }
}

module.exports = { Triangle, Circle, Square };

// lib/logoGenerator.js
const { Triangle, Circle, Square } = require('./shapes.js');

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

module.exports = { createLogoSVG };
