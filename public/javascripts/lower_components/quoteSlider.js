import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default class QuoteSlider extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			
		};
	}

	componentDidMount() {
		this.$title = $(this.title);
		this.$titleText = $(this.titleText);
		this.$body = $(this.body);
		this.$end = $(this.end);
		this.$link = $(this.link);
		this.$linkButton = $(this.linkButton);
		this.$title.fadeIn("500", () => {
			this.$titleText.fadeIn("2500");
			setTimeout(() => {
				this.$body.fadeIn("3000", () => {
					setTimeout(() => {
						this.$end.fadeIn("3000", () => {
							setTimeout(() => {
								this.$link.fadeIn("500", () => {
									this.$linkButton.fadeIn("2500");
								});
							}, 500)
						});
					}, 500);
				});
			}, 500);
		});
	}

	componentWillUnmount() {
		this.$title.fadeIn("destroy");
		this.$titleText.fadeIn("destroy");
		this.$body.fadeIn("destroy");
		this.$end.fadeIn("destroy");
		this.$link.fadeIn("destroy");
		this.$linkButton.fadeIn("destroy");
	}

	render() {

		let { backgroundImage, topImage, bottomImage, position, title, body, end, artist, height, link, isSmall } = this.props;

		position = (position != "left" && position != "center" && position != "right") ? "center" : position;

		const sectionStyle = {
			backgroundImage: backgroundImage != "" ? "url(../../images/"+backgroundImage+")" : "",
			backgroundColor: "black",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			display: "block",
			width: "100vw",
			height: height,
			
		};

		const titleStyle = {
			position: "relative",
			fontSize: "1em",
			color: "white",
			//textShadow: "2px 2px black",
			textAlign: position,
			//marginTop: title.top,
			display: "none",
			//left: title.left != null ? title.left : "0%",
			top: "8vh",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
		};

		const bodyStyle = {
			position: "relative",
			fontSize: isSmall ? "20px" : "3em",
			color: "white",
			textShadow: "2px 2px black",
			textAlign: position,
			//marginTop: body.top,
			display: "none",
			//left: body.left != null ? body.left : "0%",
			top: "12vh",
			fontWeight: "700",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: isSmall ? "wrap" : "nowrap",
		};

		const endStyle = {
			position: "relative",
			fontSize: isSmall ? "12px" : "20px",
			color: "white",
			textShadow: "2px 2px black",
			textAlign: position,
			//marginTop: end.top,
			display: "none",
			//left: end.left != null ? end.left : "0%",
			top: "15vh",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: isSmall ? "wrap" : "nowrap",
		};

		const artistStyle = {
			position: "absolute",
			fontSize: "1em",
			color: "white",
			textShadow: "2px 2px black",
			textAlign: position,
			top: "4vh",
			left: "3vw",
		};

		const linkStyle = {
			position: "relative",
			textAlign: position,
			top: "18vh",
			fontSize: "20px",
			fontWeight: "700",
			textShadow: "1px 1px silver",
			display: "none"
		};

		const buttonStyle = {
			display: "none",
			backgroundColor: "#AFEEEE",
			paddingLeft: "2em",
			paddingRight: "2em",
			paddingTop: "1em",
			paddingBottom: "1em",
			fontWeight: "700",
		};

		const linkButtonStyle = {
			display: "none",
		}

		return (
			<div style={sectionStyle}>
				<div>
					<div id="titleText" ref={el => this.title = el} style={titleStyle} >
						<span style={buttonStyle} ref={el => this.titleText = el}>
							{title.text ? title.text.toUpperCase() : ""}
						</span>
					</div>
					<div id="bodyText" ref={el => this.body = el} style={bodyStyle} >
						{body.text}
						{body.subText ? <br /> : ""}
						{body.subText}
					</div>
					<div id="endText" ref={el => this.end = el} style={endStyle} >
						{end.text}
						{end.subText ? <br /> : ""}
						{end.subText ? <br /> : ""}
						{end.subText}
					</div>
					<div id="linkButton" ref={el => this.link = el} style={linkStyle} >	
						<LinkButton ref={el => this.linkButton = el} link={link}/>
					</div>
					<div style={artistStyle}>{"Image Credit: "+artist}</div>
				</div>
			</div>
		);
	}
}
QuoteSlider.defaultProps = {
	backgroundImage: "heart.gif",
	position: "center",
	title: {text: null, top: "20%", left: "0%"},
	body: {text: null, subText: null, top: "40%", left: "0%"},
	end: {text: null, subText: null, top: "60%", left: "0%"},
	link: null,
	artist: "Anonymous",
	height: "50vh",
	isSmall: false,
};
class LinkButton extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			color: "white",
			backgroundColor: "#AFEEEE",
		};
	}

	componentDidMount() {
		this.$navLink = $(this.navLink);
	}

	componentWillUnmount() {
		this.$navLink.fadeOut("fast", () => {
			this.$navLink.fadeOut("destroy");
		});
	}

	onHover() {
		this.setState({
			color: "#AFEEEE",
			backgroundColor: "white",
		});
	}

	onMouseLeave() {
		this.setState({
			color: "white",
			backgroundColor: "#AFEEEE",
		});
	}

	render() {
		
		const { link } = this.props;
		const navStyle = {
			color: this.state.color,
			backgroundColor: this.state.backgroundColor,
			paddingTop: "20px",
			paddingBottom: "20px",
			paddingLeft: "40px",
			paddingRight: "40px",
			borderRadius: "35%",
			border: "2px solid silver",
		};

		return (
			<div onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} ref={el => this.navLink = el} >
				<Link style={navStyle} to={link}>
					<span className="glyphicon glyphicon-triangle-right" />&nbsp;View Page
				</Link>
			</div>
		);
	}
}