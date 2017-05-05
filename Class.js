var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by xiaoyunhuan on 2017/5/5.
 */
var Math1 = (function () {
    function Math1() {
    }
    Math1.prototype.add = function (a, b) {
        return a + b;
    };
    return Math1;
}());
__decorate([
    log
], Math1.prototype, "add", null);
function log(target, name, descriptor) {
    var oldValue = descriptor.value;
    descriptor.value = function () {
        console.log("Calling \"" + name + "\" with", arguments);
        return oldValue.apply(null, arguments);
    };
    return descriptor;
}
var math = new Math1();
// passed parameters should get logged now
math.add(2, 4);
//Minxin
var MyMixin = function (superclass) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }

        class_1.prototype.foo = function () {
            console.log('foo from MyMixin');
        };
        return class_1;
    }(superclass));
};
