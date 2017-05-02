/**
 * Created by DELL on 2017/5/2.
 */
//在块级作用域重声明函数，根据 ES5 的规定都是非法的。但是浏览器不报错。
// if(true){
//     function f(){}
// }
// try{
//     function f(){}
// }catch(e){
//
// }

//1.可以在块级作用域声明函数
//2.类似var 声明提前到函数/顶级作用域下
//3.声明提前到块作用域顶层
// function f() { console.log('I am outside!'); }
//
// (function () {
//     if (false) {
//         // 重复声明一次函数f
//         function f() { console.log('I am inside!'); }
//     }
//     f();
// }());

// 方法一
(typeof window !== 'undefined'
    ? window
    : (typeof process === 'object' &&
    typeof require === 'function' &&
    typeof global === 'object')
        ? global
        : this);

// 方法二
var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
};

