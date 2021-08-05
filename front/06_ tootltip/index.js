
const onInit = () => {
	const elements = document.querySelectorAll('[js-tooltip]');
	elements.forEach((element) => {

		const tooltip = document.createElement('span')
		tooltip.innerText = element.getAttribute('js-tooltip');
		tooltip.classList.add('tooltip');


		element.addEventListener('mouseover', (e) => {
			element.classList.add('tooltip-parent');
			element.appendChild(tooltip)

		})

		element.addEventListener('mouseout', (e) => {
			element.classList.remove('tooltip-parent');
			element.removeChild(tooltip)
		})

	})
}


onInit();



