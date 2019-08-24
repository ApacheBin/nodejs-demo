/*
•	验证路径是否存在
–	fs.existsSync(path)
•	获取文件信息
–	fs.stat(path, callback)
–	fs.statSync(path)
•	删除文件
–	fs.unlink(path, callback)
–	fs.unlinkSync(path)
•	列出文件
–	fs.readdir(path[, options], callback)
–	fs.readdirSync(path[, options])
•	截断文件
–	fs.truncate(path, len, callback)
–	fs.truncateSync(path, len)
•	建立目录
–	fs.mkdir(path[, mode], callback)
–	fs.mkdirSync(path[, mode])
•	删除目录
–	fs.rmdir(path, callback)
–	fs.rmdirSync(path)
•	重命名文件和目录
–	fs.rename(oldPath, newPath, callback)
–	fs.renameSync(oldPath, newPath)
•	监视文件更改写入
–	fs.watchFile(filename[, options], listener)
2个参数：curr,prev（都是stats对象）
 */
const fs = require("fs");
const isExits = fs.existsSync("file-system/hello5.txt");
console.log(isExits);

fs.stat("file-system/hello5.txt",function (err,stat) {
    console.log(stat);
});

//fs.unlinkSync("file-system/hello7.txt");

fs.readdir(".",function (err,files) {
    if(!err) {
        console.log(files);
    }
});