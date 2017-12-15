export default function reducer(state={
	authentication_token: null,
	fetching: false,
	fetched: false,
	error: null
}, action) {
	switch (action.type) {
		case 'FETCH_TOKEN': {
			return {...state, fetching: true}
		}
		case 'FETCH_TOKEN_REJECTED': {
			return {...state, fetching: false, error: action.payload}
		}
		case 'FETCH_TOKEN_FULFILLED': {
			return {
				...state, 
				fetching: false, 
				fetched: true, 
				authentication_token: action.payload
			}
		}
	}
}