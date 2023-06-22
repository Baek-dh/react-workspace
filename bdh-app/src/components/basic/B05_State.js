import React, { useState } from 'react'



// state
// 하나의 컴포넌트 안에서 전역 변수처럼 사용되는 변수로
// 컴포넌트 상태값을 관리함

// useState
// 컴포넌트를 다시 렌더링 시키라고 명령하기 위한 함수
// 리액트 라이브러리에서 제공


/* use라는 단어가 붙은 함수를 hook 이라고 부름  */
/* 
클래스 구성 요소 없이 기능적 구성 요소에서 상태 저장 논리를 사용하는 방법을 제공합니다. 
React 기능에 "연결"할 수 있는 기능입니다. 
가장 일반적으로 사용되는 후크는 기능 구성 요소에 상태를 추가할 수 있는 
useState 후크입니다.
*/


function State(props){
    const [test, setTest] = useState(props.test);
    
    const onChangeTest = () => {
        // setTest("update string");

        setTest(prev => {
            if(prev === 'test string'){
                return 'update string';
            }else{
                return 'test string';
            }
        })
    }

    return (
        <>
            <div>{test}</div>
            <button onClick={onChangeTest}>change test</button>
        </>

    );

}

export default State;