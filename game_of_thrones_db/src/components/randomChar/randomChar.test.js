import React from "react";
import RandomChar from "./randomChar.js";
import renderer from "react-test-renderer";

describe("Testing <RandomChar/>", () => {//test suit
	//test case
	it("RandomChar have rendered correctly", () => {
		//В переменной экземпляр тестируемого компонента
		const char = renderer.create(<RandomChar />).toJSON();
		/*После запуска теста будет сделан снимок нашего компонента. В дальнейшем
		этот снимок будет сравниваться с оригиналом, те. полученным в начале*/
		expect(char).toMatchSnapshot();
	});

});