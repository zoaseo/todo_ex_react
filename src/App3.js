import './App.css';
import { useState, useRef, useReducer } from 'react';
import TodoLists from './components/TodoLists';
import CreateTodo from './components/CreateTodo';

const initialState = {
    list: "",
    todos: [
        {
            id:1,
            list: "리액트 공부하기",
            isDone: false,
        },
        {
            id:2,
            list: "타입스크립트 공부하기",
            isDone: false,
        },
        {
            id:3,
            list: "리덕스 공부하기",
            isDone: false,
        }
    ]
}
function reducer(state, action){
    switch(action.type){
        case "CHANGE_INPUT":
            return {
                ...state,
                list: action.list,
            };
        case "CREATE_TODO":
            return {
                list: "",
                todos: state.todos.concat(action.todo)
            };
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo=> todo.id !== action.id)
            };
        case "ISDONE_TODO":
            return {
                ...state,
                todos: state.todos.map(todo=>
                    todo.id === action.id ? {...todo, isDone: !todo.isDone} : todo)
            };
        default:
            return state;
    }
}
function App() {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { list, todos } = state;
    
  
  const onChange = (e) => {
    dispatch({
        type: "CHANGE_INPUT",
        list: e.target.value,
    })
    console.log(list);
  }
  const nexId = useRef(4);
  const onCreate = () => {
    dispatch({
        type: "CREATE_TODO",
        todo: {
            id: nexId.current,
            list: list,
            isDone: false,
        }
    })
  }
  const onDelete = (id) => {
    dispatch({
        type: "DELETE_TODO",
        id: id,
    })
  }
  const onToggle = (id) => {
    dispatch({
        type: "ISDONE_TODO",
        id: id,
    })
  }


  return (
    <div className="App">
      <CreateTodo list={list} onChange={onChange} onCreate={onCreate}/>
      <TodoLists todos={todos} onDelete={onDelete} onToggle={onToggle}/>
    </div>
  );
}

export default App;
