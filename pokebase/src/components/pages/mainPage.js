import React from "react";
import PokeService from "../../services/pokeService.js";

const MainPage = () => {
	const service = new PokeService();

	const pokeList = [];

	service.getAllPokemons()
		.then(data => {
			pokeList.push(...data.results);
			console.log(pokeList);
		});

	const renderCards = (pokeList) => {
		const test = [...pokeList];
		console.log(test);
		return test.map((item) => {
			const { name } = item;
			console.log("ok");
			return (
				<a href="#section">{name}</a>
			)
		})
	};
	const items = renderCards(pokeList);
	console.log(items);
	return (
		<li className="poke__list-item">
			{items}
		</li>
	)
};

export default MainPage;