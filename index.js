import fs from 'fs';
import inquirer from 'inquirer';
import { createLogoSVG } from './lib/logoGenerator.js';
import { Triangle, Circle, Square } from './lib/shapes.js';

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

    const svgContent = createLogoSVG(userInput, shapeInstance);

    this.fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
  }
}

const logoGenerator = new LogoGenerator();
logoGenerator.generateLogo();
