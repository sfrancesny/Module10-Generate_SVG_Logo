const inquirer = require('inquirer'); // Use CommonJS syntax
import fs from 'fs';
import generateCircle from './lib/circle';
import generateTriangle from './lib/triangle';
import generateSquare from './lib/square';
import generateLogo, { generateCircle, generateTriangle, generateSquare } from './lib/shapes.js';

const promptUser = async () => {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: input => input.length <= 3 || 'Text must be up to three characters',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color keyword or hexadecimal number):',
    },
  ]);

  let shapeSVG = '';
  if (userInput.shape === 'circle') {
    shapeSVG = generateCircle(userInput.shapeColor);
  } else if (userInput.shape === 'triangle') {
    shapeSVG = generateTriangle(userInput.shapeColor);
  } else if (userInput.shape === 'square') {
    shapeSVG = generateSquare(userInput.shapeColor);
  }

  const svgContent = generateLogo(
    userInput.text,
    userInput.textColor,
    shapeSVG
  );

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
};

promptUser();
