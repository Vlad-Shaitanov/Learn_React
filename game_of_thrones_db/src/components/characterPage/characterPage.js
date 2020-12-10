import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import ItemList from "../itemList/index.js";
import CharDetails from "../charDetails/index.js";
import ErrorMessage from "../errorMessage/index.js";
import "./characterPage.css";

export default class CharacterPage extends Component {

	state = {
		selectedChar: 130,//Какой перс выбран в данный момент
		error: false,
	}

	componentDidCatch() {
		this.setState({
			error: true
		});
	}

	onCharSelected = (id) => {//Когда выберем перса, функция поместит его id в текущий state
		this.setState({
			selectedChar: id
		})
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage />
		}

		return (
			<Row>
				<Col md="6">
					<ItemList onCharSelected={this.onCharSelected} />
				</Col>
				<Col md="6">
					<CharDetails charId={this.state.selectedChar} />
				</Col>
			</Row>
		)
	}
}