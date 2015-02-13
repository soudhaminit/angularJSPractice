var express=require('express');
var jade=require('jade');

//iniliazing the express
var app=express();

//set views folder
app.set('views',__dirname+'/views');
app.set('view engine','jade')

//setting up the static folder
app.use(express.static(__dirname+'/public'));


//render index
app.get('/',function(req,res){
    res.render('index',{title:'Welcome page'});
});


//app listen
app.listen('3000');
console.log('Server listening on port 3000');