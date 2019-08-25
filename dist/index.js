"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = __importDefault(require("./Sorter"));
var NumbersCollection_1 = __importDefault(require("./collections/NumbersCollection"));
var CharactersCollection_1 = __importDefault(require("./collections/CharactersCollection"));
var numbers = [10, -3, -5, 3, 0];
var numbersSorter = new Sorter_1.default(new NumbersCollection_1.default(numbers));
numbersSorter.sort();
console.log(numbersSorter.collection);
var characters = "aXaa";
var charactersSorter = new Sorter_1.default(new CharactersCollection_1.default(characters));
charactersSorter.sort();
console.log(charactersSorter.collection);
