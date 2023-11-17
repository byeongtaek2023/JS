import React, { useState } from 'react'
import styled from 'styled-components';


const StContainer = styled.div`
display: flex;
justify-content: center;
box-sizing:border-box;
`

const Button = styled.button`

  &:hover{  
    background-color : skyblue;
    color : blue;
  
  }

`
// selectMemHandler,

function Header({ setSelectMember}) {
  const members = ['카리나', '윈터', '닝닝', '지젤'] 

//HOME에서 state변경 후 자식 요소에 뿌려주기 위해. 
  const buttonHanlder = (member) => {
    //이건 foter에 쓰기 위해 
    // selectMemHandler(member);
    //이건 form 멤버 일치 foter 멤버 일치
    setSelectMember(member);

  }

  return (
    <StContainer>
        <h1>에스파 팬레터 콜렉션</h1>
        <div>
          {members.map((member) =>{
            return (
            <Button 
            key={member}
            onClick={()=>{buttonHanlder(member)}}
          
            >{member}
            </Button>
          )})}
        

        </div>
    </StContainer>
  )
}

export default Header