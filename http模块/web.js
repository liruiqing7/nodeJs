const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer();

server.on("request", (req, res) => {
  const url = req.url;

  // 把请求的URL 地址映射为具体文件的存放路径
  const fPath = path.join(__dirname, req.url);

  fs.readFile(fPath, "utf-8", (err, dataStr) => {
    if (err) {
      res.end("<h1>404 Not found.</h1>");
    }
    res.end(dataStr);
  });
});

server.listen(4000, () => {
  console.log("server is running http://127.0.0.1:4000");
});
