import React from "react";
import ItemList from "./itemList.js";
import { mount } from "enzyme";//Полный рендеринг компонента (даст на протестить клики по li)
import GotService from "../../services/gotService.js";//Поможет протестить хук с функцией для получения данных из базы

describe('Testing <ItemList/>', () => {
	const service = new GotService();

	//Тестируемый компонент
	//Переданный пропс исполняет роль заглушки, чтобы получить промис для теста
	//Для работы мы отрендерим только блок name
	const list = mount(<ItemList
		getData={service.getAllHouses}
		renderItem={({ name }) => name} />);

	it('Click on item list must rerender all list in 1 instance', () => {
		list.setState({ itemList: [{ name: "qwe", id: 1 }, { name: "asd", id: 2 }] });//Кастомный стейт
		list.find(".list-group-item:first-child").simulate("click");//Симуляция клика

		expect(list.find("ul")).toHaveLength(1);//Проверяем, что у нас отрендерился только 1 элемент ul
	});
});
