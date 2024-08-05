import { defaultEquals } from "./util.js";
import { Node } from "../models/linked-list-models.js";

export class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        let previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return null
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        // let current = this.head;
        // node.next = current;
        node.next = this.head;
        this.head = node;
      } else {
        let previous = this.getElementAt(index - 1);
        // let current = previous.next;
        // node.next = current;
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head;
      for (let i = 0; i < index && node !== null; i++) {
        node = node.next;
      }
      return node;
    }
    return null;
  }
  
  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.isEmpty()) return ""
    let objStr = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.count && current !== null; i++) {
      objStr = `${objStr}, ${current.element}`;
      current = current.next;
    }
    return objStr;
  }
  
}

