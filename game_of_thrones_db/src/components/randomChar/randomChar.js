import React, { Component } from "react";
import "./randomChar.css";
import gotService from "../../services/gotService.js";
import Spinner from "../spinner/index.js";
import ErrorMessage from "../errorMessage/index.js";
import PropTypes from "prop-types";

export default class RandomChar extends Component {

	gotService = new gotService();
	state = {
		char: {},
		loading: true,//Дефолтное состояние загрузки
		error: false,//Дефолтное состояние ошибки
	}

	// static defaultProps = {//Запись параметров по умолчанию внутри компонента
	// 	/*К примеру, если в RandomChar не будет передан нужный пропс,
	// 	то будет использовано значение по умолчанию*/
	// 	interval: 5000
	// }

	componentDidMount() {
		this.updateCharacter();
		this.timerId = setInterval(this.updateCharacter, this.props.interval);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	onCharLoaded = (char) => {//Установка состояния перса
		this.setState({
			char,
			loading: false//Смена состояния загрузки при получении данных о персе
		})
	}

	onError = (error) => {
		this.setState({
			error: true,
			loading: false,
		});
	}

	updateCharacter = () => {//обновление состояния перса
		const id = Math.floor(Math.random() * 140 + 25);// От 25 по 140 персонажа
		this.gotService.getCharacter(id)
			.then(this.onCharLoaded)
			.catch(this.onError);
	}

	render() {
		const { char, loading, error } = this.state;

		//Если есть ошибка, выводим сообщение о ней
		const errorMessage = error ? <ErrorMessage /> : null;
		//Если все еще идет загрузка, выводим спиннер
		const spinner = loading ? <Spinner /> : null;
		//При наличии долгой загрузки или ошибки, верстку блока не выводим
		const content = !(loading || error) ? <View char={char} /> : null;

		return (
			//Пока перс не подгрузился, будет активен спиннер
			//По за вершении загрузки, спиннер будет заменен контентом
			<div className="random-block rounded">
				{errorMessage}
				{spinner}
				{content}
			</div>
		);
	}
}

RandomChar.defaultProps = {//Параметр по умолчанию
	interval: 8000
}

RandomChar.propTypes = {//Проверка на тип данных
	/*В данном случае проверяем , что второй аргумент interval у setInterval
	является числом*/
	interval: PropTypes.number
}

const View = ({ char }) => {
	const { name, gender, born, died, culture } = char;

	return (
		<>
			<h4>Random Character: {name}</h4>
			<ul className="list-group list-group-flush">
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Gender </span>
					<span>{gender}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Born </span>
					<span>{born}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Died </span>
					<span>{died}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Culture </span>
					<span>{culture}</span>
				</li>
			</ul>
		</>
	)
}