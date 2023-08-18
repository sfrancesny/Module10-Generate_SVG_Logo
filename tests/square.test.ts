import { describe, expect, test } from '@jest/globals';
import { Square } from '../lib/shapes';

describe('Square class', () => {
  test('should render an SVG string with the given shape color', () => {
    const shapeColor = '#00FF00'; // Example shape color
    const square = new Square();

    const expectedSVG = `
      <rect x="50" y="50" width="100" height="100" fill="${shapeColor}" />
    `;

    expect(square.render(shapeColor)).toBe(expectedSVG);
  });
});
