import React, { Component } from "react";
import ItemList from "../itemList/index.js";
import CharDetails, { Field } from "../charDetails/index.js";
import ErrorMessage from "../errorMessage/index.js";
import GotService from "../../services/gotService.js";
import RowBlock from "../rowBlock/rowBlock.js";
import "./characterPage.css";

export default class CharacterPage extends Component {

	gotService = new GotService();

	state = {
		selectedChar: 130,//Какой перс выбран в данный момент
		error: false,
	}

	componentDidCatch() {
		this.setState({
			error: true
		});
	}

	onItemSelected = (id) => {//Когда выберем перса, функция поместит его id в текущий state
		this.setState({
			selectedChar: id
		})
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage />
		}

		const itemList = (
			<ItemList
				onItemSelected={this.onItemSelected}
				getData={this.gotService.getAllCharacters}
				renderItem={({ name, gender }) => `${name} (${gender})`} />
		)
		const charDetails = (
			<CharDetails charId={this.state.selectedChar}>
				<Field field="gender" label="Gender" />
				<Field field="born" label="Born" />
				<Field field="died" label="Died" />
				<Field field="culture" label="Culture" />
			</CharDetails>
		)

		return (
			<RowBlock left={itemList} right={charDetails} />
		)
	}
}