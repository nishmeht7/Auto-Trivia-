
const ADD_PLAYER = 'ADD_PLAYER'
const UPDATE_PLAYER = 'UPDATE_PLAYER'


/*action creator*/
const addPlayer = function(id, points){
	return {
		type: ADD_PLAYER, 
		id,
		points,
	}
}

const updatePlayer = function(id, points){
	return {
		type: UPDATE_PLAYER,
		id,
		points,
	}
}

/*thunks*/

const initialState = []

/*reducer*/
const playerReducer = function(prevState = initialState, action) {

	const newState = [...prevState]

	switch (action.type){
		case ADD_PLAYER:
		newState.push({id: action.id, points: action.points})
		break

		case UPDATE_PLAYER:
		for (let i = 0; i < newState.length; i++){
			if (newState[i].id === action.id){
				newState[i].points += action.points
				break
			}
		}

		default:
		return prevState
	}

	return newState

}


module.exports = {
	addPlayer, 
	updatePlayer,
	playerReducer,
	ADD_PLAYER,
	UPDATE_PLAYER,
}



