const secondHand = document.querySelector('.hand--second');
const minuteHand = document.querySelector('.hand--minute');
const hourHand = document.querySelector('.hand--hour');

const digitalClock = document.querySelector('.clock__digital');


let clicked = false;





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
	if(!clicked){
		secondHand.style.transform = getHandTransform(second, 60);

	}
	minuteHand.style.transform = getHandTransform(minute, 60);
	hourHand.style.transform = getHandTransform(hour, 12);
}

const getHandTransform = (handValue, divideValue) => {
	return `rotateZ(${((handValue / divideValue) * 360)}deg)`;
}




onInit();

const analogClock = document.querySelector('.clock__analog')
analogClock.addEventListener('click', function (e) {
	clicked = true;
	const x = e.clientX - this.offsetLeft;
	const y = e.clientY - this.offsetTop;
	pipe(
		axisDriver,
		calcAngleDegrees,
		toFixed,
		setHandTransformByClick
	)({x:x, y:y, width:this.offsetWidth, height:this.offsetHeight});
})


const axisDriver = (param) => { // انتقال محور طول و عرض به مرکز المنت برای ساده کردن محاسبات
	return {
		x: param.x - (param.width / 2),
		y: -(param.y - (param.height / 2))
	}
}

const calcAngleDegrees = (param) => {
	return Math.atan2(param.x, param.y) * 180 / Math.PI;
}

const setHandTransformByClick = (degree) => {
	secondHand.style.transform = `rotateZ(${(degree)}deg)`;
}

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const toFixed = (n, fixed=1) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);







