var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var knex = require ("./db/knex");

//middleware 

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('tiny'));

app.get('/students', function(req,res){
	knex('students').then(function(students){
		res.render("index", {students:students});	
	});
});

app.listen(3000, function(){
	console.log("Listening on 3000");
});

