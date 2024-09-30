import { Node } from "../models/tree-models";
import { Compare, defaultCompare } from "./util";

export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }
}