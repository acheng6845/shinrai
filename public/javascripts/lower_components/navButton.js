import React from 'react';
import ReactDOM from 'react-dom';

//paginator for index
export default class NavButton extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	handleClick = () => {
		this.props.onClick(this.props.index);
	}

	render() {

		const { active, image, text } = this.props;
		
		const divStyle = {
			backgroundColor: "transparent",
		};

		const buttonStyle = {
			//backgroundColor: active ? "hotpink" : "skyblue",
			backgroundColor: "transparent",
			border: "2px double "+(active ? "#40E0D0" : "silver"),
			borderRadius: "50%",
			height: "50px",
			width: "50px",
			backgroundImage: image != null ? "url("+image+")" : null,
			color: "black",
			fontWeight: "300",
			//textShadow: "1px 1px black",
		};

		return (
			<div style={divStyle}>
				<div style={{...divStyle, padding: "10px"}}>
					<button type="button" style={buttonStyle} onClick={this.handleClick} >
						{text}
					</button>
				</div>
			</div>
		);
	}

}
NavButton.defaultProps = {
	onClick: () => {alert("Boop");},
	active: false,
	image: null,
	text: null,
	index: 0,
};