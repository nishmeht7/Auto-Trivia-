const NEW_PLAYER = 'NEW_PLAYER'

/*Action Creator*/

const addNewPlayer = function (player) {
	console.log('******HITTING ADDNEWPLAYER')
	return {
		type: NEW_PLAYER,
		player,
	}
}

/*thunks*/


/*reducers*/

const playerReducer = function (prevState = [], action) {

	const newState = [...prevState]

	switch (action.type) {

		case NEW_PLAYER:
			newState.push(action.player)
			break;

		default: 
			return prevState
	}

	return newState
}


module.exports = {
	addNewPlayer,
	playerReducer, 
}