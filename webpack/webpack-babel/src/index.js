import log from './log.js'
// import _ from 'lodash'
class Animal {
    constractor(name) {
        this.name = name;
    }
    talk(){
        console.log('Hi!');
    }
}

const mainArr = [1,2,3,4]

const secondArr = [...mainArr,10]

const cat = new Animal('Tom');
const mouse = new Animal('Jerry');

log(secondArr);
log(cat);
mouse.talk()

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }
  
//   document.body.appendChild(component());