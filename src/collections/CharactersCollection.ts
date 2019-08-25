class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(lhs: number, rhs: number): boolean {
    return this.data[lhs].toLowerCase() > this.data[rhs].toLowerCase();
  }

  swap(lhs: number, rhs: number): void {
    const characters = this.data.split("");
    [characters[lhs], characters[rhs]] = [characters[rhs], characters[lhs]];
    this.data = characters.join("");
  }
}

export default CharactersCollection;
