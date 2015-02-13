var express=require('express');
var app=express();

app.get('/',function(req,res){
    res.render('index.ejs',{title:'Welcome Page'});
});

app.get('/about',function(req,res){
    res.render('layout.ejs',{title:'About Us',body:'About Us'});
});

app.get('/*',function(req,res){
    res.status(404).render('error.ejs',{title:'Error Page'});    
 });   


app.listen('3000');

console.log('Server is listening to port 3000');