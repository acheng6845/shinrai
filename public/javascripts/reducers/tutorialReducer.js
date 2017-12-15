export default function reducer(state={
	data: null,
	error: null,
	chapters: null,
}, action) {

	const dataArray = [
		{chapter: "Execution Context", sections: [
			{heading: "Test Heading", body: "Test Body"}
		]},
		{chapter: "Hoisting"},
		{chapter: "Functions"},
	];

	switch(action.type) {
		case "SELECT_INDEX": {
			if(action.payload >= 0 && action.payload < dataArray.length) {
				return {
					...state,
					data: dataArray[action.payload],
					error: null,
					chapters: dataArray.map((data) => data.chapter),
				};
			} else {
				return {
					...state,
					error: "index was invalid.",
				};
			}
		}
	}
	return state;
}