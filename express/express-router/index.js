// 在Express中，路由指的是客户端的请求与服务端处理函数之间的映射关系
// Express的路由 分3部分组成，分别是 请求的类型（Method）、请求的url地址、处理函数: app.get('url',()=>{})
// 为了方便对路由进行模块化管理，Express 不建议将路由直接挂载到 app上，而是使用express.Router()抽离为单独的模块

const express = require("express");
const app = express();

// 导入路由模块
const userRouter = require("./router");

// 注册路由模块
app.use("/api", userRouter); // app.use() 函数的作用，就是来注册全局中间件的

app.listen(4000, () => {
  console.log("http://127.0.0.1:4000");
});
