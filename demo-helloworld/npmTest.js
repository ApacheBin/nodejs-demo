/*
所有下载的包都存放在node_modules文件夹中

node在使用模块名字来引入模块时，会在当前node_modules文件夹中寻找，如果没有去上一级node_modules中寻找，直到找到为止
如果没有则报错
 */
var math = require("math");

console.log(math.add(123,456));