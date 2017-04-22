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
	//console.info('questions req', req.body)

	// Create the question
	Questions.create(req.body, function(savedQuestion) {
		console.log('saved question', req.body)
		req.body.answerText.forEach(function(answer){
	        Answers.create(savedQuestion.id, answer.rightAns, answer.correct,
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

/**
 * Returns a random question
 */
router.get('/questions/getRandom', function (req, res) {
	Questions.getRandomOne((question) => {
		Answers.getByQuestion(question.id, (answers) => {
            res.json({
				"question" : question,
				"answers" : answers
			})
        })
	})
})

/**
 * Returns a question by a given id
 */
router.get('/questions/:id', function (req, res){
	let qId = req.params.id
	Questions.fromId(qId)
		.then(function(question){

		// Check if the question DNE, if so return an empty JSON object
		if (question == undefined) {
			res.json({})
		} else {
			Answers.getByQuestion(question.id, (answers) => {
				res.json({
					"question" : question,
					"answers" : answers
				})
			})
        }
	})
})


/**
 * When the user guesses on a question, this endpoint returns if the question and answer combo are correct
 */
router.post('/questions/:id/guess/:Aid', function (req, res) {
	let questionId = req.params.id
	let userAnswerId = req.params.Aid

	Answers.getCorrectAnswerId(questionId, (answerId) => {
		// Return if the user guessed correctly
		res.json({
			"correct" : answerId == userAnswerId
		})
	})
})

//always remember to export the router
module.exports = router;