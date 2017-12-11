import React from 'react';
import { Link } from 'react-router-dom';

export default class MonsterIcon extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {height, marginTop, width, borderRadius, border, src, onClick, backgroundColor, ...props} = this.props;
		const buttonStyle = {
			height: height,
			marginTop: marginTop,
			width: width,
			borderRadius: borderRadius,
			border: border,
			backgroundImage: 'url('+src+')',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'center center',
			backgroundColor: backgroundColor
		};
		return (
			<div onClick={() => onClick.bind(this)}>
				<Link className='btn btn-info' role='button' style={buttonStyle} to='monsterentry'></Link>
			</div>
		);
	}
}
MonsterIcon.defaultProps = {
	height: '100%',
	marginTop: '0%',
	width: '100%',
	borderRadius: '0%',
	border: '1px solid skyblue',
	src: null,
	onClick: () => console.log('Boop'),
	backgroundColor: ''
};