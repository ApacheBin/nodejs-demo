/*
同步异步
fs.read(fd, buffer, offset, length, position, callback)
fs.readSync(fd, buffer, offset, length, position)
-简单文件读取
fs.readFile(path[, options], callback)
fs.readFileSync(path[, options])
- 流式文件读取和写入
- 流式读取和写入适用于一些比较大的文件
fs.createReadStream(path[, options])
*/
const fs = require("fs");

fs.readFile("file-system/hello5.txt",function (err,data) {
    if(!err){
        console.log(data.toString());
    }
});

//流式读取
var rs = fs.createReadStream("file-system/hello5.txt");
var ws = fs.createWriteStream("file-system/hello6.txt");
/*
监听流的open和close事件
 */
rs.once("open",function () {
    console.log("可读流打开了");
});
rs.once("close",function () {
    console.log("可读流关闭了");
    ws.close();
});
ws.once("open",function () {
    console.log("可写流打开了");
});
ws.once("close",function () {
    console.log("可写流关闭了");
});
//读取可读中的数据，需要绑定一个data事件，绑定完毕，自动开始读取数据
rs.on("data",function (data) {
    console.log(data.toString());
    console.log(data.length);
    ws.write(data);
});