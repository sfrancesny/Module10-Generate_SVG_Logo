const generateTriangle = (shapeColor) => {
  return `
    <polygon points="150,20 250,180 50,180" fill="${shapeColor}" />
  `;
};

export default generateTriangle;