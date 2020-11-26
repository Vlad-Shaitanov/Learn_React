import React from "react";

import AppHeader from "../app-header/index";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter/index";
import PostList from "../post-list/index";
import PostAddForm from "../post-add-form/index";
import "./app.css";

const App = () => {//Компонент с приложением
	return (
		<div className="app">
			<AppHeader />
			<div className="search-panel d-flex">
				<SearchPanel />
				<PostStatusFilter />
			</div>
			<PostList />
			<PostAddForm />
		</div>
	);
}

export default App;