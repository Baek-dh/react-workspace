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


// 논리 연산자 (&&) : true일때만 출력

const Test3 = (props) => {

    return(
        <div>
            <h1>논리 연산자</h1>
            {props.unreadMessages !== undefined && (
            <h2>You have {props.unreadMessages.length} unread messages.</h2>
            )}
        </div>
    );
}


// 렌더링 최적화


const InputNumber = (props) => {

    const [in1, setIn1] = useState('');
    const [in2, setIn2] = useState('');
    const [result, setResult] = useState('');


    const calc = () => {
        // console.log(in1.length);
        // console.log(in2.length);

        if(in1.trim().length > 0 && in2.trim().length){
            const res = Number(in1) + Number(in2);
            setResult(res);
        }else{
            setResult('');
        }
    }
    
    const Result = () => {
        return(
            <h3>결과 : {result}</h3>
        );
    }

    return (
        <>
            <input onChange= {e => setIn1(e.target.value) }/>
            +
            <input onChange= {e => setIn2(e.target.value) }/>

            <button onClick={calc}>계산</button>

            {/* 계산 결과가 있을 때만 Result 렌더링 */}
            { result !== '' && <Result />}  
        </>

    );
}



const Condition = () => {

    return (
        <>
            <Test1/>
            <hr/>

            <Test2 isLoggedin={true}/>
            <hr/>

            <Test2 isLoggedin={false}/>
            <hr/>

            <Test3/>
            <Test3 unreadMessages={'zzz'}/>
            <hr/>

            <InputNumber/>

        </>
    );
}

export default Condition;