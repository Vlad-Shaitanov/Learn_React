import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer.js";
import App from "./components/app.js";


const store = createStore(reducer);/*Глобальное хранилище, которое содержит
в себе логику(reducer) и состояние*/

/*Обертка Provider используется для передачи атрибутов ко все элементам,
находящимся внутри нее. Любой компонет будет иметь доступ к store. Любое
обновление store вызовет обновление структуры страницы(UI)*/
ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById("root"));



	//Что было до рефакторинга
// const bindActionCreator = (creator, dispatch) => (...args) => {
// 	dispatch(creator(...args));
// }

// const decDispatch = bindActionCreators(dec, dispatch);//Уменьшает счетчик на 1
// const randDispatch = bindActionCreators(rand, dispatch);//Добавляет рандомное число

// document.querySelector("#incr").addEventListener("click", inc);
// document.querySelector("#decr").addEventListener("click", dec);
// document.querySelector("#rand").addEventListener("click", () => {
// 	const value = Math.floor(Math.random() * 10);
// 	rand(value);
// });

// store.subscribe(() => {//Функция подписки на наш Store. Колбэк будет вызываться при каждом изменении state
// 	console.log(store.getState());
// });
// store.dispatch({ type: "INC" });/*Метод нужен для запуска reducer
// с состоянием из store и с тем Action, который мы передали*/
// store.dispatch({ type: "INC" });
// store.dispatch({ type: "INC" });

