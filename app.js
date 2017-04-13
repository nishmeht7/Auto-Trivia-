const express = require('express');
const Sequelize = require('sequelize');
const app = express(); 
const bodyParser = require('body-parser'); 
const morgan = require('morgan'); 
const tableOne = require('./server/models/questions.js');
const tableTwo = require('./server/models/user.js');
const tableThree = require('./server/models/answers.js'); 
//require for path.resolve 
const path = require('path');
const apiRoutes = require('./routes/index.js');


//morgan middleware 
app.use(morgan('dev'));

//implementing bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes)

//posting all static files in public folder 
app.use(express.static('public'));

// current homepage 
app.get('/*', function(req, res){
	//path.resolve converts the relative paths to an absolute path 
	res.sendFile(path.resolve(__dirname, 'browser/index.html'))
})


tableOne.sync({})
.then(function(){
	return tableTwo.sync({})
})
.then(function(){
	return tableThree.sync({})
})
.then(function(){
//listening on port 3001 
	app.listen(3001, function(){
		console.log('listening on 3001');
	})
})
