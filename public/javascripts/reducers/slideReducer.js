export default function reducer(state={
	data: null,
	length: 0,
}, action) {
	const dataArray = [
		{
			backgroundImage: "cloud.png",
			title: {text: "Tutorial"},
			body: {text: "Dozens Of Lessons For", subText: "Improving Your Vanilla JavaScript"},
			end: {text: "From object prototyping to hoisting and currying - learn what", subText: "companies are expecting front end developers to know."},
			topImage: "shin.png",
			bottomImage: "rai.png",
			artist: "Deb Watson",
			link: "/tutorial",
		},
		{
			backgroundImage: "abyss.png",
			title: {text: "Tool"},
			body: {text: "Find Robust Tools For", subText: "Popular Mobile Games"},
			end: {text: "Whenever you need information on a unit or mechanic, a quick search", subText: "through the wiki service will yield the necessary results."},
			topImage: "chen.png",
			bottomImage: "gong.png",
			artist: "Anonymous",
			link: "/pad",
		},
		{
			backgroundImage: "waves.png",
			title: {text: "Article"},
			body: {text: "Why Did I Create", subText: "This Website"},
			end: {text: "Dive into who I am and why I decided", subText: "to spend my personal time on creating this site."},
			topImage: "jue.png",
			bottomImage: "xin.png",
			artist: "Kelly Peterson",
			link: "/about",
		},
	];
	switch(action.type) {
		case "NEXT_SLIDE": {
			return {
				...state,
				data: (action.payload < dataArray.length && action.payload >= 0) ? dataArray[action.payload] : null,
				length: dataArray.length
			}
		}
	}
	return state;
}