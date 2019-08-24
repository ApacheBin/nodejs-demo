/*
通过Node操作系统中的文件
Node 通过 fs 模块来和文件系统进行交互 模块来和文件系统进行交互
该模块提供了一些标准文件访问 该模块提供了一些标准文件访问API读取、写入文件，以及与其交互。
要使用 fs 模块，首先需要对其进行加载，直接引用不需要下载模块
 */

const fs = require("fs");

/*
同步和异调用 同步和异调用
•fs 模块中所有的操作都两种形式可供选择同步和异步 。
•同步文件系统会阻塞程序的执行，也就是除非操作完毕，否则不会向下执行代码。
•异步文件系统不会阻塞程序的执行，而是在操作完成时，通过回调函数将结果返。
 */
/*
同步方法带sync
异步方法没有sync，都需要回调函数
		- 写入文件
			1.同步写入
			2.异步写入
			3.简单写入
			4.流式写入

		- 读取文件
			1.同步读取
			2.异步读取
			3.简单读取
			4.流式读取
		- 方法
			- 打开文件
				fs.open(path, flags[, mode], callback)
				fs.openSync(path, flags[, mode])   返回表示文件描述符的整数。
			- 读写文件
				fs.write(fd, string[, position[, encoding]], callback)
				fs.writeSync(fd, string[, position[, encoding]])

				fs.read(fd, buffer, offset, length, position, callback)
				fs.readSync(fd, buffer, offset, length, position)
			- 关闭文件
				fs.close(fd,callback)
				fs.closeSync(fd);
			- 简单文件读取和写入
				fs.writeFile(file, data[, options], callback)
				fs.writeFileSync(file, data[, options])

				fs.readFile(path[, options], callback)
				fs.readFileSync(path[, options])

			- 流式文件读取和写入
				- 流式读取和写入适用于一些比较大的文件
					fs.createWriteStream(path[, options])
					fs.createReadStream(path[, options])
 */

//同步
const fd = fs.openSync("file-system/hello.txt", "w");
fs.writeFileSync(fd, "hello~~~中国");
fs.closeSync(fd);

console.log(process.cwd());
// fs.readSync(fd);

//异步文件写入
//异步方法没有返回值
fs.open("file-system/hello2.txt", "w", function (err, fd) {
    //异步调用的方法，结果通过回调函数的参数来返回
    //两个参数
    //console.log(arguments);
    //err 错误对象，如果没有错误即为null
    //回调函数的代码后执行
    if (!err) {
        //如果没有出错，则执行写入操作
        fs.write(fd, "异步写入的内容", function (err) {
            if (!err) {
                console.log("写入成功！！！");
                //关闭文件
                fs.close(fd,function (err) {
                    if(!err){
                        console.log("保存成功！！！");
                    }else {
                        console.log("保存失败~~~");
                    }
                });
            } else {
                console.log("写入失败~~~");
            }

        });
        console.log(fd);
    } else {
        console.log(err);
    }
});
