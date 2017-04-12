import axios from 'axios'; 
const ADD_ANSWER = 'ADD_ANSWER'; 

/***Action Creator***/
export function recieveAnswer(answer){
	return {
		type: ADD_ANSWER,
		answer 
	}
}


/*Answer Thunk*/
export function creatingAnswer(answer){
	return function(dispatch){
		return axios.post('/api/questions', {
			answerText: answer.answerText,
			correct: answer.correct
		})
		.then(function(){
			dispatch(recieveAnswer(answer))
		})
		.catch(function(err){
			console.log(err);
		})
	}
}

/*Answer Reducer*/

export default function reducer(prevState=[], action){

	const newState = [...prevState];

	switch(action.type){
		
		case ADD_ANSWER:
			newState.push(action.type);
			break;

		default: 
			return prevState;
	}

	return newState
}


