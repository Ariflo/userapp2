var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var knex = require ("./db/knex");
var morgan = require("morgan");
var locus = require("locus");
var methodOverride = require("method-override");

//middleware 

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

app.get('/students', function(req,res){
	knex('students').then(function(students){
		res.render("index", {students:students});	
	});
});

app.get('/students/new', function(req,res){
	res.render("new");
});

app.post('/students', function(req, res){	
	knex('students').insert(req.body).then(function(){
		res.redirect('/students'); 	
	});
});

app.get('/students/:id/edit', function(req, res){
	//find a student 
	var id = req.params.id 
	knex('students').where({id:id}).first().then(function(student){
		res.render('edit', {student:student}); 
	});
});

app.put('/students/:id', function(req, res){	
	knex('students').where({id:req.params.id}).first().update(req.body).then(function(){
		res.redirect('/students');
	});
	
});

app.delete('/students/:id', function(req, res){
	knex('students').where({id:req.params.id}).del().then(function(){
		res.redirect('/students');
	});
});

app.listen(3000, function(){
	console.log("Listening on 3000");
});

