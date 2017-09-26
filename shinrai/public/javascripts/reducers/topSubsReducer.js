export default function reducer(state={
	top_subs: [],
	fetching: false,
	fetched: false,
	error: null
}, action) {
	switch (action.type) {
		case 'FETCH_POPULAR_SUBS': {
			return {...state, fetching: true};
		}
		case 'FETCH_POPULAR_SUBS_REJECTED': {
			return {
				...state,
				fetching: false,
				error: action.payload
			};
		}
		case 'FETCH_POPULAR_SUBS_FULFILLED': {
			return {
				...state,
				fetching: false,
				fetched: true,
				top_subs: action.payload
			};
		}

	}

	//console.log(state, action.payload);
	return state;

}