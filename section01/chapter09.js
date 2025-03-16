// 1. if 조건문 (if문)
let num = 10;
if(num >= 10){
    console.log("num은 10 이상입니다.");
    console.log("조건이 참 입니다!");
}else if(num >= 5){
    console.log("num은 5 이상입니다.");
}else{
    console.log("num은 10 이하입니다.");
    console.log("조건이 거짓 입니다!");
}

// 2. switch 조건문 (switch문)
// -> if문과 기능 자체는 도일
// -> 다수의 조건을 처리할 때 if문 보다 직관적이다
let animal = "cat";
switch(animal){
    case "dog":
        console.log("강아지");
        break;
    case "cat":
        console.log("고양이");
        break;
    case "lion":
        console.log("사자");
        break;
    default:
        console.log("동물을 찾을 수 없습니다.");
}