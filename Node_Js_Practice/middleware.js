// Middleware

const express = require('express');
const app = express();

const checkUrl = function(req, res, next)
{
    console.warn("current route is ", req.originalUrl);
    next();
}
app.use(checkUrl);

app.get('/', function(req,res){
    res.send('Hello Express Js');
});
app.get('/about', function(req,res){
    res.send('This is about page');
});
app.get('/login', function(req,res){
    res.send('This is login page');
});

app.listen(5000);