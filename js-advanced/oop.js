// how we can go from Procedural code to OOP


//basic
//in side a game we have Drgons Wizards Kings and Elfs
//lets create elfs

//1
const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack(){
        return `attack with ${elf.weapon}`
    }
}
console.log("🚀elf.attack();", elf.attack())



const elf2 = {
    name: 'Sally',
    weapon: 'sword',
    attack(){
        return `attack with ${elf2.weapon}`
    }
}

console.log("🚀elf2.attack();", elf2.attack())

//we have to copy and paste the same code over and over
//it's not DRY




/*
//2
//factory functions
//a function that creates objects for us

function cerateElf(name,weapon) {
    return {
        name:name,
        weapon, //ES6
        attack(){
            return `attack with ${weapon}` 
        }
    }
}
const peter = cerateElf('Peter','stone')
console.log("🚀peter.attack()", peter.attack())

const sam = cerateElf('Sam','fire')
console.log("🚀sam.attack()", sam.attack())

// we avoided repetitive code but there's still a problem here
// what if we had 1000 elfs
// they require space in our memory
// things like name and weapon gonna be different so we need to store that data in memory for each elf
// but methods such as 'attack', they're the same thing that is going to be copied!
*/


/*
// 3
// for solving that problem we can do this:
const elfFunctions = {
    attack(){
        return `attack with ${this.weapon}` 

    }
}
function cerateElf(name,weapon) {
    return {
        name,
        weapon,
    }
}
const peter = cerateElf('Peter','stone')
peter.attack =  elfFunctions.attack
console.log("🚀peter.attack()", peter.attack())

const sam = cerateElf('Sam','fire')
sam.attack =  elfFunctions.attack
console.log("🚀sam.attack()", sam.attack())
*/



/*
//4
// Javascript gives us a nice little tool 
// Object.create()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

const elfFunctions = {
    attack(){
        return `attack with ${this.weapon}` 

    }
}
function cerateElf(name,weapon) {
    let newElf = Object.create(elfFunctions) // create prototype chain for us
    newElf.name = name;
    newElf.weapon = weapon;

    return  newElf
}

const peter = cerateElf('Peter','stone')
console.log("🚀peter.attack()", peter.attack())

const sam = cerateElf('Sam','fire')
console.log("🚀sam.attack()", sam.attack())
//the code is a little bit cleaner now, we have less lines of code.
//however you won't see this out in most code bases.
*/

//5

// Constructor Functions

/*
function elf(name, weapon) {
    this.name = name;
    this.weapon = weapon
}

const peter = elf('Peter', 'stone')
console.log("🚀 ~ file: 4.go to OOP.js ~ line 128 ~ peter.name", peter.name)
// console.log("🚀peter.attack()", peter.attack())

const sam = elf('Sam', 'fire')
// console.log("🚀sam.attack()", sam.attack())

// we go an error: 4.go to OOP.js:127 Uncaught TypeError: Cannot read property 'name' of undefined
// because to use a constructor function you need to use the 'new' keyword in javascript.
*/
/*
function elf(name,weapon) {
    this.name = name;
    this.weapon = weapon
}

const peter = new elf('Peter','stone')
 console.log("🚀 ~ file: 4.go to OOP.js ~ line 128 ~ peter.name", peter.name)

const sam = new  elf('Sam','fire')
*/

// any function that is inkoked using the new keyword is called a constructor function
// like: Number(), Object(), Function()
// as a rule, all constructor functions should start with a Capital letter.
// so elf() >>> Elf()
// because this is a function and every function in javascript gets automaticlly a prototype property
// https://javascript.info/prototype-inheritance

/*
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon
}
Elf.prototype.attack = function () {
    return `attack with ${this.weapon}`
}

const peter = new Elf('Peter', 'stone')
console.log("🚀peter.attack()", peter.attack())

const sam = new Elf('Sam', 'fire')
console.log("🚀sam.attack()", sam.attack())
*/

// console.log("🚀 ~ line 167 ~ peter.prototype", peter.prototype)

// the problem with this code is prototype is kind of wierd.
// it's a little hard to understand


// Funny Thing About JS
/*
let a = new Number(5)
typeof a;
let b = 5;
typeof b;
a == b;

new Date()
*/



// ES6 Class
/*
class Elf {
    constructor(name, weapon) { // constructor gets run every time we instantiate 
        this.name = name;
        this.weapon = weapon
    }
    attack() {
        return `attack with ${this.weapon}`
    }
}

const peter = new Elf('Peter', 'stone') // we are instantiating a class
console.log("🚀peter.attack()", peter.attack())

const sam = new Elf('Sam', 'fire')
console.log("🚀sam.attack()", sam.attack())

console.log(peter instanceof Elf)
*/
// finally have object oriented programming in Javascript
// not really!
// this is what we call syntactic sugar
// underneath the hood in Javascript, we are still using prototype.
// we are not using classes like classes work in other languages.
// in other languages like java and C++, Classes are an actual thing.
// in javascript Classes are still just objects