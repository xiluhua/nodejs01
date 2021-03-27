/*
	1.同步文件读取
	2.异步文件读取
	3.简单文件读取
	 fs.readFile(path[, options], callback)
	 fs.readFileSync(path[, options])
	 	- path 要读取的文件的路径
	 	- options 读取的选项
	 	- callback回调函数，通过回调函数将读取到内容返回(err , data)
	 		err 错误对象
	 		data 读取到的数据，会返回一个Buffer

	4.流式文件读取
 */
var fs = require("fs");

var path = "C:\\Users\\Administrator.DESKTOP-S92EN3R\\Desktop\\test_mybatis.sql";

const readline = require('readline');
const readInterface = readline.createInterface({
	input: fs.createReadStream(path),
	//output: process.stdout,
	console: false
});

readInterface.on('line', function(line) {
	const splitItem = ' AS ';
	if (line.startsWith("#")){
		return
	}
	if (line.indexOf(splitItem) > -1){
		var arr = line.split(' AS ')

		var flag = line.indexOf(',') > -1
		if (flag){
			console.log(arr[0]+',');
			return
		}else {
			console.log(arr[0]);
		}
	}else {
		console.log(line)
	}

});
