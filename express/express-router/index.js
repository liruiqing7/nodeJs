const express = require("express");
// 导入路由模块
const userRouter = require("./router");

const app = express();

// 注册路由模块
app.use("/api", userRouter); // app.use() 函数的作用，就是来注册全局中间件的

app.listen(4000, () => {
  console.log("http://127.0.0.1:4000");
});
