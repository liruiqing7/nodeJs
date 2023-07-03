const http = require("http");

const server = http.createServer();

/**
 * req 是请求对象，它包含了与客户端相关的数据和属性：
 * req.url 是客户端请求的 URL 地址
 * req.method 是客户端 method 的请求类型
 */
server.on("request", function (req, res) {
  const url = req.url;
  const method = req.method;
  const str = `
    You request url is ${url}, and request method is ${method}。 <br/>
    请求地址为 「${url}」,请求类型为「${method}」。
  `;

  console.log(str);

  // 通过 setHeader 设置 编码格式 防止中文乱码
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  // 调用 res.end 方法，向客户端相应一些内容
  res.end(str);
});

server.listen(4000, () => {
  console.log("server running at http://127.0.0.1:4000");
});
