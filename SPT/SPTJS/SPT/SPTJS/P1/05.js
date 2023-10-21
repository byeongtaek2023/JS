// 형 변환
// 형태 -> 바꾼다
// 명시적 형 변환, 암시적 형 변환

// 1.암시적
// 1-1. 문자열
let result1 = 1 + "2";
// console.log(result1);
// console.log(typeof result1);

let result2 = "1" + true;
console.log(result2);
console.log(typeof result2);

// {}, null, undefined + "1" => 문자열

1-2. 숫자
let result3 = 1 - "2";
// console.log(result3);
// console.log(typeof result3);

let result4 = "2" * "3";
// console.log(result4);
// console.log(typeof result4);

// 2. 명시적 형 변환
// // 2-1. Boolean
// console.log(Boolean(0));                       f
// console.log(Boolean(""));                      f
// console.log(Boolean(null));                    f
// console.log(Boolean(undefined));               f
// console.log(Boolean(NaN));                     f
// console.log(Boolean("--------------"));        f
// console.log(Boolean("false"));                 t
// console.log(Boolean({}));                      t

// // 2-2. 문자열
// let result5 = string(123);
// console.log(typeof result5);

// let result6 = string(true);
// console.log(typeof result5);

// let result7 = string(flase);
// console.log(typeof result5);

// let result8 = string(null);
// console.log(typeof result5);

// let result9 = string(undefined);
// console.log(typeof result5);

// type of all string

// 1-3. Number
let result10 = Number("123");
console.log(result10);
console.log(typeof result10);