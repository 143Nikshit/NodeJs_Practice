const http = require("http");

const server = http.createServer((req, res) =>{
    if(req.url === "/"){
        res.setHeader("Content-Type","text/html");
        res.write("<h1>I am King Joshi and I am Full Stack Developer </h1>");
        res.end();
    }

    if(req.url === "/source-code"){
        res.write("Happy Diwali to you and your family");
        res.end();
    }
})

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}...`);
})