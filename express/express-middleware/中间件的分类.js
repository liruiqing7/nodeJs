/**
 * 中间件的分类：
 * 1、应用级别的中间件
 * - 通过 app.use() | app.get() | app.post() ，绑定到app实例上的中间件，叫做应用级中间件
 *
 * 2、路由级别的中间件
 * - 绑定到 express.Router() 实例上的中间件，叫做路由级别中间件。用法和应用级中间件没区别。
 *
 * 3、错误级别的中间件
 * - 用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题
 * - 错误中间件的处理函数必须有四个形参，顺序分别是 (err, req, res, next)
 * - 错误级别中间件必须注册在所有路由之后
 *
 * 4、Express 内置的中间件
 * - express.static 快速托管静态资源中间件，例如：HTML、图片、CSS样式等；（无兼容性）
 * - express.json   解析JSON格式的请求体数据（有兼容性，仅在4.16.0+ 版本之后可用） app.use(express.json());
 * - express.urlencoded 解析 URL-encoded 格式的请求体数据（仅在4.16.0+ 版本之后可用）  app.use(express.urlencoded({ extended: false }));
 *
 * 5、第三方中间件
 * - body-parser 在express@4.16.0之前，经常使用body-parser这个第三方中间件，来解析请求体数据。
 */

const express = require("express");
const parser = require("body-parser");

const router = express.Router();
const app = express();

// 配置解析 application/json 格式数据的内置中间件
app.use(express.json());

// 配置解析 application/x-www-form-urlencoded 格式数据的内置中间件
// app.use(express.urlencoded({ extended: false }));

// 注册表单解析数据中间件
app.use(parser.urlencoded({ extended: false }));

const mw = (req, res, next) => {
  console.log("这是个局部中间件");
  next();
};

// 路由级中间件
const useRouter = router.get("/user", (_, res, next) => {
  const date = new Date();
  console.log(date.toLocaleTimeString());
  res.send("Router middleware.");
  // throw new Error("服务挂了");
  next();
});

// 应用级别中间件 （全局中间件）
app.use((_, __, next) => {
  const date = new Date();
  console.log(date.toLocaleTimeString(), "全局中间件。");
  next();
});

// 应用级中间件（局部中间件）
app.get("/", mw, (req, res, next) => {
  res.send("Home page.");
  next();
});

// 在 app 上注册路由中间件
app.use(useRouter);

app.post("/add", (req, res) => {
  // 使用req.body，接收客户端发送过来的请求体数据
  // 默认情况下，如果不配置表单解析数据的中间件，则req.body 默认等于 undefined
  console.log(req.body);
  res.send(req.body);
});

app.post("/add-book", (req, res) => {
  // 使用req.body，接收 url-encoded 格式的数据
  console.log(req.body);
  res.send(req.body);
});

app.post("/add-user", (req, res) => {
  res.send(req.body);
});

// 错误级别的中间件
app.use((err, req, res, next) => {
  console.log("发生错误", err.message);
  res.send("Error : " + err.message);
});

app.listen(4000, () => {
  console.log("server is running http:localhost:4000");
});
