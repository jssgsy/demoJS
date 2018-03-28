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
module.exports = hello;
