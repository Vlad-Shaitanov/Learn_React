import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from "react-redux";
import WithRestoService from "../hoc/with-resto-service.js";
import { menuLoaded, menuRequested, menuError, addedToCart } from "../../actions/index.js";
import Spinner from "../spinner/index.js";
import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {
	componentDidMount() {
		this.props.menuRequested();
		const { RestoService } = this.props;
		RestoService.getMenuItems()
			.then(response => this.props.menuLoaded(response))
			.catch(error => this.props.menuError());
	}
	render() {
		const { menuItems, loading, error, addedToCart } = this.props;

		if (error) {
			return <Error />
		}

		if (loading) {
			return <Spinner />
		}

		const items = menuItems.map(menuItem => {
			return <MenuListItem
				key={menuItem.id}
				menuItem={menuItem}
				onAddToCart={() => addedToCart(menuItem.id)} />
		})

		return (
			<View items={items} />
		)
	}
};

const mapStateToProps = (state) => {
	return {
		menuItems: state.menu,
		loading: state.loading,
		error: state.error
	}
}

const mapDispatchToProps = {
	menuLoaded,
	menuRequested,
	menuError,
	addedToCart
}

const View = ({ items }) => {

	return (
		<ul className="menu__list">
			{items}
		</ul>
	)
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
//Связка компонента с Redux
/*Теперь наш MenuList знает какие свойства надо получить из store
и какие методы надо получить, чтобы с ними работать*/