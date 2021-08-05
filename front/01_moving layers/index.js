
const onInit = () => {
	const movingElements = document.querySelectorAll('[data-xmove]');
	storeDefaultLeftMargin(movingElements)
	addScrollListener(movingElements)
}

const storeDefaultLeftMargin = (elements) => {
	elements.forEach((element) => {
		let defaultLeftMargin = getStyle(element, 'margin-left')
		element.defaultLeftMargin = pxToNumber(defaultLeftMargin);
	})
}

const addScrollListener = (elements) => {
	document.addEventListener('scroll', (e) => {
		elements.forEach((element) => {
			moveElement(element)
		})
	})
}



const moveElement = (element) => {
	if (isVisible(element.parentElement)) {
		setMarginLeft(element)
	}
}

const isVisible = (element) => {
	return (element.offsetTop < (window.pageYOffset + window.innerHeight)) && (window.pageYOffset < (element.offsetTop + element.offsetHeight))
}

const setMarginLeft = (element) => {
	const movingX = pxToNumber(element.dataset.xmove);
	const parentElement = element.parentElement;
	let moveOnThisScroll = ((window.pageYOffset - (parentElement.offsetTop - window.innerHeight)) / (window.innerHeight + parentElement.offsetHeight)) * movingX;
	moveOnThisScroll = Math.round(moveOnThisScroll)
	element.style.marginLeft = (element.defaultLeftMargin + moveOnThisScroll) + 'px';
}

const getStyle = (element, attr) => {
	return window.getComputedStyle(element)[attr]
}
const pxToNumber = (input) => {
	return +input.split('px')[0]
}

onInit();
