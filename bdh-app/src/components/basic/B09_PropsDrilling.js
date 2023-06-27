import React, { useState } from 'react';

// Props Drilling : 상태 내리꽂기

const ChildComponent = (props) => {

    return (
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
        </div>
    );
}


const PropsDrilling = () => {

    const [name, setName] = useState("홍길동")
    const [age, setAge] = useState(30);

    const chnageNameHandler = () => {

        setName((prev) => {
            console.log(prev);
            return '홍' + prev;
        });
    }

    const changeAgeHandler = () => {
        setAge((prev) => {
            console.log(prev);
            return prev + 1;
        });
    }


    return (
        <>
            <ChildComponent name={name} age={age} />
            <button onClick={chnageNameHandler}>change name</button>
            <button onClick={changeAgeHandler}>change age</button>
        </>
    );

}

export default PropsDrilling;