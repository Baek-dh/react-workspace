import React, { useContext, useState } from 'react';
import {TodoListContxet} from '../App'


const LoginComponent = () => {
    const {setTodoList, setLoginMember, loginMember} = useContext(TodoListContxet);

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');



    // 로그인
    const login = () => {
        fetch("/login", {
            method : 'post',
            headers : {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body : JSON.stringify({id:id, pw:pw})
        })
        .then(resp => resp.json())
        .then(map => {
            console.log(map);

            if(map.loginMember === null){
                alert('아이디 또는 비밀번호가 일치하지 않습니다');
                return;
            }

            setId('');
            setPw('');

            setLoginMember(map.loginMember);
            setTodoList(map.todoList);

        })
    }

    const logout = () =>{
        setLoginMember(undefined);
    }



    return (
        <div className="login-container">
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>
                            <input type="text" onChange={e => setId(e.target.value)} value={id} />
                        </td>
                    </tr>

                    <tr>
                        <th>PW</th>
                        <td>
                            <input type="password" onChange={e => setPw(e.target.value)} value={pw} />
                        </td>
                        <td>
                            <button onClick={login} >Login</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            {loginMember && (
                <button onClick={logout}>로그아웃</button>
            )}
        </div>
    );
}

export default LoginComponent;