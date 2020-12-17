import { createStore } from "redux";

const reducer = (state = 0, action) => {
	/*Функция принимает на вход 2 аргумента - state и action,
	которое нужно произвести с состоянием*/
	/*Функция reducer должна быть чистой, т.е. зависеть ТОЛЬКО от state и action*/
	switch (action.type) {//Обработка типа действия
		case "INC":
			return state + 1;
		case "DEC":
			return state - 1;
		case "RND":
			return state + action.value;//action содержит значение value, которое передается внутрь как аргумент
		default:
			return state;
	}
}

const inc = () => {// action-creator(т.е. создает action)
	return {
		type: "INC"
	}
}
const dec = () => {// action-creator(т.е. создает action)
	return {
		type: "DEC"
	}
}
const rand = (value) => {// action-creator(т.е. создает action)
	return {
		type: "RND",
		value
	}
}

const store = createStore(reducer);//Переменная содержит в себе логику(reducer) и состояние

document.querySelector("#incr").addEventListener("click", () => {
	store.dispatch(inc());
});
document.querySelector("#decr").addEventListener("click", () => {
	store.dispatch(dec());
});
document.querySelector("#rand").addEventListener("click", () => {
	const value = Math.floor(Math.random() * 10);
	store.dispatch(rand(value));
});

const update = () => {
	document.querySelector("#counter").textContent = store.getState();
};
store.subscribe(update);

// store.subscribe(() => {//Функция подписки на наш Store. Колбэк будет вызываться при каждом изменении state
// 	console.log(store.getState());
// });
// store.dispatch({ type: "INC" });/*Метод нужен для запуска reducer
// с состоянием из store и с тем Action, который мы передали*/
// store.dispatch({ type: "INC" });
// store.dispatch({ type: "INC" });
