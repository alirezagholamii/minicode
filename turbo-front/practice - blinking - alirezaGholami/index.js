const blinking = (element, onTime, offTime, blinkingTime) => {
	if (element.hasAttribute("blinking")) {
		return
	}

	element.setAttribute("blinking", '');
	element.style.cursor = 'unset';

	const color = getColor();

	oneCycle(element, onTime, color);
	let blinkingInterval = setInterval(() => { oneCycle(element, onTime, color) }, onTime + offTime);

	setTimeout(() => {
		clearInterval(blinkingInterval);
		element.style['background-color'] = 'unset';
		element.removeAttribute('blinking');
		element.style.cursor = 'pointer'
	}, blinkingTime)

}


const oneCycle = (element, onTime, color) => {
	element.style['background-color'] = color;
	setTimeout(() => {
		element.style['background-color'] = 'unset';
	}, onTime)
}

const getColor = () => {
	return colors[Math.floor(Math.random() * colors.length)]
}
const colors = ['#f38181', '#fce38a', '#eaffd0', '#95e1d3']