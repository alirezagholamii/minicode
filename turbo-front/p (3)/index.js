let input = document.querySelector('#input');
let result = document.querySelector('#result');





const findNulls = (obj,path) => {
	keys = Object.keys(obj)
	keys.forEach(item => {
		if(obj[item] === null  || typeof obj[item] === 'undefined'){
			console.log(path + ' ' +  item)
		}else if(typeof obj[item] === 'object' ){
			findNulls(obj[item] , path+ ' ' + item)
		}
	});

}

findNulls(obj1,'')

