// lib/shapes.js
class Triangle {
  getSVGMarkup(shapeColor) {
    return `
      <polygon points="150,30 120,130 180,130" fill="${shapeColor}" />
    `;
  }
}

class Circle {
  getSVGMarkup(shapeColor) {
    return `
      <circle cx="150" cy="100" r="40" fill="${shapeColor}" />
    `;
  }
}

class Square {
  getSVGMarkup(shapeColor) {
    return `
      <rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />
    `;
  }
}

module.exports = { Triangle, Circle, Square };
