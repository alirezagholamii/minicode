const clicked = (action) => {
	const carousel = document.querySelector('.carousel');
	let array = [...carousel.children]
	let item;
	if (action === 'left') {
		item = array.shift();
		array.push(item)
	} else {
		item = array.pop();
		array.unshift(item)
	}


	carousel.innerHTML = ''

	array.forEach(item => {
		carousel.appendChild(item)
	})


}



