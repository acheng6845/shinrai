import React from 'react';
import { connect } from 'react-redux';
import MonsterEntry from '../lower_components/monsterEntry';
import MonsterIcon from '../lower_components/monsterIcon';
import EntrySection from '../lower_components/entrySection';
import MonsterBook from './monsterBook';

@connect((store) => {
	return {
		monster: store.select_monster.monster
	};
})
export default class Entry extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { monster } = this.props;

		//takes care of property 'x' of undefined bug.
		monster.active_skill = (monster.active_skill == null) ? ['No Active Skill', '', 0, 0] : monster.active_skill;
		monster.leader_skill = (monster.leader_skill == null) ? ['No Leader Skill', ''] : monster.leader_skill;

		const labelStyle = {
			fontSize: '100%',
			fontWeight: 'bold',
			//fontFamily: 'Georgia',
			textAlign: 'center'
		};

		const stars = [];
		for (let i = 0; i < monster.rarity; i++) {
			stars.push(<span key={'star'+i} className='glyphicon glyphicon-star'></span>);
		}
		
		const mappedTypes = monster.types.map((type, index) => {
			if (type) {
				return (
					<div className='col-xs-1' key={'type_div'+index}>
						<MonsterIcon height='10px' width='10px' src={'../../images/icons/'+type.replace(/\s+/g, '').toLowerCase()+'.png'} key={'type'+index}/>
					</div>
				);
			} else {
				return null;
			}
		});

		const awakenings = ['lightplus', 'lightplus', 'lightrow', 'heartplus', 'skillboost', 'bindresist', 'bindresist', 'bindrecover', 'skillboost'];
		const mappedAwakenings = awakenings.map((awoken, index) => 
			<div className='col-xs-1' key={'type_awoken'+index}>
				<MonsterIcon height='10px' width='10px' src={'../../images/icons/'+awoken+'.png'} key={'awoken'+index}/>
			</div>
		);

		const stats1 = [
			{type: 'HP', value: monster.hp[1], color: 'green'},
			{type: 'ATK', value: monster.atk[1], color: 'skyblue'},
			{type: 'RCV', value: monster.rcv[1], color: 'pink'},
			{type: 'Cost', value: monster.team_cost, color: 'violet'}
		];

		const header1 = [
			{divClass: 'col-xs-3 col-sm-1', color: 'gold', text: 'Lv. '},
			{divClass: 'col-xs-3 col-sm-1', size: '200%', margin: '0%', text: monster.lvl[0]},
			{divClass: 'col-xs-6 col-sm-2', text: '/ '+monster.lvl[0]},
			{divClass: 'col-xs-12', size: '100%', margin: '0%', color: 'gold', text: stars}
		];

		const imageIcon = <MonsterIcon height='80px' width='80px' src={'../../images/portraits/portraits60/'+monster.number+'.png'} />;

		const extra1 = (
			<div>
				<div className={'hidden-xs col-sm-'+(awakenings.length)} style={{...labelStyle}}>
					|~~~<span className='glyphicon glyphicon-star-empty'></span> Awakenings <span className='glyphicon glyphicon-star-empty'></span>~~~|
				</div>
				<div className={'col-xs-'+(3+awakenings.length)+' col-xs-offset-'+Math.floor((9-awakenings.length)/2)} style={{marginBottom: '2%'}}>{mappedAwakenings}</div>
			</div>
		);

		//Header for section_active_skill where information is displayed if the monster has a skill.
		const header2 = [
			{divClass: 'col-xs-12 col-md-6', color: 'skyblue', text: monster.active_skill[0]},
			{divClass: 'col-xs-2 col-sm-3', text: 'Max Lv. '+(monster.active_skill[3]-monster.active_skill[2]+1)},
			{divClass: 'col-xs-6 col-sm-3', text: 'Min Turn(s): '+monster.active_skill[2]},
		];

		//Header for section_leader_skill where information is displayed if the monster has a leader skill.
		const header3 = [
			{divClass: 'col-xs-12', color: '#98FB98', text: monster.leader_skill[0]}
		];

		const stats3 = [
			{type: 'Min.:', value: '1/4/2', color: 'pink'},
			{type: 'Max:', value: '1/10/2', color: 'skyblue'}
		];

		let digits = 0;
		let number = monster.number;
		while (number > 10) {
			number = number / 10;
			digits += 1;
		}
		let zeroes = '';
		for (let i = 4; i > digits; i--) {
			zeroes += '0';
		}
		const url = '../../images/Extracted/MONS_'+zeroes+monster.number+'.PNG';

		return (
			<div className='row elMessiri' style={{color: 'white'}}>
				<div className='hidden-xs hidden-sm hidden-md hidden-lg col-md-5 col-lg-4' style={{marginBottom: '5%'}}>
					<MonsterBook />
				</div>
		
				<div className='col-xs-12'>
					<MonsterEntry url={url} />
				</div>
				<EntrySection title={{title: monster.name}} stats={stats1} header={header1} types={mappedTypes}
					image={imageIcon} extra={extra1} fontSize={'150%'} keyProp='section_stats' />

				<EntrySection title={{title: 'Active Skill'}} description={{color: '#74C365', text: monster.active_skill[1]}}
					header={header2} types={<div style={{...labelStyle, fontSize: '105%'}}>Orb Convert</div>} fontSize={'150%'} keyProp='section_active_skill'/>
				
				<EntrySection title={{title: 'Leader Skill'}} description={{color: '#74C365', text: monster.leader_skill[1]}}
					stats={stats3} header={header3} types={<div style={{...labelStyle, fontSize: '105%'}}>Combo, RCV Boost</div>} fontSize={'150%'} 
					keyProp='section_leader_skill'/>

				<EntrySection title={{title: 'Popular Teams'}} description={{color: '#74C365', text: 'Under Construction!'}} fontSize={'150%'}
					keyProp='section_popular_teams'/>	
			</div>
		);
	}
}