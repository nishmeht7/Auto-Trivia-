
/*Set Action*/
const ADD_POINTS = 'ADD_POINTS'

/*Action Creators*/
const addingPoints = function(id, points) {
	return {
		type: ADD_POINTS,
		points: points,
	}
}


/*Thunks*/
const addThePoints = function (qId) {
	return function (dispatch) {
		return axios.get(`api/questions/points/${qId}`)
				.then(function (result){
					dispatch(addingPoints(result.data.points))
					updatePoints(result.data.points)
				})
	}
}


/*Setting the initial state*/
let initialState = {
	points: 0
}

/*Reducers*/
const pointsReducer = function (prevState = initialState, action) {

	let newState = Object.assign({}, prevState)
	console.log('the action obj', action)
	switch(action.type) {

		case ADD_POINTS:
			newState.points += action.points
			break

		default:
			return prevState
	}

	return newState
}

module.exports = {
	ADD_POINTS, 
	addingPoints,
	addThePoints,
	pointsReducer,
}