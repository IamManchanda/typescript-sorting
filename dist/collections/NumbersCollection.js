"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (lhs, rhs) {
        return this.data[lhs] > this.data[rhs];
    };
    NumbersCollection.prototype.swap = function (lhs, rhs) {
        var _a;
        _a = [this.data[rhs], this.data[lhs]], this.data[lhs] = _a[0], this.data[rhs] = _a[1];
    };
    return NumbersCollection;
}());
exports.default = NumbersCollection;
