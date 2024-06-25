import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { leaveReducer } from './reducers/leaveReducer';

const rootReducer = combineReducers({
    leave : leaveReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;