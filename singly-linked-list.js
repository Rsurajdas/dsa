class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let currentNode = this.head;
    let prevNode = currentNode;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = prevNode;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

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

  get(index) {
    if (!this.head) return undefined;
    if (index < 0 || index >= this.length) return null;

    let currentIdx = 0;
    let currentNode = this.head;

    while (currentIdx !== index) {
      currentNode = currentNode.next;
      ++currentIdx;
    }

    return currentNode;
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    } else {
      return false;
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      return !!this.push(value);
    }
    if (index === 0) {
      return !!this.unshift(value);
    }
    const newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = nextNode.next;
    this.length--;
    return nextNode;
  }

  printNodes() {
    let result = '';
    let currentNode = this.head;

    while (currentNode) {
      result += currentNode.value + ' -> ';
      currentNode = currentNode.next;
    }
    console.log(result + 'null');
  }
}

const link = new SinglyLinkedList();
link.push(10);
link.push(15);
link.push(20);
link.unshift(5);
console.log(link.insert(0, 0));
console.log(link.insert(5, 25));
console.log(link.insert(4, 17));
console.log(link.remove(4));
link.printNodes();
