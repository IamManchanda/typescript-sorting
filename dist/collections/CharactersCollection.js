"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (lhs, rhs) {
        return this.data[lhs].toLowerCase() > this.data[rhs].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (lhs, rhs) {
        var _a;
        var characters = this.data.split("");
        _a = [characters[rhs], characters[lhs]], characters[lhs] = _a[0], characters[rhs] = _a[1];
        this.data = characters.join("");
    };
    return CharactersCollection;
}());
exports.default = CharactersCollection;
