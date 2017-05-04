/**
 * Created by xiaoyunhuan on 2017/5/4.
 */
console.log([...['a', , 'b']]);
function f(x, y) {
    return { x, y };
}
var obj = {
    class() { }
};
var obj1 = {
    *m() {
        yield 'hello world';
    }
};
obj['a' + 'bc'] = 123;
let propKey = 'foo';
let obj2 = {
    [propKey]: true,
    ['a' + 'bc']: 123
};
let obj4 = {
    ['h' + 'ello']() {
        return 'hi';
    }
};
function Obj(value) {
    this.value = value;
    this.next = null;
}
Obj.prototype[Symbol.iterator] = function () {
    var iterator = {
        next: next
    };
    var current = this;
    function next() {
        if (current) {
            var value = current.value;
            current = current.next;
            return {
                done: false,
                value: value
            };
        }
        else {
            return {
                done: true
            };
        }
    }
    return iterator;
};
var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);
one.next = two;
two.next = three;
for (var i of one) {
    console.log(i);
}
let iterable = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable) {
    console.log(item); // 'a', 'b', 'c'
}
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...myIterable]);
