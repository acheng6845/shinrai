import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './javascripts/store/store.js';

const App = createReactClass({
	render() {
		return (
			<HashRouter>
				<div>
					
				</div>
			</HashRouter>
		);
	}
});

ReactDOM.render(<Provider store={store}>
		<App />
	</Provider>, document.getElementById('app'));