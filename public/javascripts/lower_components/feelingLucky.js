import React from 'react';
import { connect } from 'react-redux';
import { fetchMonster } from '../actions/searchBarActions';

@connect()
export default class FeelingLucky extends React.Component {
	constructor(props) {
		super(props);
		this.fetchRandomMonster = this.fetchRandomMonster.bind(this);
	}

	fetchRandomMonster() {
		let randomId = Math.floor(Math.random() * 3000);
		this.props.dispatch(fetchMonster(randomId));
	}

	render() {
	return (
		<button type='button' className='btn btn-default' onClick={this.fetchRandomMonster}>
			Feeling Lucky!
		</button>
	);
	}
}