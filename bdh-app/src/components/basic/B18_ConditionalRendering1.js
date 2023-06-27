import React, { useState } from 'react';


// if문을 이용한 조건부 렌더링
const Test1 = () => {
    const [visible, setVisible] = useState(false);

    if(visible){
        return(
            <button onClick={()=>setVisible(false)}>보이기</button>      
        );
    } 

    return(
        <>
            <button onClick={()=>setVisible(true)}>숨기기</button>      
            <h1>보이시나요??</h1>
        </>
    );
}


// 삼항 연산자
const Test2 = (props) => {
    return (
        <>
            {props.isLoggedin ? (
                <h2>로그인 성공!</h2>  
            ) :  (
                <h2>로그인 해주세요....</h2>  
            )}
        </>
    );
}







const Condition1 = () => {

    return (
        <>
            <Test1/>
            <Test2 isLoggedin={true}/>
            <Test2 isLoggedin={false}/>
        </>
    );
}

export default Condition1;