import React from "react";
import Input from "../../ui/input/index.js";
import Select from "../../ui/select/index.js";
import Checkbox from "../../ui/checkbox/index.js";
import Button from "../../ui/button/index.js";
import styles from "./password-generator.module.css";

const PasswordGenerator = () => {
	const passwordLengthValues = [8, 9, 10, 11, 12, 13, 14, 15, 16];
	let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const symbols = "!@#$%^&()_+?><:{}[]";

	const [result, setResult] = React.useState("");
	const [passwordLength, setPasswordLength] = React.useState(passwordLengthValues[0]);
	const [isSymbolsUse, setIsSymbolsUse] = React.useState(false);
	const [isPasswordCopied, setIsPasswordCopied] = React.useState(false);

	const HandlePasswordGenerator = () => {
		let currentResult = "";

		if (isSymbolsUse) {
			chars += symbols;
		}

		for (let i = 0; i < passwordLength; i += 1) {
			const randomNumber = Math.floor(Math.random() * chars.length);
			currentResult += chars.substring(randomNumber, randomNumber + 1);
		}
		setResult(currentResult);
	};

	const handleBlur = (event) => {
		setPasswordLength(event.target.value);
	};

	const handleSymbolsUse = () => {
		setIsSymbolsUse(!isSymbolsUse);
	};

	const handlePasswordCopy = () => {
		if (result) {
			//Работа с буфером обмена
			navigator.clipboard.writeText(result)
				.then(() => {
					let timerId = null;
					setIsPasswordCopied(true);
					timerId = setTimeout(() => {
						setIsPasswordCopied(false);
						clearTimeout(timerId);
					}, 2000);
				});
		}
	};

	return (
		<div className={styles["root"]}>
			<h1 className={styles["title"]}>Генератор паролей</h1>
			<div className={styles["result"]}>
				<Input type="text" readOnly={true} defaultValue={result}></Input>
				<button className={styles["copy"]} onClick={handlePasswordCopy}></button>
				{isPasswordCopied && <span className={styles["copied"]}>Скопировано!</span>}
			</div>
			<div className={styles["option"]}>
				<span className={styles["option-name"]}>Длина пароля</span>
				<Select options={passwordLengthValues} onBlur={handleBlur}></Select>
			</div>
			<div className={styles["option"]}>
				<label className={styles["option-label"]} htmlFor="symbols">Использовать спецсимволы</label>
				<Checkbox defaultChecked={false} id="symbols" onChange={handleSymbolsUse}></Checkbox>
			</div>
			<Button type="button" onClick={HandlePasswordGenerator}>Сгенерировать пароль</Button>
		</div>
	)
};

export default PasswordGenerator;