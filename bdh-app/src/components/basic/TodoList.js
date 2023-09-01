import React, {useState, useContext, createContext, useRef} from 'react'
import UserContext from './context/UserContext';

const TodoContext = createContext(); // 전역에서 사용할 context 생성



const Todo = () => {
    let keyIndex = 0;

    const {todoList, handleToggleTodo, handleDeleteTodo} = useContext(TodoContext);

    // console.log(todoList);
    return(
        <ul>
            {todoList.map(  (todo, index) => (
                <li key={keyIndex++}>
                    <div>
                        <span className={todo.isDone ? 'todo-compleate' : ''}> {todo.title} </span>

                        <span>
                            <button onClick={()=>{handleToggleTodo(index)} }>{todo.isDone ? 'X' : 'O'}</button>
                            <button onClick={()=>{handleDeleteTodo(index)}}>삭제</button>
                        </span>
                        </div>
                </li>
            ))}
        </ul>
    );
}


const TodoList = () => {
    const inputEl = useRef(null);

    const [todoList, setTodoList] = useState([]);
    const [inputTodo, setInputTodo] = useState('');


    const handleAddTodo = () => {
        if(inputTodo.trim().length == 0){
            alert("할 일을 입력해주세요.");
            inputEl.current.focus();
            return;
        }

        const newTodoList = [...todoList, { title:inputTodo, isDone:false}];
        setTodoList(newTodoList); // todoList 추가
        setInputTodo(''); // input에 작성한 값 삭제
        inputEl.current.focus();
    }

    const handleToggleTodo = (index) => {
        const newTodoList = [...todoList];
        newTodoList[index].isDone = !newTodoList[index].isDone;
        setTodoList(newTodoList);
    };

    const handleDeleteTodo = (index) => {
        const newTodoList = [...todoList];
        newTodoList.splice(index,1);
        setTodoList(newTodoList)
    };

    return(

        <TodoContext.Provider value={ {todoList, handleToggleTodo, handleDeleteTodo} }>
            <div className="todo-container">
                <h1>Todo List</h1>

                <h3>할 일(Todo) 입력</h3>
                <div>
                    <input type="text" value={inputTodo} onChange={ e => setInputTodo(e.target.value) }  ref={inputEl}/>
                    <button onClick={handleAddTodo}>Todo 추가</button>
                </div>

                <Todo/>

                
            </div>

        </TodoContext.Provider>

    );
} 

export default TodoList;