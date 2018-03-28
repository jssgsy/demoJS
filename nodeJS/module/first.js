"use strict";

// 要输出的函数
function hello() {
    console.log('hello, module');
}

// 要输出的普通变量
var i = 10;

// 要输出的数组
var arr = [1, 2, 3, 4];

// 要输出的对象
var obj = {
    name:"univ",
    age:28
};

// 一个模块想要对外暴露变量（函数也是变量），可以用module.exports = variable
// module.exports导出的实际上是一个对象，对象的属性就是要导出的函数、变量
module.exports = {
    _hello : hello,//注意这里只需要函数名，不用括号
    _i: i,
    _arr: arr,
    _obj:obj
};