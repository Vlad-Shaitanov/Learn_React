import React from "react";
import clsx from "clsx";//Библиотека позволяет комбинировать классы
import styles from "./checkbox.module.css";

const Checkbox = ({ name, id, className, defaultChecked, onChange }) => {
	return <input
		type="checkbox"
		neme={name}
		id={id}
		className={clsx(styles["checkbox"], className)}
		defaultChecked={defaultChecked}
		onChange={onChange}></input>
};

export default Checkbox;