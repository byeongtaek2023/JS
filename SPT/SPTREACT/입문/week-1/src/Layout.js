import React from 'react'

function Layout(props) {
  return (
    <>
    <hearder
    style={{
        margin: '10px',
        border: '1px solid red'
    }}
    >항상 출력되는 머릿글입니다.
    </hearder>
    {props.chilren}
    </>
  );
}

export default Layout