var obj = {
    a:1,
    method: function (x, y) {
        console.log(this.a, x, y);
    },
};

//methiod 함수 안의 this는 항상 obj!!
// obj.method(2, 3); //1 2 3 

//this를 명시적 binding
obj.method.call({ a:4 }, 5, 6);
//이 call이라는 메서드는 기존에 있엇던 메서드 뒤에 붙어서 즉시 실행 해주되
//앞에 this로 묶을 객체를 붙여주고 나서 나머지 매개변수를 넣어주면 된다
obj.method.apply({ a:4 }, [5, 6]);