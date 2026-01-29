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

  traverseBreadth () {
    const result = [];
    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();
      result.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return result;
  }
  dfsPreorder () {
    const result = [];

    const traverse = (currentNode) => {
      result.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }

    traverse(this.root);
    return result;
  }

  dfsPostorder () {
    const result = [];
    const traverse = (currentNode) => {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right); 
      result.push(currentNode.value);
    }
    traverse(this.root);

    return result;
  }
  dfsInorder () {
    const result = [];
    
    const traverse = (currentNode) => {
      if (currentNode.left) traverse(currentNode.left);
      result.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root)
    return result;
  } 
  
}

export { Tree };
