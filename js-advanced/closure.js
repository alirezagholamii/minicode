function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

// closures-exercise-6
//problem
// const array = [1,2,3,4];
// for(var i=0; i < array.length; i++) {
//   setTimeout(function(){
//     console.log('I am at index ' + i)
//   }, 3000)
// }

// const array = [1,2,3,4];
// for(let i=0; i < array.length; i++) {
//   setTimeout(function(){
//     console.log('I am at index ' + array[i])
//   }, 3000)
// }


// const array = [1,2,3,4];
// for(var i=0; i < array.length; i++) {
//   (function(closureI) {
//     setTimeout(function(){
//       console.log('I am at index ' + array[closureI])
//     }, 3000)
//   })(i)
// }     


/***************************************/
function a() {
  let grandpa = 'grandpa'
  return function b() {
    let father = 'father'
    return function c() {
      let son = 'son'
      return `${grandpa} > ${father} > ${son}`
    }
  }
}

//a()()()
const one = a();
const two = one();
const three = two()
console.log(three);

//closures and higher order function
function boo(string) {
  return function (name) {
    return function (name2) {
      console.log(`${string} ${name} ${name2}`)
    }
  }
}

const boo2 = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`)

boo2('hi')('john')('tanya');

// AHH! HOW DOES IT REMEMBER THIS 5 years from now?
booString = boo2('sing');
booStringName = booString('John');
booStringNameName2 = booStringName('tanya')

