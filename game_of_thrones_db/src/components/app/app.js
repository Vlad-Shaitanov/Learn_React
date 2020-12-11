import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header/index.js";
import RandomChar from "../randomChar/index.js";
import CharacterPage from "../characterPage/index.js";
import ErrorMessage from "../errorMessage/index.js";
import ItemList from "../itemList/index.js";
import CharDetails from "../charDetails/index.js";
import GotService from "../../services/gotService.js";

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
			<>
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
					<CharacterPage />
					{/* <Row>
						<Col md="6">
							<ItemList
								onCharSelected={this.onCharSelected}
								getData={this.gotService.getAllBooks} />
						</Col>
						<Col md="6">
							<CharDetails charId={this.state.selectedChar} />
						</Col>
					</Row>
					<Row>
						<Col md="6">
							<ItemList
								onCharSelected={this.onCharSelected}
								getData={this.gotService.getAllHouses} />
						</Col>
						<Col md="6">
							<CharDetails charId={this.state.selectedChar} />
						</Col>
					</Row> */}
				</Container>
			</>
		)
	}
}
