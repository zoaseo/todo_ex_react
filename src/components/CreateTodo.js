import React from 'react';

const CreateTodo = ({onChange, list, onCreate}) => {
    return (
        <div>
            <h2>to do list</h2>
            <div>
                <input type='text' value={list} name='newlist' onChange={onChange}/>
                <button onClick={onCreate}>+</button>
            </div>
        </div>
    );
};

export default CreateTodo;