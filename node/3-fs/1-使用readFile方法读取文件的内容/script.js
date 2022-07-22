// 导入fs模块,来操作文件
const fs = require('fs')
// 调用fs.readFile方法读取文件
// 参数1：读取文件的存放路径
// 参数2：读取文件时采用的编码格式
// 参数3：回调函数，拿到读取失败和成功的结果
fs.readFile('./1-使用readFile方法读取文件的内容/test.txt', 'utf8', function (err, result) {
    if (err) {
        console.log('文件读取失败');
    }
    else {
        console.log('读取成功，值为', result);
    }
})