import { LinkedList } from "./linked-list.js";
import { defaultEquals } from "./util.js";

export class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        if (this.head === null) {
          this.head = node;
          this.head.next = node;
        } else {
          let current = this.head;
          node.next = current;
          this.head = node;
          let tail = this.getElementAt(this.size() - 1);
          tail.next = this.head;
        }
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

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        if (this.size() === 1) {
          this.head = null;
        } else {
          this.head = current.next;
          let tail = this.getElementAt(this.size() - 1);
          tail.next = this.head;
        }
        
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
}