/**
 * Created by xiaoyunhuan on 2017/5/4.
 */
console.log(['a', , 'b']);
function f(x, y) {
    return { x: x, y: y };
}
var obj = {
    class: function () { }
};
var obj1 = {
    m: function* () {
        yield 'hello world';
    }
};
obj['a' + 'bc'] = 123;
var propKey = 'foo';
var obj2 = (_a = {},
    _a[propKey] = true,
    _a['a' + 'bc'] = 123,
    _a);
var obj4 = (_b = {},
    _b['h' + 'ello'] = function () {
        return 'hi';
    },
    _b);
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
for (var _i = 0, one_1 = one; _i < one_1.length; _i++) {
    var i = one_1[_i];
    console.log(i);
}
var iterable = (_c = {
        0: 'a',
        1: 'b',
        2: 'c',
        length: 3
    },
    _c[Symbol.iterator] = Array.prototype[Symbol.iterator],
    _c);
for (var _d = 0, iterable_1 = iterable; _d < iterable_1.length; _d++) {
    var item = iterable_1[_d];
    console.log(item); // 'a', 'b', 'c'
}
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log(myIterable.slice());
var _a, _b, _c;
