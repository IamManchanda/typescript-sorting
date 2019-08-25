"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = __importDefault(require("./shared/Sorter"));
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return undefined;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    LinkedList.prototype.addSet = function (dataSet) {
        var _this = this;
        var walkoverAddFn = function (data) {
            _this.add(data);
        };
        dataSet.forEach(walkoverAddFn);
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var node = this.head;
            while (node.next) {
                length += 1;
                node = node.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error("Index out of Bounds");
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter += 1;
            node = node.next;
        }
        throw new Error("Index out of Bounds");
    };
    LinkedList.prototype.compare = function (lhs, rhs) {
        if (!this.head) {
            throw new Error("List is Empty!");
        }
        return this.at(lhs).data > this.at(rhs).data;
    };
    LinkedList.prototype.swap = function (lhs, rhs) {
        var _a;
        var _b = [this.at(lhs), this.at(rhs)], leftNode = _b[0], rightNode = _b[1];
        _a = [rightNode.data, leftNode.data], leftNode.data = _a[0], rightNode.data = _a[1];
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return undefined;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}(Sorter_1.default));
exports.default = LinkedList;
