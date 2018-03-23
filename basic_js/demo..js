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


// this-------------begin
/*
1. 在一个方法内部，this是一个特殊变量，它始终指向当前对象;
2. 要保证this指向正确，必须用obj.xxx()的形式调用!!!
 */
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        function getAgeFromBirth() { // 方法中的方法,此时this指向当前对象,而当前对象为window(在strict模式下为undefined)
            var y = new Date().getFullYear();
            return y - this.birth;
        }
        return getAgeFromBirth();
    },
    age2: function () {
        this.birth;// ok, 此时this正确的指向xiaoming
    }
};
console.log(xiaoming.age()); // 报错

var xiaoming2 = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};
console.log(xiaoming2.age()); //ok
var fn = xiaoming2.age;
console.log(fn()); //报错,此时this指向window(在strict模式下指向undefined)

// this-------------begin

// var和let的区别----------begin
if (true) {
    // var 定义的变量不是块作用域,又因为变量声明提升,所以其实在外部也可以访问到i,且值为23
    var i = 23;
}

if (true) {
    // let定义的变量是块作用域,不能变量声明提升,外部没法访问
    let j = 24;
}

console.log(i); // 23
//console.log(j); // Uncaught ReferenceError: j is not defined
// var和let的区别----------end

// map,reduce,filter----------begin
var arr = [1,2,3,4,5,6];
// map:将给定的回调函数作用于数组的每个元素,并返回作用后的数组,并不会改变原数组的内容!
var result = arr.map(function (value) {
    return value*2;
});
// 并不会改变原数组的内容!
console.log(arr);
console.log(result);

// reduce常用作累积操作,返回一个计算结果
/*
arr = [x1, x2, x3, x4],则arr.reduce(callback)相当于是callback(callback(callback(x1,x2), x3), x4)
 */
var arr = [1,2,3,4];
var result = arr.reduce(function (x, y) {
    return x + y;
});
console.log(result);//1+2+3+4 = 10

//filter:过滤掉不符合条件的元素
var arr = [1,2,3,4];
var result = arr.filter(function (value) {
    return value % 2 == 0;// return true则表示此元素符合条件,并返回
});
console.log(result);//[2,4]
// map,reduce,filter----------end


// getter/setter----------begin
var obj1 = {
    // 这是普通的数据属性
    name: "univ",
    // 这是访问属性(accessor property),定义一个与属性同名的方法即可
    get birthday() {
        console.log('birthday()被调用了');
        return this.name
    },//这里以逗号分隔
    // setter的返回值不重要
    set birthday(newValue) {
        console.log('birthday(newValue)被调用了');
        this.name = newValue
    }
};
// 此时会调用birthday()来取值;
console.log(obj1.birthday);
// 此时会调用birthday()来设值;
obj1.birthday = 'new birthday';
console.log(obj1.birthday);

/*
补充:
如果只有get则此属性是只读属性,不能赋值;
如果只有set则此属性是只写属性,不能读取;(可分别注释上面的get与set查看)
 */
// getter/setter----------end