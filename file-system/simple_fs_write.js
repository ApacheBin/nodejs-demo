/*
同步和异步
简单文件读取和写入
				fs.writeFile(file, data[, options], callback)
				fs.writeFileSync(file, data[, options]))
 */

//异步
const fs = require("fs");
fs.writeFile("file-system/hello3.txt","这是简单文件异步写入！！！",{flag:"r+"}, function (err) {
    if(!err){
        console.log("写入成功！！！");
    }
});
//同步
fs.writeFileSync("file-system/hello4.txt","这是简单文件同步写入！！！");