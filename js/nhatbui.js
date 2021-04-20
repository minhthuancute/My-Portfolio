
// // bt về nhà ---- tìm số nhỏ nhất lớn hơn 0 không nằm trong mảng
// // input [-1,-2]->1
// // [-1,-2,1,2,3,4,10]->5

// const solution = (input = []) => {
//    input = input.sort((a, b) => a - b);

//    console.log(input);
//    for (let i = 0; i < input.length - 1; i++) {
//       if (input[i + 1] - input[i] > 1 && (input[i + 1] > 0 && input[i] > 0)) {
//          return input[i] + 1;
//       }
//    }
//    return input[input.length - 1] < 0 ? 1 : input[input.length - 1] + 1;

// }

// // const input = [-1, -2];
// const input = [-1, -2, 1, 2, 3, 4, 5];
// const res = solution(input);

// console.log(res);


const arr = ["126abc", "ax110", 'x2x'];

const temp = arr.toString().match(/\d+/g);

console.log(temp);