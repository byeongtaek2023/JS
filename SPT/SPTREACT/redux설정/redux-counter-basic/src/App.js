// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import { PLUS_ONE,  MINUS_ONE } from './redux/modules/counter';
import { plusOne, minuOne } from './redux/modules/counter';
import { useEffect, useState } from 'react';
import { plusN, minusN } from './redux/modules/counter';


function App() {
const [number, setNumber] = useState(0);
  //여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!
  //useSelector라는 훅이 있음 
                            //store안에 있는 state
  const counter = useSelector((state)=>{
    return state.counter;
  });

  // useEffect(()=>{
  //   console.log('number ->'+ number )
  // },[number])
  
//dispatch 가져와보자 
const dispatch = useDispatch();


  // console.log("counter->", counter.number);

  return (
  <>
    <div> 현재 카운트 : {counter.number}</div>
   <div>
    <input type='number'
    value={number}
    onChange={(event)=>{
      setNumber(+event.target.value)
    }}/>
   </div>
    <button 
    onClick={()=>{
      //  //+1을 해주는 로직을 써주면 된다.
      //  dispatch({
      //   type:PLUS_ONE,
      //  });
      // dispatch(plusOne());
      dispatch(plusN(number));
    }}
    >
      +
      </button>
    <button 
    onClick={()=>{
      //  //-1을 해주는 로직을 써주면 된다.
      //  dispatch({
      //   type:MINUS_ONE,
      //  });
      // dispatch(minuOne());
      dispatch(minusN(number));
    }}
    >
      -
      </button>
    </>
  );
}

export default App;
