import React, { useRef } from 'react';


// useRef 
// - DOM 노드나 다른 컴포넌트를 참조하여 직접 접근 할 수 있음
const UseRef = () => {

    // useRef 함수를 호출해서 Ref 객체를 생성
    const inputEl = useRef(null);

    const onButtonClick = () => {
        inputEl.current.focus(); // Ref 객체의 current 속성 
                                 // == ref 속성이 지정된 요소 도는 컴포넌트
    }

    return (
        <>
            {/* input DOM 요소를 inputEl(useRef()로 생성한 객체 )이 참조하게 함 */}
            <input ref={inputEl} type="text"/>  
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );

};


export default UseRef