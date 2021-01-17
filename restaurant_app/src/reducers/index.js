const initialState = {//Первоначальное значение
	menu: [],
	loading: true,
	error: false,
	items: [],
	totalPrice: 0
}

const reducer = (state = initialState, action) => {
	/*Желательно, чтобы у каждого действия было 3 экшена - запрос, загрузка, и ошибка*/
	switch (action.type) {
		case "MENU_LOADED":
			return {
				...state,/*Сначала возвращаем предыдущий стейт, а затем переписываем те поля,
				которые действительно нужно поменять, когда вызовется case. Таким образом
				будет меняться лишь то, что нужно в данный момент без дублирования кода*/
				menu: action.payload,//Данные, которые загрузились с сервера
				loading: false,
			};
		case 'MENU_REQUESTED':
			return {
				...state,/*Сначала возвращаем предыдущий стейт, а затем переписываем те поля,
				которые действительно нужно поменять, когда вызовется case. Таким образом
				будет меняться лишь то, что нужно в данный момент без дублирования кода*/
				menu: state.menu,
				loading: true,
				error: false
			};
		case 'MENU_ERROR':
			return {
				...state,/*Сначала возвращаем предыдущий стейт, а затем переписываем те поля,
				которые действительно нужно поменять, когда вызовется case. Таким образом
				будет меняться лишь то, что нужно в данный момент без дублирования кода*/
				menu: state.menu,
				loading: true,
				error: true
			};
		case "ITEM_ADD_TO_CART":
			const id = action.payload;

			const itemInd = state.items.findIndex(item => item.id === id);
			if (itemInd >= 0) {
				const itemInState = state.items.find(item => item.id === id);
				const newItem = {
					...itemInState,
					qtty: ++itemInState.qtty
				}
				return {
					...state,
					items: [
						...state.items.slice(0, itemInd),
						newItem,
						...state.items.slice(itemInd + 1)
					],
					totalPrice: state.totalPrice + newItem.price
				}

			}
			// товара раньше не было в корзине
			const item = state.menu.find(item => item.id === id);
			const newItem = {
				title: item.title,
				price: item.price,
				url: item.url,
				id: item.id,
				qtty: 1
			};

			return {
				...state,
				items: [
					...state.items,
					newItem
				],
				totalPrice: state.totalPrice + newItem.price
			};
		case "ITEM_REMOVE_FROM_CART":
			const idx = action.payload;
			const itemIndex = state.items.findIndex(item => item.id === idx)
			const price = state.items[itemIndex]['price'] * state.items[itemIndex]['qtty'];
			return {
				...state,
				items: [
					...state.items.slice(0, itemIndex),
					...state.items.slice(itemIndex + 1)
				],
				totalPrice: state.totalPrice - price
			}
		default: {
			return state;
		}
	}
};

export default reducer;