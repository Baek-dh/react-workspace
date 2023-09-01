import React, { useContext, useState, useRef } from 'react';
import { TodoListContxet } from '../App'


const TodoList = () => {
    const { todoList, setTodoList, loginMember } = useContext(TodoListContxet);

    const [inputTodo, setInputTodo] = useState('');

    const inputEl = useRef(null);

    // todo 추가
    const handleAddTodo = async () => {
        if (inputTodo.trim().length === 0) {
            alert("할 일을 입력해주세요.");
            inputEl.current.focus();
            return;
        }

        await fetch("/todo", {
            method : 'post',
            headers : {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body : JSON.stringify({
                title : inputTodo,
                todoMemberNo : loginMember.todoMemberNo
            })
        })
        .then(resp => resp.text())
        .then(todoNo => {
            
            if(todoNo > 0){
                const newTodo = {todoNo : todoNo, title: inputTodo, isDone: 'X', todoMemberNo : loginMember.todoMemberNo }

                const newTodoList = [...todoList, newTodo];
                setTodoList(newTodoList); // todoList 추가
                setInputTodo(''); // input에 작성한 값 삭제
                inputEl.current.focus();

            }else{
                alert('추가 실패')
            }
        })
        .catch( e => {
           console.log(e); 
        });


    }

    // todo o,x 변경
    const handleToggleTodo = async (todo, index) => {

        await fetch("/todo", {
            method : 'put',
            headers : {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body : JSON.stringify({
                todoNo : todo.todoNo,
                isDone : todo.isDone === 'O' ? 'X' : 'O'
            })
        })
        .then(resp => resp.text())
        .then(result => {
            if(result > 0){
                const newTodoList = [...todoList];
                newTodoList[index].isDone = todo.isDone === 'O' ? 'X' : 'O';

                console.log(newTodoList);
                setTodoList(newTodoList);
            }
        })
    };


    // todo 삭제
    const handleDeleteTodo = async (todoNo, index) => {
        await fetch("/todo", {
            method : 'delete',
            headers : {'Content-Type': 'application/json'},
            body :todoNo
        })
        .then(resp => resp.text())
        .then(result => {
            if(result > 0){
                const newTodoList = [...todoList];
                newTodoList.splice(index, 1);
                setTodoList(newTodoList)
            }
        })
    };

    let keyIndex = 0;

    return (
        <>
            <h1>{loginMember.name}의 To Do List</h1>
            <div className="todo-container">

                <h3>할 일(Todo) 입력</h3>
                <div>
                    <input type="text" value={inputTodo} onChange={e => setInputTodo(e.target.value)} ref={inputEl} />
                    <button onClick={handleAddTodo}>Todo 추가</button>
                </div>

                <ul>
                    {todoList.map((todo, index) => (
                        <li key={keyIndex++}>
                            <div>
                                <span className={todo.isDone === 'O' ? 'todo-compleate' : ''}> {todo.title} </span>

                                <span>
                                    <button onClick={() => { handleToggleTodo(todo, index) }}>{todo.isDone}</button>
                                    <button onClick={() => { handleDeleteTodo(todo.todoNo, index) }}>삭제</button>
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    );
}

export default TodoList;