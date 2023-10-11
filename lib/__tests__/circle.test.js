import { Circle } from './lib/shapes';

describe("Circle Tests", () => {

    test("Circle should render correctly", () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="90" fill="red" />');
    });

});
