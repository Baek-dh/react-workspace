
import React, { useState } from 'react';

const SignupContainer = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [name, setName] = useState('');
    const [result, setResult] = useState('');

    const [idValidation, setIdValidation] = useState(false);

  
    // const idCheck = (value) => {
    //   if(value.trim().length < 4){
    //     setIdValidation(false);
    //     return;
    //   }

    //   fetch("/idCheck?id=" + value)
    //   .then(resp => resp.text())
    //   .then(result => {
    //     console.log(result);
    //     return result;
    //   });
    // }


    const idChangeHandler = async (e) => {

      const value = e.target.value.trim();

      if(value.length < 4){
        return;
      }

      await fetch("/idCheck?id=" + value)
      .then(resp => resp.text())
      .then(resultValue => {
        // console.log(resultValue);
        // result = resultValue;

        
        if(Number(resultValue) === 0){
          setId(value);
          setIdValidation(true);
        }else{
          setIdValidation(false);
        }
      });

    }




    const signup = () => {

      if(pw !== pwCheck){
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }

      fetch("/signup", {
        method : 'post',
        headers : { 
          'Content-Type': 'application/json'
          //,'Accept': 'application/json'
        },
        body : JSON.stringify({id : id, pw : pw, name : name})
      })
      .then(resp => resp.text())
      .then(result => {
        console.log(result);
  
        if(result > 0) {
          setResult('가입 성공');
          setId('');
          setPw('');
          setName('');
        }
        else setResult('같은 아이디가 존재합니다');
      })
      .catch( e => {
        console.log('에러');
        console.log(e);
      });
    }
    

    return (
      <>
        <div className="signup-container">
          <label> ID : <input type="text" 
                              className={!idValidation ? 'id-error': ''}
                              onChange={e => {
                                // setId(e.target.value);
                                idChangeHandler(e)
                              }}/> </label>

          <label> PW : <input type="password" onChange={e => setPw(e.target.value)}/> </label>

          <label> PW Check : <input type="password" onChange={e => setPwCheck(e.target.value)}/> </label>

          <label> NAME : <input type="text" onChange={e => setName(e.target.value)}/> </label>
          <button onClick={signup}>가입</button>
          <h3>{result}</h3>
        </div>    
      </>
    );
}

export default SignupContainer;