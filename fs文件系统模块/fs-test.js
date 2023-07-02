const fs = require("fs");

fs.readFile("./file/成绩.txt", "utf-8", function (err, dataStr) {
  if (err) {
    console.log(err, "读取失败");
  } else {
    let newObj = {};
    let newArr = dataStr.split(",");
    newArr.forEach((item) => {
      let splitIndex = item.indexOf("=");
      newObj[item.substring(0, splitIndex)] = item.substring(splitIndex + 1);
    });
    console.log(newObj, newArr);
    fs.writeFile("./file/newData.json", JSON.stringify(newObj), function (err) {
      if (!err) {
        console.log("写入成功");
      }
    });
  }
});
