var express=require('express');
var app=express();

app.get('/about',function(req,res){
    res.send('This is About Page');
});

app.get('/about/:title',function(req,res){
    var title=req.params.title;
    res.send('This is About Page with '+title);
});

app.get('/',function(req,res){
    res.send('<h1>Welcome</h1>');
});

app.listen('3000');

console.log('server listening to port 3000 ');