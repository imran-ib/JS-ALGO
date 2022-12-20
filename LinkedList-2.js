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
  get(index) {}
}

const list = new LinkedList();
list.push("First item");
list.push("Second item");
list.push("Third item");
list.push("Fourth item");
