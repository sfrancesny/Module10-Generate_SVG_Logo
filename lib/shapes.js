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

// index.js
const fs = require('fs');
const inquirer = require('inquirer');
const { Shape, Triangle, Circle, Square } = require('./lib/shapes.js');

class LogoGenerator {
  constructor() {
    this.inquirer = inquirer;
    this.fs = fs;
    this.shapes = {
      triangle: Triangle,
      circle: Circle,
      square: Square
    };
  }

  async generateLogo() {
    const userInput = await this.inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: input => input.length <= 3 ? true : 'Please enter up to three characters.'
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (color keyword or hexadecimal number):'
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: Object.keys(this.shapes)
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hexadecimal number):'
      }
    ]);

    const ShapeClass = this.shapes[userInput.shape];
    const shapeInstance = new ShapeClass();

    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeInstance.getSVGMarkup(userInput.shapeColor)}

        <text x="50%" y="50%" font-family="Arial" font-size="16" fill="${userInput.textColor}" text-anchor="middle" dy=".3em">${userInput.text}</text>
      </svg>
    `;

    this.fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
  }
}

const logoGenerator = new LogoGenerator();
logoGenerator.generateLogo();
