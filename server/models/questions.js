var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost://5432/carTrivia', {logging: false});

let Questions = db.define('questions', {
	question: {
		type: Sequelize.TEXT, 
		allowNull: false
	},
	wrongOptions: {
		type: Sequelize.ARRAY, 
		allowNull: false
	},
	correctOption: {
		type: Sequelize.STRING, 
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