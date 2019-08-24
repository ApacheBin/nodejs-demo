/*
fs.createWriteStream(path[, options])
创建可写流
 */
const fs = require("fs");

var ws = fs.createWriteStream("file-system/hello5.txt");
/*
监听流的open和close事件
 */
ws.once("open",function () {
    console.log("流打开了")
});
ws.once("close",function () {
    console.log("流关闭了")
});
ws.write("可写流写入文件！！！\n");
ws.write("锄禾日当午！！！\n");
ws.write("汗滴禾下土！！！\n");
//ws.close();
ws.end();
