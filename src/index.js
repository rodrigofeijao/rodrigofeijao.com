/**
 *  Libraries
 *  - React
 */
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

/**
 *  Libraries
 *  - Redux
 */
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';

/**
 *  Reducers
 */
import reducer from './reducers/index'

/**
 *  Components
 */
import App from './common/App'

/**
 *  CSS
 */
import './scss/index.scss';

/**
 * Get the initial state and set it into a global var to be used o init the store
 * @type {object}
 */
const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

/**
 * Create initial store from the initial state
 */
const middleware = applyMiddleware(promise(), createLogger());
const store = createStore(reducer, preloadedState, middleware)


const Wrapper = () => (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

render(<Wrapper />, document.getElementById('app'))