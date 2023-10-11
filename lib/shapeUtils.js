function createShapeInstance(shape, color) {
  return {
      type: shape,
      color: color,
  };
}

function generateSVG(text, textColor, shapeInstance) {
  // Generate the SVG markup for the chosen shape
  let shapeSVG = "";
  switch (shapeInstance.type) {
      case "circle":
          shapeSVG = `<circle cx="150" cy="100" r="50" fill="${shapeInstance.color}" />`;
          break;
      case "triangle":
          shapeSVG = `<polygon points="100,25 200,175 0,175" fill="${shapeInstance.color}" />`;
          break;
      case "square":
          shapeSVG = `<rect x="50" y="50" width="100" height="100" fill="${shapeInstance.color}" />`;
          break;
      default:
          break;
  }

  const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG}
      <text x="150" y="110" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;  

  return svgContent;
}

export default {
  createShapeInstance,
  generateSVG
};
