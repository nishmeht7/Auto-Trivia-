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
 * Creates a single question
 * @param question to add (should be the req.body)
 * @param callback function to execute upon completion
 */
exports.create = function(question, callback) {
    Questions.create(question)
        .then(function(savedQuestion) { callback(savedQuestion)} )
}