import React from 'react';
import { Link } from 'react-router-dom';

export default class ContentDescription extends React.Component {

	constructor(props, context) {
		super(props, context);


	}

	render() {
		const { description, title, link } = this.props;

		const titleStyle = {
			textAlign: 'center',
			fontSize: '150%',
			fontFamily: 'sans-serif',
			color: 'black'
		};

		const descriptionStyle = {
			fontFamily: 'arial',
			color: 'black'
		};

		const buttonStyle = {
			textAlign: 'center'
		};
		return (
			<div>
				<div className='row' style={titleStyle}>{title}</div>
				<div className='row' style={descriptionStyle}>{description}</div>
				<div className='row'>
					<Link to={link} className='btn btn-info' role='button' style={buttonStyle} >Home</Link>
				</div>
			</div>
		);
	}
}