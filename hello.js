'use strict';

var s = 'Node.js';
function greet(name){
    console.log(s+","+name+"!");
}
function hi(name){
    console.log('HI,'+name+'!');
}
function goodbye(name){
    console.log("Goodbye,"+name+"!");
}
//node.js 对外暴漏模块,尽量使用module.exports 封装模块
module.exports={
    greet:greet,
    hi:hi,
    goodbye:goodbye
};