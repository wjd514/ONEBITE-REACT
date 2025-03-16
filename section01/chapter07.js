//1. 대입 연산자
let var1 = 1;

//2. 산술 연산자
let num1 = 3+2;
let num2 = 3-2;
let num3 = 3*2;
let num4 = 3/2;
let num5 = 3%2;

let num6 = 1 + 2 * 10;
console.log(num6);

let num7 = (1 + 2) * 10;
console.log(num7);

//3. 복합 대입 연산자
let num8 = 10;
num8 += 5;
console.log(num8);
num8 -= 3;
console.log(num8);
num8 *= 2;
console.log(num8);
num8 /= 4;
console.log(num8);
num8 %= 2;
console.log(num8);

//4. 증감 연산자
let num9 = 1;
console.log(num9++); //후위연산
console.log(num9);
console.log(++num9); //전위연산
console.log(num9);

//5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not);

//6. 비교 연산자
let equal = 1 === 1;
let notEqual = 1 !== 1;
console.log(equal, notEqual);

let greater = 10 > 5;
let greaterEqual = 10 >= 10;
let less = 10 < 5;
let lessEqual = 10 <= 5;
console.log(greater, greaterEqual, less, lessEqual);