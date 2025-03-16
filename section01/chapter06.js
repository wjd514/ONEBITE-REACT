//1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
console.log(result);

//2. 명시적 형 변환
// -> 개발자가 내장함수 등을 이용해서 직접 형 변환 하는 것
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum = Number(str1);
console.log(strToNum);

let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2);
let strToNum3 = parseInt(str2);
console.log(strToNum3);

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr = String(num1);
console.log(numToStr);
