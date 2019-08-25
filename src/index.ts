import Sorter from "./Sorter";
import NumbersCollection from "./collections/NumbersCollection";

const numbers: number[] = [10, -3, -5, 3, 0];
const numbersCollection: NumbersCollection = new NumbersCollection(numbers);
const numbersSorter: Sorter = new Sorter(numbersCollection);
numbersSorter.sort();
console.log(numbersSorter.collection);
