import React from "react";
import PokeService from "../../services/pokeService.js";

const MainPage = () => {
	const pokeService = new PokeService();
	const res = [];
	const names = [];

	pokeService.getAllPokemons()
		.then(data => {
			res.push(data);
			console.log(res);
		});
	console.log(res);
	// pokeService.getResource("pokemon/5")
	// 	// .then(response => {
	// 	// 	res.push(...response.results);
	// 	// 	// showNames();
	// 	// 	// createPokeList();
	// 	// 	console.log(res)
	// 	// });
	// 	.then(response => {
	// 		res.push(response)
	// 		console.log(res);
	// 	});


	// function showNames() {
	// 	res.forEach(item => {
	// 		names.push(item.name);
	// 	});
	// }
	// console.log(res);
	// console.log(names);

	// function createPokeList() {
	// 	res.forEach(({ name }) => {
	// 		console.log(name);
	// 		return (
	// 			<li class="poke__list-item">
	// 				<a href="#section">${name}</a>
	// 			</li>
	// 		);
	// 	});

	// }

	return (
		<li className="poke__list-item">
			<a href="#section">Pokemon</a>
		</li>
	)
};

export default MainPage;