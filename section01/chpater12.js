//1. 함수 표현식
function funcA()    {
    console.log("funcA ");
}

let varA = funcA;
varA();

let varB = function() {
    console.log("funcB ");
}
varB();

//2. 화살표 함수
let varC = () => {
    return 1;;
}
console.log(varC());

let varD = (value) => value + 1;
console.log(varD(10));

let varE = (value) => {
    console.log(value);
    return value + 1;
}
console.log(varE(20));