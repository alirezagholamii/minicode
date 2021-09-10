// Interfaces

// Interfaces in TypeScript are a useful tool
// that you can use for your classes to ensure that
// they conform to any specific rules that you want 
// them to. This is especially useful if there are
// many people working on the same code base, and any
// classes need to follow any specific rules.
/* 
interface IAnimal {
    name: string
    age: number

    feed(food: string, amount: number): void
}

class Cat implements IAnimal {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
                this.name +
                ' the Cat ' +
                amount +
                ' kg of ' +
                food
        )
    }
}
// When a class implements interface, 
// the class must implement all of the methods and properties that
// are described in the interface.
// But that doesn't mean that a
// class can't have its own custom methods and properties

class Dog implements IAnimal {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
                this.name +
                ' the Dog ' +
                amount +
                ' kg of ' +
                food
        )
    }
}

const CAT = new Cat('Cosmo', 8)
const DOG = new Dog('Rusty', 12)
CAT.feed('Fish', 0.1)
DOG.feed('Beef', 0.25) */