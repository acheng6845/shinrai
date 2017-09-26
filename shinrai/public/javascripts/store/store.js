import { applyMiddleware, createStore } from 'redux';

import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from '../reducers';

const middleware = applyMiddleware(ReduxThunk, createLogger());

export default createStore(reducer, middleware);