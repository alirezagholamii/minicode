import { cars } from './cars.js'

class Slider {
  constructor(cars) {
    this.cars = cars;
    this.slideIndex = 0;
    this.setProperties();
    this.events();
    this.onInit();

  }

  setProperties() {
    this.nextBtn = document.querySelector('#next-btn');
    this.backBtn = document.querySelector('#back-btn');
    this.carImage = document.querySelector('#car-image');
    this.body = document.querySelector('body');
    this.slideBg = document.querySelector('.slide-bg');
    this.bar = document.querySelector('.line');
    this.indicator = document.querySelector('.indicator');
    this.title = document.querySelector('.info__header');
    this.summary = document.querySelector('.info__text');
    this.price = document.querySelector('.info__price');
    this.specsList = document.querySelector('.info__specs');
    this.slideInfo = document.querySelector('.info-slide');
    this.slideInfo0 = document.querySelector('.info-slide0');
    this.slideInfo1 = document.querySelector('.info-slide1');
  }

  events() {
    this.nextBtn.addEventListener('click', (e) => {
      if (this.nextBtn.classList.value.indexOf('btn--disable') === -1) {
        this.next()
      }

    })

    this.backBtn.addEventListener('click', (e) => {
      if (this.backBtn.classList.value.indexOf('btn--disable') === -1) {
        this.back()
      }
    })
  }

  onInit() {
    this.setBtnState();
    this.carImage.src = `./assets/images/${this.cars[0].image}`;
    this.body.style.backgroundColor = this.cars[0].theme;
    this.setBar();
    this.setContent();
    this.showSpecsList()
  }

  next() {
    this.slideIndex++;
    this.setSlide();
  }
  back() {
    this.slideIndex--;
    this.setSlide();
  }


  setSlide() {
    this.setCarImage();
    this.setBackground();
    this.setBtnState();
    this.setBar();
    this.showSpecsList();
    this.showInfo()
  }

  showInfo() {
    const RBGcolor = this.convertToRGB(this.cars[this.slideIndex].theme.substr(1));
    // :D
    this.slideInfo0.style.backgroundImage = `linear-gradient(to left, rgba(${RBGcolor[0]}, ${RBGcolor[1]}, ${RBGcolor[2]}, 0), rgba(${RBGcolor[0]}, ${RBGcolor[1]}, ${RBGcolor[2]}, 1))`
    this.slideInfo1.style.backgroundColor = this.cars[this.slideIndex].theme;
    this.slideInfo.classList.add('info-slide--move');

    setTimeout(() => {
      this.setContent();
      this.slideInfo.classList.remove('info-slide--move')
    }, 1_100);
  }

  showSpecsList() {
    this.specsList.classList.remove('info__specs--show')
    setTimeout(() => {
      this.specsList.innerHTML = ''
      this.cars[this.slideIndex].specifications.map((item) => {
        const li = document.createElement('li')
        li.innerText = item;
        this.specsList.appendChild(li)
      })
      this.specsList.classList.add('info__specs--show')
    }, 500);

  }

  setContent() {
    this.title.innerText = this.cars[this.slideIndex].title;
    this.price.innerText = this.cars[this.slideIndex].price;
    this.summary.innerText = this.cars[this.slideIndex].summary;
  }


  setBar() {
    let height = this.getStyle(this.bar, 'height');
    height = +(height.split('px')[0]);
    this.indicator.style.height = (height / this.cars.length) + 'px'
    this.indicator.style.transform = `translateY(${(this.slideIndex * (height / this.cars.length))}px)`
  }

  setCarImage() {
    this.carImage.classList.remove('animate-car-enter')
    this.carImage.classList.add('animate-car-exit')
    this.carImage.addEventListener('animationend', (e) => {
      this.carImage.src = `./assets/images/${this.cars[this.slideIndex].image}`
      this.carImage.classList.remove('animate-car-exit')
      this.carImage.classList.add('animate-car-enter')
    }, { once: true })
  }

  setBackground() {
    this.slideBg.style.backgroundColor = this.cars[this.slideIndex].theme;
    this.slideBg.classList.add('slide-bg-animate');
    this.slideBg.addEventListener('animationend', () => {
      this.body.style.backgroundColor = this.cars[this.slideIndex].theme;
      this.slideBg.classList.remove('slide-bg-animate')
    }, { once: true })
  }

  setBtnState() {
    if (this.slideIndex === 0) {
      this.backBtn.classList.add('btn--disable')
    } else {
      this.backBtn.classList.remove('btn--disable')
    }

    if (this.slideIndex === this.cars.length - 1) {
      this.nextBtn.classList.add('btn--disable')
    } else {
      this.nextBtn.classList.remove('btn--disable')

    }
  }

  getStyle(element, attr) {
    return window.getComputedStyle(element)[attr]
  }

  convertToRGB(str) {
    const aRgbHex = str.match(/.{1,2}/g);
    const aRgb = [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
  }
}

const carSlider = new Slider(cars)