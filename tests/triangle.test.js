// // lib/shapes.test.js

import { Triangle } from '../lib/shapes.js';

describe('Triangle', () => {
  it('should render an SVG string with the given shape color', () => {
    const shapeColor = '#FF0000'; // Example shape color
    const triangle = new Triangle();

    const expectedSVG = `
      <polygon points="150,30 120,130 180,130" fill="${shapeColor}" />
    `;

    expect(triangle.render(shapeColor)).toBe(expectedSVG);
  });
});











// import { Triangle } from 'lib\shapes.js';

// describe('Triangle', () => {
//   it('should render an SVG string with the given shape color', () => {
//     const shapeColor = '#FF0000'; // Example shape color
//     const triangle = new Triangle();

//     const expectedSVG = `
//       <polygon points="150,30 120,130 180,130" fill="${shapeColor}" />
//     `;

//     expect(triangle.render(shapeColor)).toBe(expectedSVG);
//   });
// });
