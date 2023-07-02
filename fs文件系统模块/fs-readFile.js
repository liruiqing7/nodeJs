const fs = require("fs");

// fs模块中所有的操作都有两种形式可选择：同步、异步
// 同步文件系统会阻塞程序的执行，除非操作完毕，否则代码不会向下执行
// 异步文件系统不会阻塞程序的执行，而是在操作完成时，通过回调函数返回结果

// options配置项中的flag、即文件打开模式：
// r  : 读取文件、文件不存在抛出异常
// r+ : 读写文件、文件不存在抛出异常
// rs : 同步模式下打开文件用于读取
// rs+: 同步模式下打开文件用于读写
// w  : 写文件，不存在则创建，存在则覆盖原有内容
// wx : 写文件，文件存在打开失败
// wx+: 读写，存在打开失败
// a  : 追加，不存在创建
// ax : 追加，存在失败
// a+ : 追加和读取，不存在创建
// ax+: 追加和读取，存在失败

// fs.readFile(path[,options],callback)
// 参数1：必选，字符串，表示读取文件路径
// 参数2：可选，表示以什么编码格式来读取文件  未指定编码格式，则返回一个Buffer
// 参数3：必选，文件读取后的回调

fs.readFile("./file/test.txt", "utf8", function (err, dataStr) {
  // 文件读取成功时，err的值为null
  // 如果读取失败，则err的值为错误对象，data的值为undefined
  console.log(err, dataStr);

  if (err) {
    console.log("文件读取失败", err);
  } else {
    console.log("文件读取成功", dataStr);
  }
});

fs.readFile("./file/test2.js", function (err, data) {
  if (!err) {
    console.log(data);
    // 将data写入到文件中
    fs.writeFile("./test.txt", data, function (err) {
      if (!err) {
        console.log("文件写入成功");
      }
    });
  }
});
