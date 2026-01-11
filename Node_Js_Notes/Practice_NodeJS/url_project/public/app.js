import path from "path";
import { readFile } from "fs/promises";
import { createServer } from "http";

const PORT = 3000;

const servrFile = async(res, filepath, contentType) =>{
    try {
          const data = await readFile(filepath);
          res.writeHead(200, { "Content-Type": contentType});
          res.end(data);
        } catch (err) {
          res.writeHead(404, { "Content-Type": content/plain });
          res.end("404 page not found");
        }
}

const server = createServer(async (req, res) => {
  console.log(req.url);
  if (req.method === "GET") {
    if (req.url === "/") {
        return serveFile(res, path.join("public", "index.html"), "text/html");
    } else if (req.url.method === "GET") {
      if (req.url === "/style.css") {
        return serveFile(res, path.join("public", "style.css"), "text/css");
      }
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
