class Node {
  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor (value) {
    this.first = null;
    this.last = null;
    this.length = 0;
    if (value !== undefined) this.enqueue(value);
  }
  print () {
    let current = this.first;
    const arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }

  enqueue (value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }
  
  dequeue () {
    if (!this.first) return null;
    const node = this.first;
    this.first = node.next;
    node.next = null;
    if (this.length === 1) {
      this.last = null;
    }
    this.length--;
    return node.value;
  }
}

export { Queue }
