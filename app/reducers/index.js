import { combineReducers } from 'redux';
import { photosReducer } from './photosReducer';

const appReducer = combineReducers({
	photosReducer
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;
