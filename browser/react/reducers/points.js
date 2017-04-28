import axios from 'axios'

/*Set Action*/
const ADD_POINTS = 'ADD_POINTS'

/*Action Creators*/
export function addingPoints(points) {
	return {
		type: ADD_POINTS,
		points: points
	}
}


/*Thunks*/
export function addThePoints(qId) {
	return function (dispatch) {
		return axios.get(`api/questions/points/${qId}`)
				.then(function (result){
					dispatch(addingPoints(result.data.points))
				})
	}
}


/*Setting the initial state*/
let initialState = {
	points: 0
}

/*Reducers*/
export default function pointsReducers(prevState = initialState, action) {

	let newState = Object.assign({}, prevState)

	switch(action.type) {

		case ADD_POINTS:
			newState.points += action.points
			break

		default:
			return prevState
	}

	return newState
}