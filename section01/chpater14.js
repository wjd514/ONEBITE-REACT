// 스코프
// -> 전역(전체 영역) 스코프 지역(특정 영역) 스코프
// -> 전역 스코프는 코드의 모든 범위에서 사용 가능
// -> 지역 스코프는 특정 코드 블록 내에서만 사용 가능

let a = 1; // 전역 스코프
function funcA() {
    let b = 1; // 지역 스코프
    console.log(a);
    function funcB() {}
}

funcA();
console.log(b); // b is not defined

if(true) {
    let c = 3; // 지역 스코프
}
console.log(c); // c is not defined

for(let i=0; i<5; i++) {
    let d = 1;
}   
console.log(d); // d is not defined

funcB(); // funcB is not defined