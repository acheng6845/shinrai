import React from 'react';
import MonsterIcon from './monsterIcon';

//A component for the Teams Component. It allows users to view and select one team from their list of teams.
export default class TeamViewer extends React.Component {
	render() {

		const {name, units, inherits} = this.props;
		console.log(units);
		const rowStyle = {
			border: '1px solid white',
			textAlign: 'center',
			paddingBottom: '2%',
			fontSize: '150%',
			color: 'white',
			backgroundColor: '#696969'
		};

		//Take the inherits prop which contains a list of IDs and returns a map of columns with icons for each inherit in the prop. Objects can be null.
		//xs sizes for images
		const mappedXsInherits = inherits.map((inherit, index) => 
			<div className='col-xs-2 visible-xs' key={'inherit'+index}>
				<MonsterIcon width='35px' height='35px' src={inherit ? '../images/portraits/portraits60/'+inherit+'.png' : ''} key={'inherit_icon_'+index} />
			</div>
		);
		//other sizes for images
		const mappedInherits = inherits.map((inherit, index) => 
			<div className='col-sm-2 hidden-xs' key={'inherit'+index}>
				<MonsterIcon width='60px' height='60px' src={inherit ? '../images/portraits/portraits60/'+inherit+'.png' : ''} key={'inherit_icon_'+index} />
			</div>
		);

		//Take the units prop which contains a list of IDs and returns a map of columns with icons for each unit in the prop. Objects can be null.
		//xs sizes for images
		const mappedXsIcons = units.map((unit, index) => 
			<div className='col-xs-2 visible-xs' key={'unit'+index}>
				<MonsterIcon width='35px' height='35px' src={unit ? '../images/portraits/portraits60/'+unit+'.png' : ''} />
			</div>
		);
		//other sizes for images
		const mappedIcons = units.map((unit, index) => 
			<div className='col-sm-2 hidden-xs' key={'unit'+index}>
				<MonsterIcon width='60px' height='60px' src={unit ? '../images/portraits/portraits60/'+unit+'.png' : ''} />
			</div>
		);

		return (
			<div style={rowStyle}>
				<div className='row'>
					<span className='glyphicon glyphicon-triangle-left'></span>
					Team #{name}
					<span className='glyphicon glyphicon-triangle-right'></span>
				</div>
				<div className='row'>
					{mappedXsInherits}
					{mappedInherits}
				</div>
				<div className='row'>
					<span className='glyphicon glyphicon-triangle-bottom'></span>
					 Inherits 
					<span className='glyphicon glyphicon-triangle-bottom'></span>
				</div>
				<div className='row'>
					{mappedXsIcons}
					{mappedIcons}
				</div>
			</div>
		);
	}
}
TeamViewer.defaultProps = {
	name: 1,
	units: [null, null, null, null, null, null],
	inherits: [null, null, null, null, null, null]
};