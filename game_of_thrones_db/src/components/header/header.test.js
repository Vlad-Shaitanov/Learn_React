import React from "react";
import Header from "./header.js";
import { shallow } from "enzyme";//для тестерования компонентов с роутингом(где есть Link)

describe("Testing <Header/>", () => {//test suit
	//test case
	it("Header have rendered correctly", () => {
		//В переменной экземпляр тестируемого компонента
		const header = shallow(<Header />);
		/*После запуска теста будет сделан снимок нашего компонента. В дальнейшем
		этот снимок будет сравниваться с оригиналом, те. полученным в начале*/
		expect(header).toMatchSnapshot();
	});
});