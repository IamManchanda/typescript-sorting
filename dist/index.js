"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = __importDefault(require("./Sorter"));
var NumbersCollection_1 = __importDefault(require("./collections/NumbersCollection"));
var numbers = [10, -3, -5, 3, 0];
var numbersCollection = new NumbersCollection_1.default(numbers);
var numbersSorter = new Sorter_1.default(numbersCollection);
numbersSorter.sort();
console.log(numbersSorter.collection);
