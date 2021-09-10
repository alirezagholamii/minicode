"use strict";
// Access Modifiers
// TypeScript supports access modifiers for your class properties and methods.
// Public
// In JavaScript, all class properties are public by default so there is no need to write the public keyword in your TypeScript files.
// class Cat {
//     public name: string
//     constructor(name: string) {
//         this.name = name
//     }
// }
// const cat = new Cat('Tom')
// console.log(cat.name)
/* //Private
class Bird {
    private name: string

    constructor(name: string) {
        this.name = name
    }
    private customMerhod(): void{

    }
}

const bird = new Bird('Cosmo')
console.log(bird.name) // ⛔❌ */
// Protected
// A protected property is accessible only internally within the class or any class that extends it but not externally.
/*
class Animal {
    protected name: string
    protected age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

class Cat extends Animal {
    constructor(name: string, age: number) {
        super(name, age)
        console.log(this.name)
    }
}

const cat = new Cat('Cosmo', 8)
console.log(cat.name) // ❌
 */ 
