"use strict";

function button() {
	return "button";
}

class Slider {
	constructor(width, height, count) {
		this.width = width;
		this.height = height;
		this.count = count;
	}
	nextSlide() {
		console.log("Moving forward");
	}
	prevSlide() {
		console.log("Moving back");
	}
	whoAmI() {
		console.log(this.width, this.height, this.count);
	}
}
// const slider = new Slider(600, 400, 5),
// 	someSlider = new Slider(300, 450, 10);
// slider.whoAmI();
// someSlider.whoAmI();

class AutoSlider extends Slider {
	constructor(width, height, count, auto) {
		super(width, height, count);//Для наследования свойств родительского класса
		this.auto = auto;
	}
	play() {
		console.log(`Autoplay: ${this.auto}`);
	}
}
const slider1 = new AutoSlider(500, 500, 4, true);
slider1.whoAmI();
slider1.play();

export { button as btn };//Пример переименования при экпорте
/*Переименование может быть сделано и при импорте(в таком случае в строке
	экспорта конструкцию ... as... использовать не нужно)*/

export default Slider;
/*Экспорт по умолчанию. Может экспортировать одну сущность, но только
один раз в одном файле*/