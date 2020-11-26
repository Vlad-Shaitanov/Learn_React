import React from "react";
import AppHeader from "../app-header/index";
import SearchPanel from "../search-panel";

const App = () => {//Компонент с приложением
	return (
		<div>
			<AppHeader />
			<SearchPanel />
		</div>
	);
}

export default App;