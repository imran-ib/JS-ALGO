//console.log({"head" :this.head, "tail" :this.tail})

class Node {
  constructor(node, next = null) {
    this.node = node;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // add new node to the end of a list

  push(data) {
    //Step-1 Create a new node and pass it data
    //Step-2 if the list is empty set the head and tail to be newly Created node
    // Step-3 otherwise set the next property on the tail to be new node.
    // set the tail property to be newly Created node
    // Step-4 Increment the length

    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  // remove item from the end of the list
  pop(data) {
    // if no node return undefined
    // loop until the tail
    // set the next property of the 2nd last node to ne null
    // set the tail to be 2nd last node
    // decrement
    // return node
    if (!this.head) return undefined;
    let currentNode = this.head;
    let newTail = currentNode;

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  // remove First node
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // add new node to the beginning
  unShift(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  // take a index and get that node
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    console.log(index);
    let count = 0;
    let node = this.head;

    while (node) {
      if (count === index) {
        return node;
      }
      node = node.next;
      count++;
    }
    return null;
  }
  // update existing node
  set(index, data) {
    let node = this.get(index);
    if (node) {
      node.node = data;
      return true;
    }
    return false;
  }

  insert(index, data) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      return !!this.push(data);
    }
    if (index === 0) {
      return !!this.unShift(data);
    }
    let node = new Node(data);
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;
    prevNode.next = node;
    node.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    let prevNode = this.get(index - 1);
    let removingNode = prevNode.next;
    prevNode.next = removingNode.next;
    this.length--;
    return removingNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new LinkedList();
list.push("First item");
list.push("Second item");
list.push("Third item");
list.push("Fourth item");
list.push("Fifth item");