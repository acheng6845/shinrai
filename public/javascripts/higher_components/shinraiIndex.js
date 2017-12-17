import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import ContentButton from '../lower_components/contentButton';
import DropDownButton from '../lower_components/dropDownButton';
import ContentDescription from '../lower_components/contentDescription';
import { spring, StaggeredMotion, Motion, TransitionMotion } from 'react-motion';
import descriptions from '../constants/descriptions';


export default class IndexPage extends React.Component {

	constructor(props, context) {
		super(props, context);
		
		this.keys = ['logoNormal', 'logoSmall', 'navbar', 'descriptions'];

		this.initialDivs = [
			{key: this.keys[0], opacity: 1, x: 20},
			{key: this.keys[1], opacity: 1, x: 0},
			{key: this.keys[2], opacity: 1, x: 255}
		];

		this.transitionedDivs = [
			{key: this.keys[2], opacity: spring(1), x: spring(240)},
			{key: this.keys[3], opacity: spring(1), x: spring(3)}
		];

		this.inTransitionDivs = [{key: this.keys[2], opacity: spring(1), x: spring(240)}];

		this.state = {
			contentSelected: null,
			descriptionSelected: null,
			items: this.initialDivs,
		};

		this.divs = {
			[this.keys[0]] : function(key, style) {
				return (
					<div className='hidden-xs col-sm-6 col-lg-5' key={key} 
						style={{opacity: style.opacity, left: style.x+'%', position: 'relative'}}>
						<img src='../../images/robot.gif' style={{height: '100%', maxWidth: 'auto'}} className='img-fluid' alt='Error' />
					</div>
				);
			},
			[this.keys[1]] : function(key, style) {
				return (
					<div className='col-xs-12 hidden-sm hidden-md hidden-lg' key={key} 
						style={{opacity: style.opacity}}>
						<img src='../../images/cherryBlossom.gif' style={{height: '100px', width: '100%', backgroundSize: 'fill'}} className='img-fluid' alt='Error' />
					</div>
				);
			},
			[this.keys[2]] : function(key, style) { 
				return (
					<div className='col-xs-5 col-sm-4 col-md-3 col-xl-2' key={key} 
						style={{opacity: style.opacity, 
								paddingTop: '3%',
								height: '100vh',
								background: 'rgb('+style.x+','+style.x+','+style.x+')'}}>
						<div className='row' style={{background: 'rgb('+style.x+','+style.x+','+style.x+')'}}>
							<ContentButton index={this.state.contentSelected} onClick={this.onHomeClick} dataTarget={'#collapse'+this.state.contentSelected} 
								dataToggle='collapse' backgroundColor={'rgb('+style.x+','+style.x+','+style.x+')'}>
								Home
							</ContentButton>
						</div>
						<DropDownButton 
							dataTarget={'#collapse'+this.state.contentSelected+', #collapse0'}
							onClick={this.onNavClick}
							active={this.state.contentSelected === 0}
							information={{strings: ['description', 'wiki'], name: 'FEH'}}
							id='collapse0'
							marginLeft={5}
							index={0}
							onSubClick={this.onDescriptionClick}
							style={{background: 'rgb('+style.x+','+style.x+','+style.x+')'}}
						/>
						<DropDownButton 
							dataTarget={'#collapse'+this.state.contentSelected+', #collapse1'}
							onClick={this.onNavClick}
							active={this.state.contentSelected == 1}
							information={{strings: ['description', 'wiki'], name: 'PAD'}}
							id='collapse1'
							marginLeft={5}
							index={1}
							onSubClick={this.onDescriptionClick}
							style={{background: 'rgb('+style.x+','+style.x+','+style.x+')'}}
						/>
						<DropDownButton 
							dataTarget={'#collapse'+this.state.contentSelected+', #collapse2'}
							onClick={this.onNavClick}
							active={this.state.contentSelected == 2}
							information={{strings: ['description', 'wiki'], name: 'FGO'}}
							id='collapse2'
							marginLeft={5}
							index={2}
							onSubClick={this.onDescriptionClick}
							style={{background: 'rgb('+style.x+','+style.x+','+style.x+')'}}
						/>
						<div className='row' style={{background: 'rgb('+style.x+','+style.x+','+style.x+')'}}>
							<ContentButton index={3} onClick={this.onNavClick} dataTarget={'#collapse'+this.state.contentSelected} dataToggle='collapse'
								backgroundColor={'rgb('+style.x+','+style.x+','+style.x+')'}>
								ABOUT
							</ContentButton>
						</div>
					</div>
				);
			},
			[this.keys[3]] : function(key, style) {
				return (
					<div className='col-xs-7 col-sm-8 col-md-9 col-xl-10' key={key} style={
						{
							paddingTop: '5%',
							paddingLeft: '3%',
							height: '100vh',
							opacity: style.opacity,
							backgroundImage: this.state.contentSelected != null ? 'url(../../images/'+descriptions[this.state.contentSelected].backgroundImage+')' : '',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							overflow: 'hidden',
						}
					}>
						<ContentDescription title={this.state.contentSelected != null ? descriptions[this.state.contentSelected].title : ''}
							description={this.state.contentSelected != null ? descriptions[this.state.contentSelected].description[this.state.descriptionSelected] : ''}
							fontSize={style.x} fontColor={this.state.contentSelected != null ? descriptions[this.state.contentSelected].fontColor : 'black'}
							link={this.state.contentSelected != null && this.state.descriptionSelected == 1 ? descriptions[this.state.contentSelected].link : ''} />
					</div>
				);
			},

		};

		this.onNavClick = this.onNavClick.bind(this);
		this.onDescriptionClick = this.onDescriptionClick.bind(this);
		this.onCombinedClick = this.onCombinedClick.bind(this);
		this.onHomeClick = this.onHomeClick.bind(this);
		Object.keys(this.divs).map((key, index) => {
			this.divs[key] = this.divs[key].bind(this);
		});

	}

