export default function reducer(state={
	fetching: false,
	fetched: false,
	error: null,
	monsters: null
}, action) {
	switch (action.type) {
		case 'FETCH_MONSTER': {
			return {
				...state,
				fetching: true
			}
		}
		case 'FETCH_MONSTER_FULFILLED': {
			return {
				...state,
				fetching: false,
				fetched: true,
				monsters: action.payload
			};
		}
	}
	return state;
}