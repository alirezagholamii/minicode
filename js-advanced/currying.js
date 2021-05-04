function add(x) {
    return function(y) {
      return function(z) {
        return x + y + z;
      };
    };
  }

const x = add(10)(20)(40);
console.log(x);

