/**
 * Answer Repository
 *
 * Module covers all data access to and from the answer repository
 */

const Answers = require('./../models/answers');

/**
 * Creates an answer to a given question
 * @param questionId ID to link to the correct question
 * @param answerText The text of the answer, e.g. "1993 Saab 93 Turbo"
 * @param correctAnswerFlag Flag true/false which indicates if the answer is correct
 * @param callback function to call upon completion
 */
exports.create = function(questionId, answerText, correctAnswerFlag, callback) {
    Answers.create({
        answerText: answerText,
        correct: correctAnswerFlag,
        QId: questionId
    }).then(function(savedQuestion) { callback(savedQuestion)} )
}

/**
 * Retrieves all answers to a given question
 * @param questionId
 * @param callback
 */
exports.getByQuestion = (questionId, callback) => {
    Answers.findAll({
        where : {
            QId : questionId
        }
    }).then((answers) => callback(answers))
}