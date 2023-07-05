// express.static 可以创建一个静态资源服务器
// Express 在指定的静态目录中查找文件，并对外提供资源的访问路径。因此，存放静态文件的目录名不会出现在url中。

const express = require("express");

const app = express();

app.use("/file", express.static("file"));
app.use("/public", express.static("public"));

app.get("/user/:id/:name", (req, res) => {
  res.send(req.params);
});

app.listen(4000, () => {
  console.log("express server is running http://127.0.0.1:4000");
});
