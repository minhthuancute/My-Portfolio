// // viết hàm tính tổng lớn nhất của các sub-array(các array có các phần tử liên tiếp)
// var arr1 = [-1, 2, -3, 4];
// var arr2 = [-1, 2, 3, 4];
// var arr3 = [-2, -2, 3, 7];

// const maxSumOfSubarray = (arr = []) => {
//    let max, lastMax, count = 1;

//    for (let i = 0; i < arr.length - 1; i++) {
//       max = arr[i];
//       lastMax = arr[i + 1];
//       if (lastMax > max) {
//          max = lastMax;
//       }
//    }
//    const index = arr.indexOf(max);

//    return index;
// };

// console.log(maxSumOfSubarray(arr1)); //  4 vì sub-arr là [4]
// console.log(maxSumOfSubarray(arr2)); // 9 vì sub-arr là  [2,3,4]
// console.log(maxSumOfSubarray(arr3)); // 10 vì sub-arr là  [3,7] ==>

const maxSumOfSubarray = (arr) => {
   // your code here
   var max = arr[0];
   var lastMax = arr[0];

   for (i = 1; i < arr.length; i++) {
      current = arr[i];
      if (current > lastMax + current) {
         lastMax = current;
      } else {
         lastMax = lastMax + current;
      }
      if (lastMax > max) {
         max = lastMax;
      }
   }

   return max;
};
var arr2 = [-1, 2, -1, 100, -1, 3, 4];
console.log(maxSumOfSubarray(arr2)); // 9 vì sub-arr là  [2,3,4]
