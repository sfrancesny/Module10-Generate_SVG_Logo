import { Triangle } from './lib/shapes';

describe("Triangle Tests", () => {

    test("Triangle should render correctly", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150,10 290,190 10,190" fill="blue" />');
    });

});
