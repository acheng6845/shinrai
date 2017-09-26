import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../lower_components/searchBar';

export default class PadIndex extends React.Component {
	// index page should display search bar and tabs for news, units, trending units, dungeons, schedule and a button for editing the team.
	render() {
		const searchBarStyle = {
			paddingTop: '25%',
			paddingLeft: '10%',
			paddingRight: '10%',
			paddingBottom: '5%',
			backgroundColor: '#545AA7',
			borderRadius: '10px'
		};
		const dashboardStyle = {
			paddingTop: '3%',
			backgroundColor: '#1D2951',
			borderRadius: '10px',
			marginTop: '2%'
		};
		const sectionStyle = {
			border: '1px solid white',
			marginLeft: '2%',
			marginRight: '2%',
			marginBottom: '2%',
			paddingBottom: '2%',
			backgroundColor: '#FDBCB4'
		};
		const buttonStyle = {
			borderRadius: '15px',
			width: '30px',
			height: '30px',
			paddingLeft: '1%',
			paddingRight: '1%',
		};

		//sections to be replaced with respective components!!
		return (
			<div>
				<div className='row' style={searchBarStyle}>
					<SearchBar />
				</div>
				<div className='row' style={dashboardStyle}>
					<div className='row' style={{padding: '3%'}}>
						<div className='col-xs-4'>
							<div className='row' style={sectionStyle}>
								<h3 style={{textAlign: 'center', color: 'black'}}>News</h3>
								<ul style={{borderTop: '1px solid white', borderBottom: '1px solid white', height: '200px', backgroundColor: 'white', color: 'black'}}>
									<li>3/18/17: Search and Monster Tabs functional.</li>
									<li>3/21/17: IndexPage completed design prototype. </li>
								</ul>
								<div className='row' style={{textAlign: 'center'}}>
									<div className='col-xs-4'>
										<button type='button' className='btn btn-danger' style={buttonStyle}></button>
									</div>
									<div className='col-xs-4'>
										<button type='button' className='btn btn-danger' style={buttonStyle}></button>
									</div>
									<div className='col-xs-4'>
										<button type='button' className='btn btn-danger' style={buttonStyle}></button>
									</div>
								</div>
							</div>
						</div>
						<div className='col-xs-4'>
							<div className='row' style={sectionStyle}>
								<h3 style={{textAlign: 'center', color: 'black'}}>Units</h3>
								<ul style={{borderTop: '1px solid white', borderBottom: '1px solid white', height: '200px', backgroundColor: 'white', color: 'black'}}>
									
								</ul>
								<div className='row' style={{textAlign: 'center'}}>
									<div className='col-xs-4'>
										<button type='button' className='btn btn-danger' style={buttonStyle}></button>
									</div>
									<div className='col-xs-4'>
										<button type='button' className='btn btn-danger' style={buttonStyle}></button>
									</div>
									<div className='col-xs-4'>
										<button type='button' className='btn btn-danger' style={buttonStyle}></button>
									</div>
								</div>
							</div>
						</div>
						<div className='col-xs-4'>
							<div className='row' style={sectionStyle}>
								<h3 style={{textAlign: 'center', color: 'black'}}>Trending</h3>
								<ul style={{borderTop: '1px solid white', borderBottom: '1px solid white', height: '200px', backgroundColor: 'white', color: 'black'}}>
								</ul>
								<div className='row' style={{textAlign: 'center'}}>
									<div className='col-xs-4'>
										<button type='button' className='btn btn-danger' style={buttonStyle}></button>
									</div>
									<div className='col-xs-4'>
										<button type='button' className='btn btn-danger' style={buttonStyle}></button>
									</div>
									<div className='col-xs-4'>
										<button type='button' className='btn btn-danger' style={buttonStyle}></button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='row' style={{padding: '3%'}}>
						<div className='col-xs-4'>
							<div className='row' style={sectionStyle}>
								<h3 style={{textAlign: 'center', color: 'black'}}>Dungeons</h3>
								<ul style={{borderTop: '1px solid white', borderBottom: '1px solid white', height: '200px', backgroundColor: 'white', color: 'black'}}>
								</ul>
								<div className='row' style={{textAlign: 'center'}}>
									<div className='col-xs-4'>
										<button type='button' className='btn btn-danger' style={buttonStyle}></button>
									</div>
									<div className='col-xs-4'>
										<button type='button' className='btn btn-danger' style={buttonStyle}></button>
									</div>
									<div className='col-xs-4'>
										<button type='button' className='btn btn-danger' style={buttonStyle}></button>
									</div>
								</div>
							</div>
						</div>
						<div className='col-xs-4'>
							<div className='row' style={sectionStyle}>
								<h3 style={{textAlign: 'center', color: 'black'}}>Schedule</h3>
								<ul style={{borderTop: '1px solid white', borderBottom: '1px solid white', height: '200px', backgroundColor: 'white', color: 'black'}}>
								</ul>
								<div className='row' style={{textAlign: 'center'}}>
									<div className='col-xs-4'>
										<button type='button' className='btn btn-danger' style={buttonStyle}></button>
									</div>
									<div className='col-xs-4'>
										<button type='button' className='btn btn-danger' style={buttonStyle}></button>
									</div>
									<div className='col-xs-4'>
										<button type='button' className='btn btn-danger' style={buttonStyle}></button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};