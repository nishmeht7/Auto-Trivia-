import axios from 'axios'

const NEW_PLAYER = 'NEW_PLAYER'

/*Action Creator*/

export function addPlayer (player) {
	return {
		type: NEW_PLAYER,
		player,
	}
}

/*thunks*/


/*reducers*/

export default function playerReducer (prevState = [], action) {

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