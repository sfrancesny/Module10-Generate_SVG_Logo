import fs from 'fs';
import inquirer from 'inquirer';
import { createLogoSVG } from './lib/logoGenerator.js'; // Adjust the path accordingly
import { Triangle, Circle, Square } from './lib/shapes.js'; // Adjust the path accordingly

async function generateLogo() {
  const userInput = await inquirer.prompt([
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
        choices: ['circle', 'triangle', 'square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hexadecimal number):'
      }
  ]);

  const svgContent = createLogoSVG(userInput);

  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

generateLogo();
