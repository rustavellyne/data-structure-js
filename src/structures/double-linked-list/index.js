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
    while (counter < index) {
      current = current[strategy];
      counter++;
    }

    return current;
  }
  get (index) {
    const node = this.getNode(index);
    return node ? node.value : node;
  }
  set (index, value) {
    const node = this.getNode(index);
    if (!node) return false;
    node.value = value;
    return true;
  }
  insert (index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length ) {
      this.push(value);
      return true;
    }

    const newNode = new Node(value);
    const next = this.getNode(index);
    const prev = next.prev;
    
    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = next;
    next.prev = newNode;
    this.length++; 
    return true;
  }

  remove (index) {
    const node = this.getNode(index);
    if (!node) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
    this.length--;
    return node.value;
  }

  print() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

export { DoubleLinkedList }
