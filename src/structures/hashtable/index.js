class HashTable {
  constructor (size = 7) {
    this.dataMap = new Array(size);
  }
  hash(key) {
    let hash = 0;
    const base = 23;
    key = String(key);
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * base) % this.dataMap.length;
    }
    return hash;
  }
  set (key, value) {
    let index = this.hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }
  get (key) {
    let index = this.hash(key);
    const node = this.dataMap[index];
    if (!node) return null;
    const [, value ] = node.find(
      item => item[0] === key
    );
    return value;
  }
  keys () {
    const keys = [];
    for (let item of this.dataMap) {
      if (item) {
        let list = item.map(item => item[0]);
        keys.push(...list);
      }
    }
    return keys;
  }
}

export { HashTable }
