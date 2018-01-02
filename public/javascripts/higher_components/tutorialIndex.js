import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import TutorialPage from '../lower_components/tutorialPage';
import { fetchTutorialPage } from '../actions/tutorialActions';

@connect((store) => {
	return {
		data: store.tutorial.data,
		error: store.tutorial.error,
		chapters: store.tutorial.chapters,
		index: store.tutorial.index,
	};
})
export default class TutorialIndex extends React.Component {
	constructor(props, context) {
		super(props, context);

		if(!this.props.index) this.fetchTutorialPage(0);
		this.state = {
			index: this.props.index,
		};
	}

	componentDidMount() {
		
	}

	fetchTutorialPage(index) {
		this.props.dispatch(fetchTutorialPage(index));
	}

	render() {
		
		const { data, error, chapters } = this.props;
		const largerStyle = {
			
		};
		const tableStyle = {
			borderRight: "1px dotted black",
			borderBottom: "1px dotted black",
			height: "90vh",
			backgroundColor: "#eee",
		};
		const contentStyle = {
			height: "90vh",
			backgroundColor: "white",
		};

		const tableOfContents = <NavbarLeft heading="Chapters" links={error == null && data != null ? chapters : ""} index={this.props.index} onClick={this.fetchTutorialPage.bind(this)}/>;
		const pageContent = <TutorialPage index={this.props.index} length={chapters != null ? chapters.length : 0} onClick={this.fetchTutorialPage.bind(this)}
			title={error == null  && data != null ? data.chapter : ""} sections={error == null && data != null ? data.sections : ""} />;
		

		const largeBrowserDiv = (
			<div style={largerStyle}>
				<div className="col-md-3" style={tableStyle}>
					{tableOfContents}
				</div>
				<div className="col-md-9" style={contentStyle}>
					{pageContent}
				</div>
			</div>
		);

		return (
			<div>
				{
					browserWidth() < 500 ?
					<NavbarTop titleLeft="Table of Contents" titleRight="Chapter X" leftChild={tableOfContents} rightChild={pageContent} /> :
					largeBrowserDiv
				}
			</div>
		);
	}
}
class NavbarTop extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			showLeft: this.props.showLeft,
		}
	}

	onClick() {
		this.setState({
			showLeft: !this.state.showLeft,
		});
	}

	render() {
		const { titleLeft, titleRight, leftChild, rightChild } = this.props;
		const triangleStyle = {
			color: "skyblue",
			fontSize: "3vh",
		};
		const titleStyle = {
			fontSize: "3vh",
			color: "white",
		};
		const topStyle = {
			paddingTop: "10px",
			backgroundColor: "gray",
			height: "6vh",
			paddingBottom: "10px",
		};

		const left = (
			<div style={topStyle}>
				<div className="col-xs-10 col-sm-7" style={{...titleStyle, textAlign: "right"}}>
					{titleLeft}
				</div>
				<div className="col-xs-2 col-sm-5" style={{...triangleStyle, textAlign: "left"}}>
					<span className="glyphicon glyphicon-triangle-right" onClick={this.onClick.bind(this)} />
				</div>
			</div>
		);

		const right = (
			<div style={topStyle}>
				<div className="col-xs-2 col-sm-6" style={{...triangleStyle, textAlign: "right"}}>
					<span className="glyphicon glyphicon-triangle-left" onClick={this.onClick.bind(this)} />
				</div>
				<div className="col-xs-10 col-sm-6" style={{...titleStyle, textAlign: "left"}}>
					{titleRight}
				</div>
			</div>
		);

		const divStyle = {
			fontFamily: "El Messiri, cursive",
		};


		return (
			<div className="elMessiri" style={divStyle}>
				{this.state.showLeft ? left : right }
				{this.state.showLeft ? leftChild : rightChild }
			</div>
		);
	}
}
class NavbarLeft extends React.Component {
	constructor(props, context) {
		super(props, context);

	}

	fetchTutorialPage(index) {
		this.props.onClick(index);
	}

	render() {

		const { heading, links, index } = this.props;
		const sectionStyle = {
			textAlign: "center",
		};
		const headingStyle = {
			fontSize: "2em",
			color: "#545AA7",
			fontWeight: "700",
			textShadow: "1px 1px white",

		};
		const linksStyle = {
			fontWeight: "500",
			fontSize: "1.2em",
			textShadow: "1px 1px white",
			color: "black",
			cursor: "pointer",
		};

		return (
			<div className="elMessiri" style={sectionStyle}>
				<div style={headingStyle}>{heading}</div>
				{links != "" ? links.map((link, i) => 
					<div onClick={this.fetchTutorialPage.bind(this, i)} style={{...linksStyle, color: index == i ? "maroon" : "black"}} key={"linksDiv"+i}>{link}</div>) : ""}
			</div>
		);
	}
}
	//returns an integer representing the number of pixels the browser's width currently contains.
function browserWidth() {
	return Math.max(
		document.body.scrollWidth,
		document.documentElement.scrollWidth,
		document.body.offsetWidth,
		document.documentElement.offsetWidth,
		document.documentElement.clientWidth
	);
}
