
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


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
			placeholder={text} />
	)
}

const App = () => {
	return (
		<div>
			<Header />
			<TextArea />
			<Field />
			<Btn />
			<Checkbox />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
