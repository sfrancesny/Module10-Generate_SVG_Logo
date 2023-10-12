import { Square } from '../shapes';

describe("Square Tests", () => {

    test("Square should render correctly", () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.getSvgString()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
    });

});

