var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/cartrivia', {logging: false});


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