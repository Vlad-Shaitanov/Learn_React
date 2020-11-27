import React, { Component } from "react";
import All from "./lessons/properties and state of components";
import './App.css';

const Header = () => {//Компонент
	return <h2>Hello, world!</h2>
}
const Field = () => {//Компонент
	const holder = "Enter here";
	const styledField = {
		width: "300px"
	}

	return <input
		style={styledField}
		type="text"
		placeholder={holder}
		autoComplete=""
		className="first"
		htmlFor="" />//аналог for для label(связывание с инпутами)
}
const Btn = () => {//Компонент
	const text = "Log in";
	const logged = true;

	return <button>{logged ? "Enter" : text}</button>
}
const Checkbox = () => {
	return <input
		type="checkbox" />

}
const TextArea = () => {
	const text = "Insert text here";
	return (

		<textarea
			placeholder={text}
			className="textarea" />
	)
}

const App = () => {
	return (
		<div>
			<div
				className="top-block">
				<Header />
				<Field />
				<Btn />
				<Checkbox />
				<TextArea />
			</div>
			<div>
				<All />
			</div>
		</div>
	)
}

export default App;
