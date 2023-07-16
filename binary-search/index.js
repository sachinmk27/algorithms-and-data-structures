function generateRandomSortedArray(n) {
  const arr = new Array(n)
    .fill(0)
    .map(() => Math.floor(Math.random() * n + 1))
    .sort((a, b) => a - b);
  return arr;
}

function search(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    console.log({ left, right, mid });
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
}
let arr = generateRandomSortedArray(1);
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
console.log(search(arr, 4));
