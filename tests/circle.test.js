// lib/circle.test.js
import { Circle } from '/lib/shapes.js';

describe('Circle', () => {
  it('should render an SVG string with the given shape color', () => {
    const shapeColor = '#00FF00'; // Example shape color
    const circle = new Circle();

    const expectedSVG = `
      <circle cx="150" cy="100" r="40" fill="${shapeColor}" />
    `;

    expect(circle.render(shapeColor)).toBe(expectedSVG);
  });
});
