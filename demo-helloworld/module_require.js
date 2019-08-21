/*
引入其他模块！！！
模块标识，用于找到相对应的模块

核心模块：node引擎提供的模块，标识就是模块的名字

文件模块：用户自己创建的模块,标识是文件的路径（绝对路径、相对路径（。 。。 开头））
 */


var md = require("./module");
console.log(md.x);
console.log(md.y);
md.fn();
console.log(md);


var math = require("./math");

console.log("结果是: " + math.add(1, 2));
console.log("结果是: " + math.mul(1, 2));

var fs = require("fs");
console.log(fs);

