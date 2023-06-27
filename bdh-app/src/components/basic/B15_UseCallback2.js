import React, {useState, useCallback} from 'react';

// useCallback(함수, [])
// - 메모이제이션(memoization)된 콜백 함수를 생성
// - 컴포넌트가 업데이트될 때마다 함수를 재생성 하지 않고,
//   생성된 함수를 계속 재사용
// - 두번째 인자 []는 매개변수로 넣어둔 값이 변경될 때 새로운 콜백 함수를 생성한다는 의미

// memoization : 메모리에 값을 저장해두고 새로운 값과 이전 값이 같을 때 재사용


const Button = (props) => {
    // console.log({props}); 
    return (
        /* 리액트 이벤트 시 파라미터를 전달하는 방법 */
        <button onClick={ (e) => {props.handler(props.op, e)}}>{props.op}</button>
    );
}


const UseCallback2 = () => {

    const [count, setCount] = useState(0); 


    /* 증가 감소 함수를 하나로 만들었을 때 */
    const update = useCallback((op, e)=>{
        setCount((prevCount) => {
            switch (op) {
                case '+': return prevCount + 1;
                case '-': return prevCount - 1;
            }
        });
    }, []);

    return (
        <>
            Count : {count}

            <Button op={'+'} handler={update}></Button>
            <Button op={'-'} handler={update}></Button>
        </>
    );

}


export default UseCallback2;
