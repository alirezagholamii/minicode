let input = document.querySelector('#input');
let result = document.querySelector('#result');


input.addEventListener('input', (e)=>{
	const value = e.target.value.trim();
	if(!Number.isInteger(+value)){
		result.innerHTML = "Please enter an integer number!"
		return
	}
	if(isPerfectNumber(+value)){
		result.innerHTML = 'YES'
	}else{
		result.innerHTML = 'NO'
	}
})


const isPerfectNumber = (num) => {
   if(num%2 !== 0) {
      return false;
   };

   let sum = 1;
   for(let i = 2, s = Math.sqrt(num); i <= s; i++){
      if(num % i === 0) {
         sum = sum + i + num / i;
          if(sum > num) { return false }
      };
   };
   return sum === num;
};