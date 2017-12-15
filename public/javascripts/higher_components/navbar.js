import React from 'react';
import { IndexLink, Link } from 'react-router';

//Deprecated
const Navbar = React.createClass({

	getInitialState() {
		return {
			collapsed: true
		};
	},

	toggleCollapse() {
		this.setState({ collapsed : !this.state.collapsed });
	},

	render() {
		
		const { location } = this.props;
		const collapsed = this.state.collapsed;

		const navClass = collapsed ? 'collapse' : '';

		const liStyle = {
			marginLeft: '5px'
		};

		return (
			<nav className='navbar navbar-default'>
				<div className='container-fluid'>
					<div className='navbar-header'>
						<button type='button' className='navbar-toggle' onClick={this.toggleCollapse}>
							<span className='sr-only'>Toggle navigation</span>
							<span className='icon-bar'></span>
							<span className='icon-bar'></span>
							<span className='icon-bar'></span>
						</button>
						<a className='navbar-brand' href='#'><span className='glyphicon glyphicon-king'></span></a>
					</div>

					<div className={'navbar-collapse ' + navClass} id='navbar-collapse-1'>
						<ul className='nav navbar-nav'>
							<li>
								<a href='#'>Welcome, Guest.</a>
							</li>
						</ul>
						<ul className='nav navbar-nav navbar-right'>
							<li>
								<IndexLink to='/' onClick={this.toggleCollapse}>Home</IndexLink>
							</li>
							<li>
								<Link to='ranking' onClick={this.toggleCollapse}>Ranking</Link>
							</li>
							<li>
								<Link to='monsterbook' onClick={this.toggleCollapse}>Search</Link>
							</li>
							<li>
								<Link to='monsterentry' onClick={this.toggleCollapse}>Monster</Link>
							</li>
							<li>
								<Link to='teams' onClick={this.toggleCollapse}>Team Edit</Link>
							</li>
							<li style={liStyle}>
								<button type='button' className='btn btn-success navbar-btn'>
									<span className='glyphicon glyphicon-log-in'>&nbsp;Login</span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
});

module.exports = Navbar;