const express = require('express');
const Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/cartrivia', {logging: false});

const router = express.Router();


router.get('/addPage', function(req, res){
	res.send("Add your questions here: ");
})



//always remember to export the router 
module.exports = router;