"use strict";

// 一个模块要引用其他模块暴露的变量，用var ref = require('module_name');就拿到了引用模块的变量
// 此时first实际上是一个对象,属性即是导出的变量、函数等
var first = require('./first');
// first();

// 导出的hello方法
first._hello();
console.log(first._i);
console.log(first._arr);
console.log(first._obj);
