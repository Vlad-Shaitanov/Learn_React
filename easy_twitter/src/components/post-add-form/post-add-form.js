import React from "react";
import "./post-add-form.css";

const PostAddForm = ({ onAddItem }) => {
	return (
		<div className="bottom-panel d-flex">
			<input
				type="text"
				placeholder="What do you think about the world?"
				className="form-control new-post-label"
			/>
			<button
				type="submit"
				className="btn btn-outline-secondary"
				onClick={() => onAddItem('hello')}>
				New message
				</button>
		</div>
	)
}
export default PostAddForm;