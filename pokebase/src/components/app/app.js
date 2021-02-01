import React from "react";
// import ErrorMessage from "../errorMessage/index.js";
import AppHeader from "../appHeader/index.js";
import { MainPage } from "../pages/index.js";
import './app.scss';

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<AppHeader></AppHeader>
				{/* <ErrorMessage /> */}
				<main className="main">
					<ul className="poke__list">
						<MainPage></MainPage>
					</ul>
				</main>
			</div>
		</div>
	);
}

export default App;