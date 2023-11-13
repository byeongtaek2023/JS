//action value
 const PLUS_ONE = "counter/PLUS_ONE";
 const MINUS_ONE= "counter/MINUS_ONE";
 const PLUS_N = "counter/PLUS_N";
const MIUNS_N = "counter/MINUS_N";
//action creator : action value를 return하는 함수
export const plusOne = () =>{
    return{
        type: PLUS_ONE,
    }
}

export const minuOne = () => {
    return{
        type: MINUS_ONE,
    }
}

export const plusN = (playload) => {
    return {
        type : PLUS_N,
        payload: payload,
    }
}
export const minusN = (playload) => {
    return {
        type : MIUNS_N,
        payload,
    }
}

//초기 상태값 (state)
const initalState = {
    number: 0,
};
//const [number,setNumber] = useState(0)

//리듀서 : 'state에 변화를 일으키는' 함수
//(1) state를 action의 type에 따라 변경하는 함수 
 
//input : state와 action
//action 객체라는 것은 action type을 payload만큼 처리하는 것이다!!
//ex : playload가 3이다. 3만큼 plus 
const counter = (state = initalState, action) => { 
    // console.log(state);
    switch(action.tpye) {
        case PLUS_ONE:
            return {
                number: state.number + 1,
            };

        case MINUS_ONE:
            return {
                number: state.number - 1,
            };
        case PLUS_N:
            return{
                number:state.number + action.payload
            }
        case MINUS_N:
            return{
                number:state.number - action.payload
            }
        default:
            return state;
    }
};

export default counter;