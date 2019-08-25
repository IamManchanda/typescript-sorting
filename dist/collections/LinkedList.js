"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
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
}());
exports.default = LinkedList;
