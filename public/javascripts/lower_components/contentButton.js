import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { spring, Motion } from 'react-motion';
import classNames from 'classnames';

export default class ContentButton extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			hover: false
		};

		this.onHover = this.onHover.bind(this);
		this.getStringProps = this.getStringProps.bind(this);
	}

	onHover = (active) => {
		this.setState({
			hover: active
		});
	};

	getStringProps = () => {
		return {
			defaultStyle: {
				opacity: 0,
				padding: 0,
				color: 10
			},
			style: {
				opacity: spring(this.state.hover ? 1 : 0),
				padding: spring(this.state.hover ? 0.3 : 0, {stiffness: 40, damping: 10}),
				color: this.state.hover ? 81 : 10
			},
		}
	};

	render() {
		const { onClick, index, children, fontSize, style, dataToggle, dataTarget, backgroundColor } = this.props;

		const Button = styled.button`
			background: white;
			text-transform: uppercase;
			border: 0 none;
			outline: 0 none;

		`;

		const contentDiv = classNames({
			'col-xs-6' : this.state.hover,
			'col-xs-12' : !this.state.hover
		});

		return (
			<Motion {...this.getStringProps()}>
			{	interpolatingStyle =>
				{	
					const buttonStyle = {
						...style,
						padding: interpolatingStyle.padding+'em',
						fontSize: fontSize+'vmin',
						color: '#'+interpolatingStyle.color+'bfff',
						background: backgroundColor,						
					};
					const borderStyle = {
						background: 'url('+'../../images/arrow.png'+') no-repeat center',
						backgroundSize: 'contain',
						right: 10,
						opacity: interpolatingStyle.opacity,
						height: (fontSize+1.0)+'vmin',
						width: '0.25vmin'
					}
					return (
						<div className='container' onMouseEnter={this.onHover.bind(null, true)} onMouseLeave={this.onHover.bind(null, false)}>
							<Button type='button' style={buttonStyle} onClick={() => onClick(index)} data-toggle={dataToggle} data-target={dataTarget}>
								{this.props.children}
							</Button>
						</div>
					);
				}
			}
			</Motion>
		);
	}
}

ContentButton.defaultProps = {
	onClick: () => {},
	index: null,
	children: null,
	fontSize: 4.0,
	style: {},
	dataTarget: '',
	dataToggle: '',
	backgroundColor: 'white',
}

ContentButton.propTypes = {
	onClick: PropTypes.func,
	index: PropTypes.number,
	children: PropTypes.string,
	fontSize: PropTypes.number,
	style: PropTypes.object,
	dataTarget: PropTypes.string,
	dataToggle: PropTypes.string,
	backgroundColor: PropTypes.string,
}