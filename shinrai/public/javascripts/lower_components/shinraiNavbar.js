import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			collapsed: true,
		};
	}

	toggleCollapse(isToggleButton) {
		this.setState({
			collapsed: isToggleButton ? !this.state.collapsed : true,
		});
	}

	render() {
		
		//center and right content props will be arrays containing jsx elements
		const { centerContent, rightContent, brand, padding, children } = this.props;
		const navStyle = {
			padding: padding,
			margin: "0",
			borderRadius: "0",
			textAlign: "center",
		};

		return (
			<section>
				<nav className="navbar navbar-default" style={navStyle}>
					<div className="container-fluid">
						<div className="navbar-header">
							<button type='button' className='navbar-toggle' onClick={this.toggleCollapse.bind(this, true)}>
								<span className='icon-bar'></span>
								<span className='icon-bar'></span>
								<span className='icon-bar'></span>
							</button>
							<a className='navbar-brand' href='/'>{brand}</a>
						</div>
						<div className={"navbar-collapse "+(this.state.collapsed ? "collapse" : "")}>
							<ul className="nav navbar-nav">
								{ centerContent == null ? "" :
									centerContent.map((jsx, index) => <li key={"centerContent"+index} onClick={this.toggleCollapse.bind(this, false)}>{jsx}</li>)
								}
							</ul>
							<ul className="nav navbar-nav navbar-right">
								{ rightContent == null ? "" :
									rightContent.map((jsx, index) => <li key={"rightContent"+index} onClick={this.toggleCollapse.bind(this, false)}>{jsx}</li>)
								}
							</ul>
						</div>
					</div>
				</nav>
				{children}
			</section>
		);
	}
}
Navbar.defaultProps = {
	centerContent: null,
	rightContent: null,
	brand: <span style={{color: "white"}} className='glyphicon glyphicon-king' />,
};