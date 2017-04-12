var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/cartrivia', {logging: false});
var Questions = require('./questions.js');

let Answers = db.define('answers', {
	answer: {
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

Answers.belongsTo(Questions, { as: 'Q' });

module.exports = Answers;