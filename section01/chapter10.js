//for(초기식; 조건식; 증감식) {
for(let idx=0; idx<5; idx++) {
    // 실행문
    if(idx % 2 === 0){
        continue;
    }
    console.log(idx);
    if(idx >= 5){
        break;
    }
}
