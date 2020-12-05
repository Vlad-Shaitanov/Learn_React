"use strict";

// let url = "https://jsonplaceholder.typicode.com/posts/";//Сервер с БД
// let data = {
// 	userName: "example"
// };//Данные, которые мы хотим запостить на сервер

// fetch(url, {
// 	method: "POST",// или 'PUT'
// 	body: JSON.stringify(data),// данные могут быть 'строкой' или {объектом}!
// 	headers: {
// 		'Content-Type': 'application/json'
// 	}
// })
// 	.then((response) => response.json())//Данные, полученные с сервера, будут преобразованы в объект
// 	.then((myJson) => console.log("Success", myJson))
// 	.catch(error => console.error("Error" + error));

class GotService {
	constructor() {
		/*Нижнее подчеркивание скажет программистам о том, что тут статичные
		данные и трогать их не стоит*/
		this._apiBase = "https://www.anapioficeandfire.com/api";
	}
	async getResource(url) {//Мы даем понять JS, что далее будет асинхронная функция
		//Указали какая именно функция асинхронна и что надо подождать результат fetch
		const result = await fetch(`${this._apiBase}${url}`);

		if (!result.ok) {//если ответ не получен
			//Выкинуть ошибку с ее описанием
			throw new Error(`Could not fetch ${url}, status: ${result.status}`);
		}

		return await result.json();//присвоение выполнится только после выполнения функции
	}

	getAllCharacters() {
		//Получим 10 персов игры престолов с 5 страницы
		return this.getResource("/characters?page=5&pageSize=10");
	}

	getCharacter(id) {
		return this.getResource(`/characters/${id}`);
	}

	getAllBooks() {
		return this.getResource("/books");
	}
	getBook(id) {
		return this.getResource(`/books/${id}`);
	}

	getAllHouses() {
		return this.getResource("/houses");
	}
	getHouse(id) {
		return this.getResource(`/houses/${id}`);
	}
}

const got = new GotService();//Новый экземпляр сервиса
got.getAllCharacters()
	.then(result => {
		result.forEach(item => console.log(item.name));
	});
got.getCharacter(130)
	.then(result => console.log(result));


got.getAllHouses()
	.then(result => console.log(result));
got.getHouse(3)
	.then(result => console.log(result));


got.getAllBooks()
	.then(result => console.log(result));
got.getBook(3)
	.then(result => console.log(result));

