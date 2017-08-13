import React from 'react';

export default class ContentButton extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			children: props.children
		};
	}

	onHover = () => {
		this.setState({
			children: (
				<div>
					<span className='glyphicon glyphicon-menu-right'></span>{this.props.children}<span className='glyphicon glyphicon-menu-left'></span>
				</div>
			)
		});
	};

	onMouseLeave = () => {
		this.setState({children: this.props.children})
	};

	render() {
		const { onClick, index, children } = this.props;

		const buttonStyle = {
			backgroundColor: 'white', 
			fontFamily: 'arial', 
			fontSize: '150%', 
			border: '0 none', 
			textTransform: 'uppercase',
			outline: '0 none',
			color: '#353231',
			boxShadow: 'none'
		};

		return (
			<div className='col-xs-12'>
				<button onClick={() => onClick(index)} style={buttonStyle} onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
					{this.state.children}
				</button>
			</div>
		);
	}
}

ContentButton.defaultProps = {
	onClick: null,
	index: null
}