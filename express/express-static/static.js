// express.static 可以创建一个静态资源服务器
// Express 在指定的静态目录中查找文件，并对外提供资源的访问路径。因此，存放静态文件的目录名不会出现在url中。

const express = require("express");

const app = express();

/**
 * 访问静态资源时，会根据托管顺序查找文件
 * 可为静态资源访问路径添加前缀
 * 例如以下：
 * 可直接访问 public, file目录下的静态资源
 * 通过第一个参数，传入前缀，通过带有 「/file 」、「/public」的地址访问目录下的文件
 */
app.use("/file", express.static("file"));
app.use("/public", express.static("public"));

// 访问目标路由即可获取该目录名
// 例如：http:127.0.0.1:4000/user/1/2  // {"id":"1", "name":"2"}
// 如果没有按照目标地址格式访问路径，则页面报错
app.get("/user/:id/:name", (req, res) => {
  res.send(req.params);
});

app.listen(4000, () => {
  console.log("express server is running http://127.0.0.1:4000");
});
