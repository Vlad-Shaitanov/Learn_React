import React, { Component } from "react";

import AppHeader from "../app-header/index";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter/index";
import PostList from "../post-list/index";
import PostAddForm from "../post-add-form/index";
import "./app.css";
// import style from "./App.module.css";//Стилизация при помощи модулей
import styled from "styled-components";

//стилизация при помощи styled-components
const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

//Пример наследования стилей от другого элемента + добавление новых
// const StyledAppBlock = styled(AppBlock)`
// 	background-color: grey;
// `;

export default class App extends Component {//Компонент с приложением
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ label: "Going to learn React", important: true, id: 1 },
				{ label: "Work hard", important: false, id: 2 },
				{ label: "I need a break...", important: false, id: 3 }
			],
		}
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);

		this.maxId = 4;
	}

	deleteItem(id) {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id);

			const before = data.slice(0, index);//часть массива до вырезаемого нами элемента
			const after = data.slice(index + 1);//часть массива после вырезаемого нами элемента

			const newArr = [...before, ...after];//новый массив из 2 частей

			//Возвращаем наш стейт data, но уже с новым значением
			return {
				data: newArr
			};
		});
	}

	addItem(body) {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++,
		}

		this.setState(({ data }) => {
			const newArr = [...data, newItem];

			return {
				data: newArr
			};
		});
	}

	render() {
		return (//className={style.app}
			<AppBlock>
				<AppHeader />
				<div className="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList
					posts={this.state.data}
					onDelete={this.deleteItem} />
				<PostAddForm
					onAddItem={this.addItem} />
			</AppBlock>
		);
	}
};
