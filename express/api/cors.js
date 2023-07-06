// CORES 跨域资源共享

/**
 * CORS(Cross-Origin Resource Sharing, 跨域资源共享)
 *
 * - 解决跨域，是通过HTTP响应头决定浏览器是否阻止前端JS代码跨域获取资源。
 * 浏览器的同源安全策略默认会阻止网页「跨域」获取资源。但如果接口服务器配置了CORS相关的HTTP响应头，就可接触浏览器跨域限制。
 * CORS 主要在服务器进行配置。客户端浏览器无需做任何额外配置。
 * CORS 在浏览器中有兼容性。只有支持 XMLHttpRequest Level2的浏览器，才能访问开启了CORS的服务端接口。(例：IE10+、Chrome4+、FireFox3.5+)
 *
 */

// CORS 常见响应头

// - Access-Control-Allow-Origin: 制定了允许访问资源的外域URL
res.setHeader("Access-Control-Allow-Origin", "http://baidu.com");
res.setHeader("Access-Control-Allow-Origin", "*");

// - Access-Control-Allow-Headers
// 默认情况下，CORS 仅支持客户端向服务器发送如下 9 个请求头：
// Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width、Content-type(值仅限于 text/plain、multipart/from-data、application/x-www-form-urlencoded 三者之一)。
// 如果客户端向服务器发送了额外的请求头信息，则需要在服务器端、通过Access-Control-Allow-Header 对额外的请求头进行声明，否则会请求失败
res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-custom-Header");

// - Access-Control-Allow-Methods
// 默认情况下，CORS 仅支持客户端发起 GET、POST、HEAD 请求。
// 如果客户端希望通过PUT、DELETE 等方式请求服务器的资源，则需要在服务器，通过Access-Control-Allow-Methods 来指明实际请求所允许的HTTP方法。
res.setHeader("Access-Control-Allow-Methods", "POST,GET,DELETE,HEAD");
res.setHeader("Access-Control-Allow-Methods", "*");

// CORS 请求分类
/**
 * - 简单请求
 * 1、请求方式：GET、POST、HEAD 三者之一
 * 2、HTTP 头部不超过 默认的 9 个请求头
 */

/**
 * - 预检请求
 * 1、请求方式为 GET、POST、HEAD 之外的请求 Method 类型
 * 2、请求头部包含自定义头部字段
 * 3、向服务器发送了 application/json 格式的数据
 *
 * 在浏览器与服务器正式通信之前，浏览器会先发送 OPTION 请求进行预检，以获知服务器是否允许该实际
 * 请求，所以这一次的 OPTION 请求，被称为「预检请求」。服务器成功响应预检请求后，才会发送真正的请求，并携带真实数据。
 */
