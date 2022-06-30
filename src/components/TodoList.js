import React from 'react';
import './TodoList.css';

const TodoList = ({todo, onDelete, onToggle}) => {
    return (
        <div>
            <span className={todo.isDone ? 'isDone' : ""} onClick={()=>{ onToggle(todo.id) }}>
                {todo.list}
            </span>
            <button onClick={()=>{ onDelete(todo.id) }}>X</button>
        </div>
    );
};

export default TodoList;