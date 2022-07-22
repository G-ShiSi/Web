// 导入fs模块,来操作文件
const fs = require('fs')
// 参数1:必选参数,需要指定一个文件路径的字符串，表示文件的存放路径。
// 参数2:必选参数,表示要写入的内容。
// 参数3:可选参数,表示以什么格式写入文件内容，默认值是utf8。
// 参数4:必选参数,文件写入完成后的回调函数。
fs.writeFile('./2-使用writeFile方法修改文件的内容/test.txt', '自信人生二百年', 'utf8', function (err) {
    console.log(err);
})