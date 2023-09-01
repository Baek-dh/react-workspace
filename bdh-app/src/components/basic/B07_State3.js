import React, { useState } from 'react';

const InputName = () => {

    const [name, setName] = useState('홍길동');

    return (
        <div>
            <p>이름을 입력하세요</p>
            <input type="text" value={name} onChange={ e => setName(e.target.value)}/>
        </div>
    );
}




const Todo = () => {
    const [todos, setTodos] = useState([
        {text : '리액트 공부', completed : false},
        {text : '점심 먹기', completed : true}
    ]); // 객체 배열
    
    /** 체크박스가 변했을 때 수행되는 함수 */
    const todoChangeHandler = (index) => {
        const newTodos = [...todos]; // 전개 연산자를통해 새로 만들어진 배열을 newTodos에 대입

        newTodos[index].completed = !newTodos[index].completed; // index 번째 체크박스가 변하게되면 completed 값을 반대로 변환
       
        setTodos(newTodos); // 바뀐 배열을 todos에 다시 세팅
    }

    
    const InputTodo = () => {
        const [inputText, setInputText] = useState('');

        const addTodo = () => {
            const newTodo = {text:inputText, completed:false};

            const newTodos = [...todos, newTodo];

            setTodos(newTodos);
            setInputText('');

        }
    
        return (
            <div>
                <p>할일 추가</p>
                <input type="text" value={inputText} onChange={ e => setInputText(e.target.value)}/>
                <button onClick={addTodo}>추가하기</button>
            </div>
        );
    }




    // 배열.map((요소, 인덱스) => { return 값; } ) : 배열을 반복 접근하여 리턴되는 값을 이용해 새로운 배열을 만들어 반환
    return(
        <div>
            <InputName/>

            <hr/>

            <h1>Todo List</h1>

            <InputTodo/>

            <ul>
                {
                    todos.map((todo, index) => {
                        return (
                            <li key={index}>
                                <input
                                    type='checkbox'
                                    checked={todo.completed}
                                    onChange={() => todoChangeHandler(index)}
                                />
                                <span 
                                    className={todo.completed ? 'completed' : ''}
                                >{todo.text}</span>
                                
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}


export default Todo;