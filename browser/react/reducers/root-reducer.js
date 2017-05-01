import {combineReducers} from 'redux';
import questionReducer from './questions.js';
import { reducer as formReducer } from 'redux-form';
import gamePlayReducer from './gamePlayReducer';
import points from './points'
import opponent from './opponentPoints'
import playerReducer from './newPlayerReducer'

export default combineReducers({
	questions: questionReducer,
	gamePlay: gamePlayReducer,
	points: points,
	opponent,
	player: playerReducer,
})