
export default class PokeService {
	constructor() {
		this._apiBase = "https://pokeapi.co/api/v2";
	}

	getResource = async (url) => {
		const response = await fetch(`${this._apiBase}${url}`);

		try {
			if (response.ok) {
				return await response.json();

			}
		} catch {
			if (!response.ok) {
				throw new Error(`Could not fetch ${url}` +
					`, received ${response.status}`);
			}
		};
	}

	getAllPokemons = async () => {
		let data = await this.getResource("/pokemon?limit=100");
		return data;
	};

	// isSet(data) {
	// 	if (data) {
	// 		return data;
	// 	} else {
	// 		return "no data:(";
	// 	}
	// }

	// _transformPokemon = (item) => {
	// 	return {
	// 		name: this.isSet(item.name),
	// 	}
	// }
}