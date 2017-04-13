var Sequelize = require('sequelize');
const db = require('../db.js').sequelize


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