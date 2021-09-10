/* class ClassWithProperty {
    abc = 123
}

class ClassWithStaticProperty {
    static abc = 123
}

class ClassWithMethod {
    method() {
        return 123
    }
}

class ClassWithStaticMethod {
    static method() {
        return 123
    }
}

ClassWithStaticMethod.method()   */

class Circle {
    radius: number
    static PI = 3.14

    constructor(radius: number) {
        this.radius = radius
    }
}

console.log('Circle.PI = ' + Circle.PI)

const CIRCLE1 = new Circle(1)
const CIRCLE2 = new Circle(2)
const CIRCLE3 = new Circle(3)
console.log('CIRCLE1 Area = ' + Circle.PI * CIRCLE1.radius ** 2)
console.log('CIRCLE2 Area = ' + Circle.PI * CIRCLE2.radius ** 2)
console.log('CIRCLE3 Area = ' + Circle.PI * CIRCLE3.radius ** 2)