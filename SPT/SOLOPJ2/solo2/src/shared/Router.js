import Home from "pages/Home";
import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "pages/Details";
import { data } from "./data";
import { FamilyContext } from "context/FamilyContext";



const Router = () => {
  const [reRenderdata,setReRenderdata] = useState(data);
  const [selectMember, setSelectMember] = useState("카리나");
  const updateDataFrom = (newCard) => {
     setReRenderdata([...reRenderdata, newCard]);
  };
  
  
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