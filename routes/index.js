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


router.get('/question', function (req, res) {
	Questions.getOne((question) => {
		Answers.getByQuestion(question.id, (answers) => {
            res.json({
				"question" : question,
				"answers" : answers
			})

        })
	})
})

router.get('/question/:id', (req, res) => {
	Questions.
})

router.get('/questions/:qId', function (req, res){
	var qId = req.params.qId;
	Questions.fromId(qId)
	.then(function(question){
		res.send(question)
	})
})

//always remember to export the router
module.exports = router;