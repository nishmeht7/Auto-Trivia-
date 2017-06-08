const { createStore, applyMiddleware, combineReducers } = require('redux')
const thunkMiddleware = require('redux-thunk').default
const gamePlay = require('./gamePlayReducer')
const gamePlayReducer = gamePlay.gamePlayReducer
const { pointsReducer } = require('./pointsReducer')
const { playerReducer } = require('./playerReducer')
const player = require('./newPlayerReducer')
const newPlayer = player.playerReducer




const rootReducer = combineReducers({
	gamePlay: gamePlayReducer,
	points: pointsReducer,
	player: playerReducer,
	newPlayer,
})



const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

module.exports = {
	store,
}