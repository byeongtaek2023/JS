import React, { useEffect,useState } from 'react'
import Header from 'components/Header';
import Form from 'components/Form';
// import styled from 'styled-components';
import Foter from 'components/Foter';
import { data } from 'shared/data';


// const StBox = styled.div`
//   // width: 100px;
//   // height: 100px;
//   border: 1px solid ${(props) => props.borderColor}
//   margin: 20px;;
// `


function Home() {
  const [reRenderdata,setReRenderdata] = useState(data);
  const [selectMember,setSelectMember] = useState('');
//reRenderdata 처음 화면에 레터 표시.

   // Form 입력 데이터를 받아오기 
   const updateDataFrom = (newCard) => {
    setReRenderdata([...reRenderdata, newCard]);
  };

  useEffect(()=>{
console.log('랜더링 일어나나');
  },[reRenderdata])

// //헤더 클릭 멤버 받아오기 푸터
//   const selectMemHandler = (member) => {
//  setSelectMember(member);
//   }

// selectMemHandler={selectMemHandler}
  return (
    <div>
      <Header setSelectMember={setSelectMember}/>
      <Form updateDataFrom={updateDataFrom} selectMember={selectMember} setSelectMember={setSelectMember}/>
      <Foter reRenderdata={reRenderdata} selectMember={selectMember} />
    </div>
  )
}

export default Home