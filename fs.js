'use strict';
// 调用fs 模块，读取文件
var fs = require('fs');
fs.readFile('hello.js',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data.toString('utf-8'))
    }
});

var str = 'hello js for file';
fs.writeFile('readme.txt',str,function(err){
    console.log(err)
})