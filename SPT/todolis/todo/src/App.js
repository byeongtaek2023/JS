import "./App.css";
import { useState } from "react";

export default function App() {
  // --------------제목 내용 입렵 값
  const [todos, setTodos] = useState([
    { id: "", title: " ", body: "", isDone: false },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const bodyHanlder = (event) => {
    setBody(event.target.value);
  };
  // ------------------ 입력값 추가
  const addTodoHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      title,
      body,
    };
    setTodos([...todos, newTodo]); //불변성을 유지하기 위해서
    setBody("");
    setTitle("")

  };
  // ---------- 입력값 제거
  const clickRemoveButtonHandler = (id) => {
    const newTodos = todos.filter(function (todo) {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };
  //------------- 포스트 위아래~
  const clickMoveButtonHandler = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className="title">
        <div>
        <label>제목</label>
        <input value={title} onChange={titleHandler} />
        <label>내용</label>
        <input value={body} onChange={bodyHanlder} />
        </div>
      <button onClick={addTodoHandler}>추가하기</button>
      </div>
      <div>
        <p>Working</p>
        <div  className="box">
        {todos.map(function (todo) {
          if (!todo.isDone) {
            return (
              <div className="post" key={todo.id}>
               <div>{todo.title}</div>
               <div>{todo.body}</div>
               <div className="btn">
                <button onClick={() => clickRemoveButtonHandler(todo.id)}>
                  delete
                </button>
                <button onClick={() => clickMoveButtonHandler(todo.id)}>
                  Done
                </button>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
        </div>
      </div>
      <div>
        <p>Done</p>
        <div  className="box">
        {todos.map(function (todo) {
          if (todo.isDone) {
            return (
              <div  className="post" key={todo.id}>
                <div>{todo.title}</div>
                <div>{todo.body}</div>
                <button onClick={() => clickRemoveButtonHandler(todo.id)}>
                  delete
                </button>
                <button onClick={() => clickMoveButtonHandler(todo.id)}>
                  move
                </button>
              </div>
            );
          } else {
            return null;
          }
        })}
        </div>
      </div>
    </div>
  );
}
