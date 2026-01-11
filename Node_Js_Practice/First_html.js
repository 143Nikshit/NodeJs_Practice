var http = require('http');
var page =`
<h1>Hello from Node.js Server</h1>
<input type='text' /> <br/> <br/>
<input type='text' /> <br/> <br/>
<input type='text' /> <br/> <br/>`
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(page);
    res.end();
}).listen(4000);