import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header/index.js";
import RandomChar from "../randomChar/index.js";
import CharacterPage from "../characterPage/index.js";
import ErrorMessage from "../errorMessage/index.js";

import "./app.css";

export default class App extends Component {
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
				</Container>
			</>
		)
	}
}
