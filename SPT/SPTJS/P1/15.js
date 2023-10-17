// 객체
//key - value pair
//하나의 변수에 여러개의 값을 넣을 수 있다!

// 1. 객체 생성 방법
// // 1-1. 기본적인 객체 생성 방법



// // 1-2. 생성자 함수를 이용한 객체 생성 방법 
// function person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// let person1 = new person("홍길동", 30, "남자");
// let person1 = new person("홍길동", 20, "여자");


// 2. 접근하는 방법 
// console.log("1", person.name);
// console.log("2", person.age);
// console.log("3", person.gender);


// 3.객체 메소드(객체가 가진 여러가지 기능 : Object.~~~ )
// 3.1 Object.keys() 키를 가져오는 메소드
let person = {
    name : "홍길동",
    age : 30,
    gender :  "남자"
};

let keys = Object.keys(person) ;
// console.log("keys => ", keys);

// 3-2. value
let value = Object.values(person);
// console.log("values =>", values);


//3-3. entries
// key와 value를 묶어서 배열로 만든 배열!! (2차원 배열)
let entries = Object.entries(person);
console.log("entries =>", entries);

// 3-4. assign
//객체 복사
 let newPerson = {};
 Object.assign(newPerson, person, {gender : "여자"}); // 타겟, 소스, 추가
 console.log("newPerson = >", newPerson);             // ㄴ어디에다 복사, 뭘 복사 


//  3-5. 객체 비교
// 크기가 상당히 커요!! -> 메모리에 저장할 때 별도의 공간에 저장
// person1 별도 공간에 대한 주소
// let person1 = {
//     name : "홍길동",
//     age : 30,
//     gender :  "남자"
// };

// // person2 별도 공간에 대한 주소
// let person2 = {
//     name : "홍길동",
//     age : 30,
//     gender :  "남자"
// };

// let str1 = "aaa";
// let str2 = "aaa";

// console.log("answer =>", person1 === person2);
// console.log("answer2 =>", str1 = str2);

// console.log(JSON.stringify(person1) === JSON.stringify(person2))

// 3.6 객체 병합

let person1 = {
    name : "홍길동",
    age : 30,
};

// person2 별도 공간에 대한 주소 ( ...)리스트 연산자 쓰네?
let person2 = {


    gender :  "남자"
};

//...: spread operator 중괄호를 다 풀어 헤쳐줘 
let perfectMan = {...person1, ...person2};
console.log(perfectMan);