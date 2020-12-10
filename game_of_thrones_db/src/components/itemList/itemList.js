import React, { Component } from 'react';
import gotService from "../../services/gotService.js";
import Spinner from '../spinner/index.js';
import './itemList.css';
export default class ItemList extends Component {
	gotService = new gotService();

	state = {
		charList: null,//Список персонажей
	}

	componentDidMount() {
		this.gotService.getAllCharacters()
			.then((charList) => {//Список персов с определенной страницы
				this.setState({ charList })
			})
	}

	renderItems(arr) {
		return arr.map((item, i) => {
			return (
				<li key={i}
					className="list-group-item"
					onClick={() => this.props.onCharSelected(41 + i)}>
					{item.name}
				</li>
			)
		})
	}

	render() {
		const { charList } = this.state;

		if (!charList) {
			return <Spinner />
		}

		const items = this.renderItems(charList);

		return (
			<ul className="item-list list-group">
				{items}
			</ul>
		);
	}
}