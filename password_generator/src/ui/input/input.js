import React from "react";
import clsx from "clsx";//Библиотека позволяет комбинировать классы
import styles from "./input.module.css";

const Input = ({ type, placeholder, defaultValue, disabled, className, readonly }) => {
	return <input
		type={type}
		placeholder={placeholder}
		defaultValue={defaultValue}
		disabled={disabled}
		className={clsx(styles["input"], className)}
		readonly={readonly}></input>
};

export default Input;