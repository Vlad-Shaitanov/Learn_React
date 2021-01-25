import Button from "./ui/button/index.js";
import Checkbox from "./ui/checkbox/index.js";
import Input from "./ui/input/index.js";
import Select from "./ui/select/index.js";
import PasswordGenerator from "./components/password-generator/index.js";
import './App.css';

function App() {
	return (
		<div className="App">
			<Button type="button" className="btn">
				<span>Button</span>
			</Button>
			<Checkbox></Checkbox>
			<Input></Input>
			<Select></Select>
			<PasswordGenerator></PasswordGenerator>
		</div>
	);
}

export default App;
