import React from "react";
import "./errorMessage.css";
import img from "./error.jpg";

const ErrorMessage = () => {
	return (
		/*В качестве альтернативы можно импортировать пикчу из папки public/img,
		тогда атрибут будет таким:
		<img src={process.env.PUBLIC_URL + "/public/img/error.jpg"} alt="ERROR"></img>*/

		<>
			<img src={img} alt="error"></img>
			<span>Something goes wrong</span>
		</>
	)
}

export default ErrorMessage;