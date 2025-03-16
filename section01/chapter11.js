//함수 선언
function greeting() {
    console.log('안녕하세요!');
}
console.log('함수 호출 전');
greeting(); //함수 호출
console.log('함수 호출 후');

//호이스팅
// -> 끌어올리다 라는 뜻
//function getArea() {
function getArea(width, height) {
    //let width = 10;
    //let height = 20;
    function another() {
        console.log('another');
    }
    another();
    let area = width * height;

    console.log(area);
    return area;
}

//getArea();
getArea(10,20);

let area = getArea(10,20);
console.log(area);

let area2 = getArea(30,40);
console.log(area2);