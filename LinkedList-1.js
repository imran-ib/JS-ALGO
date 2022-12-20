class Node {
  constructor(node, next = null) {
    this.node = node;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = "null";
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.node;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
  }
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }

    if (index === 0) {
      this.head === this.head.next;
      return;
    }

    const prevNode = this.getAt(index - 1);
    if (!prevNode || !prevNode.next) {
      return;
    }
    prevNode.next = prevNode.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return null;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const prevNode = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, prevNode.next);
    prevNode.next = node;
  }
}
