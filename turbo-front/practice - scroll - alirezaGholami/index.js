class AutoScroller {
	constructor(element, speed) {
		this.element = element;
		this.speed = speed;
		this.movingInverval = null;
	}

	start() {
		if(!this._hasScroll()){
			alert('it hasn\'t any scroll!');
			return
		}

		if (this._isFinished()) {
			this.stop();
			alert('scroll finished!');
			return;
		}

		if(this.movingInverval !== null){
			return
		}

		this._scroll();
		this.movingInverval = setInterval(() => {
			this._scroll()
		}, 1000)
	}

	stop() {
		clearInterval(this.movingInverval);
		this.movingInverval = null;
	}

	top() {
		this.element.scroll(0, 0)
	}

	_scroll() {
		if (this._isFinished()) {
			this.stop();
			alert('scroll finished!');
			return;
		}
		const scrollValue = this.element.scrollTop + this.speed;
		this.element.scroll(0, scrollValue)
	}
	_isFinished(){
		return (this.element.scrollTop >= (this.element.scrollHeight - this.element.clientHeight))
	}

	_hasScroll(){
		return (this.element.scrollHeight > this.element.clientHeight)
	}

}

const textElement = document.querySelector('.text')
const autoScrollerInstance = new AutoScroller(textElement, 10)
autoScrollerInstance.start();


const clicked = (action) => {
	autoScrollerInstance[action]()
}