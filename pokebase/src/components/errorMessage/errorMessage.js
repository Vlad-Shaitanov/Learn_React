import React from "react";
import errorPic from "../../img/robo-error.png";

const ErrorMessage = () => {
	return (
		<div className="error">
			<img src={errorPic} width="200" alt="Sorry"></img>
			<div>Something goes wrong!</div>
		</div>
	)
}

export default ErrorMessage;