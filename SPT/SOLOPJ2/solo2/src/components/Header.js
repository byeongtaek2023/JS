import React, { useState } from 'react'
import styled from 'styled-components';

// const MemberContainer = styled.idv`

// `

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


function Header({selectMemHandler}) {
  const members = ['카리나', '윈터', '닝닝', '지젤'] 
  const [selectedMem, setSelcetedMem] = useState('');
//부모 요소 state 위해 멤버 선택을 하고 헤더에서 선택도 하고 
  const buttonHanlder = (member) => {
    setSelcetedMem(member);
    selectMemHandler(member);

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
            // className={selectedMem === member ? 'selected' : ''}
            >{member}
            </Button>
          )})}
        

        </div>
    </StContainer>
  )
}

export default Header