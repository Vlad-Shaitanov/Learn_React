import React, { Component } from 'react';
import Spinner from '../spinner/index.js';
import './itemList.css';
export default class ItemList extends Component {

	state = {
		itemList: null,//Список персонажей
	}

	componentDidMount() {
		const { getData } = this.props;

		getData()
			.then((itemList) => {//Список персов с определенной страницы
				this.setState({ itemList })
			})
	}

	renderItems(arr) {
		return arr.map((item) => {
			const { id } = item;
			const label = this.props.renderItem(item);//Имя перса
			return (
				<li key={id}
					className="list-group-item"
					onClick={() => (
						this.props.onItemSelected(id))}>
					{label}
				</li>
			)
		})
	}

	render() {
		const { itemList } = this.state;

		if (!itemList) {
			return <Spinner />
		}

		const items = this.renderItems(itemList);

		return (
			<ul className="item-list list-group">
				{items}
			</ul>
		);
	}
}