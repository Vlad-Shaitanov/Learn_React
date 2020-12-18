import React from "react";
import { connect } from "react-redux";//Для связки компонента со store
import * as actions from "../actions.js";
// import { bindActionCreators } from "redux";

const Counter = ({ counter, inc, dec, rand }) => {
	return (
		<div className="jumbotron">
			<h1>{counter}</h1>
			<button onClick={dec} className="btn btn-primary">Decrement</button>
			<button onClick={inc} className="btn btn-primary">Increment</button>
			<button onClick={rand} className="btn btn-primary">Random</button>
		</div>
	);
}

const mapStateToProps = (state) => {//Передача состояния в пропсы
	return {//Объект с тем состоянием, который нам нужен
		counter: state //Св-ва, которые нужно вытащить из state
	}
}
// const mapDispatchToProps = (dispatch) => {//Передача actions в пропсы
// 	//Получаем actions, уже обернутые в dispatch
// 	return bindActionCreators(actions, dispatch);
// 	//Объект содержит те actions, которые необходимо передать

// }

/*При передаче вторым аргументом объекта, функция connect сама выполнит все
преобразования, которые нам изначально требовались в mapDispatchToProps
(этот способ) подходит для случаев, когда нам не нужно создавать сложные actions*/
export default connect(mapStateToProps, actions)(Counter);
/*Функция connect принимает в себя параметры конфигурации в первых круглых
скобках и компонент во вторых. В итоге она возвращает обернутый в функцию
переданный компонент. Таким образом мы будем брать нужные значения из store
и передавать их в компонент (counter)*/