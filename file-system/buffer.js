/*
buffer 缓冲区，和数组的结构很像
数组中不能存储二进制文件
buffer用来存储二进制文件

不用引用模块

每一个元素的范围是
00-ff
0-255
00000000-11111111
一位 bit
8bit=1byte(字节)
buffer中的一个元素占用一个字节

一个汉字占用3个字节
 */
var str = "hello ZTE!!!";
var strChinese = "你好，中兴！！！";
//将一个字符串保存到buffer中
var buffer = Buffer.from(str);
console.log(buffer);
console.log(str.length);
console.log(buffer.length);

var bufferChinses = Buffer.from(strChinese);
console.log(bufferChinses);
console.log(strChinese.length);//字符串长度
console.log(bufferChinses.length);//占用内存的大小

//创建指定大小的buffer
// var buf = new Buffer(10);//构建函数不推荐使用
// console.log(buf.length);

var buf2 = Buffer.alloc(10);
buf2[0] = 88;
buf2[1] = 255;//转化为16进制
buf2[2] = 0xaa;
buf2[10] = 12;//buffer的大小一旦确定不能修改，buffer是对底层内存的直接操作

buf2[3] = 556;
//2c=     00101100
//556=‭001000101100‬,,,,只取后八位


console.log(buf2.length);
console.log(buf2);

console.log(buf2[2]);//控制台输出十进制
console.log(buf2[2].toString(16));

for (var i = 0; i<buf2.length; i++) {
    console.log(buf2[i]);
}

//Buffer.allocUnsafe(),buffer可能存在敏感数据
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

var buf4 = Buffer.from("我是一个文本文件数据");

console.log(buf4.toString());//转换为字符串