export default class RestoService {
	_apiBase = 'http://localhost:3000';

	async getResource(url) {
		const response = await fetch(`${this._apiBase}${url}`)

		if (!response.ok) {
			throw new Error(`Could not fetch ${url}` +
				`, received ${response.status}`);
		}
		return await response.json();
	}

	async getMenuItems() {
		return await this.getResource(`/menu/`);
	}

	async getItem(id) {
		const response = await this.getResource('/menu/');
		const item = response.find((el) => {
			console.log(`el.id: ${el.id}, id: ${id}`);
			return el.id === +id;
		})
		return item;
	}
}