import React, { useState, useEffect } from 'react';
import Spinner from '../spinner/index.js';
// import PropTypes from "prop-types";
import './itemList.css';

//Component with hooks
function ItemList({ getData, onItemSelected, renderItem }) {
	const [itemList, updateList] = useState([]);

	useEffect(() => {
		getData()
			.then((data) => {//Список персов с определенной страницы
				updateList(data)
			})
	}, [])

	function renderItems(arr) {
		return arr.map((item) => {
			const { id } = item;
			const label = renderItem(item);//Имя перса
			return (
				<li key={id}
					className="list-group-item"
					onClick={() => (
						onItemSelected(id))}>
					{label}
				</li>
			)
		})
	}

	if (!itemList) {
		return <Spinner />
	}

	const items = renderItems(itemList);

	return (
		<ul className="item-list list-group">
			{items}
		</ul>
	);
}
export default ItemList;
//Component without hooks
// export default class ItemList extends Component {
// 	state = {
// 		itemList: null,//Список персонажей
// 	}
// 	static defaultProps = {//Дефолтное значение пропса
// 		onItemSelected: () => { }//Пустая функция
// 	}
// 	static propTypes = {
// 		onItemSelected: PropTypes.func,//Проверяем что переданный пропс является функцией
// 	}
// 	componentDidMount() {
// 		const { getData } = this.props;
// 		getData()
// 			.then((itemList) => {//Список персов с определенной страницы
// 				this.setState({ itemList })
// 			})
// 	}
// 	renderItems(arr) {
// 		return arr.map((item) => {
// 			const { id } = item;
// 			const label = this.props.renderItem(item);//Имя перса
// 			return (
// 				<li key={id}
// 					className="list-group-item"
// 					onClick={() => (
// 						this.props.onItemSelected(id))}>
// 					{label}
// 				</li>
// 			)
// 		})
// 	}
// 	render() {
// 		const { itemList } = this.state;
// 		if (!itemList) {
// 			return <Spinner />
// 		}
// 		const items = this.renderItems(itemList);
// 		return (
// 			<ul className="item-list list-group">
// 				{items}
// 			</ul>
// 		);
// 	}
// }