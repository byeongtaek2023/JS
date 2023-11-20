function solution(n) {
    //나머지 1되는 값 찾고 push하고 배열0번째 값 산출 
    var answer = [];
    console.log(n);
    for(i=0; i <= n ; i++){
        if (n%i === 1){
            answer.push(i);
        }

    }
    return answer[0];
};