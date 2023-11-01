//bind 메서드
//-> this를 바인딩하는 메서드 
//call, apply와는 좀 다름. 즉시 호출하지는 않아요.
//.bind 하면은 함수를 바로 호출하는 게 아니라 해당하는 함수를 this 바인딩해서 
//새로운 함수를 return합니다 그럼 새로운 함수return한 것을 어떤 변수가 다시 받아야겠죠
//다시 저장해야겠죠 그 다음에 사용하게 끔 하는게 바로 바인드.

//[목적]
//1. 함수에 This를 '미리' 적용
//2. 부분 적용 함수 !

var func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
};
func(1, 2, 3, 4); //window객체 노드는 global 객체

//함수에 this를 미리 적용!!
var bindFunc1 = func.bind({x: 1});//bind하고 나서 새로운 함수를 return 해줌
bindFund1(5, 6, 7, 8);

//부분 적용 함수 <-여기서 다시 
var bindFunc2 = func.bind({x:1}, 4, 5);
bindFunc2(6, 7);

console.log(func.name)
console.log(bindFunc1.name)
console.log(bindFunc2.name)



//name 프로퍼티!!
//bind 메서드를 이용해서 적용한 새로 만든 그 함수는요
//name 프로퍼티를 가지고 있어요 
//name 프로퍼티는 그 어느 함수든 갖고 있는데 
//거기에 의미 있는 값이 들어있습니다 그게 뭐냐면 
//bind - 'bound' 라는 접두어!