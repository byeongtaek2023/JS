//이런 패턴은 어떨까요? p3-05랑 비교
var copyObject = function(target) {
    var result = {};

for (var prop in target) {
    result [prop] = target[prop];
}
return result;
};

//위 패턴을 우리 예제에 적용해봅시다.
var user = {
    name : "wonjang",
    gender: "male"
};

var user2 = copyObject(user); //user를 복사할 떄는 항상 copyObject를 이용해서 복사한다는 거죠 
//복사를 하고나면 user2는 항상 user 와 항상 별개의 Object이다.는 것이 보장됨 - 얕은 복사/ 중첩된 객체는 안벽한 복사 안되어서 문제 발생 
user2.name = "twojang";

if (user !== user2) {
    console.log ("유저 정보가 변경되었습니다.")
}

console.log(user.name, user2.name);
console.log(user === user2);