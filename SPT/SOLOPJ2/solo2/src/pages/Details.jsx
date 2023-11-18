import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Details({ reRenderdata, setReRenderdata }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  
  const item = reRenderdata.find(
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
    setEditedContent(item.content);
  };
  //내용저장
  const saveButtonHandler = () => {
    const updatedData = reRenderdata.map((data) =>
      data.id === item.id ? { ...data, content: editedContent } : data
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
        <img src={item.avatar} alt={""} />
      </div>

      <div>
        <h3>{item.nickname}</h3>
        {isEditing ? (
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        ) : (
          <p>{item.content}</p>
        )}
        <p>작성 대상: {item.writedTo}</p>
        <p>작성 일자: {item.createdAt}</p>
        {isEditing ? (
          <button onClick={saveButtonHandler}>저장</button>
        ) : (
          <>
            <button onClick={editButtonHandler}>수정</button>
            <button onClick={() => removeButtonHandler(item.id)}>삭제</button>
          </>
        )}
      </div>
    </li>
  );
}

export default Details;
