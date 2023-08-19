// shapeUtils.js

export function createShapeInstance(shape, color) {
  // Replace this with your actual shape creation logic
  return {
    type: shape,
    color: color,
    // ... additional shape properties
  };
}

export function generateSVG(text, textColor, shapeInstance) {
  // Replace this with your actual SVG generation logic
  const svgContent = `<svg width="300" height="200">
    <text x="50" y="100" fill="${textColor}">${text}</text>
    <!-- Shape drawing logic based on shapeInstance -->
  </svg>`;
  
  return svgContent;
}
