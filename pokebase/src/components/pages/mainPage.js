import React from "react";
import PokeService from "../../services/pokeService.js";

const MainPage = () => {
	const service = new PokeService();

	const pokeList = [];

	// let items = "";

	service.getAllPokemons()
		.then(data => {
			pokeList.push(...data.results);
			console.log(pokeList);
			renderCards(pokeList);
			console.log(items);

		});

	// function pokeCards(pokeList) {
	// 	items = (renderCards(pokeList));
	// }

	function renderCards(arr) {

		return arr.map((item) => {
			const { name, index } = item;
			// console.log(name);
			return (
				<li key={index} className="poke__list-item">
					{name}
				</li>
			)
		})
	};
	const items = renderCards(pokeList);
	// console.log(renderCards(pokeList));
	console.log(items);

	return (
		<ul className="poke__list">
			{items}
		</ul>
	)
};

export default MainPage;