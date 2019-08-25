import Sorter from "./shared/Sorter";

class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(lhs: number, rhs: number): boolean {
    return this.data[lhs] > this.data[rhs];
  }

  swap(lhs: number, rhs: number): void {
    [this.data[lhs], this.data[rhs]] = [this.data[rhs], this.data[lhs]];
  }
}

export default NumbersCollection;
