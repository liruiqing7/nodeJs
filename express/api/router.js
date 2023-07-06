const express = require("express");
const router = express.Router();

const app = express();

router.use(express.urlencoded({ extends: false }));

// 在这里挂载对应的路由
router.get("/get", (req, res) => {
  // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
  const query = req.query;

  // 调用 res.send() 向客户端响应处理结果
  res.send({
    status: 0, // 响应码
    msg: "get 请求成功", // 状态描述
    data: query, // 响应给客户端的数据
  });
});

router.post("/post", (req, res) => {
  const body = req.body;
  console.log(body);

  res.send({
    status: 0,
    msg: "post 请求成功",
    data: body,
  });
});

router.delete("/delete", (req, res) => {
  res.send({
    status: 0,
    msg: "delete 请求成功",
  });
});

module.exports = router;
