const fs = require('fs')
const path = require('path')
fs.readFile(__dirname + '/input.txt', 'utf-8', function (err, result) {
    if (err) {
        console.log('失败', err);
    } else {
        console.log('成功', result);
        const str = result
        const arrOld = str.split(' ')
        const arrNew = []
        arrOld.forEach(item => {
            arrNew.push(item.replace('=', ':'))
        })
        const newStr = arrNew.join('\r\n')
        fs.writeFile(path.join(__dirname, '/output.txt'), newStr, function (err) {
            if (err) {
                console.log('失败', err);
            } else {
                console.log('成功');
            }
        })
    }
})
