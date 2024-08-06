import { LinkedList } from "./linked-list.js";
import { defaultEquals } from "./util.js"

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
}

function defaultCompare(a, b) {
  if (a === b) return 0;
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

export class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn)
    this.compareFn = compareFn
  }

  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0)
    }
    const pos = getIndexNextSortedElement(element)
    return super.insert(element, pos);
  }

  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size(); i++) {
      const com = this.compareFn(element, current.element)
      if(com === Compare.LESS_THAN) {
        return i
      }
      current = current.next;
    }
    return i
  }
}