import React from 'react';
import Image from './image';

const PopularSubs = React.createClass({
	render() {
		let top_subs = this.props.top_subs;
		const colClass = ['col-xs-6 col-sm-4 col-md-5 col-md-offset-4', 'col-xs-6 col-sm-4', 'col-xs-6 col-sm-4', 'col-xs-6 col-sm-4', 'col-xs-6 col-sm-4', 'col-xs-6 col-sm-4',
		 'col-xs-6 col-sm-3 col-md-4', 'col-xs-6 col-sm-3 col-md-4', 'col-xs-6 col-sm-3 col-md-4', 'col-xs-6 col-sm-3 col-md-4'];
		const mappedSubs = top_subs.map((sub, index) => 
			<div key={'subdiv'+index} className={colClass[index]} style={{borderBottom: '1px solid silver'}}>
				<Image key={sub} src={'../../images/portraits/portraits60/'+sub+'.png'} number={sub} width='150px' height='100px' color='cool gray' rank={index+1}>
				</Image>
			</div>
		);
		return (
			<div className='row' style={{}}>
				{mappedSubs}
			</div>
		);
	}
});

module.exports = PopularSubs;