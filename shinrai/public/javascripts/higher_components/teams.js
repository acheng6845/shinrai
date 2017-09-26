import React from 'react';
import { connect } from 'react-redux';
import TeamViewer from '../lower_components/teamViewer';
import EntrySection from '../lower_components/entrySection';
import MonsterIcon from '../lower_components/monsterIcon';

// @connect((store) => {

// })
export default class Teams extends React.Component {
	render() {
		const { name, units, inherits } = this.props;
		const unitIDs = units.map((unit) => 
			unit.number
		);
		const inheritIDs = inherits.map((inherit) => 
			inherit.number
		);
		
		//total Health, Recovery, Cost of units
		let teamHealth = 0, teamCost = 0, teamRecovery = 0;
		units.forEach((unit) => {
			teamHealth += unit.hp[1];
			teamRecovery += unit.rcv[1];
			teamCost += unit.team_cost;
		});

		//for the table prop in the HP/RCV Team Totals EntrySection
		const teamStats = {
			titles: [{value: '', color: 'white'}, {value: 'Health', color: '#74C365'}, {value: 'Recovery', color: 'pink'}],
			values: [
				[
					{value: 'Base', color: 'white'}, {value: teamHealth, color: 'white'}, {value: teamRecovery, color: 'white'}
				],
				[
					{value: 'Min', color: 'white'}, {value: teamHealth*2, color: 'white'}, {value: teamRecovery*2, color: 'white'}
				],
				[
					{value: 'Max', color: 'white'}, {value: teamHealth*4, color: 'white'}, {value: teamRecovery*4, color: 'white'}
				]
			]
		};

		//text for the display of Total Team Cost to show the two parts in different colors
		const totalCostDiv = 
			<div>
				<span style={{color: 'skyblue'}}>Total Cost: </span>
				<span style={{color: 'white'}}>{teamCost}</span>
			</div>;

		//class String for the display of Total Team Cost
		const totalCostDivClass = 'col-xs-12 col-sm-offset-8 col-sm-4 col-md-offset-9 col-md-3 col-lg-offset-10 col-lg-2';

		//for the table prop in the ATK Totals EntrySection
		const attackStats = {
			titles: [{value: '', color: 'white'}, 
			{value: <MonsterIcon width='35px' height='35px' src={unitIDs[0] ? '../../images/portraits/portraits60/'+unitIDs[0]+'.png' : ''} border='1px solid #696969' />}, 
			{value: <MonsterIcon width='35px' height='35px' src={unitIDs[1] ? '../../images/portraits/portraits60/'+unitIDs[1]+'.png' : ''} border='1px solid #696969' />},
			{value: <MonsterIcon width='35px' height='35px' src={unitIDs[2] ? '../../images/portraits/portraits60/'+unitIDs[2]+'.png' : ''} border='1px solid #696969' />},
			{value: <MonsterIcon width='35px' height='35px' src={unitIDs[3] ? '../../images/portraits/portraits60/'+unitIDs[3]+'.png' : ''} border='1px solid #696969' />}, 
			{value: <MonsterIcon width='35px' height='35px' src={unitIDs[4] ? '../../images/portraits/portraits60/'+unitIDs[4]+'.png' : ''} border='1px solid #696969' />}, 
			{value: <MonsterIcon width='35px' height='35px' src={unitIDs[5] ? '../../images/portraits/portraits60/'+unitIDs[5]+'.png' : ''} border='1px solid #696969' />}],
			values: [
				[
					{value: <MonsterIcon height='25px' width='25px' src={'../../images/icons/fire.png'} border='1px solid #696969' backgroundColor='#696969' />}, 
					{value: 1, color: '#FA8072'}, {value: 2, color: '#FA8072'}, {value: 3, color: '#FA8072'}, {value: 4, color: '#FA8072'},
					{value: 5, color: '#FA8072'}, {value: 6, color: '#FA8072'}
				],
				[
					{value: <MonsterIcon height='25px' width='25px' src={'../../images/icons/water.png'} border='1px solid #696969' backgroundColor='#696969' />},
					{value: 1, color: 'skyblue'}, {value: 2, color: 'skyblue'}, {value: 3, color: 'skyblue'}, {value: 4, color: 'skyblue'},
					{value: 5, color: 'skyblue'}, {value: 6, color: 'skyblue'}
				],
				[
					{value: <MonsterIcon height='25px' width='25px' src={'../../images/icons/wood.png'} border='1px solid #696969' backgroundColor='#696969' />}, 
					{value: 1, color: '#74C365'}, {value: 2, color: '#74C365'}, {value: 3, color: '#74C365'}, {value: 4, color: '#74C365'},
					{value: 5, color: '#74C365'}, {value: 6, color: '#74C365'}
				],
				[
					{value: <MonsterIcon height='25px' width='25px' src={'../../images/icons/light.png'} border='1px solid #696969' backgroundColor='#696969' />}, 
					{value: 1, color: '#FADA5E'}, {value: 2, color: '#FADA5E'}, {value: 3, color: '#FADA5E'}, {value: 4, color: '#FADA5E'},
					{value: 5, color: '#FADA5E'}, {value: 6, color: '#FADA5E'}
				],
				[
					{value: <MonsterIcon height='25px' width='25px' src={'../../images/icons/dark.png'} border='1px solid #696969' backgroundColor='#696969' />}, 
					{value: 1, color: 'violet'}, {value: 2, color: 'violet'}, {value: 3, color: 'violet'}, {value: 4, color: 'violet'},
					{value: 5, color: 'violet'}, {value: 6, color: 'violet'}
				]
			]
		};

		return (
			<div>
				<TeamViewer units={unitIDs} inherits={inheritIDs} name={name} />
				<EntrySection title={{title: 'Leader Skills'}} fontSize='150%' header={[{text: units[0].leader_skill[0], divClass: 'col-xs-6'},
				{text: units[0].leader_skill[1], divClass: 'col-xs-6'}]} />
				<EntrySection title={{title: 'Team Totals'}} header={[{text: totalCostDiv, divClass: totalCostDivClass}]} 
				table={teamStats} fontSize='150%' />
				<EntrySection title={{title: 'Attack Totals'}} table={attackStats} fontSize='150%' />
				<EntrySection title={{title: 'Awakenings'}} fontSize='150%' />
			</div>
		);
	}
}
Teams.defaultProps = {
	units: [
		{leader_skill: ['No Leader Skill', 'No Effect'], number: 122, hp: [0,1,2], atk: [0,1,2], rcv: [0,1,2], team_cost: 1},
		{number: 234, hp: [0,1,2], atk: [0,1,2], rcv: [0,1,2], team_cost: 1},
		{number: 351, hp: [0,1,2], atk: [0,1,2], rcv: [0,1,2], team_cost: 1},
		{number: 432, hp: [0,1,2], atk: [0,1,2], rcv: [0,1,2], team_cost: 1},
		{number: 515, hp: [0,1,2], atk: [0,1,2], rcv: [0,1,2], team_cost: 1},
		{leader_skill: ['No Leader Skill'], number: 642, hp: [0,1,2], atk: [0,1,2], rcv: [0,1,2], team_cost: 1}
	],
	inherits: [
		{number: 712, hp: [0,1,2], atk: [0,1,2], rcv: [0,1,2], team_cost: 1},
		{number: 834, hp: [0,1,2], atk: [0,1,2], rcv: [0,1,2], team_cost: 1},
		{number: 932, hp: [0,1,2], atk: [0,1,2], rcv: [0,1,2], team_cost: 1},
		{number: 1012, hp: [0,1,2], atk: [0,1,2], rcv: [0,1,2], team_cost: 1},
		{number: 1123, hp: [0,1,2], atk: [0,1,2], rcv: [0,1,2], team_cost: 1},
		{number: 1245, hp: [0,1,2], atk: [0,1,2], rcv: [0,1,2], team_cost: 1}
	],
	name: 1
};