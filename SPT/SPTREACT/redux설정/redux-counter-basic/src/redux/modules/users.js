//초기 상태값 (state)
const initalState = {
    userID: 123,
};
//const [number,setNumber] = useState(0)

//리듀서 : 'state에 변화를 일으키는' 함수
//(1) state를 action의 type에 따라 변경하는 함수 
 
//input : state와 action
const users = (state = initalState, action) => { 
    switch(action.tpye) {
        default:
            return state;
    }
}

export default users;