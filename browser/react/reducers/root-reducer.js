import {combineReducers} from 'redux';
import questionReducer from './questions.js';
import { reducer as formReducer } from 'redux-form'; 

export default combineReducers({
	questions: questionReducer,
	form: formReducer
})