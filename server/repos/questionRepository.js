/**
 * Question Repository
 *
 * Module covers all data access to and from the questions repository
 */

const Questions = require('./../models/questions');

/**
 * Returns all questions in the system
 * @param callback function to execute upon completion
 */
exports.getAllQuestions = function(callback) {
    Questions.findAll()
        .then(function(questions) { callback(questions)})
}


/**
* Finds a single question in the system 
* from a passed in id 
*/
exports.fromId = function(id) {
	return Questions.findById(id)
}
/**
 * Creates a single question
 * @param question to add (should be the req.body)
 * @param callback function to execute upon completion
 */
exports.create = function(question, callback) {
    Questions.create(question)
        .then(function(savedQuestion) { callback(savedQuestion)} )
}

/**
 * Returns a single question, randomly selected
 * @param callback function
 */
exports.getRandomOne = (callback) => {
    Questions.findAll()
        .then((questions) => {
            let randomIndex = Math.floor(Math.random() * questions.length)
            callback(questions[randomIndex])
        })
}
