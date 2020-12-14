import React, { useState, useEffect } from "react";

function App() {
	/*Здесь: count это начальное состояние, setCount это кастомная функция,
	которая будет отвечать за изменение нашего состояния. Обе эти переменные
	могут иметь любое название*/
	const [count, setCount] = useState(0);
	const [data, refreshData] = useState([{ name: "Vlad", gender: "male" }]);

	useEffect(() => {
		console.log(Math.random());
	})

	return (
		<div>
			<p>Вы кликнули по элементу {count} раз</p>
			<button
				onClick={() => { setCount(count + 1) }}
			>Нажми меня!</button>

			{data.map(item => {
				return (
					<div>Name: {item.name} and Gender: {item.gender}</div>
				);
			})}
			<button
				onClick={() => { refreshData(data => ([...data, { name: "Anna", gender: "female" }])) }}
			>Добавить данные</button>
		</div>
	)
}

export default App;