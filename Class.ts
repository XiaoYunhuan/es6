/**
 * Created by xiaoyunhuan on 2017/5/5.
 */
class Math1 {
    @log
    add(a, b) {
        return a + b;
    }
}

function log(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`Calling "${name}" with`, arguments);
        return oldValue.apply(null, arguments);
    };

    return descriptor;
}

const math = new Math1();

// passed parameters should get logged now
math.add(2, 4);

//Minxin
let MyMixin = (superclass) => class extends superclass {
    foo() {
        console.log('foo from MyMixin');
    }
};