import { describe, expect, test } from '@jest/globals';
import { Triangle } from '../lib/shapes';

describe('Triangle class', () => {
  test('should render an SVG string with the given shape color', () => {
    const shapeColor = '#0000FF'; // Example shape color
    const triangle = new Triangle();

    const expectedSVG = `
      <polygon points="150,30 120,130 180,130" fill="${shapeColor}" />
    `;

    expect(triangle.render(shapeColor)).toBe(expectedSVG);
  });
});


