var numbers = [10, 20, 3, 16, 45];
var max = min = numbers[0]; //10
// numbers.forEach((num) => {
//     // 현재 돌아가는 숫자가 max보다 큰 경우
//     if (num > max) {
//         max = num ;
//     }
//     // min 값
//     if(num < min) {
//         min = num ;
//     }
// });

// console.log(max, min); 
//foreach, map, filter, reduce 는 굉장히 비슷한 방식으로 이 콜백 함수에 의해 돌아감 
               //idx=index
numbers.forEach((num, idx) => {
    console.log(idx + "번째 값 =>" + number);
});