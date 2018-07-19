import { combineReducers } from 'redux';

// Reducers
import planlist from './reducers/planList';

// Combine Reducers
var reducers = combineReducers({
    planlist: planlist
});

export default reducers;