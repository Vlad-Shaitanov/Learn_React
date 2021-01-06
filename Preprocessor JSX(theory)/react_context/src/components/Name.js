import React, { Component } from "react";
import MyContext from "./Context.js";

//Такой метод работает только в классовых компонентах:
class Name extends Component {
	render() {
		return (
			<div className="name">
				My name is {this.context.name}, and I'm {this.context.age} years old.
			</div>
		);
	}
};
Name.contextType = MyContext;


//Такой метод работает только в функциональных компонентах:
// const Name = () => {
// 	return (
// 		<MyContext.Consumer>
// 			{(value) => {
// 				return (
// 					<div className="name">
// 						My name is {value}
// 					</div>
// 				);
// 			}}
// 		</MyContext.Consumer>
// 	);
// };

export default Name;