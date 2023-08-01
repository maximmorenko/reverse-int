module.exports = function reverse (n) {
    let arr = (``+Math.abs(n)).split``;
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
       const temp = arr[left];
       arr[left] = arr[right];
       arr[right] = temp;
       left++;
       right--;
    }
    return +arr.join``;
}
