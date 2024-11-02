import { Compare, defaultCompare } from "./util";

export class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  shiftUp(index) {
    let parent = this.getParentIndex(index);
    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index] === Compare.BIGGER_THAN)) {
      this.swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  swap(arr, a, b) {
    // es6 会有性能问题
    // [arr[a], arr[b]] = [arr[b], arr[a]];
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  extract() {
    if (this.isEmpty()) return undefined;
    if (this.size() === 1) return this.heap.shift();
    const removedValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return removedValue;
  }

  shiftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();
    if (left < size && this.compareFn(this.heap[element], this.heap[left] === Compare.BIGGER_THAN)) {
      element = left;
    }
    if (right < size && this.compareFn(this.heap[element], this.heap[right] === Compare.BIGGER_THAN)) {
      element = right;
    }
    if (element !== index) {
      this.swap(this.heap, element, index);
      this.shiftDown(element);
    }
  }
}