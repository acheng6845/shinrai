import React from 'react';
import { connect } from 'react-redux';
import PopularLeaders from '../lower_components/popularLeaders'
import PopularSubs from '../lower_components/popularSubs'
import { fetchPopularLeaders, fetchPopularSubs } from '../actions/dashboardActions'

@connect((store) => {
	return {
		top_leaders: store.top_leaders.top_leaders,
		top_subs: store.top_subs.top_subs
	};
})
export default class Dashboard extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchPopularLeaders());
		this.props.dispatch(fetchPopularSubs());
	}

	render() {
		const { top_leaders, top_subs } = this.props;
		const divStyle = {
			border: '1px solid skyblue',
			textAlign: 'center',
			borderRadius: '10px',
			backgroundColor: 'white',
			fontFamily: 'Calibri',
			fontStyle: 'italic',
			fontWeight: 'bold',
			marginBottom: '4%',
			paddingLeft: '5%',
			paddingRight: '5%'
		};
		const headerStyle = {
			fontSize: '200%',
			borderBottom: '1px solid skyblue',
			backgroundColor: '#007BB8',
			paddingBottom: '5%',
			paddingTop: '5%',
			color: 'white'
		};
		const rowStyle = {
			//backgroundColor: '#4C516D',
			paddingTop: '3%',
			paddingLeft: '5%',
			paddingRight: '5%',
			paddingBottom: '0%',
			borderRadius: '15px',
			//backgroundImage: 'url("../images/background/trophy.jpg")',
			backgroundSize: 'cover',
			//backgroundPosition: 'left'
		};
		return (
			<div className='row' style={rowStyle}>
				<div className='col-xs-12 col-md-6' style={divStyle}>
					<div className='row' style={headerStyle}>
						Leader Popularity
					</div>
					<PopularLeaders top_leaders={top_leaders} />
				</div>
				<div className='hidden-xs hidden-sm col-md-2 hidden-md'>
				</div>
				<div className='col-xs-12 col-md-6' style={{...divStyle}}>
					<div className='row' style={headerStyle}>
						Sub Popularity
					</div>
					<PopularSubs top_subs={top_subs} />
				</div>
			</div>
		);
	}
};