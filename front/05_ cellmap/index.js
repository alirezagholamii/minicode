const container = document.querySelector('.display-container')

// 5x5 map
// 0   1  2   3   4
// 5   6  7   8   9
// 10  11 12  13  14
// 15  16 17  18  19
// 20  21 22  23  24
const characterMap = {
	A: [1, 2, 5, 8, 10, 11, 12, 13, 15, 18, 20, 23],
	B: [0, 1, 2, 5, 7, 10, 11, 12, 13, 15, 18, 20, 21, 22, 23],
	C: [0, 1, 2, 3, 5, 8, 10, 15, 18, 20, 21, 22, 23],
	D: [0, 1, 2, 5, 8, 10, 13, 15, 18, 20, 21, 22],
	E: [0, 1, 2, 5, 10, 11, 12, 15, 20, 21, 22],
	F: [0, 1, 2, 3, 5, 10, 11, 12, 15, 20],
	F: [0, 1, 2, 3, 5, 10, 11, 12, 15, 20],
	L: [0, 5, 10, 15, 20, 21, 22],
	0: [6, 7, 8, 11, 13, 16, 17, 18],
	1: [1, 6, 11, 16, 21],
	2: [1, 3, 6, 7, 8, 11, 16, 21],
	3: [0, 5, 10, 15, 20, 6, 7, 2, 8, 9, 4],
	' ': [],
}


const convertCellMapToElement = (array) => {
	const girdContainer = document.createElement('div');
	girdContainer.classList.add('grid-container')

	for (let i = 0; i < 25; i++) {
		const div = document.createElement('div');
		if (array.includes(i)) {
			div.classList.add('fill')
		}
		girdContainer.appendChild(div)
	}
	return girdContainer

}



document.addEventListener('keydown', (e) => {
	e.preventDefault();

	const char = e.key.toUpperCase();
	const cellMap = characterMap[char];

	if (e.repeat) {
		console.log('repeating key: ', e.key);
		return
	}

	if (e.key === 'Backspace' && container.lastElementChild) {
		container.removeChild(container.lastElementChild);
		return
	}

	if (!cellMap) {
		console.log('unsupported key: ', e.key);
		return
	}

	const newCharElement = convertCellMapToElement(cellMap);
	container.appendChild(newCharElement)

})


