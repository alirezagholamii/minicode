//1

function Particle(){
  this.x = 50;
  this.y = 52;
  this.show = function(){
    console.log(this.x,this.y);
  }
}

let p = new Particle();
console.log(p);

let p2 = new Particle();
p2.x++;
console.log(p2);


// 2
/*
function Particle() {
  this.x = 50;
  this.y = 52;
}

Particle.prototype.show = function () {
  console.log(this.x, this.y);
}

let p = new Particle();
console.log(p);

let p2 = new Particle();
p2.x++;
p2.show()
console.log(p2);

console.log(p2.hasOwnProperty('x')); //true
console.log(p2.hasOwnProperty('show')); //false
*/


//Array.map() => to print '🗺'
/*
Array.prototype.map = function()  { // what happens with arrow function here?
    arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push((this[i]+'🗺'));
    }
    return arr;
  }
  console.log([1,2,3].map())
  
  //Date object => to have method .yesterday() which shows you yesterday's day in 'YYYY-MM-DD' format.
  Date.prototype.lastYear = function(){
    return this.getFullYear() - 1;
  }
  
  new Date('1900-10-10').lastYear()
  // don't worry if you didn't get t

*/

