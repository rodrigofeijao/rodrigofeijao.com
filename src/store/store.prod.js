/**
 *  Libraries
 */
import { applyMiddleware, createStore } from 'redux';
import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';

/**
 *  Reducers
 */
import reducer from '../reducers/index'

/**
 * Middleware
 * [http://redux.js.org/docs/advanced/Middleware.html]
 */
const middleware = applyMiddleware(promise());


export default createStore( reducer , middleware );