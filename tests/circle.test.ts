import { describe, expect, test } from '@jest/globals';
import { Circle } from 'shapes';

describe('Circle class', () => {
  test('should render an SVG string with the given shape color', () => {
    const shapeColor = '#FF0000'; // Example shape color
    const circle = new Circle();

    const expectedSVG = `
      <circle cx="150" cy="100" r="50" fill="${shapeColor}" />
    `;

    expect(circle.render(shapeColor)).toBe(expectedSVG);
  });
});

