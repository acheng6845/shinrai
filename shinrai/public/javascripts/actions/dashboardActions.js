export function fetchPopularLeaders() {
	return {
		type: 'FETCH_POPULAR_LEADERS_FULFILLED',
		payload: [2970, 2971, 2972, 2078, 2566, 2443, 3233, 2995, 2567, 2999]
	}
}

export function fetchPopularSubs() {
	return {
		type: 'FETCH_POPULAR_SUBS_FULFILLED',
		payload: [2179, 2663, 2744, 2970, 2991, 1645, 2565, 1423, 2592, 1644]
	}
}