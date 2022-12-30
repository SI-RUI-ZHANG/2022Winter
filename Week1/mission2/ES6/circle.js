export const PI = Math.PI;
export const degreesToRadians = degrees => degrees * PI / 180;

export class Circle {
    constructor(r) {
        this.radius = r;
    }

    area() {
        return PI * this.radius * this.radius;
    }
}

// you can also:
// export {PI, degreesToRadians, Circle};