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
				{ label: "Going to learn React", important: true, like: false, id: 1 },
				{ label: "Work hard", important: false, like: false, id: 2 },
				{ label: "I need a break...", important: false, like: false, id: 3 }
			],
			term: "",//Ввод пользователя в строке поиска
			filter: "all"//Фильтрация постов
		}
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleLiked = this.onToggleLiked.bind(this);
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
		this.onFilterSelect = this.onFilterSelect.bind(this);

		this.maxId = 4;//Макс. число постов
	}

	onToggleImportant(id) {//Переключение статуса важности на постах
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id);//Индекс поста
			const old = data[index];//Старый элемент, который надо изменить
			const newItem = { ...old, important: !old.important };//Новый элемент на основе старого с заменой значения св-ва
			//Новый массив с измененным элементом
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

			return {
				data: newArr
			}
		});
	}

	onToggleLiked(id) {//Переключение лайков в постах
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id);//Индекс поста
			const old = data[index];//Старый элемент, который надо изменить
			const newItem = { ...old, like: !old.like };//Новый элемент на основе старого с заменой значения св-ва
			//Новый массив с измененным элементом
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

			return {
				data: newArr
			}
		});
	}

	deleteItem(id) {//Удаление поста
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id);//Индекс поста

			const before = data.slice(0, index);//часть массива до вырезаемого нами элемента
			const after = data.slice(index + 1);//часть массива после вырезаемого нами элемента

			const newArr = [...before, ...after];//новый массив из 2 частей

			//Возвращаем наш стейт data, но уже с новым значением
			return {
				data: newArr
			};
		});
	}

	addItem(body) {//Добавление поста
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

	filterPost(items, filter) {
		if (filter === "like") {
			return items.filter(item => item.like)
		} else {
			return items
		}
	}

	searchPost(items, term) {//Живой поиск
		if (items.length === 0) {
			return items
		}

		return items.filter((item) => {//В каждом элементе будем находить label и уже в нем то, что ввел пользователь
			return item.label.indexOf(term) > -1;
			//Фильтр вернет те посты, в которых содержится то, что ввел пользователь
		});
	}

	onUpdateSearch(term) {// обновление состояния поля живого поиска
		this.setState({ term });
	}

	onFilterSelect(filter) {
		this.setState({ filter });
	}

	render() {
		const { data, term, filter } = this.state;

		const liked = data.filter(item => item.like).length;//Кол-во лайкнутых постов
		const allPosts = data.length;//Постов всего

		//Посты, видимые на основании ввода пользователя
		const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

		return (//className={style.app}
			<AppBlock>
				<AppHeader
					liked={liked}
					allPosts={allPosts} />
				<div className="search-panel d-flex">
					<SearchPanel
						onUpdateSearch={this.onUpdateSearch} />
					<PostStatusFilter
						filter={filter}
						onFilterSelect={this.onFilterSelect} />
				</div>
				<PostList
					posts={visiblePosts}
					onDelete={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleLiked={this.onToggleLiked} />
				<PostAddForm
					onAddItem={this.addItem} />
			</AppBlock>
		);
	}
};
