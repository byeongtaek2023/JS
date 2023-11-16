import React from 'react'
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


function Header() {
  return (
    <StContainer>
        <h1>에스파 팬레터 콜렉션</h1>
        <div>
        <Button>카리나</Button>
        <Button>윈터</Button>
        <Button>닝닝</Button>
        <Button>지젤</Button>
        </div>
    </StContainer>
  )
}

export default Header