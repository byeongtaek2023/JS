import Home from "pages/Home";
import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "pages/Details";
import { data } from "./data";



const Router = () => {
  const [reRenderdata,setReRenderdata] = useState(data);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home reRenderdata={reRenderdata} setReRenderdata={setReRenderdata}/>}/> 
        <Route path="/details/:id" element={<Details reRenderdata={reRenderdata} setReRenderdata={setReRenderdata}/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;