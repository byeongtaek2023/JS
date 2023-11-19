import React, { useEffect, useState } from "react";
import Header from "components/Header";
import Form from "components/Form";
// import styled from 'styled-components';
import Foter from "components/Foter";

// const StBox = styled.div`
//   // width: 100px;
//   // height: 100px;
//   border: 1px solid ${(props) => props.borderColor}
//   margin: 20px;;
// `

function Home({ reRenderdata, setReRenderdata }) {
  const [selectMember, setSelectMember] = useState("카리나");

  //reRenderdata 처음 화면에 레터 표시.

  // Form 입력 데이터를 받아오기
  const updateDataFrom = (newCard) => {
    setReRenderdata([...reRenderdata, newCard]);
  };


  return (
    <div>
      <Header setSelectMember={setSelectMember} selectMember={selectMember} />
      <Form
        updateDataFrom={updateDataFrom}
        selectMember={selectMember}
        setSelectMember={setSelectMember}
      />
      <Foter reRenderdata={reRenderdata} selectMember={selectMember} />
    </div>
  );
}

export default Home;
