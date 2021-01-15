const initialState = {//Первоначальное значение
	menu: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "MENU_LOADED":
			return {
				menu: action.payload//Данные, которые загрузились с сервера
			};
		default: {
			return state;
		}
	}
};

export default reducer;