	willLeave() {
		return {opacity: spring(0), x: spring(0)};
	}

	willEnter() {
		return {opacity: 0.1, x: 0};
	}

	onCombinedClick = (index) => {
		this.onNavClick(index);
		this.onDescriptionClick(index);
	};

	onNavClick = (index) => {
		this.setState((prevState, props) => {
			return {
				items: this.state.items == this.transitionedDivs ? this.state.items : this.inTransitionDivs,
				contentSelected: index,
				descriptionSelected: 0,
			};
		});
		//first animation where components leave take 1000 milliseconds, then new components enter after columns have shifted.
		if(this.state.items == this.initialDivs) {
			setTimeout(() => this.setState({
				items: this.transitionedDivs
			}), 1000);
		}
	};

	//select a sub category in the nav
	onDescriptionClick = (subIndex) => {
		this.setState({
			descriptionSelected: subIndex,
			items: this.state.items == this.transitionedDivs ? this.state.items : this.inTransitionDivs
		});
	};

	//resets page
	onHomeClick = () => {
		this.setState({
			contentSelected: null,
			descriptionSelected: 0,
			items: this.initialDivs,
		});
	};

	render() {

		const logoDiv =  classNames({
			'col-xs-6 col-sm-7': this.state.descriptionSelected === null,
			'col-xs-3 col-sm-offset-1 col-md-offset-2 col-lg-offset-3 col-lg-2': this.state.descriptionSelected != null
		});

		const descriptionDiv = classNames({
			'hidden-xs-up': this.state.contentSelected == null,
			'col-xs-3 col-xs-offset-3 col-sm-offset-2 col-md-offset-1': this.state.contentSelected != null
		});

		return (
			<TransitionMotion 
				willLeave={this.willLeave}
				willEnter={this.willEnter}
				styles={this.state.items.map(item => ({
					key: item.key,
					style: {
						opacity: item.opacity,
						x: item.x,
					},
				}))}>
				{interpolatedStyles =>
					<div className="smythe">
						{interpolatedStyles.map(config => {
							const key = config.key;
							return this.divs[config.key](config.key, config.style);
						})}
					</div>
				}
			</TransitionMotion>
		);
	}
}