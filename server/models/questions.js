var Sequelize = require('sequelize');
var db = require('../db').sequelize


let Questions = db.define('questions', {
	questionText: {
		type: Sequelize.TEXT, 
	},
	questionImgUrl: {
		type: Sequelize.STRING 
	},
	points: {
		type: Sequelize.INTEGER, 
	}

})


module.exports = Questions;