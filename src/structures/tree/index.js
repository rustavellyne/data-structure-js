class Node {
  constructor (value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor (value) {
    this.root = null;
    if (value !== undefined) this.insert(value);
  }
  insert (value) {
    const newNode = new Node(value);
    let current = this.root;
    if (!current) {
      this.root = newNode;
      return this;
    }
    let direction = null;
    while (current) {
      if (value === current.value) return this;
      direction = value > current.value ? 'right' : 'left';
      if (current[direction] === null) {
        current[direction] = newNode;
        break;
      }

      current = current[direction];
    }
    return this;
  }

  contains (value, current = this.root) {
    if (!current) return false;
    if (value === current.value) return true;
    if (value < current.value)  { 
      return this.contains(value, current.left);
    }
    if (value > current.value) {
      return this.contains(value, current.right);
    }
  }
}

export { Tree };
