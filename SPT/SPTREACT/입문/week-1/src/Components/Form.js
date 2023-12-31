import React, {useState} from "react";
import './Form.css';

let number = 3;
export default function Form ({setTodos, todos}) {
    const initialState ={
        id: 0,
        title: "",
        body: "",
        isDone: false,
    };

    const [todo, setTodo] = useState(initialState);
    const onChangeHandler = (event) => {
         const {name, value} = event.target;
         setTodo({...todo, [name]:value});
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(todo.title.trim()===""|| todo.body.trim()==="") return;
        setTodos([...todos,{...todo, id: number }]);
        setTodo(initialState);
        number++;
    };
    
    return (
        <form onSubmit={onSubmitHandler} className="add-form">
            <div className="input-group">
                <label className="form-label">제목</label>
                <input
                type="text"
                name="title"
                value={todo.title}
                className="add-input input-bdoy"
                onChange={onChangeHandler}
                />
                <label className="form-label">내용</label>
                <input
                type="text"
                name="body"
                value={todo.body}
                className="add-input"
                onChange={onChangeHandler}
                />
            </div>
            <button className="add-button">추가하기</button>
        </form>
    )
}