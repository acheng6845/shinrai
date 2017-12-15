import React from 'react';
import Image from './image';

const PopularLeaders = React.createClass({
	render() {
		let top_leaders = this.props.top_leaders;
		const colClass = ['col-xs-6 col-sm-4 col-md-5 col-md-offset-4', 'col-xs-6 col-sm-4', 'col-xs-6 col-sm-4', 'col-xs-6 col-sm-4', 'col-xs-6 col-sm-4', 'col-xs-6 col-sm-4',
		 'col-xs-6 col-sm-3 col-md-4', 'col-xs-6 col-sm-3 col-md-4', 'col-xs-6 col-sm-3 col-md-4', 'col-xs-6 col-sm-3 col-md-4'];
		const mappedLeaders = top_leaders.map((leader, index) => 
			<div className={colClass[index]} key={'leaddiv'+index} style={{borderBottom: '1px solid silver'}}>
				<Image key={leader} src={'../../images/portraits/portraits60/'+leader+'.png'} number={leader} width='150px' height='100px' color='cool gray' rank={index+1}>
				</Image>
			</div>
		);
		return (
			<div className='row' style={{}}>
				{mappedLeaders}
			</div>
		);
	}
});

module.exports = PopularLeaders;