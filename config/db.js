// Our configuration for sequalize
// For more information:
//    http://sequelize.readthedocs.io/en/latest/api/sequelize/
sequelizeConfig = {
    // Connection Information
    host: 'localhost',
    port: 5432,
    database: 'cartrivia',
    username: 'admin',
    password: '',
    dialect: 'postgres',

    // Connection Pooling
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    // Do not log SQL to the console
    logging: false
}


// Export it so it is available
module.exports = sequelizeConfig
