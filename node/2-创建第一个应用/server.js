// 步骤一：引入required模块
var http = require('http')
// 创建服务器
// 使用http.createServer()方法创建服务器
http.createServer(function (request, response) {
    // 发送HTTP头部
    // HTTP状态值：200：OK
    // 内容类型：text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    //发送响应数据'Hello World'
    response.end('Hello World\n')
}).listen(8888)
console.log('Server running at http://127.0.0.1:8888/');