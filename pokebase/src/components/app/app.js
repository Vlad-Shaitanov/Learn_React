import React from "react";
import ErrorMessage from "../errorMessage/index.js";
import AppHeader from "../appHeader/index.js";
import './app.scss';

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<AppHeader></AppHeader>
				<ErrorMessage />
			</div>
		</div>
	);
}

export default App;