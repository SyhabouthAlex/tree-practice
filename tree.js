/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root === null) {
      return 0;
    };
    let sum = 0;
    let queue = [this.root];
    while(queue.length) {
      let node = queue.shift()
      for (let child of node.children) {
        queue.push(child);
      }
      sum += node.val;
    };
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root === null) {
      return 0;
    };
    let count = 0;
    let queue = [this.root];
    while(queue.length) {
      let node = queue.shift()
      for (let child of node.children) {
        queue.push(child);
      }
      if (node.val % 2 === 0) {
        count++;
      };
    };
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root === null) {
      return 0;
    };
    let count = 0;
    let queue = [this.root];
    while(queue.length) {
      let node = queue.shift()
      for (let child of node.children) {
        queue.push(child);
      }
      if (node.val > lowerBound) {
        count++;
      };
    };
    return count;
  }
}

module.exports = { Tree, TreeNode };
