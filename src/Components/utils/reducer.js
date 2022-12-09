
export default function reducer(state, action) {
	switch (action.type) {
		case "ADD_FAV":
			return [...state, action.payload]
		default:
			throw new Error();
	}
}
