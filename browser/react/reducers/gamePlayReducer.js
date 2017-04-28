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
// export function displayingQuestion(id){
	
// 	return function(dispatch) {
// 		//console.log('question', question);
// 		return axios.get(`/api/questions/${id}`)
// 		.then(function(response){
// 		console.log('question 2', response);
// 			dispatch(gettingQuestion(response.data));
// 		})
// 		.catch(function(err){
// 			console.log(err); 
// 		});
// 	}
// }

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

//thunk to go to next question 



/*Reducer*/
let initialState = {}


export default function gamePlayReducer (prevState=initialState, action) {

	const newState = Object.assign({}, prevState); 

	switch(action.type) {
		
		case GET_QUESTION:
			newState.question = action.question;
			break;

		default: 
			return prevState
	}
	return newState;

}