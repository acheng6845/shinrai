import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class NavDescription extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {

		const { links, image, col, imageLink } = this.props;

		const divStyle = {
			textAlign: "center",
			backgroundColor: "transparent",
		};
		const buttonStyle = {
			background: "url("+image+") no-repeat center",
			backgroundSize: "contain",
			height: "100px",
			width: "100px",
			border: "none",
			margin: "10px",
			backgroundColor: "transparent",
		};
		const imageLinkStyle = {
			display: "block",
			height: "100%",
		}
		const linkStyle = {
			fontSize: "2em",
			fontWeight: "700",
			backgroundColor: "transparent",
			//textShadow: "1px 1px white",
		};
		return (
			<div style={divStyle} className={"col-xs-"+col}>
				<div className="row" style={{backgroundColor: "transparent"}}>
					<button style={buttonStyle}>
						<Link to={imageLink} style={imageLinkStyle} />
					</button>
				</div>
				<div className="row" style={{backgroundColor: "transparent"}}>
					{links.map((link, index) => (
						<div className="row" key={link+"description"+index}>
							<Link to={link.link} style={{...linkStyle, color: link.color}}>{link.text}</Link>
						</div>
					))}
				</div>
			</div>
		);
	}
}
NavDescription.defaultProps = {
	link: [],
	image: "../../images/wu.png",
	col: 12,
	imageLink: "/",
};