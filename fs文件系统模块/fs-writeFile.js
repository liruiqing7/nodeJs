const fs = require("fs");

// fs.writeFile(path,data[,option],callback)
// 参数1：字符串，表示存放文件路径，没有则会创建一个文件
// 参数2：必选，表示写入的内容
// 参数3：必选，文件写入后的回调

// fs.writeFile(
//   "./file/testWriteFileFun.js",
//   "const value = true",
//   { flag: "w+" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("写入成功");
//     }
//   }
// );

// readFile 和 createReadStream 的区别 ：
// readFile 异步读取文件全部内容，并存储在内存中，然后再传递给用户
// 说法一：
// createReadStream 使用可读流，逐块读取文件，而不是全部储存在内存中 -- 待验证
// createReadStream 使用更少的内存和更快的速度来优化文件读取操作。如果文件较大，用户不必等待较长时间 -- 待验证
// 说法二：
// 可使用on 、 open 、close 监听流事件，从而做出操作

// 创建一个可读流
const rs = fs.createReadStream("./file/english.mp3");
// 创建一个可写流
const ws = fs.createWriteStream("./file/newEnglish.mp3");

// 监听流的开启和关闭，
rs.once("open", function () {
  console.log("可读流打开了");
});

rs.once("close", function () {
  console.log("可读流关闭了");
  // 数据读取完毕，关闭可写流
  ws.end();
});

ws.once("open", function () {
  console.log("可写流打开了");
});

ws.once("close", function () {
  console.log("可写流关闭了");
});

// 要读取一个可读流中的数据，要为可读流绑定一个data事件，data事件绑定完毕自动开始读取数据
rs.on("data", function (data) {
  console.log(data);
  // 将读取到的数据写入到可写流中
  ws.write(data);
});
