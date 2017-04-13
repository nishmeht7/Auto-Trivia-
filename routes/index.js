const router = require('express').Router();

// Data Items
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
		console.log('saved question', req.body)
		req.body.answerText.forEach(function(answer){
	        Answers.create(savedQuestion.id, answer.rightAns, req.body.correct,
				function(savedAnswer) {
					console.log('answer created!!!');
				})
		})
		res.send('science bitch!!!!!')
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