class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

class LinkedList {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return undefined;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length += 1;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of Bounds");
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter += 1;
      node = node.next;
    }

    throw new Error("Index out of Bounds");
  }

  compare(lhs: number, rhs: number): boolean {
    if (!this.head) {
      throw new Error("List is Empty!");
    }

    return this.at(lhs).data > this.at(rhs).data;
  }

  swap(lhs: number, rhs: number): void {
    const [leftNode, rightNode] = [this.at(lhs), this.at(rhs)];
    [leftNode.data, rightNode.data] = [rightNode.data, leftNode.data];
  }

  print(): void {
    if (!this.head) {
      return undefined;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

export default LinkedList;
