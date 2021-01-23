import React from "react";
import RandomChar from "./randomChar.js";
import { shallow } from "enzyme";//для тестерования компонентов с роутингом(где есть Link)

describe("Testing <RandomChar/>", () => {//test suit
	//test case

	//В переменной экземпляр тестируемого компонента
	const char = shallow(<RandomChar />);

	describe("Testing snap & state", () => {
		it("RandomChar have rendered correctly", () => {
			/*После запуска теста будет сделан снимок нашего компонента. В дальнейшем
			этот снимок будет сравниваться с оригиналом, те. полученным в начале*/
			expect(char).toMatchSnapshot();
		});
		it("RamdomChar state 'char' is empty object", () => {
			//Ожидаем, что свойство char в state равно пустому объекту
			expect(char.state().char).toBeObject();
		});
		it("RamdomChar state 'loading' is true", () => {
			//Ожидаем, что свойство loading в state равно пустому объекту
			expect(char.state().loading).toBeTruthy();
		});
		it("RamdomChar state 'error' is false", () => {
			//Ожидаем, что свойство loading в state равно пустому объекту
			expect(char.state().error).toBeFalsy();
		});
	});

	describe("Handlers tests", () => {//Тесты функций и обработчиков событий
		it("testing onCharLoaded", () => {
			/*На экземпляре объекта мы вызываем метод инстанс, а на нем
			нужную функцию*/
			char.instance().onCharLoaded();
			//Ожидаем, что функция onCharLoaded переведет стейт в false
			expect(char.state().loading).toBeFalsy();
		});

		it("testing onError", () => {
			/*На экземпляре объекта мы вызываем метод инстанс, а на нем
			нужную функцию*/
			char.instance().onError();
			/*Ожидаем, что функция onError переведет стейт loading в false
			а error в true*/
			expect(char.state().loading).toBeFalsy();
			expect(char.state().error).toBeTruthy();
		});

		it("testing updateCharacter", () => {
			/*На экземпляре объекта мы вызываем метод инстанс, а на нем
			нужную функцию*/
			char.instance().updateCharacter();
			//Ожидаем, что функция updateCharacter переведет стейт в false
			expect(char.state().loading).toBeFalsy();
		});
	});
});