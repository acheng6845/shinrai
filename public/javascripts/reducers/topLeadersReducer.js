export default function reducer(state={
	top_leaders: [],
	fetching: false,
	fetched: false,
	error: null
}, action) {
	switch (action.type) {
		case 'FETCH_POPULAR_LEADERS': {
			//console.log(action.payload);
			return {...state, fetching: true};
			//return Object.assign({}, state, {fetching: true});
		}
		case 'FETCH_POPULAR_LEADERS_REJECTED': {
			//console.log(action.payload);
			return {
				...state,
				fetching: false,
				error: action.payload
			};
			//return Object.assign({}, state, {fetching: false, error: action.payload});
		}
		case 'FETCH_POPULAR_LEADERS_FULFILLED': {
			//console.log(state);
			return {
				...state, 
				fetching: false,
				fetched: true,
				top_leaders: action.payload
			};
			//console.log('Error!');
			// return Object.assign({}, state, {
			// 	fetching: false,
			// 	fetched: true,
			// 	top_leaders: action.payload
			// });
		}
		// default: {
		// 	return state;
		// }

	}
	//console.log(state, action.payload);
	return state;
}