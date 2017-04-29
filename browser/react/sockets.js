import io from 'socket.io-client'
import store from './store'


// export function initializeSocket() {
// 	return function(dispatch) {
// 		const socket = io(window.location.origin)
// 		socket.on('connect', function() {
// 			console.log('yo this is gucci')

// 		})
// 	}
// }
const GET_QUESTION = 'GET_QUESTION'

const socket = io(window.location.origin)
export function initializeSocket() {
		socket.on('connect', function() {
			console.log('yo this is gucci')
		})

		socket.on('randomQuestion', function(e){
			console.log('the question was trigerred', e, socket)
			store.dispatch({type: GET_QUESTION, question: e})
		})

}

export function testListener() {
	// socket.emit('testListener', function() {
	// 	console.log('testing attention please!!!')
	// })
	socket.on('bitch', function(){
		console.log('yes I am your bitch')
	})

	socket.emit('testListener', function() {
		console.log('okay thats wasaaaaaaaaa')
	})
}

