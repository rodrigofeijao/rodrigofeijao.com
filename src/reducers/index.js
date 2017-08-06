/**
 *  Combine all reducers with combineReducers
 */
import { combineReducers } from 'redux';

/**
 *  Reducers
 */
import movies   from './moviesReducer';

export default combineReducers({
    movies
})