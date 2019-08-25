import Sorter from "./Sorter";
import NumbersCollection from "./collections/NumbersCollection";
import CharactersCollection from "./collections/CharactersCollection";
import LinkedList from "./collections/LinkedList";

const numbers: number[] = [10, -3, -5, 3, 0];
const numbersCollection: NumbersCollection = new NumbersCollection(numbers);
const numbersSorter: Sorter = new Sorter(numbersCollection);
numbersSorter.sort();
console.log(numbersSorter.collection);

const characters: string = "aXaa";
const charactersCollection: CharactersCollection = new CharactersCollection(
  characters,
);
const charactersSorter: Sorter = new Sorter(charactersCollection);
charactersSorter.sort();
console.log(charactersSorter.collection);

const linkedList: LinkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-30);
linkedList.add(-50);
linkedList.add(30);
linkedList.add(0);
const linkedListSorter: Sorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
