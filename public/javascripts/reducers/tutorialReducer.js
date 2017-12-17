export default function reducer(state={
	data: null,
	error: null,
	chapters: null,
	index: 0,
}, action) {

	switch(action.type) {
		case "SELECT_INDEX": {
			return {
				...state,
				data: action.payload.data,
				error: null,
				chapters: action.payload.chapters,
				index: action.payload.index,
			}
		}
	}
	return state;
}