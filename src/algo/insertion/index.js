const sort = (arr) => {
  let temp;
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > temp; j--) {
      arr[j+1] = arr[j];
    }

    arr[j+1] = temp;
  }
  return arr;
}

export { sort };
