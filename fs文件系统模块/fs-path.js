// 路径动态拼接 __dirname >> node 提供的全局属性
// 在使用fs模块操作文件时，如果是以 ./ 或者  ../ 这样的相对路径时，容易出现路径动态拼接错误等问题。
// 原因：代码在运行的时候，会以执行node命令时所处的目录，动态拼接出被操作文件的完整目录。
// 解决方案：在使用fs模块操作文件时，直接提供完整的绝对路径。 __dirname 即可以获得文件所处的绝对路径
// 使用path模块中的join方法，拼接路径，会自动校验纠正一部分错误路径。 如：路径中包含 ./

const fs = require("fs");
const path = require("path");

let reallyPath = __dirname + "/file/成绩.txt";
let _reallyPath = path.join(__dirname, "./file/成绩.txt");
let errorPath = __dirname + "./file/成绩.txt";

fs.readFile(reallyPath, "utf-8", function (err, dataStr) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(dataStr, "验证通过，路径存在切返回值");
});

// 获取路径中的文件名 path.basename()
// path.basename(path[,ext]) path:文件路径 ext:文件扩展名

console.log(path.basename("./file/成绩.txt")); // 成绩.txt
console.log(path.basename("./file/成绩.txt", ".txt")); // 成绩

// 获取文件扩展名 path.extname()
// path.extname(path)

console.log(path.extname("./file/成绩.txt")); // .txt

// 获取文件所在目录路径  -  相对
// path.dirname(path)

console.log(path.dirname(reallyPath)); // __dirname + '/file'
console.log(path.dirname("./file/成绩.txt")); // ./file'
