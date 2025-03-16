//1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

animal.age = 2;   // 객체 프로퍼티 추가
animal.name = "까망이";   // 객체 프로퍼티 수정
delete animal.color;    // 객체 프로퍼티 삭제

//2. 메서드
//-> 값이 함수인 프로퍼티를 말함
const person = {
    name: "홍길동",
    //메서드 선언
    sayHi: function(){
        console.log("안녕하세요!");
    },
    sayBye: function(){
        console.log("안녕히가세요!");
    },
};

person.sayHi(); // 메서드 호출
person["sayBye"](); // 메서드 호출