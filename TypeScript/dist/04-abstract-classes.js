"use strict";
// Abstract Classes
/*
You can extend classes with Abstract classes.
Consider an abstract class as a base class.
It is a class that may have methods and properties that are common,
but another class can be created which extends from this base class and overrides
any existing methods or can add additional methods and properties specific for itself.

It is different than an interface in the way that is not indicating rules that the class must follow,
but the class that is extending will already have its own copies of the base classes properties and
methods once any new object is instantiated using it.

*/
/* class Animal {
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
                ' the ' +
                this.constructor.name +
                ' ' +
                amount +
                ' kg of ' +
                food
        )
    }
}

class Cat extends Animal {}

class Dog extends Animal {}

const cat = new Cat('Cosmo', 8)
const dog = new Dog('Rusty', 12)
cat.feed('Fish', 0.1)
dog.feed('Beef', 0.25) */
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    feed(food, amount) {
        console.log('Feeding ' +
            this.name +
            ' the ' +
            this.constructor.name +
            ' ' +
            amount +
            ' kg of ' +
            food);
    }
}
class Cat extends Animal {
    constructor(name, age, isHungry) {
        super(name, age);
        this.isHungry = isHungry;
    }
    feed(food, amount) {
        if (this.isHungry) {
            super.feed(food, amount);
        }
        else {
            console.log(this.name +
                ' the ' +
                this.constructor.name +
                ' is not hungry');
        }
    }
}
class Dog extends Animal {
}
const cat = new Cat('Cosmo', 8, false);
const dog = new Dog('Rusty', 12);
cat.feed('Fish', 0.1);
dog.feed('Beef', 0.25);
