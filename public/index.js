import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './javascripts/store/store.js';
import TrueIndex from './javascripts/higher_components/index';
import IndexPage from './javascripts/higher_components/shinraiIndex';
import MonsterBook from './javascripts/higher_components/monsterBook';
import Entry from './javascripts/higher_components/entry';
import Navbar from './javascripts/lower_components/shinraiNavbar';
import TutorialIndex from './javascripts/higher_components/tutorialIndex';
import AboutMe from './javascripts/higher_components/aboutMe';

const App = createReactClass({
	render() {
		const navStyle = {
			color: "white",
			border: "0",
			//fontFamily: "arial",
			fontSize: "2em"
		};
		const navActiveStyle = {
			color: "#cc4141",
		};
		const centerContent = [
			<NavLink to="/tutorial"  style={{...navStyle, marginLeft: "35vw"}} activeStyle={navActiveStyle}>Lessons</NavLink>,
			<NavLink to="/pad" style={navStyle} activeStyle={navActiveStyle}>Games</NavLink>,
			<NavLink to="/about" style={navStyle} activeStyle={navActiveStyle}>About Me</NavLink>
		];
		const rightContent = [
			<a style={{...navActiveStyle, border: "none"}} href="https://github.com/acheng6845/shinrai">GitHub</a>
		];
		return (
			<BrowserRouter>
				<Navbar padding="1%" centerContent={centerContent} brand="Aaron's Portfolio" rightContent={rightContent}>
					<div>
						<Route exact path='/' component={TrueIndex} />
						<Route path='/games' component={IndexPage} />
						<Route path='/about' component={AboutMe} />
						<Route path='/pad' component={MonsterBook} />
						<Route path='/padunit' component={Entry} />
						<Route path='/tutorial' component={TutorialIndex} />
					</div>
				</Navbar>
			</BrowserRouter>
		);
	}
});

ReactDOM.render(<Provider store={store}>
		<App />
	</Provider>, document.getElementById('app'));