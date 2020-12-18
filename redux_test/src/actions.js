export const inc = () => {// action-creator(т.е. создает action)
	return {
		type: "INC"
	}
}
export const dec = () => {// action-creator(т.е. создает action)
	return {
		type: "DEC"
	}
}
export const rand = () => {
	return { type: "RND", value: Math.floor(Math.random() * 10) }
}