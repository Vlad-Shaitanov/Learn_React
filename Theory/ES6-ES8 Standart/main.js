"use strict";

//* === переменные let и const ===

const a = 1;
let b = 2;

//Переменные видны только в блоке кода {} и доступны только после объявления
console.log(a, b);


//* === Стрелочные функции и их контекст(отсутствие собственного) ===
let obj = {
	number: 5,
	sayNumber: function () {
		let say = () => {
			console.log(this);
		};
		say();
	}
};
obj.sayNumber();

let names = ["Ivan", "Ann", "Ksenia", "Voldemort"];
let shortNames = names.filter((name) => {
	//В новый массив отфильтровали имена короче 5 букв
	return name.length < 5;
});
console.log(shortNames);

let answers = ["JosHuA", "MARgaReT", "abiGAiL", "COCOJAMBO"];
//Массив может быть перезаписан
let newAns = answers.map((item) => item.toLowerCase());
console.log(newAns);


//* === Интерполяция ===
const worker = {
	name: "Abigail",
	surname: "Williams",
	sum: 5000
};
console.log(
	`
	Сотрудница ${worker.name} ${worker.surname} заработала в текущем месяце ${worker.sum}$
	`
);

function sendData(data, count = 2) {//Параметр по умолчанию
	console.log(`Данные: ${data} в количестве ${count}`);
}
sendData("Anything");


//* === Rest-оператор ===
function max(...numbers) {
	console.log(numbers);
}
//Все аргументы, переданные в функцию, записались в массив
max(1, 2, 4, 9, 6, 3, 8);
//Rest-оператор может быть не единственным аргументом, но должен стоять последним
function dates(a, b, ...myDates) {
	console.log(myDates);
	console.log(a);
	console.log(b);
}
dates(21, 15, 10, 23, 17, 22, 7, 19);
//Первые 2 числа записались в переменные a,b ,остальные - в массив myDates


//* === Spread-оператор ===
let arr1 = [1, 3, 8, 7],
	arr2 = [3, 17, 150, 2];
let maxNumber = Math.max(...arr1, ...arr2);
console.log(maxNumber);