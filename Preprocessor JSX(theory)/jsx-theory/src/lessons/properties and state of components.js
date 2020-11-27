import React, { Component } from "react";

class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 26,
		};
		this.nextYear = this.nextYear.bind(this);//Привязка метода к каждому экземпляру объекта
	}
	nextYear() {
		this.setState(state => ({
			years: ++state.years
		}))
	}
	render() {
		const { name, surname, link } = this.props;
		const { years } = this.state;
		return (
			//допустим такой синтаксис, если не нужны лишние ДИВы
			<>
				<button onClick={this.nextYear}>++</button>
				<h2>My name is {name}, and surname is - {surname},
		years = {years}</h2>
				<a href={link}>My profile</a>
			</>
		)
	}
}

const All = () => {
	return (
		<>
			<WhoAmI name="Vlad" surname="Shaitanov" link="vk.com" />
			<WhoAmI name="Tatyana" surname="Shaitanova" link="facebook.com" />
			<WhoAmI name="Alex" surname="Shaitanov" link="vk.com" />
		</>
	)
}
export default All;