//action value
export const PLUS_ONE = 'PLUS_ONE';

//action creator : action value를 return하는 함수 
export const plusOne = () =>{
    return(
        type: PLUS_ONE,
    )
};

//초기 상태값 (state)
const initialState = {
    userId : 123,
};
//const [number, setnumber] = useState (0);


//리듀서 : 'state에 변화를 일으키는' 함수
//(1) state를 action의 type에 따라 변경하는 함수 

//input : state와 action
const members = (state = initialState, action) => {
    switch (action.type){ 
        case PLUS_ONE :
        return {
            number : state.number + 1
        };
        default:
            return state;
    }
}

export default members;