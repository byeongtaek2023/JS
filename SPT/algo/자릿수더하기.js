function solution(n)
{    var answer = 0;

    let stringNum = n.toString().split('')
  
    
    stringNum.forEach((item)=>(
    answer += +item))
    return answer;
}