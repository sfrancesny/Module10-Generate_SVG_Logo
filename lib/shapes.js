// lib/shapes.js
export class Triangle {
  render(shapeColor) {
    return `
      <polygon points="150,30 120,130 180,130" fill="${shapeColor}" />
    `;
  }
}

export class Circle {
  render(shapeColor) {
    return `
      <circle cx="150" cy="100" r="50" fill="${shapeColor}" />
    `;
  }
}

export class Square {
  render(shapeColor) {
    return `
      <rect x="50" y="50" width="100" height="100" fill="${shapeColor}" />
    `;
  }
}
