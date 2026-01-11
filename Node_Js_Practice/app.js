const express = require('express');
const app = express();
app.get('/', function(req,res){
    res.send('Hello Express Js');
});
app.get('/about', function(req,res){
    res.send('This is about page');
});
app.post('/login', function(req,res){
    res.send('This is login page');
});
app.put('/login', function(req,res){
    res.send('This is login page put');
});
app.delete('/login', function(req,res){
    res.send('This is login delete page');
});

app.listen(5000);