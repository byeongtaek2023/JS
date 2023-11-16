import React from 'react'
import Header from 'components/Header';
import Form from 'components/Form';
import styled from 'styled-components';

const StBox = styled.div`
  // width: 100px;
  // height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`

function Home() {
    
  return (
    <StBox>
      <Header/>
      <Form/>
    </StBox>
  )
}

export default Home