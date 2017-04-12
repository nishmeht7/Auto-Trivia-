const express = require('express');
const Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/cartrivia', {logging: false});
const Questions = require('../server/models/questions.js');
const Answers = require('../server/models/answers.js');

const router = express.Router();


router.get('/addPage', function(req, res){
	res.send("Add your questions here: ");
})

// router.get('/questions', function(req, res){
// 	res.send("Questions Page");
// })

router.post('/questions', function(req, res){
	console.log('questions req', req.body)
	Questions.create(req.body)
	.then(function(question){
		Answers.create({
			answerText: req.body.answerText,
			correct: req.body.correct,
			QId: question.id
		})
		.then(function(){
			console.log('answer created')
		})
		console.log('created!');
	})
})


// router.post('/answer', function(req, res){
// 	console.log('answers req', req.body)
// 	Answers.create(req.body)
// 	.then(function(){
// 		console.log('created!');
// 	})
// })


//always remember to export the router 
module.exports = router;