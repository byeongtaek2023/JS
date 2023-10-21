cosnt myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

// // console.log(myMap."keys());
// for (const key of myMap.keys()); {
//     console.log(key);
// }"

// console.log(myMap.values());
// for (const value of myMap.Value()){
//     console.log(value);
// }

// console.log(myMap.entries());
// // 배열로 묶은 다음 전체 내역 객체로 감싸줌
// for (const entry of myMap.entries()){
//     console.log(entry);
// }

// 맵의 크기와 존재여부를 확인하는 방법 
console.log(myMap.size); // map의 사이즈 (길이)
console.log(myMap.has("two")); // key 기반 검색 
