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

	getAllBooks = async () => {
		const result = await this.getResource(`/books/`);
		return result.map(this._transformBook);
	}

	getBook = async (id) => {
		const book = await this.getResource(`/books/${id}/`);
		return this._transformBook(book);
	}

	getAllCharacters = async () => {
		const result = await this.getResource(`/characters?page=5&pageSize=10`);
		return result.map(this._transformCharacter);
	}

	getCharacter = async (id) => {
		const character = await this.getResource(`/characters/${id}`);
		return this._transformCharacter(character);
	}

	getAllHouses = async () => {
		const result = await this.getResource(`/houses/`);
		return result.map(this._transformHouse);
	}

	getHouse = async (id) => {
		const house = await this.getResource(`/houses/${id}/`);
		return this._transformHouse(house);
	}

	isSet(data) {
		if (data) {
			return data;
		} else {
			return "no data:(";
		}
	}

	_extractId = (item) => {
		const idRegExp = /\/([0-9]*)$/;
		return item.url.match(idRegExp)[1];
	}

	_transformCharacter = (char) => {
		return {
			id: this._extractId(char),
			name: this.isSet(char.name),
			gender: this.isSet(char.gender),
			born: this.isSet(char.born),
			died: this.isSet(char.died),
			culture: this.isSet(char.culture),
		}
	}

	_transformHouse = (house) => {
		return {
			id: this._extractId(house),
			name: this.isSet(house.name),
			region: this.isSet(house.region),
			words: this.isSet(house.words),
			titles: this.isSet(house.titles),
			overlord: this.isSet(house.overlord),
			ancestralWeapons: this.isSet(house.ancestralWeapons),
		}
	}

	_transformBook = (book) => {
		return {
			id: this._extractId(book),
			name: this.isSet(book.name),
			numberOfPages: this.isSet(book.numberOfPages),
			publisher: this.isSet(book.publisher),
			released: this.isSet(book.released),
		}
	}
}