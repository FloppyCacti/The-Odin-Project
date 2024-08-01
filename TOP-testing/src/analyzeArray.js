function analyzeArray(arr) {
  function arraverage(arr) {
    const length = arr.length;
    let result = 0;
    for (let i = 0; i < length; i++) {
      result += arr[i];
    }
    return result / length;
  }
  function arrmin(arr) {
    const length = arr.length;
    let result = Infinity;
    for (let i = 0; i < length; i++) {
      result = Math.min(result, arr[i]);
    }
    return result;
  }
  function arrmax(arr) {
    const length = arr.length;
    let result = -Infinity;
    for (let i = 0; i < length; i++) {
      result = Math.max(result, arr[i]);
    }
    return result;
  }
  function arrlength(arr) {
    return arr.length;
  }

  return {
    average: arraverage(arr),
    min: arrmin(arr),
    max: arrmax(arr),
    length: arrlength(arr),
  };
}

module.exports = analyzeArray;
