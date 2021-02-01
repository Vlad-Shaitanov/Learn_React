import React from "react";
import "./appHeader.scss";
import logo from "../../img/logo_white.png";


const AppHeader = () => {
	return (
		<header className="header">
			<div className="header__logo">
				<img src={logo} alt="Sorry"></img>
				<p>Database</p>
			</div>
			<nav className="header__menu">
				<ul className="header__list">
					<li>
						<a className="header__link" href="#section">Main</a>
					</li>
					<li>
						<a className="header__link" href="#section">Pokemon</a>
					</li>
					<li>
						<a className="header__link" href="#section">All Pokemons</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default AppHeader;