import React from "react";
import styles from "./button.module.css";
import clsx from "clsx";//Библиотека позволяет комбинировать классы

const Button = ({ type, className, onClick, children }) => {
	return (
		<button
			type={type}
			className={clsx(styles["button"], className)}
			onClick={onClick}
		>{children}</button>
	)
};

export default Button;