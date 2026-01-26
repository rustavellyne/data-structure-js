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
}

export { DoubleLinkedList }
