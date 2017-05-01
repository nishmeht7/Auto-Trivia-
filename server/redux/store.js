const { createStore, applyMiddleware, combineReducers } = require('redux')
const thunkMiddleware = require('redux-thunk').default
const gamePlay = require('./gamePlayReducer')
const gamePlayReducer = gamePlay.gamePlayReducer
const { pointsReducer } = require('./pointsReducer')
const { playerReducer } = require('./playerReducer')





const rootReducer = combineReducers({
	gamePlay: gamePlayReducer,
	points: pointsReducer,
	player: playerReducer,
})



const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

module.exports = {
	store,
}