import {combineReducers} from 'redux';
import questionReducer from './questions.js';

export default combineReducers({
	questions: questionReducer
})