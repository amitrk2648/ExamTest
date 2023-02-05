var exp=require('express');
var app=exp();
app.listen(9000,function(req,res){console.log("started")});
app.get('/greet',function(req,res){
	res.send("Welcome to web app");	
});
app.all('*',function(req,res){
	res.send("Welcome");	
});