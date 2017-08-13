import React from 'react';
import classNames from 'classnames';
import ContentButton from '../lower_components/contentButton';
import ContentDescription from '../lower_components/contentDescription';

export default class IndexPage extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			contentSelected: null,
			title: '',
			description: '',
			link: ''
		};

		this.backgroundImage = 'closedBook';
	}

	onClick = (index) => {
		if (index != 'null' && index != this.state.contentSelected) {
			const descriptions = [
				{
					title: 'Fire Emblem Heroes',
					description: 'A world with two kingdoms: the Emblian Empire, which wishes to rule all worlds, and the Askran Kingdom, which stands in its way. \n You are a summoner with the special ability to call upon legendary Heroes from different Fire Emblem worlds. In order to save the Kingdom of Askr from destruction, join the Order of Heroes and face a never-ending challenge.',
					link: '/'
				},
				{
					title: 'Puzzle & Dragons',
					description: 'Puzzle & Dragons is a puzzle video game with role-playing and strategy elements, developed by GungHo Online Entertainment for the iOS, Android, and Kindle Fire platforms.',
					link: '/'
				},
				{
					title: 'Fate Grand Order',
					description: 'Fate/Grand Order is an online free-to-play role-playing game based on the Fate/stay night visual novel game and franchise by Type-Moon.',
					link: '/'
				}
			];
			this.setState({
				contentSelected: index,
				title: descriptions[index].title,
				description: descriptions[index].description,
				link: descriptions[index].link
			});
		} else {
			this.setState({
				contentSelected: null,
				title: '',
				description: '',
				link: ''
			});
		}
	};

	componentWillUpdate(newProps, newState) {
		this.backgroundImage = newState.contentSelected == null ? 'closedBook' : 'openBook';
	}

	render() {

		const contentsDiv =  classNames({
			'col-xs-12': this.state.contentSelected == null,
			'col-xs-3 col-sm-offset-1 col-md-offset-2 col-lg-offset-3 col-lg-2': this.state.contentSelected != null
		});

		const descriptionDiv = classNames({
			'hidden-xs-up': this.state.contentSelected == null,
			'col-xs-3 col-xs-offset-3 col-sm-offset-2 col-md-offset-1': this.state.contentSelected != null
		});

		const bookStyle = {
			//background: 'url('+'../../images/'+this.backgroundImage+'.png'+') no-repeat center',
			backgroundSize: 'fill',
			height: '500px'
		};

		return (
			<div style={bookStyle}>
				<div className={contentsDiv} style={{'textAlign': 'center', paddingTop: '8%'}}>
					<ContentButton index='null' onClick={this.onClick.bind(this)}>
						Home
					</ContentButton>
					<ContentButton index='0' onClick={this.onClick.bind(this)}>
						FEHeroes
					</ContentButton>
					<ContentButton index='1' onClick={this.onClick.bind(this)}>
						PAD
					</ContentButton>
					<ContentButton index='2' onClick={this.onClick.bind(this)}>
						FGO
					</ContentButton>
				</div>
				<div className={descriptionDiv} style={{'textAlign': 'center', paddingTop: '5%'}}>
					{this.state.contentSelected == null ? null : <ContentDescription title={this.state.title} description={this.state.description} link={this.state.link} ></ContentDescription>}
				</div>
			</div>
		);
	}
}