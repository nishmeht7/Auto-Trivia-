// Handles the database connection

// Sequelize ORM
var Sequelize = require('sequelize');

// Load the configuration file for database
var sequelizeConfig = require('./../config/db')

// Export the object for access throughout project
var self = module.exports = {
    sequelize: new Sequelize(sequelizeConfig)
}

// On start up - validate the database connection
console.log('Attempting to authenticate and validate database connection...');
self.sequelize
    .authenticate()
    .then(function(err) {
        console.log('Database connection has been established successfully.');
    })
    .catch(function (err) {
        console.log('Error - Unable to connect to the database:', err);
    });
