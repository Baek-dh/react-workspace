import React, { useState } from "react";
// 이벤트 발생 시 컴포넌트를 다시 랜더링해주기 위한 리액트 제공 함수

import './App.css';
import Title from "./Title";

function App() {
  /*
    const titleText = "테스트 중입니다.";
  
    const clickHandler = () => {
      // document.getElementById("title").innerText = "변경된 제목";
  
    };*/

  const [titleText, setTitleText] = useState("변경 전");
  // [titleText, setTitleText] 
  // 첫 번쨰 인자 : 값 을 저장할 인자, 
  // 두 번째 인자 : 변수 값의 변화를 감지하여 컴포넌트를 리랜더링하는 함수 반환 인자

  // 리액트에서 use가 붙은 함수를 hook이라고 표현함
  // ** hook은 컴포넌트 안에서 실행되어야함 **


  const clickHandler = () => {
    // setTitleText("*****변경 후*****");

    // titleText를 바꿔 컴포넌트를 리랜더링하는 setTitleText는
    // 매개 변수로 콜백함수를 작성할 수 있다
    // 콜백 함수의 매개변수는 현재 titleText에 할당된 값이다.

    setTitleText(prev => prev === '변경 전' ? '변경 후' : '변경 전');
  };



  // ID 입력
  const [inputId, setInputId] = useState("");
  
  // onChange={inputIdHandler} ID 입력 동작
  const inputIdHandler = (e) => {
    console.log(e.target.value);
    setInputId(e.target.value) //setInputId()에 매개변수로 입력된 값을 전달해서 화면에서도 input에 입력됨
    //**  텍스트 입력 시 마다 컴포넌트가 리랜더링 되기 때문에 컴포넌트 분할에 더 신경써야한다  **/
  }
  
  // message 입력
  const [message, setMessage] = useState("");

  const inputMessageHandler = e => {
    setMessage(e.target.value);
  }

  const onGetData = (newData) => {
    console.log(`new Data : ${newData}`);
  }


  
  return (
    <div className="title-center">
      {/* props : 부모 컴포넌트가 자식 컴포넌트에 전달하는 데이터(객체) */}
      {/* 부모가 자식에게 props 전달 */}
      <Title message={titleText} onGetData={onGetData}/>
      <button onClick={clickHandler}>change Title</button>

      <ul>
        <li>
          <label>ID : <input type="text" value={inputId} onChange={inputIdHandler}/></label>

        </li>

        <li>
          <label>Message : <input type="text" value={message} onChange={inputMessageHandler}/></label>
        </li>

      </ul>

    </div>
  );

}


export default App;
