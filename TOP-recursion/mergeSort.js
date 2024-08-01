mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const len = arr.length;
  const half = Math.floor(len / 2);
  const left = arr.slice(0, half);
  const right = arr.slice(half, len);

  return merge(mergeSort(left), mergeSort(right));
};

merge = (left, right) => {
  const result = [];
  let leftlen = left.length;
  let rightlen = right.length;
  let i = 0;
  let j = 0;

  while (i < leftlen && j < rightlen) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < leftlen) {
    result.push(left[i]);
    i++;
    j++;
  }
  while (j < rightlen) {
    result.push(right[j]);
    j++;
    i++;
  }

  return result;
};
