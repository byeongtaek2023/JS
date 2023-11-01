var numbers = [10, 20, 3, 16, 45];

//appy -> ({}, [])

var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);

console.log("apply =>", max, min);

//spread operator
console.log(...numbers); //콤마 형태로 구분된 숫자들의 나열 
console.log(numbers); //배열 

var max = Math.max(...numbers);
var min = Math.min(...numbers);

console.log("spread =>", max, min);
