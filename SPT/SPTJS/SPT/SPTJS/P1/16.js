// 배열

// 1.생성
// 1-1. 기본 생성
let fruit =["사과", "바나나", "오렌지"];

// 1-2. 크기 지정
let number = new Array(5);

// console.log (fruit.length);
// console.log (number.length);

// // 2. 요소 접근
// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);

// 3. 배열 메소드
// // 3-1. push
// let fruits = ["사과","바나나"];
// console.log("1 => ",fruits);

// fruits.push["오렌지"];
// console.log("2 => ",fruits);\

// 3-2. pop 마지막 요소 삭제
// let fruits = ["사과","바나나"];
// console.log("1 => ",fruits);
// fruits.pop();
// console.log("2 => ",fruits);

// 3-3. shift 첫번째 요소 삭제
// let fruits = ["사과","바나나"];
// console.log("1 => ",fruits);
// fruits.shift();
// console.log("2 => ",fruits);

// 3-4. unshift 첫번째에 추가
// fruits.unshift("포도");
// console.log(fruits);


// let fruits = ["사과", "바나나", "키위"]
//3-5. splice 첫번째 요소부터 첫번째 요소까지 삭제하고 포도 추가
// fruits.slice(1, 1, "포도");
// fruits.splice()
// console.log(fruits);

let fruits = ["사과", "바나나", "키위"]
//3-6. slice
// let sliceedFruits = fruits.slice(1,2); 2번째 요소부터 3번째 전까지 새로운 배열로 만듦 바나나에서 키워 전까지 
// console.log(sliceedFruits);

// (1) forEach, map, filter, find  /foreach 빼고 나머지  return 필요
// let numbers = {4, 1, 5, 4, 5};

//매개변수 자리에 함수를 넣는 것 : 콜백 함수
// numbers.foreach(function(item){
//     console.log("item입니다 -> " + item);
// });

//(2) map map + return 쌍으로 댕김. 항상 원본 배열의 길이만큼 return 
// let newNumbers = numbers.map(function(item){

//     return item * 2;
// });

// console.log(newNumbers);

// (3)filter 맞는 것 찾아줌
// let filteredNumbers = numbers.filter(function(item){
    
//     return item === 5;
// });

// console.log(filteredNumbers);

// (4)find 처음 것만 찾아줌
let numbers = {4, 1, 5, 4, 5};

let reuslt = numbers.find(function(item){
    return item > 3 ;
})

console.log(result);