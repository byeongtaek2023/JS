import React, { useContext, useState } from 'react'
import { v4 as uuid } from "uuid";
import styled from 'styled-components';
import { FamilyContext } from 'context/FamilyContext';


const StContainer = styled.div`
display: flex;
justify-content: center;
box-sizing:border-box;
`


function Form() {
  console.log("Form이 렌더링되었습니다.");
  const data = useContext(FamilyContext) 
const [nickname, setNickname]= useState('');
const [content, setContent]=useState('');


//닉네임 입력값 가져오기
const nicknameHandler = (e) =>{
    setNickname(e.target.value);
};

//내용 입력값 가져오기
const contentHandler = (e) => {
    setContent(e.target.value);

};

//멤버 선택 값 가져오기 
const selectMem = (e) => {

    //Home state에 입력값 
    data.setSelectMember(e.target.value);
}


// 코멘트 추가시 새로 작성
const addCommentHandler = () => {
  //content, nickname 유효성 검사
  if(nickname.trim() ===''){
    alert('닉네임을 입력해주세요.')
    return;
  };

  if(content.trim()===''){
    alert('내용을 입력해주세요.')
    return;
  };

  const newCard = {   
    id: uuid(), 
    nickname: nickname, 
    content: content,  
    avatar: 'https://images.unsplash.com/photo-1561962534-50ff147395c3?w=125&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fCVFQyU5RCVCNSVFQiVBQSU4NSVFQyU5RCU5OHxlbnwwfHwwfHx8MA%3D%3D', 
    writedTo: data.selectMember,
    createdAt: new Date().toString(),
  };
  data.updateDataFrom(newCard);
  setNickname('');
  setContent('');
};



  return (
    <StContainer>
       <label>닉네임</label>
        <input value={nickname} 
        placeholder='최대 20글자까지 작성'
        maxLength={20}
        onChange={nicknameHandler}/>
      
       <label>내용</label>
       <input value={content}
       placeholder='최대 100자까지만 작성'
       maxLength={100}
       onChange={contentHandler}/>
       <select  value={data.selectMember} onChange={selectMem}>
        <option value='카리나'>카리나</option>
        <option value='윈터'>윈터</option>
        <option value='닝닝'>닝닝</option>
        <option value='지젤'>지젤</option>
       </select>
       <button onClick={addCommentHandler}>팬레터등록</button>
    </StContainer>
  )
}

export default Form