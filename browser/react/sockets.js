import io from 'socket.io-client'
import store from './store'
import { updateOpponent } from './reducers/opponentPoints'

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

const socket = io(window.location.origin)
export function initializeSocket() {
		socket.on('connect', function() {
			console.log('yo this is gucci')
		})


		socket.on('allData', function(data) {
			console.log('all data is', data)
		})

		socket.on('randomQuestion', function(e){
			//console.log('the question was trigerred', e, socket)
			playerId = socket.id
			//console.log('playerId is', playerId)
			store.dispatch({type: GET_QUESTION, question: e})
		})

		socket.on('pointsAreUpdated', function(){
			console.log('the points were updated proper!')
		})

		socket.on('opponentUpdatedPoints', function(e) {
			console.log('the opponents points', e)
			store.dispatch(updateOpponent(e))
		})

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


