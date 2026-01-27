class Node {
  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor (value = null) {
    this.top = null;
    this.length = 0
    if (value !== null) this.push(value);
  }

  print () {
    let current = this.top;
    const arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }

  push (value) {
    const node = new Node(value);
    if (this.top) {
      node.next = this.top;
    }
    this.top = node;
    this.length++;
    return this;
  }

  pop () {
    if (!this.length) return null;
    const current = this.top;
    this.top = current.next;
    current.next = null;
    this.length--;
    return current.value;
  }
}

export { Stack }
