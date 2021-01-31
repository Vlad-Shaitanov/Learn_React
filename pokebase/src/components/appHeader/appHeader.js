import React from "react";
import "./appHeader.scss";

const AppHeader = () => {
	return (
		<header class="header">
			<div class="header__logo">
				<img src="./logo_white.png" alt="Sorry"></img>
			</div>
			<nav class="header__menu">
				<ul class="header__list">
					<li>
						<a class="header__link" href="#section">Main</a>
					</li>
					<li>
						<a class="header__link" href="#section">Pokemon</a>
					</li>
					<li>
						<a class="header__link" href="#section">All Pokemons</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default AppHeader;