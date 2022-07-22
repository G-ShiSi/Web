const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()
server.on('request', (req, rep) => {
    const url = req.url
    console.log('path.extname(url)', path.extname(url));
    if (path.extname(url) == '.html') rep.setHeader('Content-Type', 'text/html;charset=utf-8')
    const rpath = path.join(__dirname, url)
    fs.readFile(rpath, (err, dataStr) => {
        if (err) { console.log(err); return rep.end('404') }
        rep.end(dataStr)
    })
})
server.listen(80, () => {
    console.log('监听了80端口');
})