import React, { useState } from 'react'; // imrs

// useState
// 컴포넌트를 다시 렌더링 시키라고 명령하기 위한 함수
// 리액트 라이브러리에서 제공


// 상태 끌어올리기
// React에서는 상위 컴포넌트가 하위 컴포넌트의 상태를 직접 변경할 수 없습니다. 

// 따라서 React에서는 하위 컴포넌트에서 발생한 이벤트를 
// 상위 컴포넌트에서 처리하도록 하는 상태 끌어올리기 패턴을 사용합니다.

const Id = ({onChangeId}) => {
    // onChangeId : 부모로 부터 전달받은 함수(props)

    return (
        // <> === <React.Fragment>
        // 함수형 컴포넌트는 감싸는 부모 요소가 없으면 오류가 발생하는데
        // 이를 위해 불필요한 html 요소를 사용하지 않게 해주는 태그 (해석 시 없어짐)
        <>
            <div className="wrapper">
                <label htmlFor="id">ID: </label>

                {/* 하위 요소 Id의 input 태그에서 onChange 이벤트가 발생하면 
                    부모로 부터 전달 받은 onChangeId 함수를 수행 */}
                <input type="text" id="id" onChange={onChangeId}/>
            </div>
        </>
    );
};


const Pw = ({onChangePw}) => {  
    // onChangePw : 부모로 부터 전달받은 함수(props)

    
    return (
        <>
            <div className="wrapper">
                <label htmlFor="pw">PW: </label>
                <input type="password" id="pw" onChange={onChangePw}/>
            </div>
        </>
    );
};


const StateLiftingUp = () => { 

    const [id, setId] = useState(""); // 처음에 빈문자열을 대입
    const [pw, setPw] = useState(""); // 처음에 빈문자열을 대입

    

    // 부모 컴포넌트(B06_StateLiftingUp)의 상태 변경 함수
    const onChangeIdHandler = e => {
        setId(e.target.value); // id의 상태값을 Id 컴포넌트 input 태그에 입력된 값으로 변경
    }
    
    // 부모 컴포넌트(B06_StateLiftingUp)의 상태 변경 함수
    const onChangePwHandler = e => {
        setPw(e.target.value); // pw의 상태값을 Pw 컴포넌트 input 태그에 입력된 값으로 변경
    }

    return (
        <>
            {/* 부모 컴포넌트의 함수를 자식에게 전달 (props 이용)*/}
            <Id onChangeId={onChangeIdHandler}/> {/* props 이름 === onChangeId : 자식 컴포넌트 함수 매개변수에 작성 */}
            <Pw onChangePw={onChangePwHandler}/>{/* props 이름 === onChangePw : 자식 컴포넌트 함수 매개변수에 작성 */}

            <div className="wrapper">
                <button disabled = {id.length === 0 || pw.length === 0}>Login</button>    
            </div>        
        </>
    );

};


export default StateLiftingUp;