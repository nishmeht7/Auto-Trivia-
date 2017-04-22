var Sequelize = require('sequelize');
const db = require('../db.js').sequelize


let Questions = db.define('questions', {
	questionText: {
		type: Sequelize.TEXT, 
	},
	questionImgUrl: {
		type: Sequelize.STRING, 
		defaultValue: "https://i.ytimg.com/vi/Rm5OLvgVen0/maxresdefault.jpg"
	},
	points: {
		type: Sequelize.INTEGER, 
	}

})


module.exports = Questions;