let input = document.querySelector('#input');

// 5x5 map
// 0   1  2   3   4
// 5   6  4   8   9
// 10  11 12  13  14
// 15  16 17  18  19
// 20  21 22  23  24
const characterMap = {
	A: [1, 2, 5, 8, 10, 11, 12, 13, 15, 18, 20, 23],
	B: [0, 1, 2, 5, 7, 10, 11, 12, 13, 15, 18, 20, 21, 22, 23],
	C: [0, 1, 2, 3, 5, 8, 10, 15, 18, 20, 21, 22, 23],
	D: [0, 1, 2, 5, 8, 10, 13, 15, 18, 20, 21, 22],
	F: [0, 1, 2, 3, 5, 10, 11, 12, 15, 20],
	1: [1, 6, 11, 16, 21],
	2: [1, 3, 6, 7, 8, 11, 16, 21],
	3: [0, 5, 10, 15, 20, 6, 7, 2, 8, 9, 4],
	' ': [],
	'unknown': [5, 8, 15, 16, 17, 18,]
}

const toUpperCase = (str) => {
	return str.toUpperCase()
}

const strToArray = (str) => {
	return str.split('')
}

const decodeTo5x5 = (array) => {
	let arrayOf5x5s = [];
	array.forEach(char => {
		if (characterMap[char]) {
			arrayOf5x5s.push(characterMap[char])
		} else {
			arrayOf5x5s.push(characterMap['unknown'])
		}
	});
	return arrayOf5x5s
}

const convert5x5ToElement = (array) => {
	let displayContainer = document.createElement('div');

	array.forEach((item) => {
		let girdContainer = document.createElement('div');
		girdContainer.classList.add('grid-container')

		for (let i = 0; i < 25; i++) {
			let div = document.createElement('div');
			if (item.indexOf(i) !== -1) {
				div.classList.add('fill')
			}
			girdContainer.append(div)
		}

		displayContainer.append(girdContainer)
	})

	return displayContainer;
}

const displayElement = (element) => {
	document.getElementsByClassName('display-container')[0].innerHTML = element.innerHTML
}

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);


input.addEventListener('input', (e) => {
	const value = e.target.value.trim();
	pipe(
		toUpperCase,
		strToArray,
		decodeTo5x5,
		convert5x5ToElement,
		displayElement
	)(value);

})


