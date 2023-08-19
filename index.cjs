// index.js
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

inquirer
  .prompt([
    {
      name: "text",
      message: "Enter up to three characters:",
      validate: (input) => input.length <= 3 || "Enter up to three characters",
    },
    {
      name: "textColor",
      message: "Enter text color (color keyword or hexadecimal number):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      name: "shapeColor",
      message: "Enter shape color (color keyword or hexadecimal number):",
    },
  ])
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    const shapeInstance = createShapeInstance(shape, shapeColor);

    const svgContent = generateSVG(text, textColor, shapeInstance);

    fs.writeFile("logo.svg", svgContent, (err) => {
      if (err) {
        console.error("Error creating logo.svg:", err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function createShapeInstance(shape, color) {
  switch (shape) {
    case "triangle":
      return new Triangle(color);
    case "square":
      return new Square(color);
    case "circle":
      return new Circle(color);
    default:
      throw new Error("Invalid shape");
  }
}

function generateSVG(text, textColor, shape) {
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${shape.color}" />
      <text x="50%" y="50%" dy="0.35em" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  return svgContent;
}
