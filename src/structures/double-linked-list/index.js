class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}


class DoubleLinkedList {
  constructor (value = null) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    if (value !== null) this.push(value);
  }
  isEmpty () {
    return this.length === 0 && !this.head && !this.tail
  }
  push(value) {
    const node = new Node(value);
    
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    } else {
      this.head = node;
    }

    this.tail = node;
    this.length++;

    return this;
  }
  pop () {
    if (this.isEmpty()) return null;
    const node = this.tail;
    this.length--;
    if (this.length) {
      this.tail = node.prev;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    node.prev = null;
    return node.value;
  }

  unshift (value) {
    const node = new Node(value);
    if (this.head) {
      this.head.prev = node;
      node.next = this.head;
    } else {
      this.tail = node;
    }
    this.head = node;
    this.length++;
    return this;
  }

  shift () {
    if (this.isEmpty()) return null;

    const node = this.head;
    this.head = node.next;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head.prev = null;
    }
    node.next = null;
    this.length--;
    
    return node.value;
  }
  getNode (index) {
    if (this.isEmpty() || index < 0 || index >= this.length) return null;
    const tailIndex = this.length - 1 - index;
    let strategy = 'next';
    let current = this.head;
    let counter = 0;
    if (tailIndex < index) {
      strategy = 'prev';
      index = tailIndex;
      current = this.tail;
    }
    console.log({ strategy, index })
    while (counter < index) {
      current = current[strategy];
      counter++;
    }

    return current;
  }
  get(index) {
    const node = this.getNode(index);
    return node ? node.value : node;
  }
}

export { DoubleLinkedList }
