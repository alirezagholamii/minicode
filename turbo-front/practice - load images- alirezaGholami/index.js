const allImages = document.querySelectorAll('img');

const showImg = () => {
	allImages.forEach((element) => {
		if (imgIsVisible(element) && element.hasAttribute('data-src')) {
			element.src = element.dataset.src;
			element.removeAttribute('data-src')
		}
	})
}

const imgIsVisible = (element) => {
	return (element.offsetTop < (window.pageYOffset + window.innerHeight))
}

showImg();
window.addEventListener('scroll',showImg);