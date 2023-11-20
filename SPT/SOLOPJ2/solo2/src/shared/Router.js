import Home from "pages/Home";
import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "pages/Details";
import { FamilyContext } from "context/FamilyContext";
import { useDispatch, useSelector } from 'react-redux';
import { data } from "./data";
// import { PLUS_ONE } from "redux/modules/members";

const Router = () => {
  const [reRenderdata,setReRenderdata] = useState(data);
  const [selectMember, setSelectMember] = useState("카리나");
  const updateDataFrom = (newCard) => {
     setReRenderdata([...reRenderdata, newCard]);
  };




  //여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!  
//useSelector
const date=  useSelector((state )=>{
  return state;
}); 
console.log("date",date);

//dispatch를 가져와보자
const dispatch = useDispatch();
//return문에 
// onclick={()=>{
//   dispatch({
//     type : 'PLUS_ONE',
//     payload: '', 
//   });
// }}

  
  return (
    <FamilyContext.Provider value={{
      reRenderdata,
      setReRenderdata,
      selectMember,
      setSelectMember,
      updateDataFrom
    }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/details/:id" element={<Details />}/>
      </Routes>
    </BrowserRouter>
    </FamilyContext.Provider>
  );
};

export default Router;