import React from "react";

import styles from "./select.module.css";

const Select = ({ options, onBlur }) => {
	return (<select onBlur={onBlur} className={styles["select"]}>{
		options && options.map((option, index) => {
			return (<option key={index}>{option}</option>)
		})
	}</select>)
};

export default Select;