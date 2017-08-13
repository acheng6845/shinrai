import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './javascripts/store/store.js';
import IndexPage from './javascripts/higher_components/indexPage';

const App = createReactClass({
	render() {
		return (
			<HashRouter>
				<div>
					<Route exact path='/' component={IndexPage} />
				</div>
			</HashRouter>
		);
	}
});

ReactDOM.render(<Provider store={store}>
		<App />
	</Provider>, document.getElementById('app'));