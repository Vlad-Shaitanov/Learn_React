import React from "react";
import './App.css';
import Wrapper from "./components/Wrapper.js";
import MyContext from "./components/Context.js";

function App() {
	return (
		<div className="App">
			<MyContext.Provider value={{
				name: "Vladislav",
				age: 31,
			}}>
				<Wrapper />
			</MyContext.Provider>
		</div>
	);
}

export default App;
