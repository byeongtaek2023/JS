//while


// while(조건) {
    //메인로직
    //증감
// }

// while ( i <10 ) {
//     console.log(i);
//     i++;
// }

//for (초기값; 조건; 증감) {

//}

//for문이랑 while문이랑 메너키즘은 똑같음


//while문을 활용해서, 3초과 100 미만의 숫자 중 5의 배수인 것만 출력하는 예
// let i = 3;
// while ( i<100 ){
//     if (i % 5 === 0 && i >= 5){
//         console.log(i);
//     }
//     // i ++ ; 이거 안하면 무한 루프 됨 
// }

// do ~ while do를 먼저 한 다음에 while을 시햄 

// let i = 0;

// do {
// console.log(i); 
// i++;
// } while (i < 10);

//break
// for ( let i = 0; i <11 ; i++) {
//     if(i === 5) {
//         break; // break 문을 만나면 for문을 멈춘다
//     }
//     console.log(i);
// }
// break문과 상당히 유사한게 continue문

for ( let i = 0; i <11 ; i++) {
    if(i === 5) {
        continue; // continue는 다음 순서로 넘어간다.
    }
    console.log(i);
}

