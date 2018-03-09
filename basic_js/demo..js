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