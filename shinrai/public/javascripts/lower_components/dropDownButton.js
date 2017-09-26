import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { spring, StaggeredMotion } from 'react-motion';
import classNames from 'classnames';
import ContentButton from './contentButton';

export default class DropDownButton extends React.Component {
	constructor(props, context) {
		super(props, context);

	}

	render() {

		const { fontSize, dataTarget, onClick, active, information, id, marginLeft, index, onSubClick, style } = this.props;
		const background = style.background;
		return (
			<StaggeredMotion 
						defaultStyles={Array(information.strings.length).fill({marginLeft: 0})}
						styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
							return i === 0
							? 
							{
								marginLeft: spring(active ? marginLeft : 0, {stiffness: 150, damping: 15}),
							}
							:
							{
								marginLeft: spring(prevInterpolatedStyles[i - 1].marginLeft, {stiffness: 150, damping: 15}),
							}
						})}
					>
					{ interpolatingStyles =>
						{	
							// information is an object holding arrays - the string attribute holds an array of texts for the buttons' children
							const collapsedFEHNav = information.strings;
							return (
								<div id={information.name} style={style}>
									<div className='row'>
										<ContentButton index={index} onClick={onClick} dataTarget={dataTarget} dataToggle='collapse' backgroundColor={background}>
											{information.name}
										</ContentButton>
									</div>
									<div className='collapse' id={id}>
										{interpolatingStyles.map((style, i) =>
											<ContentButton key={id+i} index={i} 
												style={{marginLeft: style.marginLeft+'%'}} fontSize={fontSize} onClick={onSubClick} backgroundColor={background}>
												{collapsedFEHNav[i]}
											</ContentButton>
										)}
									</div>
								</div>
							);
						}
					}
			</StaggeredMotion>
		);
	}
}
DropDownButton.defaultProps = {
	fontSize: 2.0,
	dataTarget: '#collapse',
	onClick: () => {},
	active: false,
	information: {},
	id: '',
	marginLeft: 0,
	index: 0,
	onSubClick: () => {},
	style: {background: 'white'},
}
DropDownButton.propTypes = {
	fontSize: PropTypes.number,
	dataTarget: PropTypes.string,
	onClick: PropTypes.func,
	active: PropTypes.bool,
	information: PropTypes.object,
	id: PropTypes.string,
	marginLeft: PropTypes.number,
	index: PropTypes.number,
	onSubClick: PropTypes.func,
	style: PropTypes.object,
	
}