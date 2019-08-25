import NumbersCollection from "./collections/NumbersCollection";
import CharactersCollection from "./collections/CharactersCollection";
import LinkedList from "./collections/LinkedList";

const numbers: number[] = [10, -3, -5, 3, 0];
const numbersCollection: NumbersCollection = new NumbersCollection(numbers);
numbersCollection.sort();
console.log(numbersCollection.data);

const characters: string = "aXaa";
const charactersCollection: CharactersCollection = new CharactersCollection(
  characters,
);
charactersCollection.sort();
console.log(charactersCollection.data);

const numbersSet = [100, -30, -50, 30, 0];
const linkedList: LinkedList = new LinkedList();
linkedList.addSet(numbersSet);
linkedList.sort();
linkedList.print();
