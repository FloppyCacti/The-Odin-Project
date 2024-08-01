//fibonacci sequence using iteration
const fibs = (num) => {
  const result = [0, 1];
  for (i = 2; i < num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
};

//fibonacci sequence using recursion
const fibsRec = (num) => {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  const result = fibsRec(num - 1);
  result.push(result[result.length - 1] + result[result.length - 2]);
  return result;
};
