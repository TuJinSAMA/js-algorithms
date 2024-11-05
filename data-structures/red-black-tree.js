import { RedBlackNode } from "../models/tree-models.js";
import { Compare, defaultCompare, BalanceFactor, Colors } from "./util.js";
import BinarySearchTree from "./binary-search-tree.js";

class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key) {
    if (this.root === null) {
      this.root = new RedBlackNode(key)
      this.root.color = Colors.BLACK;
    } else {
      const newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode)
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new RedBlackNode(key);
        node.left.parent = node;
        return node.left;
      } else {
        return this.insertNode(node.left, key);
      }
    } else if (node.right === null) {
      node.right = new RedBlackNode(key);
      node.right.parent = node;
      return node.right;
    } else {
      return this.insertNode(node.right, key);
    }
  }

  fixTreeProperties(node) {
    // 如果当前Node为红色，且父节点也为红色，则违反了红黑树性质，需要进行修复
    while (node && node.parent && node.parent.isRed() && node.color !== Colors.BLACK) {
      let parent = node.parent;
      const grandParent = parent.parent;
      // Case A： 如果父节点是祖父节点的左子节点
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right;
        // Case A1： 叔叔节点也是红色
        if (uncle.isRed()) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // Case A2: 叔叔节点是黑色，且当前节点是右子节点 需要进行RL旋转
          if (node === parent.right) {
            this.rotationRR(parent);
            node = parent;
            parent = node.parent;
          }
          // Case A3: 叔叔节点是黑色，且当前节点是左子节点
          this.rotationLL(parent);
          // 交换颜色
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;

        }
      } else {
        // Case B：如果父节点是祖父节点的右子节点
        const uncle = grandParent.right;
        // Case B1： 叔叔节点也是红色
        if (uncle.isRed()) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // Case B2: 叔叔节点是黑色，且当前节点是左子节点 需要进行LR旋转
          if (node === parent.left) {
            this.rotationLL(parent);
            node = parent;
            parent = node.parent;
          }
          // Case B3: 叔叔节点是黑色，且当前节点是右子节点
          this.rotationRR(parent);
          // 交换颜色
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      }
    }
  }

  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.right = node;
    node.parent = tmp;
  }

  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.left = node;
    node.parent = tmp;
  }
}