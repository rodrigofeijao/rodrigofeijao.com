/**
 *  Combine all reducers with combineReducers
 */
import { combineReducers } from 'redux';

/**
 *  Reducers
 */
import movies   from './moviesReducer';
import counter  from './counterReducer';
import pages  from './pagesReducer';

export default combineReducers({
    movies,
    counter,
    pages,
})