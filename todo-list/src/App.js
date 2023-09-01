import './App.css';
import React, { useState, createContext } from 'react';

import SignupContainer from './components/Signup';
import Login from './components/Login';
import TodoList from './components/TodoList';


export const TodoListContxet = createContext(); // context 생성

function App() {

  const [todoList, setTodoList] = useState([]);
  const [loginMember, setLoginMember] = useState();

  const [signupView, setSignupView] = useState(false);

  return (
    <TodoListContxet.Provider value={ {todoList, setTodoList, loginMember, setLoginMember} }>
      <button onClick={() => { setSignupView(prev => !prev) }}>
        {signupView ? '회원 가입 닫기' : '회원 가입 열기'}
      </button>


      <div className="signup-wrapper">
        {signupView === true && (<SignupContainer />)}
      </div>


      <h1>Todo List</h1>
      
      <Login />
      <hr />

      { loginMember !== undefined && (<TodoList/>) }
      

    </TodoListContxet.Provider>
  );
}

export default App;
