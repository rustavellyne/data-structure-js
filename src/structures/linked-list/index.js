class Node {
  constructor (value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor (value = null) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    if (value !== null) this.push(value);
  }

  isEmpty () {
    return this.length === 0 && this.head === null && this.tail === null;
  }

  push (value) {
    const node = new Node (value);
    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    this.length++;
    return this;
  }

  get (index) {
    if (index >= this.length || index < 0) {
      throw new Error('Index is out of range');
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter < index && currentNode.next) {
       currentNode = currentNode.next;
      counter++;
    }

    return currentNode ? currentNode.value : null;
  }
}

export { LinkedList };
