function solution(arr) {
    let sum = arr.reduce((accumulator,currentValue)=>(accumulator+currentValue),0) 
    return sum/arr.length
    }