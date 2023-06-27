import React, { useState, useMemo } from 'react';

// useMemo 
// - Hook은 메모이제이션된 값을 계산하고 저장
// - 계산 비용이 높은 값을 저장하여 성능을 향상

function UseMemo() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');


    // UseMemo 사용 X -> memoization 적용 X
    // - 리랜더링 시 모든 함수가 재정의 되면서 
    //   개발자도구 콘솔에 console.log가 모두 출력됨

    /*
    const doubleCount = () => {
        console.log('Calculating doubleCount');
        return count * 2;
    };

    const isEven = () => {
        console.log('Calculating isEven');
        return count % 2 === 0;
    };

    const uppercaseText = () => {
        console.log('Calculating uppercaseText');
        return text.toUpperCase();
    };

    return (
        <>
            Count: {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <hr />

            Double count: {doubleCount()}
            <hr />

            <div>{isEven() ? 'Even' : 'Odd'}</div>
            <hr />

            <input value={text} onChange={(e) => setText(e.target.value)} />
            <div>{uppercaseText()}</div>
        </>
    );
*/




    // UseMemo 사용 O -> memoization 적용 O
    // - 리랜더링 시 변경된 값과 관련되 함수만 재정의됨 
    // - count가 변했을 때 doubleCount, isEven
    //   text가 입력될 때 uppercaseText 만 재정의됨


    const doubleCount = useMemo(() => {
        console.log('Calculating doubleCount');
        return count * 2;
    }, [count]);

    const isEven = useMemo(() => {
        console.log('Calculating isEven');
        return count % 2 === 0;
    }, [count]);

    const uppercaseText = useMemo(() => {
        console.log('Calculating uppercaseText');
        return text.toUpperCase();
    }, [text]);



    return (
        <>
            Count: {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <hr />

            Double count: {doubleCount}
            <hr />

            <div>{isEven ? 'Even' : 'Odd'}</div>
            <hr />

            <input value={text} onChange={(e) => setText(e.target.value)} />
            <div>{uppercaseText}</div>
        </>
    );

}

export default UseMemo;