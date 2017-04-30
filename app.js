const socketio = require('socket.io')
const express = require('express');
const Sequelize = require('sequelize');
const app = express(); 
const bodyParser = require('body-parser'); 
const morgan = require('morgan'); 
const tableOne = require('./server/models/questions.js');
const tableTwo = require('./server/models/user.js');
const tableThree = require('./server/models/answers.js');
//require for path.resolve 
const path = require('path');
const apiRoutes = require('./routes/index.js');
const Questions = require('./server/repos/questionRepository')
const Answers = require('./server/repos/answerRepository')
const router = require('express').Router();
const { store } = require('./server/redux/store')
const { gettingQuestion, getRandomQuestion, gamePlayReducer, GET_QUESTION } = require('./server/redux/gamePlayReducer') 
const { ADD_POINTS, addingPoints, addThePoints, pointsReducer } = require('./server/redux/pointsReducer')
const { addPlayer, updatePlayer, playerReducer, ADD_PLAYER, UPDATE_PLAYER } = require('./server/redux/playerReducer')


//morgan middleware
app.use(morgan('dev'));

//implementing bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes)

//posting all static files in public folder 
app.use(express.static('public'));

// current homepage
app.get('/*', function(req, res){
	//path.resolve converts the relative paths to an absolute path 
	res.sendFile(path.resolve(__dirname, 'browser/index.html'))
})


let questionStored;
let answerStored;

function getQuestion () {
	return tableOne.findAll()
			.then((questions) => {
	            let randomIndex = Math.floor(Math.random() * questions.length)
	            return questions[randomIndex]
			})
			.then((question) => {
				questionStored = question.dataValues
				tableThree.findAll({
					where: {
						QId: question.id
					}}
				)
				.then((answers) => {
					answerStored = answers
				})
			})

}


var allQuestions = []
function getAllQuestion() {
	return tableOne.findAll()
			.then((questions) => {
				questions.forEach(function(question) {
					console.log('the question is !!!!!!', question.dataValues)
					allQuestions.push(question.dataValues)
				})
			})
}

getAllQuestion()

var allAnswers = []
function getAllAnswers() {
	return tableThree.findAll()
			.then((answers) => {
				answers.forEach(function(answer) {
					allAnswers.push(answer.dataValues)
				})
			})
}

getAllAnswers()


getQuestion()

tableOne.sync({})
.then(function(){
	return tableTwo.sync({})
})
.then(function(){
	return tableThree.sync({})
})
.then(function(){
//listening on port 3001
	const server = app.listen(3001, function(){
		console.log('listening on 3001');
	})
	const io = socketio(server)
	io.on('connection', function(socket) {
	console.log('NEW CLIENT, id is', socket.id)
	
	//let allPlayers = Object.keys(io.engine.clients)
	store.dispatch(addPlayer(socket.id, 0))

	socket.on('getNextQuestion', function() {
		console.log('*****hitting get next question *******')
		getQuestion()
		store.dispatch(gettingQuestion({type: GET_QUESTION, question: {question: questionStored, answers: answerStored} }))
	})

	socket.on('updatePoints', function(updatedPoints){
		//console.log('the new points are', updatedPoints.points, updatedPoints.id)
		store.dispatch(addingPoints(updatedPoints.id, updatedPoints.points))
		store.dispatch(updatePlayer(updatedPoints.id, updatedPoints.points))
		//console.log('the store points are', store.getState().points)
		socket.broadcast.emit('opponentUpdatedPoints', updatedPoints.points)
	})

	function updatePointsServerSide() {
		socket.emit('pointsAreUpdated', function(){
			console.log('points updated', store.getState())
		})
	}

	console.log('****************', allAnswers)


	// let currState = store.getState().player

	// function getOpponentPoints(playerId) {
	// 	let opponentId
	// 	for (let i = 0; i < allPlayers.length; i++) {
	// 		if (playerId !== allPlayers[i]) {
	// 			opponentId = allPlayers[i]
	// 		}
	// 	}
	// 	for (let j = 0; j < currState.length; j++) {
	// 		if (currState[j].id === opponentId) {
	// 			let opponentPoints = currState[j].points
	// 			return opponentPoints
	// 		}
	// 	}
	// }

	function updateClientQuestion() {
		socket.emit('randomQuestion', {question: questionStored, answers: answerStored})
	}

	function giveClientAllData() {
		socket.emit('allData', {questions: allQuestions, answers: allAnswers})
	}

	store.subscribe(() => {
		updateClientQuestion()
		updatePointsServerSide()
	})

	//emit this in the beginning to update the client store with questions
	//updatePoints()
	giveClientAllData()
	updateClientQuestion()
	updatePointsServerSide()
	store.dispatch(gettingQuestion({type: GET_QUESTION, question: {question: questionStored, answers: answerStored} }))

	//console.log('the store is',store.getState())

		socket.on('disconnect', function(){
			console.log('socket id ' + socket.id + ' has disconnected. :(')
		})

	})
})