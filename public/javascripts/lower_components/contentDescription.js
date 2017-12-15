import React from 'react';
import { Link } from 'react-router-dom';

export default class ContentDescription extends React.Component {

	constructor(props, context) {
		super(props, context);


	}

	render() {
		const { description, title, link, fontSize, fontColor } = this.props;

		const titleStyle = {
			textAlign: 'center',
			fontSize: (fontSize*1.5)+'vmin',
			fontFamily: 'Abril Fatface, cursive',
			color: fontColor,
			textShadow: '4px 4px '+(fontColor != 'black' ? 'black' : 'white'),
		};

		const descriptionStyle = {
			fontFamily: 'Abril Fatface, cursive',
			color: fontColor,
			fontSize: fontSize+'vmin',
			textShadow: '4px 4px '+(fontColor != 'black' ? 'black' : 'white'),
		};

		const buttonStyle = {
			textAlign: 'center'
		};
		return (
			<div>
				<div className='row' style={titleStyle}>{title}</div>
				<div className='row' style={descriptionStyle}>{description}</div>
				<div className='row'>
					{ link ? <Link to={link} className='btn btn-info' role='button' style={buttonStyle} >Goto Wiki</Link> : ''}
				</div>
			</div>
		);
	}
}

ContentDescription.defaultProps = {
	link: '',
	description: '',
	title: '',
	fontSize: 0,
	fontColor: 'black',
}