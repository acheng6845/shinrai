import React from 'react';
import ReactDOM from 'react-dom';
import { fetchTutorialPage } from '../actions/tutorialActions';

export default class TutorialPage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const { title, sections, index, length, onClick } = this.props;

		const sectionStyle = {
			marginBottom: "5vh",
		};

		return (
			<div className="elMessiri">
				<Paginators title={title} index={index} length={length} onClick={onClick} />
				<div style={sectionStyle}>
					{sections ? sections.map((data, index) => <Section heading={data.heading} body={data.body} key={"Section"+index} />) : ""}
				</div>
				<Paginators index={index} onClick={onClick} length={length} />
			</div>
		);
	}
}

class Paginators extends React.Component {
	constructor(props,context) {
		super(props, context);
	}

	dispatchPageDirection(increment) {
		const pageNumber = this.props.index+increment;
		if(pageNumber >= 0 && pageNumber < this.props.length) {
			this.props.onClick(pageNumber);
		}
	}

	render() {

		const { title } = this.props;

		const paginatorLeftStyle = {
			fontSize: "1.5em",
			color: "black",
			//textShadow: "1px 1px white",
			top: "5px",
			fontWeight: "500",
			cursor: "pointer",
		};
		const paginatorRighttStyle = {
			fontSize: "1.5em",
			textAlign: "right",
			color: "black",
			//textShadow: "1px 1px white",
			top: "5px",
			fontWeight: "500",
			cursor: "pointer",
		};
		const titleStyle = {
			fontSize: "2em",
			textAlign: "center",
			fontWeight: "700",
			color: "black",
			//textShadow: "1px 1px white",
		};
		const triangleStyle = {
			position: "relative",
			top: "3px",
		};
		const sectionStyle = {
			
		};
		return (
			<div className="row" style={sectionStyle}>
				<div className="col-xs-3" style={paginatorLeftStyle} onClick={this.dispatchPageDirection.bind(this, -1)}>
					<span style={triangleStyle} className="glyphicon glyphicon-triangle-left" />Previous
				</div>
				<div className="col-xs-6" style={titleStyle}>
					{title}
				</div>
				<div className="col-xs-3" style={paginatorRighttStyle} onClick={this.dispatchPageDirection.bind(this, 1)}>
					Next<span style={triangleStyle} className="glyphicon glyphicon-triangle-right" />
				</div>
			</div>	
		);
	}
}

class Section extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		
		const { heading, body, image} = this.props;

		const sectionStyle = {
			//height: "50vh",
			marginLeft: "1%",
			marginRight: "1%",
			borderBottom: "1px solid #eee",
			paddingBottom: "20px",
		};
		const headingStyle = {
			fontSize: "1.5em",
			fontWeight: "700",
			textShadow: "1px 1px white",
			color: "maroon",
			margin: "10px",
		};
		const bodyStyle = {
			fontSize: "1em",
			textShadow: "1px 1px white",
			color: "black",
			marginTop: "20px",
		};

		return (
			<div style={sectionStyle} className="row">
				<div style={headingStyle}>
					{heading}
				</div>
				<div style={bodyStyle}>
					{body}
				</div>
				<div>
					{image != null ? <img src={image} /> : ""}
				</div>
			</div>
		);
	}
}