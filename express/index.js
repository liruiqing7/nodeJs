const express = require("express");

const app = express();

// 监听客户端的 GET 和 POST 请求，并根据客户端相应具体内容
app.get("/user", (req, res) => {
  res.send({
    name: "zs",
    age: 20,
    gender: "男",
  });
});

app.post("/user", (req, res) => {
  res.send("请求成功");
});

app.get("/user/:id", (req, res) => {
  // req.params 默认是一个空对象
  // 里面存放着通过：动态匹配到的参数值
  console.log(req.params); // {id:'1'}
  res.send(req.params);
});

// 可以多次匹配
app.get("/user/:id/:username", (req, res) => {
  console.log(req.params); // {id:'1', username:'2'}
  res.send(req.params);
});

app.listen(4000, () => {
  console.log("express server is running http://127.0.0.1:4000");
});

// curl -X POST http://127.0.0.1:4000
