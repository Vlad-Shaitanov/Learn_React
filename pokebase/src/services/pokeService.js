
export default class PokeService {
	constructor() {
		this._apiBase = "https://pokeapi.co/api/v2/";
	}

	getResource = async (url) => {
		const response = fetch(`${this._apiBase}${url}`);

		try {
			if (response.ok) {
				let data = await response.json();
				return data;
			}
		} catch {
			if (!response.ok) {
				throw new Error(`Could not fetch ${url}` +
					`, received ${response.status}`);
			}
		};
	}

	getAllPokemons = async () => {
		const result = await this.getResource("pokemon?limit=100");
		console.log(result);
		return result;
	};

	isSet(data) {
		if (data) {
			return data;
		} else {
			return "no data:(";
		}
	}

}