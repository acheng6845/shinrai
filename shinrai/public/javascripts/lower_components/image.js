import React from 'react';
import MonsterIcon from './monsterIcon';
import { makeSelection } from '../actions/searchBarActions';
import { connect } from 'react-redux';

@connect()
export default class Image extends React.Component {

	//when one of the generated monster icons is clicked, it should dispatch the monster's info to the store, so that the Entry component has access to 
	//the selected monster's information.
	dispatchSelection(index) {
		this.props.dispatch(makeSelection(index));
	}

	render() {
		const {src, height, width, color, rank, number, ...props} = this.props;
		const rurl = '../../images/ranking/rank';
		const imageStyle = {
			height: height,
			width: width,
			backgroundColor: color,
			backgroundImage: 'url('+rurl+rank+'.png'+')',
			//backgroundImage: 'url('+src+')',
			backgroundPosition: 'center center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			textAlign: 'center'
		};
		return (
			<div style={imageStyle}>
				<MonsterIcon height='80px' marginTop='12%' width='50%' borderRadius='50%' src={src} onClick={this.dispatchSelection.bind(this, number)} />
			</div>
		);
	}
};
