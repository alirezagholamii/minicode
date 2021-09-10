// Getting Started

/* function foo(bar: string) {
    return 'Hello, ' + bar
}

let baz = 'Alireza'

console.log(foo(baz)) */
/*
// Common Types
let foo: string
let bar: boolean
let baz: number
let qux: string[]
let quuz: [number, string]
let corge: { [key: number]: string }
let grault: Set<number>
baz = 0xffff

foo = 'ABCDDDDz'
bar = true
baz = 123
qux = ['a', 'b', 'c']
quuz = [1, 'abc']
corge = { 123: 'abc', 456: 'def' }
grault = new Set([1, 2, 3])
*/

/*
//Number
// A number can be written in many bases or with floating point precision.

let baz: number
baz = 123 //decimal
baz = 123.456 //float
baz = 0xffff //hex
baz = 0b10101 //binary
baz = 0o671 //octal
*/

/* Strings
Some more string experiments you can try are,


let foo: string
foo = 'ABC'
foo = '123'
foo = 'ABC = 123'
foo = 'quick brown fox, etc'
foo = "It wasn't me" */

/* Boolean
A boolean can either be true or false.


let bar: boolean
bar = true
bar = false */

/*
// Array
let a: string[]
a = ['a', 'b', 'd', 'd']
let b: number[]
b = [1, 2, 3, 4]
let c: boolean[]
c = [true, false, true]
let d: unknown[]
d = [1, 'a', true, ['even', 'another', 'internal', 'array']]
// Array items can be retrieved using a zero based index.
console.log(a[1])
console.log(b[0])
console.log(c[1])
console.log(d[2])
*/

/* let a:any[] = []
console.log(a); */

// Dictionary
// A Dictionary is used as a key/value construct, where you can retrieve a value from the dictionary by using a key.

// let a: { [key: number]: string }
// a = { 123: 'abc', 456: 'def' }
// let b: { [key: string]: boolean }
// b = { abc: true, def: false, ghi: true }

// console.log(a[123])
// console.log(b['def'])

/*
// The key of a dictionary can be of any type and name
let a: { [key: string]: string }
let b: { [id: number]: string }
a = { a: 'car', b: 'train', c: 'plane', d: 'boat' }
b = { 1: 'car', 2: 'train', 3: 'plane', 4: 'boat' }
// and can be retrieved as such
console.log(a['a'])
console.log(b[2])

// Since Dictionaries are really just objects. You can also retrieve
// a dictionary's value using object notation if the keys are strings
console.log(a.c)
// console.log(b.2) // this doesn't work when the key is a number

// you can add items to a dictionary
a['e'] = 'go-cart'
console.log(a)

// you can delete
delete b[2]
console.log(b)

// The values of a dictionary can be of any type, even an array.
let c: { [id: number]: number[] }
c = { 1: [1, 2, 3], 2: [4, 5, 6], 3: [7, 8, 9], 4: [10, 11, 12] }
console.log(c)
*/

/*
// Tuple
// The Tuple is similar to an array,
// but you are explicitly indicating how many items are
// in the Tuple and of which type they are when you instantiate
//  it. The Tuple type is not directly supported in JavaScript
//  as a Tuple, but as an array instead. The rules of the Tuple
//  are enforced in TypeScript only when it is created. After
//  the Tuple is created, it behaves the same as an array. You
//  can add/remove/edit items.

let a: [number, string]
a = [1, 'abc']
let b: [string, boolean, number]
b = ['abc', false, 123]

console.log(a[1])
console.log(b[2])
*/

// Set
// The Set object lets you store unique values of
//  any type. Any duplicate items added to the Set won't
//  be added.

let a: Set<number>
a = new Set([1, 2, 3, 4])
let b: Set<string>
b = new Set(['a', 'b', 'c', 'd', 'a']) // the second `a` is not added
let c: Set<unknown>
c = new Set([1, 'b', true])

console.log(a)
console.log(b)
console.log(c)

const someSet: Set<string> = new Set()

someSet.add('me')
someSet.add('you')
someSet.add('they')

console.log(someSet)
