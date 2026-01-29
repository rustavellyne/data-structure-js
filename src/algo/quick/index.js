const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
const pivot = (arr, pivotIdx = 0, endIdx = arr.length-1) => {
  let swapIdx = pivotIdx;
  for (let i = pivotIdx + 1; i <= endIdx; i++) {
    if (arr[i] < arr[pivotIdx]) {
      swapIdx++;
      swap(arr, swapIdx, i); 
    } 
  }
  swap(arr, pivotIdx, swapIdx);
  return swapIdx;
}

const sort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    sort(arr, left, pivotIdx);
    sort(arr, pivotIdx+1, right);
  }
  return arr;
}

export { sort };
