import React from 'react';
import TodoList from './TodoList';

const TodoLists = ({todos, onDelete, onToggle}) => {
    return (
        <div>
            {todos.map(todo=><TodoList todo={todo} key={todo.id} onDelete={onDelete} onToggle={onToggle}/>)}
        </div>
    );
};

export default TodoLists;