import { defaultCompare, reverseCompare } from "./util";
import { MinHeap } from "./min-heap"

export default class MaxHeap extends MinHeap{
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = reverseCompare(compareFn);
    
  }

  
}