const express = require('express');
const Sequelize = require('sequelize');
const app = express(); 
const bodyParser = require('body-parser'); 
const morgan = require('morgan'); 

//morgan middleware 
app.use(morgan('dev'));

//implementing bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//posting all static files in public folder 
app.use(express.static('public'));

//current homepage 
app.get('/', function(req, res){
	res.send("WELCOME TO TRIVIA BITCH!!!!")
})


//listening on port 3001 
app.listen(3001, function(){
	console.log('listening on 3001');
})