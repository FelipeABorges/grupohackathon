var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars').
	create({'defaultLayout':'main'});

app.use(bodyParser.urlencoded());
app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars')

var port = process.env.PORT || 80;

app.get('/',function(req,res){
	res.render('home');
});

app.listen(port,function(){
	console.log("meu deus estou rodando...");
});