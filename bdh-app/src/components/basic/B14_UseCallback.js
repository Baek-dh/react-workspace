import React, {useState, useCallback} from 'react';

// useCallback(함수, [])
// - 메모이제이션(memoization)된 콜백 함수를 생성
// - 컴포넌트가 업데이트될 때마다 함수를 재생성 하지 않고,
//   생성된 함수를 계속 재사용
// - 두번째 인자 []는 매개변수로 넣어둔 값이 변경될 때 새로운 콜백 함수를 생성한다는 의미

// memoization : 메모리에 값을 저장해두고 새로운 값과 이전 값이 같을 때 재사용



const UseCallback = () => {

    // useState : 컴포넌트 상태 관리
    // count 초기값  0, 컴포넌트 상태 변경 시 setCount함수 이용
    // setCount 함수 호출 시 첫번째 매개변수는 이전 값을 의미
    const [count, setCount] = useState(0); 


    const increment = useCallback(()=>{
        setCount((prevCount) => prevCount + 1);
    }, []);

    const decrement = useCallback(()=>{
        setCount((prevCount) => prevCount - 1);
    }, []);


    return (
        <>
            Count : {count}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    );

}


export default UseCallback;
