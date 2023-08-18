const fs = require('fs');
const inquirer = require('inquirer');
const { createLogoSVG } = require('./logoGenerator'); // You need to implement the logo generation function

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

  // Generate SVG based on user input
  const svgContent = createLogoSVG(userInput);

  // Write SVG content to a file
  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

generateLogo();
