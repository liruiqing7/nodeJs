/**
 * 概念：
 * 1、不使用app.use() 定义的中间件，叫做 局部生效的中间件;
 * 2、多个中间件的等价写法, app.get('/',mw,_mw,()=>{})  <=>  app.get('/',[mw,_mw],()=>{});
 * 3、一定要在路由之前注册中间件 （错误级别中间件除外）
 * 4、中间件执行next()之后，不可以再写其他逻辑 （next之后的事件，会在执行栈中的事件执行完后进行异步处理）
 */

const express = require("express");

const app = express();

const mw = (req, res, next) => {
  req.obj = { name: "lee" };
  console.log("调用了局部生效的中间件。");
  next();
};

const _mw = (req, res, next) => {
  console.log(req.obj, "第二个中间件获取第一个中间件的值"); // 多次调用时，其中一个中间件赋值后，那么其他中间件中也可获取该值
  next();
};

app.get("/", mw, (req, res) => {
  console.log("first get", req.obj); // first get {name: 'lee'}
});

app.get("/user", (req, res) => {
  console.log("second get", req.obj); // second get undefined
});

// app.get("/test", mw, _mw, (req, res) => {
//   console.log("调用多个中间件", req.obj);
// });

app.get("/test", [mw, _mw], (req, res) => {
  console.log("调用多个中间件", req.obj);
});

app.listen(4000, () => {
  console.log("server is running at http:localhost:4000");
});
