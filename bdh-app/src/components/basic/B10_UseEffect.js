import React, { useState, useEffect } from 'react'; // imrse

const Example = () => {
    const [count, setCount] = useState(0);

    // useEffect Hook : 컴포넌트가 렌더링될 때마다 실행    
    // 1. 컴포넌트가 Mount(생성) 될 떄 실행
    // 2. 컴포넌트가 리랜더링(update)될 때 실행
    useEffect( () => {
        console.log('Component has been updated');
    });

    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
        Click me
        </button>
        </div>
    );
}

export default Example;