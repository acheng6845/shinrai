import React from 'react';

export default class MonsterEntry extends React.Component {
	render() {
		const divStyle = {
			height: '400px',
			width: '100%',
			backgroundColor: 'space gray',
			backgroundImage: 'url('+this.props.url+')',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition: 'center center'
		};
		return (
			<div>
				<div className='col-xs-12' style={divStyle}>
					
				</div>
			</div>
		);
	}
}