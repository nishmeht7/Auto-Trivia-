import {combineReducers} from 'redux';
import questionReducer from './questions.js';
import { reducer as formReducer } from 'redux-form';
import gamePlayReducer from './gamePlayReducer';

export default combineReducers({
	questions: questionReducer,
	gamePlay: gamePlayReducer
})