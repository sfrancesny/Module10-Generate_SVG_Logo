// lib/square.test.js
import { Square } from 'lib\shapes.js';

describe('Square', () => {
  it('should render an SVG string with the given shape color', () => {
    const shapeColor = '#0000FF'; // Example shape color
    const square = new Square();

    const expectedSVG = `
      <rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />
    `;

    expect(square.render(shapeColor)).toBe(expectedSVG);
  });
});
