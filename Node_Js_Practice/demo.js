// Make Server output on Browser

var http = require('http');
var data = [
    {name: "John", age: 30, city: "New York"},
    {name: "Anna", age: 22, city: "London"},
    {name: "Mike", age: 32, city: "Chicago"}
]
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    // res.write("hello frome node js server");
    // res.write('{"name":"John", "age":30, "city":"New York"}');
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);