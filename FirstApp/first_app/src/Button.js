import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.myClick = this.myClick.bind(this);//ПРивязка обработчика событий
	}

	myClick() {
		document.getElementsByClassName("wrapper")[0].style.backgroundColor = "#F9F5A6FF";
	}

	render() {
		return (
			<button onClick={this.myClick} className="clicker">
				Изменить дизайн
			</button>
		);
	}
}

export default Button;