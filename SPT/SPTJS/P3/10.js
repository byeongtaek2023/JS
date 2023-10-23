//명시적 this binding
//call, apply, bind
var func = function (a, b, c) {
    console.log(this, a, b, c);
};

//no binding
// func(1, 2, 3);

//명시적 binding
func.call({x:1}, 4, 5, 6);
func.apply({x:1}, {4, 5, 6});
//call과 똑같은 몽양에 똑같은 기능을 하는 메서드가 있는데
//뒤에 있는 매개변수를 [ ] 로 묶어준 것만 다름 