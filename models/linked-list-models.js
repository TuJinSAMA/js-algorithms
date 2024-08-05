export class Node {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }
}

export class doublyNode extends Node {
  constructor(element, next = null, prev = null) {
    super(element, next);
    this.prev = prev;
  }
}