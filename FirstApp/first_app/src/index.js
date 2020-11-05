import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import Button from './Button';
import reportWebVitals from './reportWebVitals';



class Application extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<Clock />
				<Button />
			</div>
		);
	}
}

ReactDOM.render(
	<Application />,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
