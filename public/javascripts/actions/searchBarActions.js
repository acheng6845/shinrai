import fetch from 'isomorphic-fetch';

export function fetchMonster(id) {
	return {
		type: 'FETCH_MONSTER_FULFILLED',
		payload: [id]
	}
}

//sends a request to the api to get back a JSONArray with a list of objects containing the requested IDs.
export function fetchMonsterName(name) {
	return dispatch => {
		//return fetch('https://express-api-acheng6845.c9users.io:8080/'+name)
		return fetch('http://localhost:3000/api/'+name)
			.then(response => response.json())
			.then(json => dispatch(receiveMonsterName(json)))
	}
}

export function receiveMonsterName(json) {
	return {
		type: 'FETCH_MONSTER_FULFILLED',
		payload: json
	}
}

export function requestMonsterName(name) {
	return {
		type: 'FETCH_MONSTER',
		payload: name
	}
}

//sends a request to the api to get back a JSONObject with the details on a specific unit.
export function makeSelection(monster) {
	return function(dispatch) {
		//return fetch('https://express-api-acheng6845.c9users.io:8080/unit/'+monster)
		return fetch('http://localhost:3000/api/id/'+monster)
			.then(response => response.json())
			.then(json => dispatch(receiveSelection(json)))
	}
	// return {
	// 	type: 'SELECT_MONSTER',
	// 	payload: monster
	// }
}

export function receiveSelection(json) {
	return {
		type: 'FETCH_SELECTION_FULFILLED',
		payload: json
	}
}