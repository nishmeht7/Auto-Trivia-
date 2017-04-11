var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/cartrivia', {logging: false});

let Questions = db.define('questions', {
	question: {
		type: Sequelize.TEXT, 
		allowNull: false
	},
	questionImgUrl: {
		type: Sequelize.STRING 
	},
	points: {
		type: Sequelize.INTEGER, 
		allowNull: false
	}

})



module.exports = Questions;