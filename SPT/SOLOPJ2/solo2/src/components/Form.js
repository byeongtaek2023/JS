import React, { useState } from 'react'
import { v4 as uuid } from "uuid";
import styled from 'styled-components';

const StContainer = styled.div`
display: flex;
justify-content: center;
box-sizing:border-box;
`


function Form() {
const [Member, setMember]=useState("카리나");
const [nickname, setNickname]= useState("");
const [content, setContent]=useState("");
const [card, setCard] = useState ({
    id: uuid(),
    nickname: nickname,
    content: content,
    avatar: "",
    writedTo: Member,
    createdAt: new Date(),
  });


//닉네임 입력값 가져오기
const nicknameHandler = (e) =>{
    setNickname(e.target.value);
    console.log(e.target.value);
};

//내용 입력값 가져오기
const contentHandler = (e) => {
    setContent(e.target.value);
    console.log(e.target.value);
};

//멤버 선택 값 가져오기
const selectMem = (e) => {
    setMember(e.target.value);
    console.log(e.target.value);
}

// 코멘트 추가시 새로 작성
const addCommentHandler = () => {
    const newCard = {
        id: uuid(),
        nickname: nickname,
        content: content,
        avatar: " ",
        writedTo: Member,
        createdAt: new Date(),
    };
    setCard([...card, newCard]);
    setNickname("");
    setContent("");
}


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
       <select onChange={selectMem}>
        <option>멤버선택</option>
        <option value="카리나">카리나</option>
        <option value="윈터">윈터</option>
        <option value="닝닝">닝닝</option>
        <option value="지젤">지젤</option>
       </select>
       <button onClick={addCommentHandler}>팬레터등록</button>
    </StContainer>
  )
}

export default Form