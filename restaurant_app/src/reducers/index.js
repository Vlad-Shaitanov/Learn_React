const initialState = {//Первоначальное значение
	menu: [],
	loading: true,
	error: false
}

const reducer = (state = initialState, action) => {
	/*Желательно, чтобы у каждого действия было 3 экшена - запрос, загрузка, и ошибка*/
	switch (action.type) {
		case "MENU_LOADED":
			return {
				menu: action.payload,//Данные, которые загрузились с сервера
				loading: false,
			};
		case 'MENU_REQUESTED':
			return {
				menu: state.menu,
				loading: true,
				error: false
			};
		case 'MENU_ERROR':
			return {
				menu: state.menu,
				loading: true,
				error: true
			};
		default: {
			return state;
		}
	}
};

export default reducer;