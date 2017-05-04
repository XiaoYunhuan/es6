/**
 * Created by xiaoyunhuan on 2017/5/3.
 */
var full = function (_a) {
    var first = _a.first, last = _a.last;
    return first + ' ' + last;
};
var isEven = function (n) { return n % 2 == 0; };
var square = function (n) { return n * n; };
function foo() {
    var _this = this;
    setTimeout(function () {
        console.log('id:', _this.id);
    }, 100);
}
function insert(value) {
    return { into: function (array) {
            return { after: function (afterValue) {
                    array.splice(array.indexOf(afterValue) + 1, 0, value);
                    return array;
                } };
        } };
}
var result = insert(2).into([1, 3]).after(1); //[1, 2, 3]
console.log(result);
var pipeline = function () {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return function (val) { return funcs.reduce(function (a, b) { return b(a); }, val); };
};
var plus1 = function (a) { return a + 1; };
var mult2 = function (a) { return a * 2; };
var addThenMult = pipeline(plus1, mult2);
addThenMult(5);
// λ演算的写法
// ES6的写法
var fix = function (f) { return (function (x) { return f(function (v) { return x(x)(v); }); })(function (x) { return f(function (v) { return x(x)(v); }); }); };
//# sourceMappingURL=箭头函数&解构.js.map