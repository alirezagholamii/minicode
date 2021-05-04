let head ;
let numberOfVisibleSlides;
let numberOfSlides;
const carousel = document.querySelector('.carousel');
const leftBtn = document.getElementById('btn-left');
const rightBtn = document.getElementById('btn-right');




const pxToNumber = (input) => {
	return +input.split('px')[0]
}

const setBtnState = () => {
	if (head === 0) {
		leftBtn.classList.add('btn--disable')
	} else {
		leftBtn.classList.remove('btn--disable')
	}

	if ((numberOfSlides - head) === numberOfVisibleSlides) {
		rightBtn.classList.add('btn--disable')
	} else {
		rightBtn.classList.remove('btn--disable')
	}
}

const setNumberOfVisibleSlide = (number) => {
	const width = (100 / number) + '%'
	const minWidth = '' + carousel.offsetWidth / number;
	let i = 0;
	while (i < numberOfSlides) {
		carousel.children[i].style.minWidth = width;
		i++;
	}

}

const goToLeft = () => {
	if (head === 0) {
		return
	}
	const prevSlideIndex = head - 1;
	const prevSlide = carousel.children[prevSlideIndex];
	carousel.children[0].style.marginLeft = '' + (pxToNumber(carousel.children[0].style.marginLeft) + prevSlide.offsetWidth) + 'px'
	head--;
	setBtnState()

}

const goToRight = () => {
	if ((numberOfSlides - head) === numberOfVisibleSlides) {
		return
	}
	const nextSlideIndex = head + numberOfVisibleSlides
	const nextSlide = carousel.children[nextSlideIndex];
	if (carousel.children[0].style.marginLeft === '') {
		carousel.children[0].style.marginLeft = '0px';
	}
	carousel.children[0].style.marginLeft = '' + (pxToNumber(carousel.children[0].style.marginLeft) - nextSlide.offsetWidth) + 'px'
	head++;
	setBtnState()
}


const goToLastSlide = () => {
	head = numberOfSlides - numberOfVisibleSlides;
	let marginLeft = 0;
	let i = 0;
	while (i < head) {
		marginLeft = marginLeft + carousel.children[i].offsetWidth
		i++
	}
	carousel.children[0].style.marginLeft = '' + -marginLeft + 'px';
	setBtnState()

}

const goToFirstSlide = () => {
	head = 0;
	carousel.children[0].style.marginLeft = '0px';
	setBtnState()

}


const onInit = (param) => {
	head = 0;
	numberOfVisibleSlides = param;
	numberOfSlides = carousel.children.length;
	setNumberOfVisibleSlide(param)
	setBtnState();
}

onInit(4)




rightBtn.addEventListener('click', (event) => {
	goToRight();
	if(event.ctrlKey){
		goToRight();
	}
})
leftBtn.addEventListener('click', (event) => {
	goToLeft();
	if(event.ctrlKey){
		goToLeft();
	}
	
})

rightBtn.addEventListener('auxclick', (e) => {
	e.preventDefault();
	goToLastSlide();
})

leftBtn.addEventListener('auxclick', (e) => {
	e.preventDefault();
	goToFirstSlide();
})



