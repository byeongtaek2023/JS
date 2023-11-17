import React, { useEffect,useState } from 'react'
import Header from 'components/Header';
import Form from 'components/Form';
import styled from 'styled-components';
import Foter from 'components/Foter';
import { data } from 'shared/data';


const StBox = styled.div`
  // width: 100px;
  // height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`
//useref이용해서 포커싱 해놔야겠네.
function Home() {
  const [reRenderdata,setReRenderdata] = useState(data);
  const [selectMember,setSelectMember] = useState('');

   // Form 입력 데이터를 받아오는 
   const updateDataFrom = (newCard) => {
    setReRenderdata([...reRenderdata, newCard]);
  };

  useEffect(()=>{
console.log('랜더링 일어나나');
  },[reRenderdata])

//헤더 클릭 멤버 받아오기 
  const selectMemHandler = (member) => {
 setSelectMember(member);
  }


  return (
    <StBox>
      <Header selectMemHandler={selectMemHandler}/>
      <Form updateDataFrom={updateDataFrom} />
      <Foter reRenderdata={reRenderdata} selectMember={selectMember} />
    </StBox>
  )
}

export default Home