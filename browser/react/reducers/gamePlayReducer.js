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
export function displayingQuestion(id){
	
	return function(dispatch) {
		//console.log('question', question);
		return axios.get(`/api/questions/${id}`)
		.then(function(response){
		console.log('question 2', response);
			dispatch(gettingQuestion(response.data));
		})
		.catch(function(err){
			console.log(err); 
		});
	}
}

/*Reducer*/


export default function gamePlayReducer (prevState=[], action) {

	const newState = [...prevState];

	switch(action.type) {
		
		case GET_QUESTION:
		newState.push(action.question)
		break;

		default: 
		return prevState
	}
	return newState;

}