const http = require('http')
const server = http.createServer()
server.on('request', (request, response) => {
    //只要有客户端请求服务器，就会触发request事件，从而调用这个事件处理函数

    // 解决中文乱码问题
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    if (request.url == '/index.html') {
        response.end('<h1>首页</h1>')
    } else if (request.url == '/about.html') {
        response.end('<h3>关于界面</h3>')
    }
    console.log('Someone visit our web server');
})
// 调用server.listen(端口号,cb回调)方法，即可启动web服务器
server.listen(80, () => {
    console.log('http server running at http://127.0.0.1:80');
})