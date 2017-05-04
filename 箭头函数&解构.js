/**
 * Created by xiaoyunhuan on 2017/5/3.
 */
<<<<<<< HEAD
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
=======
const full = ({ first, last }) => first + ' ' + last;
const isEven = n => n % 2 == 0;
const square = n => n * n;
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
>>>>>>> dab1bc6262eaaafa41871ee785401efb77663794
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
<<<<<<< HEAD
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
fix = λf.(λx.f(λv.x(x)(v)))(λx.f(λv.x(x)(v)));
// ES6的写法
var fix = function (f) { return (function (x) { return f(function (v) { return x(x)(v); }); })(function (x) { return f(function (v) { return x(x)(v); }); }); };
=======
let result = insert(2).into([1, 3]).after(1); //[1, 2, 3]
console.log(result);
const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val);
const plus1 = a => a + 1;
const mult2 = a => a * 2;
const addThenMult = pipeline(plus1, mult2);
addThenMult(5);
// λ演算的写法
// fix = λf.(λx.f(λv.x(x)(v)))(λx.f(λv.x(x)(v)));
// ES6的写法
var fix = f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v)));
>>>>>>> dab1bc6262eaaafa41871ee785401efb77663794
