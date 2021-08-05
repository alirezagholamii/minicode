let input = document.querySelector('#input');
let result = document.querySelector('#result');


input.addEventListener('input', (e)=>{
	const value = e.target.value.trim();
	if(!Number.isInteger(+value)){
		result.innerHTML = "Please enter an integer number!"
		return
	}
	if(isDieHardNumber(value)){
		result.innerHTML = 'YES'
	}else{
		result.innerHTML = 'NO'
	}
})


const isPrime = (num) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++){
    	if(num % i === 0) return false; 
    }
    return num > 1;
}

const isDieHardNumber = (num) => {
	for(let i = 1; i<num.length; i++){
		if( !isPrime( +num.slice(0,i) ) ){ return false }
	}
	return isPrime(+num)
}