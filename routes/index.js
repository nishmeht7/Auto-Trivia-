const express = require('express');
const Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/cartrivia', {logging: false});
const router = express.Router();


const Questions = require('../server/repos/questionRepository')
const Answers = require('../server/repos/answerRepository')

router.get('/addPage', function(req, res){
	res.send("Add your questions here: ");
})


/**
 * Adds a new question with answers attached
 */
router.post('/questions', function(req, res) {

	// Log the request - for development only
	console.info('questions req', req.body)

	// Create the question
	Questions.create(req.body, function(savedQuestion) {
        Answers.create(savedQuestion.id, req.body.answerText, req.body.correct,
			function(savedAnswer) {
				console.log('answer created!!!')
				res.send("all items created23123")
			})
	})
})

/**
 * Returns all questions
 */
router.get('/questions', function (req, res) {
	Questions.getAllQuestions(function(questions) {
    	res.send(questions)
	})
})

//always remember to export the router 
module.exports = router;