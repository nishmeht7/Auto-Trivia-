const combineReducers = require('redux')
const gamePlay = require('./gamePlayReducer')
const gamePlayReducer = gamePlay.gamePlayReducer

combineReducers({
	gamePlay: gamePlayReducer,

})
