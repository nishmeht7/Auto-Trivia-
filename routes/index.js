const express = require('express');
const Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/cartrivia', {logging: false});
const Questions = require('../server/models/questions.js')

const router = express.Router();


router.get('/addPage', function(req, res){
	res.send("Add your questions here: ");
})

// router.get('/questions', function(req, res){
// 	res.send("Questions Page");
// })

router.post('/questions', function(req, res){
	Questions.create(req.body)
	.then(function(){
		console.log('created!');
	})
})

//always remember to export the router 
module.exports = router;