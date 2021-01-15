import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';

const AppHeader = ({ total }) => {
	return (
		<header className="header">
			<a className="header__link" href="#section">
				Menu
            </a>
			<a className="header__link" href="#section">
				<img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </a>
		</header>
	)
};

export default AppHeader;