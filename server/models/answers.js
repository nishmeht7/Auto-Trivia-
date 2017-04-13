var Sequelize = require('sequelize');
var db = require('../db').sequelize
var Questions = require('./questions.js');

let Answers = db.define('answers', {
	answerText: {
		type: Sequelize.STRING, 
		allowNull: false
	},
	correct: {
		type: Sequelize.BOOLEAN,
		allowNull: false 
	},
	information: {
		type: Sequelize.TEXT
	}

})

// Relationships! Yay!
Answers.belongsTo(Questions, { as: 'Q' });

module.exports = Answers;