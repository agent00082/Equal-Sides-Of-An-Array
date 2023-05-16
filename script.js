function findEvenIndex(arr) {
  for (var i = 0; i < arr.length; i++) {
    var leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0);
    var rightSum = arr.slice(i + 1).reduce((a, b) => a + b, 0);
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}
