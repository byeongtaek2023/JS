// import React, { useEffect, useRef, useState } from 'react'
import { FamilyContext } from 'context/FamilyContext';
import { useContext } from 'react';
import styled from 'styled-components';


const StContainer = styled.div`
display: flex;
justify-content: center;
box-sizing:border-box;
`

const Button = styled.button`
background-color : ${(props)=> { return props.$member ? 'skyblue' : 'transparent'}};
 
  
  }

`

function Header() {
  console.log("Header이 렌더링되었습니다.");
  const data = useContext(FamilyContext)
  const members = ['카리나', '윈터', '닝닝', '지젤'] 

//HOME에서 state변경 후 자식 요소에 뿌려주기 위해. 
  const buttonHanlder = (member) => {
    //이건 form 멤버 일치 foter 멤버 일치
    data.setSelectMember(member);
  };


  return (
    <StContainer>
        <h1>에스파 팬레터 콜렉션</h1>
        <div>
          {members.map((member) =>{
            return (
            <Button 
            key={member}
            onClick={()=>{buttonHanlder(member)}}
            $member={member === data.selectMember}
            >{member}
            </Button>
          )})}
        

        </div>
    </StContainer>
  );
};

export default Header