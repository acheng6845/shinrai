export default function reducer(state={
	user: {
		name: null,
		teams: null,
		default_team: null
	},
	fetching: false,
	fetched: false,
	error: null
}, action) {
	switch (action.type) {
		case 'FETCH_USER': {
			return {...state, fetching: true};
		}
		case 'FETCH_USER_REJECTED': {
			return {...state, fetching: false, error: action.payload};
		}
		case 'FETCH_USER_FULFILLED': {
			return {...state, fetching: false, fetched: true, user: action.payload};
		}
		case 'SET_DEFAULT_TEAM': {
			return {
				...state,
			 	user: {
				...state,
				default_team: action.payload
				}
			};
		}
	}

	return state;
}