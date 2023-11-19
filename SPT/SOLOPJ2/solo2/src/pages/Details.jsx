import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
const Textarea = styled.textarea`
width : 700px;
height : 100px;
resize : none;
`


function Details({ reRenderdata, setReRenderdata }) {
  const navigate = useNavigate();
  const { id } = useParams();
  //수정중
  const [isEditing, setIsEditing] = useState(false);
  //수정된값
  const [editedContent, setEditedContent] = useState("");
  

  // 아이디 값이 같은 것 찾기 
  const FindSameRenderData = reRenderdata.find(
    (item) => item.id.toString() === id.toString()
  );

      // 레터삭제
  const removeButtonHandler = (id) => {
    const askDelete = window.confirm("삭제하시겠습니까?");
    if(askDelete===true){
    const deletedData = reRenderdata.filter((data) => data.id !== id);
    
    setReRenderdata(deletedData);
    navigate("/");
  }
  };

  // 내용수정
  const editButtonHandler = () => {
    setIsEditing(true);
    setEditedContent(FindSameRenderData.content);
  };
  //내용저장
  const saveButtonHandler = () => {
    if (editedContent === FindSameRenderData.content) {
      alert("아무런 수정사항이 없습니다.");
      return;}

      //내용 수정
    const updatedData = reRenderdata.map((data) =>
      data.id === FindSameRenderData.id ? { ...data, content: editedContent } : data
    );
    setReRenderdata(updatedData);
    setIsEditing(false);
  };


  return (
    <li>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <div>
        <img src={FindSameRenderData.avatar} alt={""} />
      </div>

      <div>
        <h3>{FindSameRenderData.nickname}</h3>
        {isEditing ? (
          <Textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        ) : (
          <p>{FindSameRenderData.content}</p>
        )}
        <p>작성 대상: {FindSameRenderData.writedTo}</p>
        <p>작성 일자: {FindSameRenderData.createdAt}</p>
        {isEditing ? (
          <button onClick={saveButtonHandler}>저장</button>
        ) : (
          <>
            <button onClick={editButtonHandler}>수정</button>
            <button onClick={() => removeButtonHandler(FindSameRenderData.id)}>삭제</button>
          </>
        )}
      </div>
    </li>
  );
}

export default Details;
