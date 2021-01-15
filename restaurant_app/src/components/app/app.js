import React from 'react';
import { MainPage, CartPage } from '../pages';
import AppHeader from '../app-header';
import WithRestoService from "../hoc/index.js";

import Background from './food-bg.jpg';
import RestoServiceContext from '../resto-service-context';

const App = ({ RestoService }) => {
	console.log(RestoService.getMenuItems());
	return (
		<div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
			<AppHeader total={50} />
			<MainPage />
			<CartPage />
		</div>
	)
}

export default WithRestoService()(App);