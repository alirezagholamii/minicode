let timeout;
let clockMovingInterval;
const screenSaver = document.getElementById('screenSaver');
const clock = document.getElementById('clock');


const showScreenSaver = (idleTime = 10000, clockMovingDelay = 5000) => {
	updateClock();


	hideScreenSaver(idleTime, clockMovingDelay)


	document.addEventListener("keydown", () => { hideScreenSaver(idleTime, clockMovingDelay) });
	document.addEventListener("mousemove", () => { hideScreenSaver(idleTime, clockMovingDelay) });

}

const hideScreenSaver = (idleTime, clockMovingDelay) => {
	screenSaver.style.display = 'none'

	if (timeout) {
		clearTimeout(timeout)
	}


	timeout = setTimeout(() => {
		screenSaver.style.display = 'flex';
		moveClock(clockMovingDelay)
	}, idleTime)
}

const updateClock = () => {
	let clockInterval = setInterval(() => {
		const date = new Date();
		clock.innerText = date.toLocaleTimeString('en-US', { hour12: false });
	}
		, 1000)
}

const moveClock = (clockMovingDelay = 10000) => {
	if (clockMovingInterval) {
		clearInterval(clockMovingInterval)
	}
	clock.style.position = 'unset';
	clock.style.top = 'unset';
	clock.style.left = 'unset';
	clockMovingInterval = setInterval(() => {
		clock.style.position = 'absolute';
		clock.style.top = `${getRandomNumber((window.innerHeight - clock.offsetHeight))}px`
		clock.style.left = `${getRandomNumber((window.innerWidth - clock.offsetWidth))}px`


	}, clockMovingDelay)
}

const getRandomNumber = (max) => {
	return Math.floor(Math.random() * max)
}

showScreenSaver(5000, 5000);












