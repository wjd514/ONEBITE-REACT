// 1. 객체 생성
let obj = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name: "홍길동",
    age: 16,
    hobby: "테니스",
    job: "도적",
    extra : {},
    10 : 20,
    "like cat" : true,
}

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; 
console.log(name);
let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

//3.2 새로운 프로퍼티 추가하는 방법
person.job = "도적";
person["favoriteFood"] = "라면";
console.log(person);

//3.3 프로퍼티 수정하는 방법
person.age = 20;
person["hobby"] = "게임";
console.log(person);

//3.4 프로퍼티 삭제하는 방법
delete person.job;
delete person["extra"];
console.log(person);

//3.5 프로퍼티 존재 여부 확인하는 방법 (in 연산자)
let result1 = "name" in person;
console.log(result1);
let result2 = "cat" in person;
console.log(result2);