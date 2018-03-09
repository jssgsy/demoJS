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