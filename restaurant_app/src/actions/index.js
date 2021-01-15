const menuLoaded = (newMenu) => {
	/*Когда к нам будут приходить новые данные, мы будем помещать их
	в payload и после этого в редюсере мы сможем установить их в state */
	return {
		type: "MENU_LOADED",
		payload: newMenu,
	}
}

export {
	menuLoaded
}