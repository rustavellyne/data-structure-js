class Node {
  constructor (value, next = null) {
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

  pop () {
    if (this.isEmpty()) {
      throw new Error('list is empty');
    }
    const node = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next; 
      }
      this.tail = prev;
      prev.next = null;
      this.length--;
    }

    return node.value;
  }

  findNode (index) {
    if (index >= this.length || index < 0) {
      throw new Error('Index is out of range');
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  get (index) {
    const node = this.findNode(index);
    return node.value;
  }

  set(index, value) {
    const node = this.findNode(index);
    node.value = value;
  }
  insert (index, value) {
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }

    const prev = this.findNode(index - 1);
    const newNode = new Node(value, prev.next);
    prev.next = newNode;
    this.length++;

    return this;
  }
  removeAt(index) {
    if (this.isEmpty()) throw new Error('list is Empty');
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    const prev = this.findNode(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    removed.next = null;
    this.length--;
    return removed.value;
  }

  unshift(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
    this.length++;
    return this;
  }

  shift () {
    if (this.isEmpty()) {
      throw new Error('list is empty');
    } 
    const node = this.head;
    this.head = node.next;
    node.next = null;
    if (!this.head) this.tail = null;
    this.length--;
    return node.value;
  }

  print () {
    let current = this.head;
    while (current) {
      console.log(current.value)
      current = current.next;
    }
  }

  reverse () {
    let prev = null;
    let current = this.head;
    this.tail = current;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

export { LinkedList };
