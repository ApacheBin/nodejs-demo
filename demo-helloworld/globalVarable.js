/*
全局变量global,和网页中的windows类似

最顶端function (exports, require, module, __filename, __dirname){
最低端}

五个实参：
exports：将变量和函数暴露到外部
require：引入外部模块的函数
module：当前模块本身，exports就是module的属性，module.exports==exports
__filename:F:\nodejs-demo\demo-helloworld\globalVarable.js当前模块的完整路径
__dirname：F:\nodejs-demo\demo-helloworld当前模块所在文件夹的路径
 */
var a = 10;

//a=10;
console.log(global.a);
/*
arguments.callee:保存的是当前执行的函数对象
 */
//console.log(arguments.callee +"");
console.log(__filename);
console.log(__dirname);