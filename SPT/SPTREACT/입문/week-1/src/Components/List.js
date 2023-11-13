import React from "react";
import './List.css';
import Todo from "./Todo";

export default function List ({todos, setTodos}) {
    const onDeleteHandler = (todoId) => {
        const newTodos = todos.filter((todo)=>{
            return todo.id !== todoId;
        });
        setTodos(newTodos);
    }
    
    const onEditHandler = (todoId) => {
        const newTodos = todos.map((todo)=>{
            if(todo.id===todoId){
                return {
                    ...todo,
                    isDone: !todo.isDone,
                };
            } else {
                return {...todo};
            }
        });
        setTodos(newTodos);
    }
    
    return(
        <div className="list-container">
            <h2 className="list-tilte">Working..</h2>
            <div className="list-wrapper">
                {todos.map((todo)=>{
                    if(!todo.isDone){
                        return(
                            <Todo
                            todo={todo}
                            key={todo.id}
                            setTodos={setTodos}
                            onDeleteHandler={onDeleteHandler}
                            onEditHandler={onEditHandler}
                            />
                        );
                    }else{
                        return null;
                    }
                })}
            </div>
            <h2 className="list-title">Done..!</h2>
            <div className="list-wrapper">
                {todos.map((todo)=>{
                    if (todo.isDone){
                        return(
                            <Todo
                            todo={todo}
                            key={todo.id}
                            setTodos={setTodos}
                            onDeleteHandler={onDeleteHandler}
                            onEditHandler={onEditHandler}
                            />
                        );
                    }else{
                        return null;
                    }
                })}
            </div>
        </div>
    );
}