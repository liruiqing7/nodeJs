/**
 * 概念：
 * 1、当一个请求到达express 服务器后，可以连续调用多个中间件，对请求进行预处理
 * 2、express 的中间件，本质上就是一个function处理函数
 * 3、其中，next函数，是实现多个中间件连续调用的关键，他表示把流转关系转交给下一个中间件或路由。
 * 4、中间件必须调用在路由之前，否则中间件不会生效
 *
 * 注：中间件函数的形参中，必须包含 next参数。而路由处理函数中只包含req和res。
 */

const express = require("express");
const app = express();

// 多个中间件中，共享同一份 req 和 res。
// 基于这种特性，我们可以在上游的中间件中，统一为req、res对象添加自定义属性或者方法。供下游中间件使用。

const mw = function (req, res, next) {
  console.log("第一个中间件");

  req.obj = { name: "lee" }; // 为req 添加一个对象，供下一个中间件使用

  next(); // 把流转关系转交给下一个中间件或路由
};

const mw1 = function (req, res, next) {
  console.log("第二个中间件", req.obj); // 从上一个中间件中获取req上绑定的值。

  next(); // 把流转关系转交给下一个中间件或路由
};

app.use(mw, mw1); // 注册中间件

app.use((err, req, res, next) => {
  throw err;
  console.log("执行");
});

app.get("/", () => {
  console.log("首页");
});

app.post("/form", () => {
  console.log("表单页");
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
