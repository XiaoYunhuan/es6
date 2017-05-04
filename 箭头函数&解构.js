/**
 * Created by xiaoyunhuan on 2017/5/3.
 */
const full = ({ first, last }) => first + ' ' + last;
const isEven = n => n % 2 == 0;
const square = n => n * n;
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
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
