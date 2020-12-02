import React from "react";

import AppHeader from "../app-header/index";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter/index";
import PostList from "../post-list/index";
import PostAddForm from "../post-add-form/index";
import "./app.css";
// import style from "./App.module.css";//Стилизация при помощи модулей
import styled from "styled-components";

//стилизация при помощи styled-components
const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

//Пример наследования стилей от другого элемента + добавление новых
// const StyledAppBlock = styled(AppBlock)`
// 	background-color: grey;
// `;

const App = () => {//Компонент с приложением
	const data = [
		{ label: "Going to learn React", important: true, id: "qwe" },
		{ label: "Work hard", important: false, id: "rty" },
		{ label: "I need a break...", important: false, id: "uio" }
	];

	return (//className={style.app}
		<AppBlock>
			<AppHeader />
			<div className="search-panel d-flex">
				<SearchPanel />
				<PostStatusFilter />
			</div>
			<PostList posts={data} />
			<PostAddForm />
		</AppBlock>
	);
}

export default App;