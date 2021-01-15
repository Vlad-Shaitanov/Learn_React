import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/index.js';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundry from "./components/error-boundry/index.js";
import RestoService from "./services/resto-service.js";
import RestoServiceContext from "./components/resto-service-context/index.js";
import store from "./store.js"

const restoService = new RestoService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<RestoServiceContext.Provider value={restoService}>
				<Router>
					<App />
				</Router>
			</RestoServiceContext.Provider>
		</ErrorBoundry>
	</Provider>
	, document.getElementById('root')
);

/*
<Провайдер, передающий store>
	<Обработчик ошибок>
		<Передача контекста>
			<Маршрутизация>
				<Приложение/>
			</Маршрутизация>
		</Передача контекста>
	</Обработчик ошибок>
</Провайдер, передающий store>
*/