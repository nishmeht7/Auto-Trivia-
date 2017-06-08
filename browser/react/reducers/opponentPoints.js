
const UPDATE_OPPONENT = 'UPDATE_OPPONENT'

/*action obect creator*/
export function updateOpponent(points) {
	return {
		type: UPDATE_OPPONENT,
		points,
	}
}


/**/

let initialState = {
	points: 0
}
/*reducer*/
export default function opponentReducer(prevState = initialState, action){

	const newState = Object.assign({}, prevState)

	switch (action.type) {

		case UPDATE_OPPONENT: 
		newState.points += action.points
		break

		default:
		return prevState
	}

	return newState
}
