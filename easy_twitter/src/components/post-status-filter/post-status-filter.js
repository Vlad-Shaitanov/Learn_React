import React, { Component } from "react";

// import { Button } from "reactstrap";
import "./post-status-filter.css";

export default class PostStatusFilter extends Component {
	constructor(props) {
		super(props);
		this.buttons = [
			{ name: "all", label: "Все" },
			{ name: "like", label: "Понравилось" }
		];
	}
	render() {
		const buttons = this.buttons.map(({ name, label }) => {
			const { filter, onFilterSelect } = this.props;
			const activeBtn = filter === name;
			const btnClass = activeBtn ? "btn-info" : "btn-outline-secondary"
			return (
				<button
					type="button"
					key={name}
					className={`btn ${btnClass}`}
					onClick={() => onFilterSelect(name)}
				>{label}</button>
			)
		});
		return (
			<div className="btn-group">
				{buttons}
			</div>
		)
	}
}