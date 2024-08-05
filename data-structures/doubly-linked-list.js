import { doublyNode } from "../models/linked-list-models.js";
import { LinkedList } from "./linked-list.js";
import { defaultEquals } from "./util.js";

export class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = null;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new doublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head === null) {
          // 新增
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        let previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        // node.next = previous.next;
        previous.next = node;
        node.prev = previous;
        current.prev = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
        if (this.count === 1) {
          this.tail = null;
        } else {
          this.head.prev = null;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
      } else {
        let current = this.getElementAt(index);
        let prev = current.prev;
        prev.next = current.next;
        current.next.prev = prev;
      }
      this.count--;
      return current.element;
    }
    return null
  }
}