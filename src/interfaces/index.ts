export interface Sortable {
  length: number;
  compare(lhs: number, rhs: number): boolean;
  swap(lhs: number, rhs: number): void;
}
