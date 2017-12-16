import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../lower_components/searchBar';
import FeelingLucky from '../lower_components/feelingLucky';
import MonsterIcon from '../lower_components/monsterIcon';
import { makeSelection } from '../actions/searchBarActions';


@connect((store) => {
	return {
		results: store.search.monsters
	};
})
export default class MonsterBook extends React.Component {
	
	//when one of the generated monster icons is clicked, it should dispatch the monster's info to the store, so that the Entry component has access to 
	//the selected monster's information.
	dispatchSelection(index) {
		this.props.dispatch(makeSelection(index));
	}

	render() {
		const { results } = this.props;
		let mappedResults, paginators;
		if (results) {
			//if the results of the search query isn't null, then MonsterIcons are generated for each monster in search.monsters array from the store.
			mappedResults = results.map((unit, index) => 
				<div className='col-xs-3 col-sm-3 col-md-2 col-lg-1' key={'col'+index} style={{marginTop: '2%'}}>
					<MonsterIcon height='60px' width='60px' src={'../../images/portraits/portraits60/'+unit.number+'.png'} 
					onClick={this.dispatchSelection.bind(this, unit.number)} />
				</div>
			);

			//buttons for navigating the pages of results.
			paginators = (
				<div className='row' style={{marginTop: '2%'}}>
					<div className='col-xs-2 col-lg-1'>
						<button type='button' className='btn btn-default'>
							<span className='glyphicon glyphicon-triangle-left'></span>
						</button>
					</div>
					<div className='col-xs-8 col-lg-10'>
						<div className='btn-group'>
							<button type='button' className='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
								Sort... <span className='caret'></span>
							</button>
						</div>
					</div>
					<div className='col-xs-2 col-lg-1'>
						<button type='button' className='btn btn-default'>
							<span className='glyphicon glyphicon-triangle-right'></span>
						</button>
					</div>
				</div>
			);
		} else {
		//if no results, there shouldn't be navigation buttons.
			paginators = null;
		}
		return (
			<div>
				<div className='row'>
					<div className='col-xs-12 col-sm-6 col-sm-offset-6'>
						<SearchBar />
					</div>
				</div>
				<div className='row' style={{marginTop: '2%'}}>
					{mappedResults}
				</div>
				{paginators}
			</div>
		);
	}
};