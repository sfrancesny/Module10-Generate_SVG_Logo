import generateCircle from './circle.js';
import generateTriangle from './triangle.js';
import generateSquare from './square.js';

const generateLogo = (text, textColor, shape, shapeColor) => {
  let shapeSVG = '';

  if (shape === 'circle') {
    shapeSVG = generateCircle(shapeColor);
  } else if (shape === 'triangle') {
    shapeSVG = generateTriangle(shapeColor);
  } else if (shape === 'square') {
    shapeSVG = generateSquare(shapeColor);
  }

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="${textColor}">
        ${text}
      </text>
    </svg>
  `;

  return svgContent;
};

export { generateCircle, generateTriangle, generateSquare };
export default generateLogo;

