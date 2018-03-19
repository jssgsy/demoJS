// 声明对象方法的两种形式
var obj = {
    name:"univ",
    // fn是obj的方法
    fn:function () {
        console.log('fn');
    },
    // fn1也是obj的方法，fn与fn1是两种声明方法
    fn1(){
        console.log('fn1');
    }
};
obj.fn();
obj.fn1();

// 箭头函数------------------begin
// 1. 箭头函数其实就是一个匿名函数，是简写，知道这点就能比较好掌握箭头函数的
var fn2 = () => {
    console.log('没有参数的箭头函数');
};

/*
相当于
var fn21 = function (x) {
    // 如果只有一条语句，则相当于是直接返回
    return x*2;
};
 */
var fn21 = x => x*x;

var fn3 = x => {
    console.log('一个参数的箭头函数，此时可省略参数的括号，参数为:' + x);
};

var fn4 = (x1, x2) => {
    console.log('多个参数的箭头函数，参数分别,x1: ' + x1 + ' x2: ' + x2);
};
fn2();
fn3('fn3');
fn4('fn41', 'fn42');

// 2. 箭头函数的另一重要特性：this是词法作用域，即总是指向调用此方法的对象

// 闭包-------------begin
// 闭包：就是能访问在外部作用域变量的函数，闭包就是携带状态的函数，并且它的状态可以完全对外隐藏起来。
function outer() {
    var i = 10; // 这是在outer函数作用域中定义的变量
    return function () {
        // 这里的匿名函数可以访问到外部作用域(outer)的变量i，注意的是，当outer返回时，i仍然被内部函数引用在！
        // 所以说闭包是携带状态的函数
        i = i + 2;
        return i;

        // 补充：当然，如果outer有参数，则内部的函数也可以访问到
    }
}

// 此时fn仍然是一个函数
var fn = outer();
console.log(fn());  // 此时输出12
console.log(fn());  // 此时输出14，因为闭包能记住状态（i仍然被内部函数引用在）
console.log(fn());  // 此时输出16，因为闭包能记住状态（i仍然被内部函数引用在）

// 补充
// 1. 返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量.参见https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/00143449934543461c9d5dfeeb848f5b72bd012e1113d15000

// 闭包-------------end

