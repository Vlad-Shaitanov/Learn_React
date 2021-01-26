import React from "react";
import clsx from "clsx";//Библиотека позволяет комбинировать классы
import styles from "./input.module.css";

const Input = ({ type, placeholder, defaultValue, disabled, className, readOnly }) => {
	return <input
		type={type}
		placeholder={placeholder}
		defaultValue={defaultValue}
		disabled={disabled}
		className={clsx(styles["input"], className)}
		readOnly={readOnly}></input>
};

export default Input;