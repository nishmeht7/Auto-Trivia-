var Sequelize = require('sequelize'); 
var db = new Sequelize('postgres://localhost:5432/cartrivia', {logging: false});

let User = db.define('user', {
	username: {
		type: Sequelize.STRING,
		allowNull: false
	},
	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isEmail: true
		}
	}

})




module.exports = User;