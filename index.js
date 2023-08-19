(async () => {
  try {
    const inquirer = await import("inquirer");
    const fs = require("fs");
    const { Triangle, Square, Circle } = await import("./lib/shapes");

    const answers = await inquirer.prompt([
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
    ]);

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
  } catch (error) {
    console.error("Error:", error);
  }
})();
