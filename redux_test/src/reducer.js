const reducer = (state = 0, action) => {
	/*Функция принимает на вход 2 аргумента - state и action,
	которое нужно произвести с состоянием*/
	/*Функция reducer должна быть чистой, т.е. зависеть ТОЛЬКО от state и action*/
	switch (action.type) {//Обработка типа действия
		case "INC":
			return state + 1;
		case "DEC":
			return state - 1;
		case "RND":
			return state + action.value;//action содержит значение value, которое передается внутрь как аргумент
		default:
			return state;
	}
}
export default reducer;