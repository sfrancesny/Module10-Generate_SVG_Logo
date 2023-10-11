class Shape {
    constructor(color) {
        this.color = color;
    }

    getSvgString() {
        throw new Error("Method 'getSvgString()' must be implemented.");
    }
}

class Circle extends Shape {
    getSvgString() {
        return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    getSvgString() {
        return `<polygon points="150,10 290,190 10,190" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    getSvgString() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

export { Circle, Triangle, Square };
