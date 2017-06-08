const combineReducers = require('redux')
const gamePlay = require('./gamePlayReducer')
const gamePlayReducer = gamePlay.gamePlayReducer
const player = require('./newPlayerReducer')
const newPlayer = player.playerReducer

combineReducers({
	gamePlay: gamePlayReducer,
	newPlayer,
})
