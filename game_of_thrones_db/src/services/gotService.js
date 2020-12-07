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

	getAllBooks() {
		return this.getResource(`/books/`);
	}

	getBook(id) {
		return this.getResource(`/books/${id}/`);
	}

	getAllCharacters() {
		return this.getResource(`/characters?page=5&pageSize=10`);
	}

	getCharacter(id) {
		return this.getResource(`/characters/${id}`);
	}

	getAllHouses() {
		return this.getResource(`/houses/`);
	}

	getHouse(id) {
		return this.getResource(`/houses/${id}/`);
	}
}