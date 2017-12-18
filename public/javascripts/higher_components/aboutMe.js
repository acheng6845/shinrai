import React from 'react';
import ReactDOM from 'react-dom';

export default class AboutMe extends React.Component {
	constructor(props, context) {
		super(props, context);

	}

	render() {

		const leftStyle = {
			textAlign: "center",
			fontSize: "2em",
			marginTop: "7vh",
			color: "black",
		};
		const rightStyle = {
			textAlign: "center",
			marginTop: "5vh",
			fontSize: "1.5em",
		};
		const imgStyle = {
			height: "200px",
			width: "auto",
			border: "1px solid black",
		};

		const description = (
			<p>
				Hello world, my name is Aaron Cheng, a modest software developer<br/>who had some time on his hands!<br />
				But, in order to make that time productive, I decided that developing a website could help to deepen my knowledge of the field in a practical environment.<br />
				So, ta-da! Through earnest curiosity and diligence, this site came to life.
			</p>
		);
		const links = (
			<ul>
				<a href="https://www.linkedin.com/in/aaron-cheng-48752ab2/">LinkedIn &nbsp;&nbsp;&nbsp;&nbsp;</a>
			</ul>
		);

		return (
			<div className="elMessiri">
				<div style={leftStyle} className="col-xs-8">
					{description}
				</div>
				<div style={rightStyle} className="col-xs-4">
					<img style={imgStyle} src="/images/linkedin.jpg" />
					{links}
				</div>
			</div>
		);
	}
}