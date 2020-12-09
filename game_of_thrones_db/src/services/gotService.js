export default class GotService {
	constructor() {
		this._apiBase = 'https://www.anapioficeandfire.com/api';
	}

	getResource = async (url) => {
		const result = await fetch(`${this._apiBase}${url}`);

		if (!result.ok) {
			throw new Error(`Could not fetch ${url}` +
				`, received ${result.status}`);
		}
		return await result.json();
	}

	async getAllBooks() {
		const result = await this.getResource(`/books/`);
		return result.map(this._transformBook);
	}

	async getBook(id) {
		const book = await this.getResource(`/books/${id}/`);
		return this._transformBook(book);
	}

	async getAllCharacters() {
		const result = await this.getResource(`/characters?page=5&pageSize=10`);
		return result.map(this._transformCharacter);
	}

	async getCharacter(id) {
		const character = await this.getResource(`/characters/${id}`);
		return this._transformCharacter(character);
	}

	async getAllHouses() {
		const result = await this.getResource(`/houses/`);
		return result.map(this._transformHouse);
	}

	async getHouse(id) {
		const house = await this.getResource(`/houses/${id}/`);
		return this._transformHouse(house);
	}

	setData(data) {
		if (data) {
			return data;
		} else {
			return "no data:(";
		}
	}

	_transformCharacter(char) {
		return {
			name: this.setData(char.name),
			gender: this.setData(char.gender),
			born: this.setData(char.born),
			died: this.setData(char.died),
			culture: this.setData(char.culture),
		}
	}

	_transformHouse(house) {
		return {
			name: house.name,
			region: house.region,
			words: house.words,
			titles: house.titles,
			overlord: house.overlord,
			ancestralWeapons: house.ancestralWeapons,
		}
	}

	_transformBook(book) {
		return {
			name: book.name,
			numberOfPages: book.numberOfPages,
			publiser: book.publiser,
			released: book.released,
		}
	}
}