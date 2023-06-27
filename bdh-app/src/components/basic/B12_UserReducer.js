import React, { useReducer } from 'react';

// userReducer() : useState 와 비슷하지만, 복잡한 상태 로직을 다룰 때 더 효과적이며
//                  상태와 상태를 변경하는 함수를 반환하는 배열을 반환

// useState는 간단한 로직을 다룰 때 사용 + state 변경 코드를 컴포넌트 내부에 작성
// useReducer는 복잡한 로직을 다룰 때 사용 + state 변경 코드를 컴포넌트 외부에 작성

const reducer =  (state, action) => {
          // {count: 0}, {type:'increment'}
          //             {type:'decrement'}


    // 3. action.type의 값에 따라서 {count : 값} 반환
    // -> 반환된 값은 state에 세팅되면서 리랜더링
    switch(action.type){
        case 'increment' :
            return {count : state.count +1};
        case 'decrement' :
            return {count : state.count -1};
    }
}

const  UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count : 0});

    // * state : 
    // - 컴포넌트에서 사용할 상태
    // - userReducer의 두 번째 인자({count:0} 객체)로 초기화됨

    // * dispatch 함수 
    // - 컴포넌트 내에서 state를 변경하기 위한 함수
    // - useReducer의 첫 번째 인자 (reducer)함수를 수행 시킴  
    // - 호출 시 전달 인자로 (type, payload)를 지님
    //  (type : 행동 종류, payload : 행동과 관련된 값)
    

    // * reducer 함수
    // - 컴포넌트 밖에서 state를 변경하기 위한 함수
    // - 첫 번째 인자로 전달되는 값 : 현재 state ({count:0})
    // - 두 번째 인자로 전달되는 값 : dispathch 함수의 매개변수 ({type:'increment'}) 

    // 1. state에 {count : 0} 대입

    // 2. dispatch() 호출 시 reducer 함수 호출
    // dipatch의 매개변수를 reducer의 action에 대입

    return (
        <>
            Count : {state.count} 
            <button onClick={() => dispatch({type:'increment'})}>+</button>           
            <button onClick={() => dispatch({type:'decrement'})}>-</button>           
        </>
    );
}

export default UseReducer;