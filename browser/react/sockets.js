import io from 'socket.io-client'
import store from './store'
import { updateOpponent } from './reducers/opponentPoints'
import { addPlayer } from './reducers/newPlayerReducer'

// export function initializeSocket() {
// 	return function(dispatch) {
// 		const socket = io(window.location.origin)
// 		socket.on('connect', function() {
// 			console.log('yo this is gucci')

// 		})
// 	}
// }
const GET_QUESTION = 'GET_QUESTION'
var playerId
let allQuestions
let allAnswers
let totalPlayers

const socket = io(window.location.origin)
export function initializeSocket() {
		socket.on('connect', function() {
			console.log('yo this is gucci')
		})


		socket.on('allData', function(data) {
			//console.log('all data is', data)
			allQuestions = data.questions
			allAnswers = data.answers
			let gettingQuestion = getQuestion()
			//let gettingQuestion = getQuestion(data.questions, data.answers)
			//console.log(gettingQuestion)
			// store.dispatch({type: GET_QUESTION, question: gettingQuestion})
		})

		socket.on('newPlayerIsAdded', function(newPlayer){
			console.log('the new player is************', newPlayer)
			store.dispatch(addPlayer(newPlayer))
		})

		socket.on('newPlayer', function(playerSocket){
			console.log('new player id is', playerSocket)
			// store.dispatch(addPlayer(playerSocket))
		})

		socket.on('multiPlayerReady', function(players) {
			//totalPlayers = players
			console.log('both players have joined!!!!', totalPlayers)

			//window.location.href = 'http://localhost:3001/questions';
		})

		socket.on('pointsAreUpdated', function(){
			console.log('the points were updated proper!')
		})

		socket.on('opponentUpdatedPoints', function(e) {
			console.log('the opponents points', e)
			store.dispatch(updateOpponent(e))
		})

}

export function allPlayers() {
	let returnedPlayers = false
	console.log('the total players in socket', totalPlayers)
	if (totalPlayers && totalPlayers.length === 2) {
		returnedPlayers = true
	}
	return returnedPlayers
}

export function getQuestion() {
	let questionObj = {}
	let id
	console.log('***All Questions***', allQuestions)
	if (allQuestions.length) {
		questionObj.question = allQuestions[0]
		id = allQuestions[0].id

		questionObj.answers = allAnswers.filter(function(answer){
			return answer.QId == id
		})
		allQuestions.shift()
		store.dispatch({type: GET_QUESTION, question: questionObj})
	}
	return questionObj
}

export function testListener() {
	socket.emit('testListener', function() {
		console.log('okay thats wasaaaaaaaaa')
	})
}

export function updatePoints(points) {
	console.log('hitting updatePoints')
	console.log(playerId)
	socket.emit('updatePoints', {id: playerId, points: points})
}

export function getNextQuestion() {
	socket.emit('getNextQuestion', function() {
		console.log('getting next question')
	})
}


