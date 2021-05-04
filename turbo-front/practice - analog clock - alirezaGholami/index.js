const secondHand = document.querySelector('.hand--second');
const minuteHand = document.querySelector('.hand--minute');
const hourHand = document.querySelector('.hand--hour');

const digitalClock = document.querySelector('.clock__digital');





const onInit = () => {
	updateClock();
	let clockInterval = setInterval(updateClock, 1000);
}

const updateClock = () => {
	const date = new Date();
	const second = date.getSeconds();
	const minute = date.getMinutes();
	const hour = date.getHours();
	updateDigitalClock(hour, minute)
	updateAnalogClock(hour, minute, second)


}

const updateDigitalClock = (hour, minute) => {
	if (hour < 10) {
		hour = '0' + hour
	}
	if (minute < 10) { 
		minute = '0' + minute
	}
	digitalClock.innerText = `${hour}:${minute}`;

}

const updateAnalogClock = (hour, minute, second) => {
	if (hour > 12) {
		hour = hour - 12
	}
	secondHand.style.transform = getHandTransform(second, 60);
	minuteHand.style.transform = getHandTransform(minute, 60);
	hourHand.style.transform = getHandTransform(hour, 12);
}

const getHandTransform = (handValue, divideValue) => {
	return `rotateZ(${((handValue / divideValue) * 360)}deg)`;
}


onInit();












