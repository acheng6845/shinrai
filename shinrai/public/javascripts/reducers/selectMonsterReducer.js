export default function reducer(state={
	error: null,
	fetching: false,
	fetched: true,
	monster : 
	{
			rarity: 5, 
			types: ['God', 'Balanced', 'Devil'],
			hp: [100, 300, 1],
			atk: [100, 300, 1],
			rcv: [100, 300, 1],
			lvl: [99, 1500000],
			name: 'No Monster Selected',
			team_cost: 0,
			leader_skill: ['No Leader Skill', '',0,0],
			active_skill: ['No Active Skill', '',0,0],
			number: 158
	}
}, action) {
	switch (action.type) {
		case 'FETCH_SELECTION' : {
			return {
				...state,
				fetching: true
			}
		}
		case 'FETCH_SELECTION_FULFILLED' : {
			return {
				...state,
				fetching: false,
				fetched: true,
				monster: action.payload
			}
		}
	}

	return state;
}