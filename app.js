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

//morgan middleware
app.use(morgan('dev'));

//implementing bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes)

//posting all static files in public folder 
app.use(express.static('public'));

// function getQuestion() {
// 	return app.get('/getSomeQuestion', function(){
// 		tableOne.findOne({
// 			where: {
// 				id: 1
// 			}
// 		})
// 		.then(function(result){
// 			console.log(result)
// 		})
// 	})
// }

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
		console.log('a new client has connected')
		console.log('the id is', socket.id)


	function updateClientQuestion() {
		// const GET_QUESTION = 'GET_QUESTION';
		socket.emit('randomQuestion', {question: questionStored, answers: answerStored})
	}

	store.subscribe(() => {
		updateClientQuestion()
	})

	//emit this in the beginning to update the client store with questions
	updateClientQuestion()
	store.dispatch(gettingQuestion({type: GET_QUESTION, question: {question: questionStored, answers: answerStored} }))
	console.log('the store is',store.getState())

		socket.on('disconnect', function(){
			console.log('socket id ' + socket.id + ' has disconnected. :(')
		})

		// socket.on('testListener', function(){
		// 	socket.broadcast.emit('bitch', 
		// 		'you my bottom bitch'
		// 	)
		// })

		// socket.on('updatePoints', function(){
		// 	console.log('points have been updated')
		// })

	})
})