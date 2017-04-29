const { createStore, applyMiddleware, combineReducers } = require('redux')
const thunkMiddleware = require('redux-thunk').default
const gamePlay = require('./gamePlayReducer')
const gamePlayReducer = gamePlay.gamePlayReducer









const rootReducer = combineReducers({
	gamePlay: gamePlayReducer,
})





const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

module.exports = {
	store,
}