import React from "react";
import errorPic from "../../img/robo-error.png";

const ErrorMessage = () => {
	return (
		<div className="error">
			<img src={errorPic} alt="Sorry"></img>
			<span>Something goes wrong!</span>
		</div>
	)
}

export default ErrorMessage;