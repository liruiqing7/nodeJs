// fs 方法的其他操作

const fs = require("node:fs");
const path = require("node:path");

let reallyPath = path.join(__dirname, "./file/成绩.txt");
let errorPath = __dirname + "./file/成绩.txt";

// 验证路径是否存在
// exists(path,callback) 异步方法
// existsSync(path) 同步方法，如果文件正在被写入，可能会返回false

// fs.exists(errorPath, function (res) {
//   // 回调参数返回boolean值
//   if (res) {
//     console.log(res, "路径存在");
//   } else {
//     console.log(res, "路径不存在");
//   }
// });

// console.log(fs.existsSync(errorPath)); // false

// --------------------------------------------------

// 获取文件信息
// fs.stat(path, callback)
// fs.stat(path)

// fs.stat(reallyPath, function (err, stats) {
//   if (err) {
//     console.log(err, "路径不存在");
//     return;
//   } else {
//     console.log(stats); // 文件详情
//     console.log(stats.isDirectory()); // 是否为文件目录 返回 Boolean
//   }
// });

// console.log(fs.statSync(reallyPath)); // 直接返回结果，文件或目录存在即展示详情，不存在返回错误信息

// --------------------------------------------------

// 删除文件
// fs.unlink(path,callback(err))
// fs.unlinkSync(path)

// fs.unlink("./file/testWriteFileFun.js", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("file was deleted!");
// });

// fs.unlinkSync("./file/testWriteFileFun.js"); // 路径存在即直接删除，不存在返回错误值

// 列出文件：
// fs.readdir(path[,options], callback)
// fs.readdirSync(path[, options])

// 截断文件：
// fs.truncate(path, len, callback)
// fs.truncateSync(path, len)

// 建立目录：
// fs.mkdir(path[, mode], callback)
// fs.mkdirSync(path[, mode])

// 删除目录：
// fs.rmdir(path, callback)
// fs.rmdirSync(path)

// 重命名文件和目录：
// fs.rename(oldPath, newPath, callback)
// fs.renameSync(oldPath, newPath)

// 监视文件更改：
// fs.watchFile(reallyPath[, options], listener)  可以通过 fs.unwatch() 移除监听

// (function () {
//   const ws = fs.createWriteStream(
//     path.join(__dirname, "./file/testWatchFile.txt"),
//     "utf-8"
//   );

//   fs.watchFile(ws.path, { interval: 10 }, (cur, pre) => {
//     console.log("The file was modified.");
//     console.log("Previous Modification Time.", pre);
//     console.log("Current Modification Time.", cur);
//   });

//   setTimeout(() => {
//     fs.unwatchFile(ws.path);
//   }, 10 * 1000);
// })();
