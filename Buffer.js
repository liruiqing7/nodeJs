// Buffer 的结构与数组相似，操作方法也与数组相似
// 数组不能存储二进制文件，Buffer 是专门存储二进制数据的
// Buffer 存储的是二进制数据，显示以16进制的形式显示
// Buffer 每一个元素范围是00~ff，即 0~255 、00000000~11111111
// 每一个元素占用一个字节内存
// Buffer 是对底层内存的直接操作，因此大小一旦确定就不能更改

// Buffer 常用方法：

// Buffer.from(str[, encoding])  将一个字符转换为Buffer
// Buffer.toString()  将Buffer转换为字符
// Buffer.alloc(size)  创建一个指定大小的Buffer
// Buffer.allocUnsafe(size)  创建指定大小的Buffer，可能包含敏感数据（分配内存时不会清除内存残留的数据）

var str = "hello李瑞卿";

var buf = Buffer.from(str);

// 占用内存的大小，一个汉字3字节
console.log(buf.length); // 14

// 字符长度
console.log(str.length); // 8

// 8进制输出第一个元素
console.log(buf, buf[1], buf[1].toString(8)); // 145

// 创建一个10字节的Buffer
var _buf = Buffer.alloc(10);

// 通过索引来操作buf的元素
console.log(_buf, "赋值前");
_buf[0] = 88;
_buf[1] = 255;
_buf[2] = 0xaa;
_buf[3] = 255;
console.log(_buf, "赋值后");

var bufUnsafe = Buffer.allocUnsafe(9);
// 内容会被随机填充，可以使用fill方法来预填充，随机填充的目的是Buffer生成更快，优化效率，但生成后马上使用fill则不会优化效率
// bufUnsafe[0] = 88;
// bufUnsafe.fill('a')
console.log(bufUnsafe, "bufUnsafe");
