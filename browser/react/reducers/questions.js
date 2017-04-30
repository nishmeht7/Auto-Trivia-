import axios from 'axios'; 
const ADD_QUESTION = 'ADD_QUESTION'; 

export function recieveQuestion(question){
	return {
		type: ADD_QUESTION,
		question 
	}
}


export function creatingQuestion(question){
	return function(dispatch) {
		console.log('question', question);
		return axios.post('/api/questions', question)
		.then(function(response){
		console.log('question 2', question);
			dispatch(recieveQuestion(question));
		})
		.catch(function(err){
			console.log(err);
		});
	}
}


export default function questionReducer(prevState = [], action){

	const newState = [...prevState];

	switch(action.type){

		case ADD_QUESTION:
			newState.push(action.question);
			console.log('action', action) 
			break; 

		default:
			return prevState;

	}

	return newState; 
}