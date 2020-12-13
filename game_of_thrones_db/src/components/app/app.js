import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header/index.js";
import RandomChar from "../randomChar/index.js";
import { CharacterPage, BooksPage, HousesPage, BooksItem } from '../pages/index.js';
import ErrorMessage from "../errorMessage/index.js";
import GotService from "../../services/gotService.js";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./app.css";

export default class App extends Component {

	gotService = new GotService();
	state = {
		showRandomChar: true,//По умолчанию блок RandomChar виден
		error: false
	}

	componentDidCatch() {
		this.setState({
			error: true
		});
	}

	toggleRandomChar = () => {//Переключение видимости блока RandomChar по нажатию кнопки
		this.setState((state) => {
			return {
				showRandomChar: !state.showRandomChar
			}
		});
	}


	render() {
		if (this.state.error) {
			return <ErrorMessage />
		}
		const char = this.state.showRandomChar ? <RandomChar /> : null;
		return (
			<Router>
				<div className="app">
					<Container>
						<Header></Header>
					</Container>
					<Container>
						<Row>
							<Col lg={{ size: 5, offset: 0 }}>
								{char}
								<button
									className="toggle-btn"
									onClick={this.toggleRandomChar}>Show/hide random character</button>
							</Col>
						</Row>
						<Route path="/" exact component={() => <h1>Welcome to GOT DATABASE</h1>} />
						<Route path="/characters" component={CharacterPage} />
						<Route path="/houses" component={HousesPage} />
						<Route path="/books" exact component={BooksPage} />
						<Route path="/books/:id" render={
							({ match }) => {
								const { id } = match.params;
								return <BooksItem bookId={id} />
							}
						} />
					</Container>
				</div>
			</Router>
		)
	}
}
