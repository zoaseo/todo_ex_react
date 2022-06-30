import './App.css';
import { useState, useRef, useReducer } from 'react';
import TodoLists from './components/TodoLists';
import CreateTodo from './components/CreateTodo';
const initial = {
    todos: [
        {
            id: 1,
            list: "해야할일1",
            isDone: false,
        },
        {
            id: 2,
            list: "해야할일2",
            isDone: false,
        },
        {
            id: 3,
            list: "해야할일3",
            isDone: false,
        }
    ],
    inputs: {
        list: "",
    }
}
function reducer(state, action){
    switch(action.type){
        case "CHANGE":
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    value: action.value,
                }
            };
        case "CREATE":
            return {
                inputs: initial.inputs,
                todos: state.todos.concat(action.todo),
            };
        case "DELETE":
            return {
                ...state,
                todos: state.todos.filter(todo=> todo.id !== action.id),
            };
        case "TOGGLE":
            return {
                ...state,
                todos: state.todos.map(todo=>
                    todo.id === action.id ? {...todo, isDone: !todo.isDone } : todo),
            };
        default:
            return state;
    }
}
function App() {
  const [ state, dispatch ] = useReducer(reducer, initial);
  const {todos} = state;
  const {list} = state.inputs;
  
  const onChange = (e) => {
    const { value }= e.target;
    dispatch({
        type: "CHANGE",
        value: value,
    })
  }
  const onCreate = () => {
    dispatch({
        type: "CREATE",
        todo: {
            id: nextId.current,
            list: list,
            isDone: false,
        }
    })
    nextId.current +=1;
  }
  const onDelete = (id) => {
    dispatch({
        type: "DELETE",
        id: id,
    })
  }
  const onToggle = (id) => {
      dispatch({
          type: "TOGGLE",
          id: id,
      })
  }

 
  const nextId = useRef(todos.length+1);

  return (
    <div className="App">
      <CreateTodo list={list} onChange={onChange} onCreate={onCreate}/>
      <TodoLists todos={todos} onDelete={onDelete} onToggle={onToggle}/>
    </div>
  );
}

export default App;
