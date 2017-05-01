import axios from 'axios'; 

const GET_QUESTION = 'GET_QUESTION'; 

/*Action Creator*/

export function gettingQuestion (question) {
	return {
		type: GET_QUESTION, 
		question
	}
}


/*Thunks*/


export function getRandomQuestion(){
	return function(dispatch) {
		return axios.get('api/questions/getRandom')
		.then(function(response){
			const thunk = gettingQuestion(response.data)
			dispatch(thunk);
		})
		.catch(function(err){
			console.log(err);
		})
	}
}


/*Reducer*/
let initialState = {}


export default function gamePlayReducer (prevState = initialState, action) {

	const newState = Object.assign({}, prevState);

	switch (action.type) {
		case GET_QUESTION:
			newState.question = action.question;
			break;

		default:
			return prevState
	}
	return newState;

}
