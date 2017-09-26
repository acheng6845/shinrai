import React from 'react';
import { connect } from 'react-redux';
import { fetchMonsterName } from '../actions/searchBarActions';

@connect()
export default class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.onUpdateInput = this.onUpdateInput.bind(this);
		this.state = {
			inputValue: ''
		}
	}

	componentDidmount() {
	}

	onUpdateInput(e) {
		this.setState({
			inputValue: e.target.value
		}, () => {
			if (this.state.inputValue.length) {
				this.props.dispatch(fetchMonsterName(this.state.inputValue));
			}
		});
	}

	render() {
		return (
			<div className='form-group has-feedback'>
				<input type='text' className='form-control' placeholder='Search...' onChange={this.onUpdateInput}/>
				<i className='glyphicon glyphicon-search form-control-feedback'></i>
			</div>
		);
	}
};