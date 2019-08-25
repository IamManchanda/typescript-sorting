import Sorter from "./Sorter";
import NumbersCollection from "./collections/NumbersCollection";
import CharactersCollection from "./collections/CharactersCollection";

const numbers: number[] = [10, -3, -5, 3, 0];
const numbersSorter: Sorter = new Sorter(new NumbersCollection(
  numbers,
) as NumbersCollection);
numbersSorter.sort();
console.log(numbersSorter.collection);

const characters: string = "aXaa";
const charactersSorter: Sorter = new Sorter(new CharactersCollection(
  characters,
) as CharactersCollection);
charactersSorter.sort();
console.log(charactersSorter.collection);
