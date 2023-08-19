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

// Export the classes
module.exports = { Shape, Triangle, Circle, Square };

// lib/logoGenerator.js
const { Shape, Triangle, Circle, Square } = require('./shapes.js');

class LogoGenerator {
  constructor() {
    // Initialize properties here
  }

  async generateLogo() {
    // Your logo generation logic here
  }
}

// Export the class
module.exports = LogoGenerator;

// index.js
const LogoGenerator = require('./lib/logoGenerator.js');

const logoGenerator = new LogoGenerator();
logoGenerator.generateLogo();
