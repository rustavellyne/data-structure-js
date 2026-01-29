const sort = (arr) => {
  const sorted = arr.slice();
  for (let i = sorted.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (sorted[j] > sorted[j + 1]) {
        const temp = sorted[j];
        sorted[j] = sorted[j+1];
        sorted[j+1] = temp;
      }
    }
  }
  return sorted;
}

export { sort };
