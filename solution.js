const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  };
};

class LinkedList {
  constructor(head = null) {
    this.head = head;
  };

  insert(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    };
  };

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  };

  delete(value) {
    let currentNode = this.head;
    if (currentNode.data === value) {
      this.head = currentNode.next;
      return this.head;
    };
    while (currentNode.next) {
      if (currentNode.next.data === value) {
        currentNode.next = currentNode.next.next;
        return this.head;
      };
    };
  };
  getFirst() {
    return this.head
  }

  getLast() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    return currentNode
  };

  search(value) {
    let currentNode = this.head
    while (currentNode != null) {
      if (currentNode.data === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null;
  };

  getKth(position) {
    let currentNode = this.head;
    let count = 1;
    if (position === 1) {
      return currentNode;
    } else {
      while (currentNode.next != null) {
        if (count + 1 === position) {
          return currentNode.next;
        }
        count++;
        currentNode = currentNode.next;
      };
    };
  };

  getKthToLast(index) {
    let currentNode = this.head;
    let count = 1;
    const newIndex = this.size() - index;
    while (currentNode !== null) {
      if (count === newIndex) return currentNode;
      currentNode = currentNode.next;
      count++;
    };
  };

  isEmpty() {
    return this.head === null;
  };

  clear() {
    this.head = null;
  };

  toArray() {
    let currentNode = this.head;
    let arr = [];
    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    };
    return arr;
  };

  containsDuplicates() {
    let currentNode = this.head;
    let dataSet = new Set();
    while (currentNode) {
      if (dataSet.has(currentNode.data)) {
        return true;
      } else {
        dataSet.add(currentNode.data)
      };
      currentNode = currentNode.next;
    };
    return false;
  };
};

module.exports = {
  Node,
  LinkedList,
};
